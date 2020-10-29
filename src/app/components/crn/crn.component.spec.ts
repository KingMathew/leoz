/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrnComponent } from './crn.component';

describe('CrnComponent', () => {
  let component: CrnComponent;
  let fixture: ComponentFixture<CrnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
