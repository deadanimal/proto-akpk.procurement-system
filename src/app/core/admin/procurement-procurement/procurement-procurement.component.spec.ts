import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementProcurementComponent } from './procurement-procurement.component';

describe('ProcurementProcurementComponent', () => {
  let component: ProcurementProcurementComponent;
  let fixture: ComponentFixture<ProcurementProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
