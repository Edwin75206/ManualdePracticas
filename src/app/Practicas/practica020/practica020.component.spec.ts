import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica020Component } from './practica020.component';

describe('Practica020Component', () => {
  let component: Practica020Component;
  let fixture: ComponentFixture<Practica020Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica020Component]
    });
    fixture = TestBed.createComponent(Practica020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
