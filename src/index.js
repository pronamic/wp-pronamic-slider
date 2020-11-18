/**
 * Packages
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Editor only styles
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Register block slider
 */
registerBlockType( 'pronamic/slider', {
	title: __( 'Pronamic Slider', 'pronamic-slider' ),
	description: __( 'Pronamic Slider block.', 'pronamic-slider' ),
	category: 'common',
	icon: 'laptop',
	attributes: {
		'autoplay': {
			type: 'boolean',
			default: false,
		},
		'arrows': {
			type: 'boolean',
			default: true,
		},
		'controlsPosition': {
			type: 'string',
			default: 'outside',
		},
		'dots': {
			type: 'boolean',
			default: true,
		},
		'fade': {
			type: 'boolean',
			default: false,
		},
		'slidesToScroll': {
			type: 'integer',
			default: 1,
		},
		'slidesToShow': {
			type: 'integer',
			default: 1,
		}
	},
	edit: Edit,
	save,
} );

/**
 * Register block slide
 */
registerBlockType( 'pronamic/slide', {
	title: __( 'Pronamic Slide', 'pronamic-slider' ),
	description: __( 'Pronamic Slide block.', 'pronamic-slider' ),
	category: 'common',
	icon: 'smiley',
	parent: [ 'pronamic/slider' ],
	edit() {
		return <div className={ 'pronamic-block-slider_slide' }><InnerBlocks /></div>;
	},
	save() {
		return <div className={ 'pronamic-block-slider_slide' }><InnerBlocks.Content /></div>;
	},
} );
