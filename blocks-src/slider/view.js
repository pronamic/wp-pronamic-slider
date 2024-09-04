( function( $ ) {
	$( document ).ready( function() {

		/**
		 * Sliders
		 *
		 * @plugin Slick
		 */
		$( '.pronamic-block-slider' ).slick(
			{
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
			}
		);
	} );
} )( jQuery );
