import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountyDialogComponent } from './add-county-dialog.component';

describe('AddCountyDialogComponent', () => {
  let component: AddCountyDialogComponent;
  let fixture: ComponentFixture<AddCountyDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCountyDialogComponent]
    });
    fixture = TestBed.createComponent(AddCountyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
