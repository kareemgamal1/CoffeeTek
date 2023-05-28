import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../Pages/user/user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn$ = new BehaviorSubject<boolean>(false);
  user$ = new BehaviorSubject<User>(null);
  authObs: Observable<AuthResponseData>;
  constructor(private router: Router, private httpClient: HttpClient) {
    this.checkLoginStatus()
  }

/**
 * Returns a promise that resolves to the value of an observable loggedIn$ that indicates whether the user is currently authenticated or not.
 * @returns - A promise that resolves to the latest value of the loggedIn$ observable.
 */
isAuthenticated() {
  const promise = new Promise((resolve, reject) => {
    resolve(this.loggedIn$);
  });
  return promise;
}

  /**
 * Sends a signup request to the Google Identity Toolkit API with the specified email and password, and handles the response.
 * @param email - The email entered by the user.
 * @param password - The password entered by the user.
 * @returns - An observable that emits the response data in the form of an AuthResponseData object.
 */
signup(email: string, password: string) {
  // Send a POST request to the Google Identity Toolkit API with the email and password entered by the user, and a returnSecureToken flag set to true
  return this.httpClient
    .post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBaH_xqjPzn-eYZQsG62iRvcXqTN7rZoKw',
      { email: email, password: password, returnSecureToken: true }
    )
    // Chain the catchError() and tap() operators to the observable returned by the post() method
    .pipe(
      // catchError() catches any errors thrown by the observable and redirects them to the handleError() method to handle the error and return an error message or an error observable with a specific error message
      catchError(this.handleError),
      // tap() allows us to perform a side effect on the emitted values without modifying them. In this case, it calls the handleAuthentication() method with the response data returned by the API.
      tap((resData) => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
}

  /**
 * Sends a login request to the Google Identity Toolkit API with the specified email and password, and handles the response.
 * @param email - The email entered by the user.
 * @param password - The password entered by the user.
 * @returns - An observable that emits the response data in the form of an AuthResponseData object.
 */
login(email: string, password: string) {
  // Send a POST request to the Google Identity Toolkit API with the email and password entered by the user, and a returnSecureToken flag set to true
  return this.httpClient
    .post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBaH_xqjPzn-eYZQsG62iRvcXqTN7rZoKw',
      { email: email, password: password, returnSecureToken: true }
    )
    // Chain the catchError() and tap() operators to the observable returned by the post() method
    .pipe(
      // catchError() catches any errors thrown by the observable and redirects them to the handleError() method to handle the error and return an error message or an error observable with a specific error message
      catchError(this.handleError),
      // tap() allows us to perform a side effect on the emitted values without modifying them. In this case, it calls the handleAuthentication()method with the response data returned by the API.
      tap((resData) => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
}

logout() {
  // Set the user$, loggedIn$ subjects to null and false respectively, indicating that there is no user logged in
  this.user$.next(null);
  this.loggedIn$.next(false);
  localStorage.removeItem('userData');
}

 /**
 * Handles the authentication of a user by creating a new User object with the user's email, token, localId, and expiration date, and updating the user subject and loggedIn$ subject with the new user data. It also stores the user data in local storage.
 * @param email - The user's email.
 * @param token - The authentication token returned by the API.
 * @param localId - The user's local ID returned by the API.
 * @param expiresIn - The expiration time of the token in seconds.
 */
private handleAuthentication(
  email: string,
  token: string,
  localId: string,
  expiresIn: number
) {

  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000); // Calculate the expiration date of the token by setting it to 1 hour.
  const user = new User(email, localId, token, expirationDate);
  this.user$.next(user);
  this.loggedIn$.next(true);
  localStorage.setItem('userData', JSON.stringify({user,loggedIn:true}));
}

  /**
 * Handles HTTP error responses and returns an error message or throws an error observable with a specific error message based on the error response received from the server.
 * @param errorRes - The error response object returned by the HTTP request.
 * @returns - An error message or an error observable with a specific error message.
 */
private handleError(errorRes: HttpErrorResponse) {
  // Initialize a default error message
  let errorMsg = 'Unknown error occurred';

  // Check if the error response object has an error property or if that property has an error property
  if (!errorRes.error || !errorRes.error.error) {
    // If not, return an error observable with the default error message using the throwError operator from RxJS
    return throwError(() => errorMsg);
  }

  // Check the value of the message property of the error property of the error response object and set the appropriate error message based on the value
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMsg = 'Email already exists';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMsg = 'Email not found';
      break;
    case 'INVALID_PASSWORD':
      errorMsg = 'Incorrect password';
      break;
    case 'INVALID_EMAIL':
      errorMsg = 'Incorrect email';
      break;
    case 'MISSING_EMAIL':
      errorMsg = 'Please enter your email';
    break;
    case 'MISSING_PASSWORD':
      errorMsg = 'Please enter your password';
      break;
  }

  // Return an error observable with the appropriate error message using the throwError operator from RxJS
  return throwError(() => errorMsg);
}

private checkLoginStatus(): void {
  // Retrieve the user data from local storage
  const userData = JSON.parse(localStorage.getItem('userData'));
  
  // If there is user data in local storage
  if (userData && userData.user) {
    // Create a new User object with the stored user data
    const user = new User(
      userData.user.email,
      userData.user.localId,
      userData.user.token,
      userData.user.expirationTime
    );
    
    // Update the user$ and loggedIn$ subjects with the stored user data and login status
    this.user$.next(user);
    this.loggedIn$.next(userData.loggedIn);
  }
}
isLoggedIn(): boolean {
    return this.loggedIn$.value;
  }
}
