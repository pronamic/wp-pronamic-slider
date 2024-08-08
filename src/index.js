
import { InspectorControls } from '@wordpress/block-editor';

/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { PanelBody, TextControl } = wp.components;
const { registerBlockVariation } = wp.blocks;

import './style.scss';

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
			sliderSettings: null,
			query: {
				postType: 'camping',
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
				namespace
			} = attributes;

			return (
				<Fragment>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody title={ __( 'Settings' ) } initialOpen={ true }>
							<TextControl
								label={ __( 'Namespace' ) }
								value={ namespace }
								onChange={ ( namespaceValue ) => {
									props.setAttributes(
										{
											namespace: namespaceValue,
										}
									);
								} }
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
				'data-swiper-settings': 'slider-settings',
				//'className': 'slider-class'
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

/**
 * Add extra props to the root element of the save function.
 * 
 * @param object props
 * @param object blockType
 * @param object attributes
 */
function addSliderAttributes( props, blockType, attributes ) {
	if ( 'core/query' !== blockType.name ) {
		return {
			...props
		};
	}

	return {
		...props,
		//'className': 'slider-class',
	   'data-swiper-settings': 'slider-settings'
	};
}

addFilter(
	'blocks.getSaveContent.extraProps',
	'pronamic/slider',
	addSliderAttributes
);
