import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAllClientComponent } from './select-all-client.component';

describe('SelectAllClientComponent', () => {
  let component: SelectAllClientComponent;
  let fixture: ComponentFixture<SelectAllClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAllClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAllClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
