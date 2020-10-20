/**
 * Packages
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Save
 */
export default function save( { attributes, className } ) {
	const arrows         = attributes.arrows ? true : false;
	const autoplay       = attributes.autoplay ? true : false;
	const dots           = attributes.dots ? true : false;
	const fade           = attributes.fade ? true : false;
	const slidesToScroll = attributes.slidesToScroll ? attributes.slidesToScroll : 1;
	const slidesToShow   = attributes.slidesToShow ? attributes.slidesToShow : 1;

	var slickConfig = {
		'arrows': arrows,
		'autoplay': autoplay,
		'dots': dots,
		'fade': fade,
		'slidesToScroll': slidesToScroll,
		'slidesToShow': slidesToShow,
	};

	slickConfig = JSON.stringify( slickConfig );

	return (
		<div>
			<div>
				<div class="pronamic-block-slider" data-slick={ slickConfig }>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
