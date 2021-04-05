import { Component, Input, OnInit } from '@angular/core';
import { SeccionImageModel} from '../../../models/seccionImage.model'

@Component({
  selector: 'app-seccion-miniature',
  templateUrl: './seccion-miniature.component.html',
  styleUrls: ['./seccion-miniature.component.css']
})
export class SeccionMiniatureComponent implements OnInit {
  public url_imgSeccion: any;
  @Input()
  seccionInfo: SeccionImageModel;

  constructor() { }

  ngOnInit(): void {
    this.cargarImage();
  }

  cargarImage() {
    let reader = new FileReader();
    reader.onload = e => this.url_imgSeccion = e.target.result;
    reader.readAsDataURL(this.seccionInfo.urlimage);
  }
}
