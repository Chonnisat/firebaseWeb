import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicZoneComponent } from './public-zone.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('PublicZoneComponent', () => {
  let component: PublicZoneComponent;
  let fixture: ComponentFixture<PublicZoneComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicZoneComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {
          provide: Router, useValue: routerSpy
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to page', () => {
    component.goToPage('home')
  })
});
