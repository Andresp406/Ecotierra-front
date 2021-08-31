import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDateClientComponent } from './filter-date-client.component';

describe('FilterDateClientComponent', () => {
  let component: FilterDateClientComponent;
  let fixture: ComponentFixture<FilterDateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDateClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
