// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener(
	'DOMContentLoaded', (event) => {
		const blockSlider = new Swiper(
			'[data-swiper-settings]',
			{
				modules: [ Navigation, Pagination ],
				spaceBetween: 24,
				slidesPerView: 2,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
				},
				scrollbar: {
					el: '.swiper-scrollbar',
					hide: true,
				},
				breakpoints: {
					782: {
						slidesPerView: 2,
					}
				}
			}
		);
	}
);
