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
				const { nextBtn, prevBtn } = getSliderNavigation( sliderElement );

				const blockSlider = new Swiper(
					sliderElement,
					{
						spaceBetween: swiperSettingsObject.spaceBetween,
						slidesPerView: swiperSettingsObject.mobileSlidesPerView,
						autoplay: autoplaySettings,
						centeredSlides: swiperSettingsObject.centeredSlides,
						loop: swiperSettingsObject.loop,
						effect: swiperSettingsObject.effect,
						navigation: {
							nextEl: nextBtn,
							prevEl: prevBtn,
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

/**
 * Find the correct navigation buttons for a given slider element.
 *
 * @param {HTMLElement} sliderElement - The Swiper slider container element.
 */
function getSliderNavigation( sliderElement ) {
	let nextBtn = sliderElement.querySelector( '.wp-block-pronamic-slider-navigation-next' );
	let prevBtn = sliderElement.querySelector( '.wp-block-pronamic-slider-navigation-prev' );

	if ( ! nextBtn || ! prevBtn ) {
		const parent = sliderElement.parentElement;

		if ( parent ) {
			nextBtn = parent.querySelector( '.wp-block-pronamic-slider-navigation-next' );
			prevBtn = parent.querySelector( '.wp-block-pronamic-slider-navigation-prev' );
		}
	}

	return { nextBtn, prevBtn };
}
