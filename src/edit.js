/**
 * Packages
 */
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { TextControl, ToggleControl, RangeControl, PanelBody, PanelRow } from '@wordpress/components';

/**
 * Editor only styles
 */
import './editor.scss';

/**
 * Edit
 */
export default function Edit( { attributes, className, setAttributes } ) {
	const allowedBlocks = [ 'pronamic/slide' ];

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
			<InspectorControls>
				<PanelBody title={ __( 'Settings','pronamic-slider' ) } initialOpen={ true }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show arrows', 'pronamic-slider' ) }
							checked={ attributes.arrows }
							onChange={ ( arrows ) => setAttributes( { arrows } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show dots', 'pronamic-slider' ) }
							checked={ attributes.dots }
							onChange={ ( dots ) => setAttributes( { dots } ) }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={ __( 'Slides to show', 'pronamic-slider' ) }
							value={ attributes.slidesToShow }
							onChange={ ( slidesToShow ) => setAttributes( { slidesToShow } ) }
							min={ 1 }
        					max={ 10 }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={ __( 'Slides to scroll', 'pronamic-slider' ) }
							value={ attributes.slidesToScroll }
							onChange={ ( slidesToScroll ) => setAttributes( { slidesToScroll } ) }
							min={ 1 }
        					max={ 10 }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div class="pronamic-block-slider" data-slick={ slickConfig }>
				<InnerBlocks allowedBlocks={ allowedBlocks } />
			</div>
		</div>
	);
}
