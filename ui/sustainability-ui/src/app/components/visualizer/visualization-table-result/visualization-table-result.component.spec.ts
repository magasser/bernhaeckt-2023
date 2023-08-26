import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationTableResultComponent } from './visualization-table-result.component';

describe('VisualizationTableResultComponent', () => {
  let component: VisualizationTableResultComponent;
  let fixture: ComponentFixture<VisualizationTableResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationTableResultComponent]
    });
    fixture = TestBed.createComponent(VisualizationTableResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
