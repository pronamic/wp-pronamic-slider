/**
 * Swiper Dependencies
 */
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

/**
 * Swiper styles
 */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * Swiper settings
 */
document.addEventListener(
	'DOMContentLoaded', (event) => {
		const sliderElements = document.querySelectorAll( '[data-swiper-settings]' );
	
		sliderElements.forEach(
			sliderElement => {
				const swiperSettings = sliderElement.getAttribute( 'data-swiper-settings' );

				const swiperSettingsObject = JSON.parse( swiperSettings );

				var autoplaySettings = false;

				if ( swiperSettingsObject.autoplay ) {
					autoplaySettings = {
						delay: 2000,
						disableOnInteraction: true,
					}
				}

				const blockSlider = new Swiper(
					sliderElement,
					{
						modules: [ Navigation, Pagination, Autoplay ],
						spaceBetween: 24,
						slidesPerView: 1,
						autoplay: autoplaySettings,
						navigation: {
							nextEl: sliderElement.querySelector( '.swiper-button-next' ),
							prevEl: sliderElement.querySelector( '.swiper-button-prev' )
						},
						pagination: {
							el: sliderElement.querySelector( '.swiper-pagination' ),
						},
						scrollbar: {
							el: sliderElement.querySelector( '.swiper-scrollbar' ),
							hide: true,
						},
						breakpoints: {
							782: {
								slidesPerView: swiperSettingsObject.slidesPerView,
							}
						}
					}
				);
			}
		);
	}
);
