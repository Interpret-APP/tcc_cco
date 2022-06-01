import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Certificado } from './certificado';

import { firstValueFrom } from 'rxjs';

@Injectable()
export class CertificadoService {
    constructor(private http: HttpClient) { }

    getCertificadosLarge() {
        return firstValueFrom(this.http.get<any>('../../assets/certificado.json'))
            // .toPromise()
            .then(res => <Certificado[]>res.data)
            .then(data => { return data; });
    }
}
