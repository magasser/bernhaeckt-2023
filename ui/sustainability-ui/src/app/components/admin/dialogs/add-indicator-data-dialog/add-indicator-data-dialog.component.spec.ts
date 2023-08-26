import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndicatorDataDialogComponent } from './add-indicator-data-dialog.component';

describe('AddIndicatorDataDialogComponent', () => {
  let component: AddIndicatorDataDialogComponent;
  let fixture: ComponentFixture<AddIndicatorDataDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIndicatorDataDialogComponent]
    });
    fixture = TestBed.createComponent(AddIndicatorDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
