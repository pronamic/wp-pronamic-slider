/**
 * WordPress Dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { registerBlockVariation } from '@wordpress/blocks';
import { ToggleControl, TextControl, RangeControl, PanelBody, SelectControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

/**
 * @link https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/extending-the-query-loop-block/
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 * @link https://developer.wordpress.org/news/2022/12/20/building-a-book-review-grid-with-a-query-loop-block-variation/
 */
registerBlockVariation(
	'core/query', {
		name: 'pronamic/slider',
		title: 'Pronamic query loop slider',
		description: 'Displays a query loop slider.',
		isActive: [ 'namespace' ],
		icon: 'slides',
		attributes: {
			namespace: 'pronamic/slider',
			query: {
				postType: 'post'
			}
		},
		innerBlocks: [
			[
				'core/post-template',
				{},
				[
					[ 'core/post-title' ],
					[ 'core/post-excerpt' ],
				]
			],
			[ 'pronamic/slider-pagination' ],
			[ 'pronamic/slider-navigation' ],
		],
		scope: [ 'inserter' ]
	}
);

/**
 * New attributes
 * 
 * @param settings
 * @param name
 * 
 * We can't add new attributes by default. Need the registerBlockType filter for that.
 */
const blockAttributes = ( settings, name ) => {
	if ( 'core/query' !== name ) {
		return settings;
	}

	if ( ! settings.attributes.namespace ) {
		return settings;
	}

	settings.attributes = {
		...settings.attributes,
		slidesPerView: { 
			type: 'integer',
			default: 1
		},
		autoplay: {
			type: 'boolean',
			default: false
		},
		autoplayDelay: {
			type: 'string',
			default: 2000
		},
		loop: {
			type: 'boolean',
			default: false
		},
		effect: {
			type: 'string'
		},
		spaceBetween: {
			type: 'string',
			default: 24
		},
		mobileSlidesPerView: { 
			type: 'integer',
			default: 1
		}
	};

	return settings;
};

addFilter(
	'blocks.registerBlockType',
	'pronamic/slider',
	blockAttributes
);

/**
 * Slider controls
 */
export const sliderControls = createHigherOrderComponent(
	( BlockEdit ) => {
		return ( props ) => {
			const {
				attributes,
				setAttributes,
			} = props;

			if ( 'pronamic/slider' !== attributes.namespace ) {
				return (
					<BlockEdit { ...props } />
				);
			}

			return (
				<Fragment>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody title={ __( 'Settings' ) } initialOpen={ true }>
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

							<TextControl
								label={ __( 'Space between', 'pronamic-slider' ) }
								value={ attributes.spaceBetween }
								onChange={ ( spaceBetween ) => setAttributes( { spaceBetween } ) }
							/>
						</PanelBody>

						<PanelBody title={ __( 'Mobile Settings', 'pronamic-slider' ) } initialOpen={ false }>
							<RangeControl
								label={ __( 'Slides per view', 'pronamic-slider' ) }
								value={ attributes.mobileSlidesPerView }
								onChange={ ( mobileSlidesPerView ) => setAttributes( { mobileSlidesPerView } ) }
								min={ 1 }
								max={ 10 }
							/>
						</PanelBody>
					</InspectorControls>
				</Fragment>
			);
		};
	}
);

addFilter(
	'editor.BlockEdit',
	'pronamic/slider',
	sliderControls
);
