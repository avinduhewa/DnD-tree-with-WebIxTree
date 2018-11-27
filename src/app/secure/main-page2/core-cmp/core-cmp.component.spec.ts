import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCmpComponent } from './core-cmp.component';

describe('CoreCmpComponent', () => {
  let component: CoreCmpComponent;
  let fixture: ComponentFixture<CoreCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
