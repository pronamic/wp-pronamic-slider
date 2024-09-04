
/**
 * WordPress Dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { registerBlockVariation } from '@wordpress/blocks';
import { TextControl, SelectControl, ToggleControl, RangeControl, PanelBody } from '@wordpress/components';
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
		title: 'Slider',
		description: 'Displays a slider.',
		isActive: [ 'namespace' ],
		icon: 'admin-site',
		allowedControls: [ 'postType' ],
		attributes: {
			namespace: 'pronamic/slider',
			className: 'swiper',
			query: {
				postType: 'post',
			}
		},
		innerBlocks: [
			[
				'core/post-template',
				{},
				[
					[ 'core/post-title' ],
					[ 'core/post-excerpt' ]
				],
				[ 'core/query-no-results' ],
			],
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
 * We can't add new attributes by default. Need the restierBlockType filter for that.
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
		slidesToShow: { 
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

			const {
				slidesToShow,
				namespace
			} = attributes;

			if ( 'pronamic/slider' !== namespace ) {
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
								label={ __( 'Slides to show', 'pronamic-slider' ) }
								value={ slidesToShow }
								onChange={ ( slidesToShow ) => setAttributes( { slidesToShow } ) }
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

/**
 * Modify the block’s wrapper component containing the block’s edit component.
 */
export const addSliderWrapperAttributes = createHigherOrderComponent(
	( BlockListBlock ) => {
		return ( props ) => {
			const wrapperProps = {
				...props.wrapperProps,
				'data-swiper-settings': 'slider-settings'
			};
			return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />;
		};
	}
);

addFilter(
	'editor.BlockListBlock',
	'pronamic/slider',
	addSliderWrapperAttributes
);
