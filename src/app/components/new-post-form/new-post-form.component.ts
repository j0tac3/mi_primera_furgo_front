import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { EtiquetaModel } from 'src/app/models/etiqueta.model';
import { PostModel } from 'src/app/models/post.model';
import { SeccionImageModel } from 'src/app/models/SeccionImage.model';
import { PostsService } from '../../services/posts.service';
import { EtiquetasService } from '../../services/etiquetas.service';
import { EtiquetasPostService } from '../../services/etiqueta-post.service';
import { EtiquetaPostModel } from 'src/app/models/etiquetaPost.model';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {

  formEntrada: FormGroup;
  formSeccion: FormGroup;

  public etiquetas: EtiquetaModel[] = [];
  public secciones: SeccionImageModel[] = [];
  public entrada: PostModel = new PostModel;
  public url_imgSeccion: any;
  public headerImage: File;

  public showFormSeccion: boolean = false;
  public formSeccionVisible: boolean = false;

  constructor(private fBuilder: FormBuilder, 
              private postService: PostsService, 
              private etiquetaService: EtiquetasService,
              private etiquetasPostService: EtiquetasPostService) {
    this.crearFormularioEntrada();
   }

  ngOnInit(): void {
  }

  crearFormularioEntrada() {
    this.formEntrada = this.fBuilder.group({
      titulo: ['', Validators.required],
      descEtiqueta: ['', ],
      headerImage: ['', ],
      etiquetasComponent: ['', ]
    });
  }

  /* crearFormularioSeccion() {
    this.formSeccion = this.fBuilder.group({
      imgSeccion: ['', ],
      textSeccion: ['', ],
      ordenSeccion: ['', ],
    })
  } */

  addTag(){
    let descEtiqueta = this.formEntrada.get('descEtiqueta').value;
    if (descEtiqueta !== undefined && descEtiqueta !== '' && descEtiqueta !== null) {
      let etiquetaDuplicada = this.etiquetas.filter(etiqueta => etiqueta.desc === descEtiqueta);
      if (etiquetaDuplicada.length === 0) {
        let newTag = new EtiquetaModel();
        newTag.desc = descEtiqueta;
        this.etiquetas.push(newTag);
      } else {
        console.log("Etiqueta Duplicada");
      }
    }
    this.formEntrada.get('descEtiqueta').reset();
  }

  addNewSeccion(seccionImage: SeccionImageModel){
    this.secciones.push(seccionImage);
    this.ordenarSeccion();
  }

  openFormSeccion(mostrar: boolean){
    this.showFormSeccion = !this.showFormSeccion;
  }

  ordenarSeccion() {
    this.secciones.sort(function (a, b) {
      if (a.seccion.orden > b.seccion.orden)
        return 1;
      if (a.seccion.orden < b.seccion.orden)
        return -1;
      return 0;
    })
  }

  savePost(form: NgForm){
    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }
    this.entrada.user_id = 1;
    this.entrada.titulo = this.formEntrada.get('titulo').value;
    if ( this.headerImage !== undefined)
      this.entrada.image_url = this.headerImage.name;

    if ( this.entrada.id) {
      this.postService.updatePost( this.entrada )
      .subscribe( resp => {
        console.log(resp);
      });
    } else {
      this.postService.crearPost( this.entrada )
      .subscribe(resp => {
        this.entrada = resp;
        this.guardarEtiquetas();
      });
    }

    /* this.formEntrada.get('titulo').reset();
    this.headerSelect.nativeElement.value = '';
    this.url_header = [];
    console.log(this.entrada); */
  }

  guardarEtiquetas() {
    for (let tag of this.etiquetas){
      if ( !tag.id ) {
        this.etiquetaService.createTag(tag)
        .subscribe( resp => {
          tag = resp;
          this.guardarEtiquetasPost(tag);
        })        
      }
    }
  }

  guardarEtiquetasPost(tag: EtiquetaModel) {
    //for (let tag of this.etiquetas){
      if ( tag.id ) {
        console.log('Entrada agregada: ' + this.entrada.id);
        console.log('Etiqueta agregada: ' + tag.id);
        let etiquetaPost = new EtiquetaPostModel;
        etiquetaPost.etiqueta_id = tag.id;
        etiquetaPost.post_id = this.entrada.id;
        console.log('ID ETiquetaPost: ' + etiquetaPost.etiqueta_id);
        this.etiquetasPostService.createEtiquetasPost(etiquetaPost)
        .subscribe( resp => {
          etiquetaPost = resp;
          console.log(etiquetaPost);
        })
      }
    //}
  }

}
