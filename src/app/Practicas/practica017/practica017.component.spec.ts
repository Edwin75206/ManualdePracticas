import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica017Component } from './practica017.component';

describe('Practica017Component', () => {
  let component: Practica017Component;
  let fixture: ComponentFixture<Practica017Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica017Component]
    });
    fixture = TestBed.createComponent(Practica017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
