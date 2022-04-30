import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IntroPage } from './intro.page';

import { IntroPageRoutingModule } from './intro-routing.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroPageRoutingModule,
    [SwiperModule],
  ],
  declarations: [IntroPage]
})
export class IntroPageModule {}
