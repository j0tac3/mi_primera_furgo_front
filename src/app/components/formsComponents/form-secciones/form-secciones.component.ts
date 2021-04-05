import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SeccionModel } from 'src/app/models/seccion.model';
import { SeccionImageModel } from 'src/app/models/seccionImage.model';

@Component({
  selector: 'app-form-secciones',
  templateUrl: './form-secciones.component.html',
  styleUrls: ['./form-secciones.component.css']
})
export class FormSeccionesComponent implements OnInit {
  @Input() showFormSeccion: boolean;

  @Output() addNewSeccionEvent = new EventEmitter<SeccionImageModel>();

  public formSeccion: FormGroup;
  public url_imgSeccion: any;
  private seccionImageFile: File;

  @ViewChild('imageSeccionSelect',  {
    read: ElementRef
  }) imageSeccionSelect: ElementRef;

  constructor( private fBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormularioSeccion();
  }

  crearFormularioSeccion() {
    this.formSeccion = this.fBuilder.group({
      imgSeccion: ['', ],
      textSeccion: ['', ],
      ordenSeccion: ['', ],
    })
  }
  
  openFileSeccion(){
    this.seccionImageFile = this.imageSeccionSelect.nativeElement.files[0];
    let reader = new FileReader();
    reader.onload = e => this.url_imgSeccion = e.target.result;
    reader.readAsDataURL(this.seccionImageFile);
    console.log(this.url_imgSeccion);
  }

  saveSeccion() {
    let newSeccion = new SeccionModel();
    newSeccion.texto = this.formSeccion.get('textSeccion').value;
    newSeccion.orden = this.formSeccion.get('ordenSeccion').value;

    let seccionImageComplete = new SeccionImageModel();
    seccionImageComplete.urlimage = this.seccionImageFile;
    seccionImageComplete.seccion = newSeccion;

    this.addNewSeccion(seccionImageComplete);
    this.cancelarSeccion();
  }

  addNewSeccion(seccionImage: SeccionImageModel){
    this.addNewSeccionEvent.emit(seccionImage);
  }

  cancelarSeccion(){
    this.showFormSeccion = !this.showFormSeccion;
    this.formSeccion.get('imgSeccion').reset();
    this.formSeccion.get('textSeccion').reset();
    this.formSeccion.get('ordenSeccion').reset();
    this.url_imgSeccion = [];
    this.imageSeccionSelect.nativeElement.value = '';
  }
}
