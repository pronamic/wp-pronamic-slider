import Swiper from 'swiper';

import 'swiper/css';

document.addEventListener(
	'DOMContentLoaded', (event) => {
		const blockSlider = new Swiper(
			'.slider-class', {
				wrapperClass: 'wp-block-post-template',
				slideClass: 'wp-block-post',
				spaceBetween: 24,
				slidesPerView: 4,
				breakpoints: {
					782: {
						slidesPerView: 2,
					}
				}
			}
		);
	}
);
