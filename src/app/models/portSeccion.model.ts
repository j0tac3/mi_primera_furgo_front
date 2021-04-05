import { PostModel } from './post.model';
import { EtiquetaModel } from './etiqueta.model';
import { SeccionImageModel } from './seccionImage.model';

export class PostSeccion{
    post: PostModel;
    etiquetas: EtiquetaModel[];
    secciones: SeccionImageModel[];

    constructor() {}
}