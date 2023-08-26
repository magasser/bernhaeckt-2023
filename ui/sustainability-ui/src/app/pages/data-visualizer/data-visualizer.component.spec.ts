import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVisualizerComponent } from './data-visualizer.component';

describe('DataVisualizerComponent', () => {
  let component: DataVisualizerComponent;
  let fixture: ComponentFixture<DataVisualizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataVisualizerComponent]
    });
    fixture = TestBed.createComponent(DataVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
