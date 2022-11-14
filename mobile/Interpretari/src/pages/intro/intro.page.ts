import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);
@Component({
    selector: 'app-intro',
    templateUrl: 'intro.page.html',
    styleUrls: ['intro.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class IntroPage implements AfterContentChecked {
    @ViewChild('swiper') swiper: SwiperComponent;

    config: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: false
    };

    constructor() { }

    ngAfterContentChecked() {
        if(this.swiper) {
            this.swiper.updateSwiper({});
        }
    }

    swiperSlideChanged(e) {
        console.log('changed: ', e);
    }

    // touchAllowed = false;

    next() {
        this.swiper.swiperRef.slideNext(500);
    }

    // toggleTouch() {
    //     this.touchAllowed = !this.touchAllowed;
    //     this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
    // }
}