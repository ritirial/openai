import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesgenerationComponent } from './imagesgeneration.component';

describe('ImagesgenerationComponent', () => {
  let component: ImagesgenerationComponent;
  let fixture: ComponentFixture<ImagesgenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesgenerationComponent]
    });
    fixture = TestBed.createComponent(ImagesgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
