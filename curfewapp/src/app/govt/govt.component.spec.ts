import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtComponent } from './govt.component';

describe('GovtComponent', () => {
  let component: GovtComponent;
  let fixture: ComponentFixture<GovtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
