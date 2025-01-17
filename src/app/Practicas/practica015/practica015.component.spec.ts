import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica015Component } from './practica015.component';

describe('Practica015Component', () => {
  let component: Practica015Component;
  let fixture: ComponentFixture<Practica015Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica015Component]
    });
    fixture = TestBed.createComponent(Practica015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
