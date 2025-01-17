import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica012Component } from './practica012.component';

describe('Practica012Component', () => {
  let component: Practica012Component;
  let fixture: ComponentFixture<Practica012Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica012Component]
    });
    fixture = TestBed.createComponent(Practica012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
