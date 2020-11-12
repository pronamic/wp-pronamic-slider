( function( $ ) {

	/**
	 * Sliders
	 *
	 * @plugin Slick
	 */
	const createSlider = function() {
		$( '.pronamic-block-slider' ).slick( {
			dots: true,
			arrows: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		} );
	}

	$( document ).ready( function() {
		createSlider();
	} );
} )( jQuery );
