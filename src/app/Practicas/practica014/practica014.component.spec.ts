import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica014Component } from './practica014.component';

describe('Practica014Component', () => {
  let component: Practica014Component;
  let fixture: ComponentFixture<Practica014Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica014Component]
    });
    fixture = TestBed.createComponent(Practica014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
