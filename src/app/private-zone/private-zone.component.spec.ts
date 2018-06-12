import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateZoneComponent } from './private-zone.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PrivateZoneComponent', () => {
  let component: PrivateZoneComponent;
  let fixture: ComponentFixture<PrivateZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateZoneComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
