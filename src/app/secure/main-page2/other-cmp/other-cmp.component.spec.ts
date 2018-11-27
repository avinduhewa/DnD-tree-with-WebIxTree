import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCmpComponent } from './other-cmp.component';

describe('OtherCmpComponent', () => {
  let component: OtherCmpComponent;
  let fixture: ComponentFixture<OtherCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
