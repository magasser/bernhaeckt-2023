import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyIndicatorModifyDialogComponent } from './county-indicator-modify-dialog.component';

describe('CountyIndicatorModifyDialogComponent', () => {
  let component: CountyIndicatorModifyDialogComponent;
  let fixture: ComponentFixture<CountyIndicatorModifyDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountyIndicatorModifyDialogComponent]
    });
    fixture = TestBed.createComponent(CountyIndicatorModifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
