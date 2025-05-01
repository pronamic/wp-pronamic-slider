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

				// Pagination
				const paginationSettings = {};

				const paginationElement = sliderElement.querySelector( '[data-swiper-pagination-settings]' );

				if ( paginationElement ) {
					paginationSettings.el        = paginationElement;
					paginationSettings.clickable = true;

					const paginationSettingsAttribute = paginationElement.getAttribute( 'data-swiper-pagination-settings' );

					if ( paginationSettingsAttribute ) {
						const paginationSettingsObject = JSON.parse( paginationSettingsAttribute );

						paginationSettings.type = paginationSettingsObject.paginationType;
					}
				}

				// Autoplay
				var autoplaySettings = false;

				if ( swiperSettingsObject.autoplay ) {
					autoplaySettings = {
						delay: swiperSettingsObject.autoplayDelay,
						disableOnInteraction: true,
					}
				}

				// Slider
				const blockSlider = new Swiper(
					sliderElement,
					{
						modules: [ Navigation, Pagination, Autoplay, EffectFade, A11y ],
						spaceBetween: swiperSettingsObject.spaceBetween,
						slidesPerView: swiperSettingsObject.mobileSlidesPerView,
						autoplay: autoplaySettings,
						centeredSlides: swiperSettingsObject.centeredSlides,
						loop: swiperSettingsObject.loop,
						effect: swiperSettingsObject.effect,
						navigation: {
							nextEl: sliderElement.querySelector( '.wp-block-pronamic-slider-navigation-next' ),
							prevEl: sliderElement.querySelector( '.wp-block-pronamic-slider-navigation-prev' ),
						},
						pagination: paginationSettings,
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
