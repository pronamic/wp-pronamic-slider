/**
 * Packages
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Save
 */
export default function save( { attributes, className } ) {
	const dots           = attributes.dots ? true : false;
	const arrows         = attributes.arrows ? true : false;
	const slidesToShow   = attributes.slidesToShow ? attributes.slidesToShow : 1;
	const slidesToScroll = attributes.slidesToScroll ? attributes.slidesToScroll : 1;

	var slickConfig = {
		'slidesToShow': slidesToShow,
		'slidesToScroll': slidesToScroll,
		'dots': dots,
		'arrows': arrows
	};

	slickConfig = JSON.stringify( slickConfig );

	return (
		<div>
			<div class="pronamic-block-slider" data-slick={ slickConfig }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
