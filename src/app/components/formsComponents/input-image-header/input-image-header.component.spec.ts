import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputImageHeaderComponent } from './input-image-header.component';

describe('InputImageHeaderComponent', () => {
  let component: InputImageHeaderComponent;
  let fixture: ComponentFixture<InputImageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputImageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputImageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
