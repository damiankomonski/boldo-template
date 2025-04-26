import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1000,
  },
  modules: [Autoplay],
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6
    }
  },
});

const swiper_opinions = new Swiper('.swiper-opinions', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1000,
  },
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: '.swiper-opinions-prev',
    prevEl: '.swiper-opinions-next',
  },
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3
    }
  },
});