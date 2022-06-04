import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interprete } from './interprete';

import { firstValueFrom } from 'rxjs';

@Injectable()
export class InterpreteService {
    constructor(private http: HttpClient) { }

    getInterpretesLarge() {
        return firstValueFrom(this.http.get<any>('../../assets/interprete.json'))
            // .toPromise()
            .then(res => <Interprete[]>res.data)
            .then(data => { return data; });
    }
}
