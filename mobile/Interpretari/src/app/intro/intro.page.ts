import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';

@Component({
    selector: 'app-intro',
    templateUrl: 'intro.page.html',
    styleUrls: ['intro.page.scss'],
})
export class IntroPage implements OnInit {
    public swiperConfig: SwiperOptions = {
        pagination: true,
    };

    constructor() { }

    ngOnInit() {
        // Swiper.use([Pagination]);
    }
}