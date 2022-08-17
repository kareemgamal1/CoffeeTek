import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiServer = 'http://localhost:3003';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpclient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpclient.get<Product[]>(this.apiServer + '/products/');
  }

  create(product: any): Observable<Product> {
    return this.httpclient.post<Product>(
      this.apiServer + '/products/',
      JSON.stringify(product),
      this.httpOptions
    );
  }

  update(product: any, id: string): Observable<Product> {
    return this.httpclient
      .put<Product>(
        this.apiServer + '/products/' + id,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteItem(id: string) {
    return this.httpclient.delete<Product>(
      this.apiServer + '/products/' + id,
      this.httpOptions
    );
  }

  getById(id: string): Observable<Product> {
    return this.httpclient.get<Product>(this.apiServer + '/products/' + id);
  }
  errorHandler(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errormsge = '';
    if (error.error instanceof ErrorEvent) {
      errormsge = error.error.message;
    } else {
      errormsge = `error code : ${error.status}\n Message:${error.message}`;
    }
    console.log(errormsge);
    return throwError(errormsge);
  }
}
