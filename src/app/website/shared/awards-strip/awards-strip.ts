import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CERTIFICATION_BADGES } from '../site-constants';

@Component({
  selector: 'app-awards-strip',
  standalone: false,
  templateUrl: './awards-strip.html',
  styleUrl: './awards-strip.scss'
})
export class AwardsStrip {
  readonly badges = CERTIFICATION_BADGES;
  readonly carouselOptions: OwlOptions = {
    loop: true,
    rewind: false,
    autoplay: true,
    autoplayTimeout: 2800,
    autoplaySpeed: 900,
    autoplayHoverPause: true,
    autoplayMouseleaveTimeout: 200,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    smartSpeed: 900,
    fluidSpeed: false,
    slideTransition: 'ease',
    nav: false,
    dots: false,
    margin: 24,
    stagePadding: 0,
    center: false,
    startPosition: 0,
    URLhashListener: false,
    lazyLoad: false,
    responsive: {
      0: {
        items: 1,
        margin: 12
      },
      400: {
        items: 2,
        margin: 14
      },
      600: {
        items: 3,
        margin: 16
      },
      820: {
        items: 4,
        margin: 20
      },
      1024: {
        items: 5,
        margin: 24
      },
      1280: {
        items: 5,
        margin: 28
      }
    }
  };
}
