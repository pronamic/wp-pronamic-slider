/**
 * Packages
 */
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { TextControl, SelectControl, ToggleControl, RangeControl, PanelBody, PanelRow } from '@wordpress/components';

/**
 * Editor only styles
 */
import './editor.scss';

/**
 * Edit
 */
export default function Edit( { attributes, className, setAttributes } ) {
	const allowedBlocks = [ 'pronamic/slide' ];

	const arrows         = attributes.arrows ? true : false;
	const arrowsPosition = attributes.arrowsPosition;
	const autoplay       = attributes.autoplay ? true : false;
	const dots           = attributes.dots ? true : false;
	const dotsPosition   = attributes.dotsPosition;
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
			<InspectorControls>
				<PanelBody title={ __( 'Settings','pronamic-slider' ) } initialOpen={ true }>
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
					<PanelRow>
						<ToggleControl
							label={ __( 'Autoplay', 'pronamic-slider' ) }
							checked={ attributes.autoplay }
							onChange={ ( autoplay ) => setAttributes( { autoplay } ) }
						/>
					</PanelRow>
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
						<ToggleControl
							label={ __( 'Fade', 'pronamic-slider' ) }
							checked={ attributes.fade }
							onChange={ ( fade ) => setAttributes( { fade } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={ __( 'Arrows position', 'pronamic-slider' ) }
							value={ arrowsPosition }
							options={ [
								{ label: __( 'Outside', 'pronamic-slider' ), value: 'outside' },
								{ label: __( 'Inside', 'pronamic-slider' ), value: 'inside' },
							] }
							onChange={ ( arrowsPosition ) => setAttributes( { arrowsPosition } ) }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={ __( 'Dots position', 'pronamic-slider' ) }
							value={ dotsPosition }
							options={ [
								{ label: __( 'Outside', 'pronamic-slider' ), value: 'outside' },
								{ label: __( 'Inside', 'pronamic-slider' ), value: 'inside' },
							] }
							onChange={ ( dotsPosition ) => setAttributes( { dotsPosition } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div>
				<div class="pronamic-block-slider" data-slick={ slickConfig }>
					<InnerBlocks allowedBlocks={ allowedBlocks } />
				</div>
			</div>
		</div>
	);
}
