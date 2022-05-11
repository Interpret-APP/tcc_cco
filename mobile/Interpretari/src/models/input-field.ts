import * as internal from '@angular/core';
import { NgModule, Inject } from '@angular/core';

export class InputField {

    constructor(
        public email: string,
        public senha: string,) {
    }
}