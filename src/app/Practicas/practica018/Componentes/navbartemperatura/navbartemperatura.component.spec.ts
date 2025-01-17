import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartemperaturaComponent } from './navbartemperatura.component';

describe('NavbartemperaturaComponent', () => {
  let component: NavbartemperaturaComponent;
  let fixture: ComponentFixture<NavbartemperaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbartemperaturaComponent]
    });
    fixture = TestBed.createComponent(NavbartemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
