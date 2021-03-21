import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EtiquetaModel } from '../models/etiqueta.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {
  private url = 'https://mi-primera-furgo-api.herokuapp.com/api/etiqueta';

  constructor(private http: HttpClient) { }

  createTag( tag: EtiquetaModel) {
    return this.http.post(`${ this.url }`, tag)
    .pipe(
      map( (resp: any) => {
        tag.desc = resp.desc;
        return tag;
      })
    )
  }

  updateTag( tag: EtiquetaModel) {
    return this.http.put(`${this.url}/${tag.id}`, tag);
  }

  getTags() {
    return this.http.get(`${this.url}`)
    .pipe(
     /*  map( resp => this.createArray(resp) ) */
      map( this.createArray)
    );
  }

  private createArray( tagObj: Object) {
    const tags: EtiquetaModel[] = [];
    
    if (tagObj === null ) { return []; }

    Object.keys( tagObj ).forEach( key => {
      const tag: EtiquetaModel = tagObj[key];
      tags.push( tag );
    });

    return tags;
  }

}
