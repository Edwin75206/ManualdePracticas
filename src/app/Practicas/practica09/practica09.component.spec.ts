import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica09Component } from './practica09.component';

describe('Practica09Component', () => {
  let component: Practica09Component;
  let fixture: ComponentFixture<Practica09Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica09Component]
    });
    fixture = TestBed.createComponent(Practica09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
