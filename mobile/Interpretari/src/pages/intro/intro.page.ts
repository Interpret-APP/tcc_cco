import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination, EffectFade, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// import { IonicSlides } from '@ionic/angular';
// import SwiperCore, { EffectFade } from 'swiper';

// SwiperCore.use([EffectFade, IonicSlides]);

@Component({
    selector: 'app-intro',
    templateUrl: 'intro.page.html',
    styleUrls: ['intro.page.scss'],
})
export class IntroPage implements OnInit {
    public swiperConfig: SwiperOptions = {
        // pagination: true,
        // slidesPerView: 'auto',
        effect: 'fade',
        speed: 500,
        loop: true,
        fadeEffect: { crossFade: true },
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination"
        }
    };

    config: SwiperOptions = {

    }

    constructor() { }

    ngOnInit() {
        // Swiper.use([Pagination]);
        Swiper.use([EffectFade]);
    }

    // touchAllowed = false;

    // next() {
    //     this.swiperConfig.swiperRef.slideNext(500);
    // }
}