import { NgModule } from '@angular/core';
import { Component, Input } from '@angular/core';
import { InputField } from '../../models/input-field';

@Component({
  selector: 'input-field-component',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {

  // @Input() class: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  // inputField: InputField;

  constructor() { }

}
