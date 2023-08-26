import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationRowComponent } from './visualization-row.component';

describe('VisualizationRowComponent', () => {
  let component: VisualizationRowComponent;
  let fixture: ComponentFixture<VisualizationRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationRowComponent]
    });
    fixture = TestBed.createComponent(VisualizationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
