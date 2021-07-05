import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetIventoryComponent } from './asset-iventory.component';

describe('AssetIventoryComponent', () => {
  let component: AssetIventoryComponent;
  let fixture: ComponentFixture<AssetIventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetIventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
