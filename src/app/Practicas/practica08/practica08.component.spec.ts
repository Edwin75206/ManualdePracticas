import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica08Component } from './practica08.component';

describe('Practica08Component', () => {
  let component: Practica08Component;
  let fixture: ComponentFixture<Practica08Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica08Component]
    });
    fixture = TestBed.createComponent(Practica08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
