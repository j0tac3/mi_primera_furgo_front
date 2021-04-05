import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMiniatureComponent } from './seccion-miniature.component';

describe('SeccionMiniatureComponent', () => {
  let component: SeccionMiniatureComponent;
  let fixture: ComponentFixture<SeccionMiniatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionMiniatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
