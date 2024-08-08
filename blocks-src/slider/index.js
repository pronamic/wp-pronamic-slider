/**
 * WordPress dependencies
 */
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { TextControl, SelectControl, ToggleControl, RangeControl, PanelBody } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

import './style.scss';
import './editor.scss';

registerBlockType(
	metadata.name, {
		edit: ( { attributes, setAttributes } ) => {
			const allowedBlocks = [ 'pronamic/slide' ];

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
				<div>
					<InspectorControls>
						<PanelBody title={ __( 'Settings','pronamic-slider' ) } initialOpen={ true }>
							<RangeControl
								label={ __( 'Slides to show', 'pronamic-slider' ) }
								value={ attributes.slidesToShow }
								onChange={ ( slidesToShow ) => setAttributes( { slidesToShow } ) }
								min={ 1 }
								max={ 10 }
							/>

							<RangeControl
								label={ __( 'Slides to scroll', 'pronamic-slider' ) }
								value={ attributes.slidesToScroll }
								onChange={ ( slidesToScroll ) => setAttributes( { slidesToScroll } ) }
								min={ 1 }
								max={ 10 }
							/>

							<ToggleControl
								label={ __( 'Autoplay', 'pronamic-slider' ) }
								checked={ attributes.autoplay }
								onChange={ ( autoplay ) => setAttributes( { autoplay } ) }
							/>

							<ToggleControl
								label={ __( 'Show arrows', 'pronamic-slider' ) }
								checked={ attributes.arrows }
								onChange={ ( arrows ) => setAttributes( { arrows } ) }
							/>

							<ToggleControl
								label={ __( 'Show dots', 'pronamic-slider' ) }
								checked={ attributes.dots }
								onChange={ ( dots ) => setAttributes( { dots } ) }
							/>

							<ToggleControl
								label={ __( 'Fade', 'pronamic-slider' ) }
								checked={ attributes.fade }
								onChange={ ( fade ) => setAttributes( { fade } ) }
							/>

							<SelectControl
								label={ __( 'Controls position', 'pronamic-slider' ) }
								value={ controlsPosition }
								options={ [
									{ label: __( 'Outside', 'pronamic-slider' ), value: 'outside' },
									{ label: __( 'Inside', 'pronamic-slider' ), value: 'inside' },
								] }
								onChange={ ( controlsPosition ) => setAttributes( { controlsPosition } ) }
							/>
						</PanelBody>
					</InspectorControls>
		
					<div className={ blockClasses } data-slick={ slickConfig }>
						<InnerBlocks allowedBlocks={ allowedBlocks } />
					</div>
				</div>
			);
		},
		save: ( { attributes } ) => {
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
		},
	}
);
