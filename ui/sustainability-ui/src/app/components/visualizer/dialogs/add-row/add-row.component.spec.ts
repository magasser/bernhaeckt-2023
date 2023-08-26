import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRowComponent } from './add-row.component';

describe('AddRowComponent', () => {
  let component: AddRowComponent;
  let fixture: ComponentFixture<AddRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRowComponent]
    });
    fixture = TestBed.createComponent(AddRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
