/**
 * Packages
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Save
 */
export default function save( { attributes, className } ) {
	const toggleStateClass = attributes.toggle ? '' : 'is-open';
	const toggleState      = attributes.toggle ? false : true;
	const blockClasses     = `pronamic-block-read-more ${ toggleStateClass }`;
	const moreLabel        = attributes.more ? attributes.more : __( 'Read more', 'pronamic-slider' );
	const lessLabel        = attributes.less ? attributes.less : __( 'Read less', 'pronamic-slider' );
	const defaultLabel     = attributes.toggle ? moreLabel : lessLabel;

	return (
		<div className={ className }>
			<div className={ blockClasses }>
				<p class="pronamic-block-read-more__controls">
					<a href={ '#' + attributes.contentId } className={ attributes.btnClasses } role="button" aria-expanded={ toggleState } aria-controls={ attributes.contentId } data-prm="toggle" data-prm-show={ moreLabel } data-prm-hide={ lessLabel }>
						{ defaultLabel }
					</a>
				</p>

				<div class="pronamic-block-read-more__content" id={ attributes.contentId }>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
