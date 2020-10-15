/**
 * Packages
 */
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { TextControl, ToggleControl, PanelBody, PanelRow } from '@wordpress/components';

/**
 * Editor only styles
 */
import './editor.scss';

/**
 * Edit
 */
export default function Edit( { clientId, attributes, className, setAttributes } ) {
	const moreLabel = attributes.more ? attributes.more : __( 'Slider', 'pronamic-slider' );

	attributes.contentId = clientId;

	return (
		<div>
			<InspectorControls>
				<PanelBody title={ __( 'Settings','pronamic-slider' ) } initialOpen={ true }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Hide content by default', 'pronamic-slider' ) }
							checked={ attributes.toggle }
							onChange={ ( toggle ) => setAttributes( { toggle } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Read more label', 'pronamic-slider' ) }
							value={ attributes.more }
							placeholder={ __( 'Read more', 'pronamic-slider' ) }
							onChange={ ( more ) => setAttributes( { more } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Read less label', 'pronamic-slider' ) }
							value={attributes.less}
							placeholder={ __( 'Read less', 'pronamic-slider' ) }
							onChange={ ( less ) => setAttributes( { less } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div className={ className }>
				<div class="pronamic-block-read-more">
					<p class="pronamic-block-read-more__controls">
						<a href={ '#' + clientId } className={ attributes.btnClasses }>
							{ moreLabel }
						</a>
					</p>

					<div class="pronamic-block-read-more__content" id={ clientId }>
						<InnerBlocks />
					</div>
				</div>
			</div>
		</div>
	);
}
