import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica013Component } from './practica013.component';

describe('Practica013Component', () => {
  let component: Practica013Component;
  let fixture: ComponentFixture<Practica013Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica013Component]
    });
    fixture = TestBed.createComponent(Practica013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
