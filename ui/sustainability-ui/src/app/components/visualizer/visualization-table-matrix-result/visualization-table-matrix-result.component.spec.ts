import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationTableMatrixResultComponent } from './visualization-table-matrix-result.component';

describe('VisualizationTableMatrixResultComponent', () => {
  let component: VisualizationTableMatrixResultComponent;
  let fixture: ComponentFixture<VisualizationTableMatrixResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationTableMatrixResultComponent]
    });
    fixture = TestBed.createComponent(VisualizationTableMatrixResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
