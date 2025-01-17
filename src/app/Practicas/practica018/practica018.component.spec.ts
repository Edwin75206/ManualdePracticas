import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica018Component } from './practica018.component';

describe('Practica018Component', () => {
  let component: Practica018Component;
  let fixture: ComponentFixture<Practica018Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica018Component]
    });
    fixture = TestBed.createComponent(Practica018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
