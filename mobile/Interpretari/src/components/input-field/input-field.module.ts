import { NgModule } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [InputFieldComponent],
    imports: [IonicModule],
    exports: [InputFieldComponent]
})
export class InputFieldModule { }