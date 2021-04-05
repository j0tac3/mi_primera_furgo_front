import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEtiquetasComponent } from './input-etiquetas.component';

describe('InputEtiquetasComponent', () => {
  let component: InputEtiquetasComponent;
  let fixture: ComponentFixture<InputEtiquetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEtiquetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
