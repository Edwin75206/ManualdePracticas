import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchesComponent } from './sketches.component';

describe('SketchesComponent', () => {
  let component: SketchesComponent;
  let fixture: ComponentFixture<SketchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SketchesComponent]
    });
    fixture = TestBed.createComponent(SketchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
