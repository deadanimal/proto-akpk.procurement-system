import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementSupplierComponent } from './procurement-supplier.component';

describe('ProcurementSupplierComponent', () => {
  let component: ProcurementSupplierComponent;
  let fixture: ComponentFixture<ProcurementSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
