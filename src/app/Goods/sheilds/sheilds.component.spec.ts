import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheildsComponent } from './sheilds.component';

describe('SheildsComponent', () => {
  let component: SheildsComponent;
  let fixture: ComponentFixture<SheildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
