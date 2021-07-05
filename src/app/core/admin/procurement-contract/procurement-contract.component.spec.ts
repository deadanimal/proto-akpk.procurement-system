import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementContractComponent } from './procurement-contract.component';

describe('ProcurementContractComponent', () => {
  let component: ProcurementContractComponent;
  let fixture: ComponentFixture<ProcurementContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
