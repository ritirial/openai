import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationsComponent } from './moderations.component';

describe('ModerationsComponent', () => {
  let component: ModerationsComponent;
  let fixture: ComponentFixture<ModerationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModerationsComponent]
    });
    fixture = TestBed.createComponent(ModerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
