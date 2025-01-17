import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica016Component } from './practica016.component';

describe('Practica016Component', () => {
  let component: Practica016Component;
  let fixture: ComponentFixture<Practica016Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica016Component]
    });
    fixture = TestBed.createComponent(Practica016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
