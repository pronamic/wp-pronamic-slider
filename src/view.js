/**
 * Swiper Dependencies
 */
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

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

				// Pagination
				var paginationSettings = false;

				if ( swiperSettingsObject.pagination ) {
					const paginationElement = document.createElement( 'div' );
					paginationElement.classList.add( 'swiper-pagination' );
					sliderElement.appendChild( paginationElement );

					paginationSettings = {
						el: paginationElement
					};
				}

				// Navigation
				var navigationSettings = false;

				if ( swiperSettingsObject.navigation ) {
					const nextButton = document.createElement( 'div' );
					nextButton.classList.add( 'swiper-button-next' );
					sliderElement.appendChild( nextButton );

					const prevButton = document.createElement( 'div' );
					prevButton.classList.add( 'swiper-button-prev' );
					sliderElement.appendChild( prevButton );

					navigationSettings = {
						nextEl: nextButton,
						prevEl: prevButton
					};
				}

				// Slider
				const blockSlider = new Swiper(
					sliderElement,
					{
						modules: [ Navigation, Pagination, Autoplay, EffectFade ],
						spaceBetween: 24,
						slidesPerView: 1,
						autoplay: autoplaySettings,
						navigation: navigationSettings,
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
