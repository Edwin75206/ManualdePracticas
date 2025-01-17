import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica2Component } from './practica2.component';

describe('Practica2Component', () => {
  let component: Practica2Component;
  let fixture: ComponentFixture<Practica2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica2Component]
    });
    fixture = TestBed.createComponent(Practica2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
