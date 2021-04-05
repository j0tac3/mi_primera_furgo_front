import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EtiquetaModel } from 'src/app/models/etiqueta.model';
import { EtiquetasService } from 'src/app/services/etiquetas.service'

@Component({
  selector: 'app-input-etiquetas',
  templateUrl: './input-etiquetas.component.html',
  styleUrls: ['./input-etiquetas.component.css']
})
export class InputEtiquetasComponent implements OnInit {

  constructor(private etiquetasService: EtiquetasService) { }

  @Input() etiquetas: EtiquetaModel[];
  @Input() formGroupParent : FormGroup;

  public tagsFromDB: EtiquetaModel[];

  ngOnInit(): void {
    this.getTagsFromDB();
  }

  getTagsFromDB() {
    this.etiquetasService.getTags()
    .subscribe( resp => {
      this.tagsFromDB = resp;
    })
  }

  addTagToArray(){
    let descEtiqueta = this.formGroupParent.get('etiquetasComponent').value;
    let newEtiqueta = new EtiquetaModel();
    newEtiqueta.desc = descEtiqueta;
    this.etiquetas.push(newEtiqueta);
  }

}
