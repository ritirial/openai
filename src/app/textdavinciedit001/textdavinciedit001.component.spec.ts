import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textdavinciedit001Component } from './textdavinciedit001.component';

describe('Textdavinciedit001Component', () => {
  let component: Textdavinciedit001Component;
  let fixture: ComponentFixture<Textdavinciedit001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Textdavinciedit001Component]
    });
    fixture = TestBed.createComponent(Textdavinciedit001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
