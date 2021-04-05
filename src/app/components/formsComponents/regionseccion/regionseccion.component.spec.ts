import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionseccionComponent } from './regionseccion.component';

describe('RegionseccionComponent', () => {
  let component: RegionseccionComponent;
  let fixture: ComponentFixture<RegionseccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionseccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
