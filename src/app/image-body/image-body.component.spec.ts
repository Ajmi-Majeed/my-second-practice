import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBodyComponent } from './image-body.component';

describe('ImageBodyComponent', () => {
  let component: ImageBodyComponent;
  let fixture: ComponentFixture<ImageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
