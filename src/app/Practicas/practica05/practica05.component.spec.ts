import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica05Component } from './practica05.component';

describe('Practica05Component', () => {
  let component: Practica05Component;
  let fixture: ComponentFixture<Practica05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica05Component]
    });
    fixture = TestBed.createComponent(Practica05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
