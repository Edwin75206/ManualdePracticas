import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarnoticiasComponent } from './navbarnoticias.component';

describe('NavbarnoticiasComponent', () => {
  let component: NavbarnoticiasComponent;
  let fixture: ComponentFixture<NavbarnoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarnoticiasComponent]
    });
    fixture = TestBed.createComponent(NavbarnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
