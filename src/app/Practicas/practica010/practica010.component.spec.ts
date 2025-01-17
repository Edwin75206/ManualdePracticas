import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica010Component } from './practica010.component';

describe('Practica010Component', () => {
  let component: Practica010Component;
  let fixture: ComponentFixture<Practica010Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica010Component]
    });
    fixture = TestBed.createComponent(Practica010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
