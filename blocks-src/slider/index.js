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
				'pronamic/slider-navigation'
			];

			const blockProps = useBlockProps(
				{
					className: 'swiper'
				}
			);

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

							<ToggleControl
								label={ __( 'Loop', 'pronamic-slider' ) }
								checked={ attributes.loop }
								onChange={ ( loop ) => setAttributes( { loop } ) }
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
			const blockProps = useBlockProps.save(
				{
					className: 'swiper'
				}
			);

			return (
				<div { ...blockProps }>
					<InnerBlocks.Content />
				</div>
			);
		},
	}
);
