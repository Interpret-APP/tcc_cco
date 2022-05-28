import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Audiencia } from './audiencia';

import { firstValueFrom } from 'rxjs';

@Injectable()
export class AudienciaService {
    constructor(private http: HttpClient) { }

    getAudienciasLarge() {
        return firstValueFrom(this.http.get<any>('../../assets/audiencia.json'))
            // .toPromise()
            .then(res => <Audiencia[]>res.data)
            .then(data => { return data; });
    }
}
