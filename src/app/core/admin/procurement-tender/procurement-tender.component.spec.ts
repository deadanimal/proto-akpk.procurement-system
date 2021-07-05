import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementTenderComponent } from './procurement-tender.component';

describe('ProcurementTenderComponent', () => {
  let component: ProcurementTenderComponent;
  let fixture: ComponentFixture<ProcurementTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
