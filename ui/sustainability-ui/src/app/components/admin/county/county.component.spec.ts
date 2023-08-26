import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyComponent } from './county.component';

describe('CountyComponent', () => {
  let component: CountyComponent;
  let fixture: ComponentFixture<CountyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountyComponent]
    });
    fixture = TestBed.createComponent(CountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
