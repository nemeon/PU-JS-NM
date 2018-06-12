import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeponsComponent } from './wepons.component';

describe('WeponsComponent', () => {
  let component: WeponsComponent;
  let fixture: ComponentFixture<WeponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
