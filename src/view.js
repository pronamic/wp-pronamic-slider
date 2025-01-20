/**
 * Swiper Dependencies
 */
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade, A11y } from 'swiper/modules';

/**
 * Swiper styles
 */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * Slider styles
 */
import './view.scss';

/**
 * Swiper settings
 */
document.addEventListener(
	'DOMContentLoaded', ( event ) => {
		const sliderElements = document.querySelectorAll( '[data-swiper-settings]' );
	
		sliderElements.forEach(
			sliderElement => {
				const swiperSettings = sliderElement.getAttribute( 'data-swiper-settings' );

				const swiperSettingsObject = JSON.parse( swiperSettings );

				// Autoplay
				var autoplaySettings = false;

				if ( swiperSettingsObject.autoplay ) {
					autoplaySettings = {
						delay: 2000,
						disableOnInteraction: true,
					}
				}

				// Slider
				const blockSlider = new Swiper(
					sliderElement,
					{
						modules: [ Navigation, Pagination, Autoplay, EffectFade, A11y ],
						spaceBetween: swiperSettingsObject.spaceBetween,
						slidesPerView: 1,
						autoplay: autoplaySettings,
						loop: swiperSettingsObject.loop,
						navigation: {
							nextEl: sliderElement.querySelector( '.wp-block-pronamic-slider-navigation-next' ),
							prevEl: sliderElement.querySelector( '.wp-block-pronamic-slider-navigation-prev' ),
						},
						pagination: {
							el: sliderElement.querySelector( '.wp-block-pronamic-slider-pagination' ),
							clickable: true
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
