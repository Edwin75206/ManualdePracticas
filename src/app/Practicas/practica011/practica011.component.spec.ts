import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica011Component } from './practica011.component';

describe('Practica011Component', () => {
  let component: Practica011Component;
  let fixture: ComponentFixture<Practica011Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica011Component]
    });
    fixture = TestBed.createComponent(Practica011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
