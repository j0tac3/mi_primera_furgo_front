import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EtiquetaPostModel } from '../models/etiquetaPost.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasPostService {

  private url = 'https://mi-primera-furgo-api.herokuapp.com/api/etiquetasPost';

  constructor(private http: HttpClient) { }

  createEtiquetasPost(etiquetaPost: EtiquetaPostModel): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(etiquetaPost);
    console.log(body);
    return this.http.post<EtiquetaPostModel>(this.url, body, {'headers': headers});
  }

  getEtiquetasPost(): Observable<EtiquetaPostModel> {
    return this.http.get<EtiquetaPostModel>(`${this.url}`);
  }

  private createArray( etiquetasPostObj: Object) {
    const etiquetasPost: EtiquetaPostModel[] = [];    
    if (etiquetasPostObj === null ) { return []; }

    Object.keys( etiquetasPostObj ).forEach( key => {
      const etiquetaPost: EtiquetaPostModel = etiquetasPostObj[key];
      etiquetasPost.push( etiquetaPost );
    });
    etiquetasPost 
  }
}
