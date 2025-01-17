import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica03Component } from './practica03.component';

describe('Practica03Component', () => {
  let component: Practica03Component;
  let fixture: ComponentFixture<Practica03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica03Component]
    });
    fixture = TestBed.createComponent(Practica03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
