/**
 * WordPress dependencies
 */
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { TextControl, SelectControl, ToggleControl, RangeControl, PanelBody } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

import './editor.scss';

registerBlockType(
	metadata.name, {
		edit: ( { attributes, setAttributes } ) => {
			const allowedBlocks = [
				'pronamic/slides',
				'pronamic/slider-pagination',
				'pronamic/slider-navigation',
				'core/heading',
				'core/columns'
			];

			const blockProps = useBlockProps();

			return (
				<div>
					<InspectorControls>
						<PanelBody title={ __( 'Settings','pronamic-slider' ) } initialOpen={ true }>
							<RangeControl
								label={ __( 'Slides per view', 'pronamic-slider' ) }
								value={ attributes.slidesPerView }
								onChange={ ( slidesPerView ) => setAttributes( { slidesPerView } ) }
								min={ 1 }
								max={ 10 }
							/>

							<SelectControl
								label={ __( 'Effect', 'pronamic-slider' ) }
								value={ attributes.effect }
								options={ [
									{ label: __( 'Slide', 'pronamic-slider' ), value: 'slide' },
									{ label: __( 'Fade', 'pronamic-slider' ), value: 'fade' },
								] }
								onChange={ ( effect ) => setAttributes( { effect } ) }
							/>

							<ToggleControl
								label={ __( 'Autoplay', 'pronamic-slider' ) }
								checked={ attributes.autoplay }
								onChange={ ( autoplay ) => setAttributes( { autoplay } ) }
							/>

							<TextControl
								label={ __( 'Autoplay delay', 'pronamic-slider' ) }
								value={ attributes.autoplayDelay }
								onChange={ ( autoplayDelay ) => setAttributes( { autoplayDelay } ) }
							/>

							<ToggleControl
								label={ __( 'Loop', 'pronamic-slider' ) }
								checked={ attributes.loop }
								onChange={ ( loop ) => setAttributes( { loop } ) }
							/>
	
							<TextControl
								label={ __( 'Space between', 'pronamic-slider' ) }
								value={ attributes.spaceBetween }
								onChange={ ( spaceBetween ) => setAttributes( { spaceBetween } ) }
							/>
						</PanelBody>

						<PanelBody title={ __( 'Mobile Settings','pronamic-slider' ) } initialOpen={ false }>
							<RangeControl
								label={ __( 'Slides per view', 'pronamic-slider' ) }
								value={ attributes.mobileSlidesPerView }
								onChange={ ( mobileSlidesPerView ) => setAttributes( { mobileSlidesPerView } ) }
								min={ 1 }
								max={ 10 }
							/>
						</PanelBody>
					</InspectorControls>

					<div { ...blockProps }>
						<InnerBlocks allowedBlocks={ allowedBlocks } />
					</div>
				</div>
			);
		},
		save: ( { attributes } ) => {
			const blockProps = useBlockProps.save();

			return (
				<div { ...blockProps }>
					<InnerBlocks.Content />
				</div>
			);
		},
	}
);
