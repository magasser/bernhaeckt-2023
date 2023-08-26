import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationFilterComponent } from './visualization-filter.component';

describe('VisualizationFilterComponent', () => {
  let component: VisualizationFilterComponent;
  let fixture: ComponentFixture<VisualizationFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationFilterComponent]
    });
    fixture = TestBed.createComponent(VisualizationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
