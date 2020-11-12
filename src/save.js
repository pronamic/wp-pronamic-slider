/**
 * Packages
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Save
 */
export default function save( { attributes, className } ) {
	const arrows           = attributes.arrows ? true : false;
	const autoplay         = attributes.autoplay ? true : false;
	const dots             = attributes.dots ? true : false;
	const fade             = attributes.fade ? true : false;
	const slidesToScroll   = attributes.slidesToScroll ? attributes.slidesToScroll : 1;
	const slidesToShow     = attributes.slidesToShow ? attributes.slidesToShow : 1;
	const controlsPosition = attributes.controlsPosition;

	const controlsPositionClass = 'pronamic-block-slider--' + controlsPosition;
	const blockClasses          = `pronamic-block-slider ${ controlsPositionClass }`;

	var slickConfig = {
		'arrows': arrows,
		'autoplay': autoplay,
		'dots': dots,
		'fade': fade,
		'slidesToScroll': slidesToScroll,
		'slidesToShow': slidesToShow,
		'responsive': [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};

	slickConfig = JSON.stringify( slickConfig );

	return (
		<div className={ blockClasses } data-slick={ slickConfig }>
			<InnerBlocks.Content />
		</div>
	);
}
