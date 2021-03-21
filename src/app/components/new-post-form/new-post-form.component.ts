import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EtiquetaModel } from 'src/app/models/etiqueta.model';
import { SeccionModel } from 'src/app/models/seccion.model';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {

  formEntrada: FormGroup;
  
  public etiquetas: EtiquetaModel[] = [];
  public secciones: SeccionModel[] = [];
  public entrada: PostModel;
  public url_header: any;

  @ViewChild('headerSelect',  {
    read: ElementRef
  }) headerSelect: ElementRef;

  private headerImage: File;

  constructor(private fBuilder: FormBuilder) {
    this.crearFormularioEntrada();
   }

  ngOnInit(): void {
  }

  crearFormularioEntrada() {
    this.formEntrada = this.fBuilder.group({
      descEtiqueta: ['', [Validators.required, Validators.minLength(3)]],
      headerImage: ['', ],
    });
  }

  addTag(){
    let newTag = new EtiquetaModel();
    newTag.desc = this.formEntrada.get('descEtiqueta').value;
    this.etiquetas.push(newTag);
  }

  openFile(){
    this.headerImage = this.headerSelect.nativeElement.files[0];
    let reader = new FileReader();
    let url;
    reader.onload = e => this.url_header = e.target.result;
    reader.readAsDataURL(this.headerImage);
    console.log(this.url_header);
  }

}
