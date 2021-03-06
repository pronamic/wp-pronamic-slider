( function( $ ) {
	$( document ).ready( function() {
		$( '[data-prm="toggle"]' ).on( 'click', function( e ) {
			e.preventDefault();

			$this = $( this );

			moreLabel = $this.data( 'prm-show' );
			lessLabel = $this.data( 'prm-hide' );

			parentContainer = $this.parents( '.pronamic-block-read-more' );

			toggleContent = parentContainer.find( '.pronamic-block-read-more__content' );

			parentContainer.toggleClass( 'is-open' );

			if ( toggleContent.is( ':visible' ) ) {
				$this.text( lessLabel );

				$this.attr( 'aria-expanded', true );
			} else {
				$this.text( moreLabel );

				$this.attr( 'aria-expanded', false );
			}
		} );
	} );
} )( jQuery );
