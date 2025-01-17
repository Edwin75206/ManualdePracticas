import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica02Component } from './practica02.component';

describe('Practica02Component', () => {
  let component: Practica02Component;
  let fixture: ComponentFixture<Practica02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica02Component]
    });
    fixture = TestBed.createComponent(Practica02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
