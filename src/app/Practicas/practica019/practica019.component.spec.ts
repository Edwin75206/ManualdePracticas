import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica019Component } from './practica019.component';

describe('Practica019Component', () => {
  let component: Practica019Component;
  let fixture: ComponentFixture<Practica019Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica019Component]
    });
    fixture = TestBed.createComponent(Practica019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
