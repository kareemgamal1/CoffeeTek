import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsHolderComponent } from './buttons-holder.component';

describe('ButtonsHolderComponent', () => {
  let component: ButtonsHolderComponent;
  let fixture: ComponentFixture<ButtonsHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
