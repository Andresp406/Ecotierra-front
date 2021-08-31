import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompraComponent } from './list-compra.component';

describe('ListCompraComponent', () => {
  let component: ListCompraComponent;
  let fixture: ComponentFixture<ListCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
