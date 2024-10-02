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
			const allowedBlocks = [ 'pronamic/slide' ];

			const autoplay      = attributes.autoplay ? true : false;
			const effect        = attributes.effect ? attributes.effect : 'slide';
			const slidesPerView = attributes.slidesPerView ? attributes.slidesPerView : 1;
			const arrows        = attributes.arrows ? true : false;
			const dots          = attributes.dots ? true : false;

			const blockClasses = `swiper pronamic-block-slider`;
		
			var swiperConfig = {
				'autoplay': autoplay,
				'effect': effect,
				'slidesPerView': slidesPerView
			};
		
			swiperConfig = JSON.stringify( swiperConfig );
		
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

							<SelectControl
								label={ __( 'Effect', 'pronamic-slider' ) }
								value={ attributes.effect }
								options={ [
									{ label: __( 'Slide', 'pronamic-slider' ), value: 'slide' },
									{ label: __( 'Fade', 'pronamic-slider' ), value: 'fade' },
								] }
								onChange={ ( effect ) => setAttributes( { effect } ) }
							/>
						</PanelBody>
					</InspectorControls>
		
					<div className={ blockClasses } data-swiper-settings={ swiperConfig }>
						<div class="swiper-wrapper">
							<InnerBlocks allowedBlocks={ allowedBlocks } />
						</div>

						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>

						<div class="swiper-pagination"></div>
					</div>
				</div>
			);
		},
		save: ( { attributes } ) => {
			const autoplay      = attributes.autoplay ? true : false;
			const effect        = attributes.effect ? attributes.effect : 'slide';
			const slidesPerView = attributes.slidesPerView ? attributes.slidesPerView : 1;
			const dots          = attributes.dots ? true : false;
			const arrows        = attributes.arrows ? true : false;

			const blockClasses = `swiper pronamic-block-slider`;
		
			var swiperConfig = {
				'autoplay': autoplay,
				'effect': effect,
				'slidesPerView': slidesPerView
			};
		
			swiperConfig = JSON.stringify( swiperConfig );
		
			return (
				<div className={ blockClasses } data-swiper-settings={ swiperConfig }>
					<div class="swiper-wrapper">
						<InnerBlocks.Content />
					</div>

					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>

					<div class="swiper-pagination"></div>
				</div>
			);
		},
	}
);
