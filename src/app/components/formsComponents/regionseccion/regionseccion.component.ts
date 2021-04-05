import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeccionImageModel } from 'src/app/models/seccionImage.model';

@Component({
  selector: 'app-regionseccion',
  templateUrl: './regionseccion.component.html',
  styleUrls: ['./regionseccion.component.css']
})
export class RegionseccionComponent implements OnInit {
  @Input() secciones: SeccionImageModel[];
  @Input() public formSeccionVisible: boolean;

  @Output() showFormEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showFormSecciones(){
    this.showFormEvent.emit(true);
  }

}
