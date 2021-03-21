import { TestBed } from '@angular/core/testing';

import { EtiquetaPostService } from './etiqueta-post.service';

describe('EtiquetaPostService', () => {
  let service: EtiquetaPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtiquetaPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
