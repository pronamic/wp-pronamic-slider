/**
 * Packages
 */
import { registerBlockType } from '@wordpress/blocks';
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
 * Register block
 */
registerBlockType( 'pronamic/slider', {
	title: __( 'Pronamic Slider', 'pronamic-slider' ),
	description: __( 'Pronamic Slider block.', 'pronamic-slider' ),
	category: 'common',
	icon: 'smiley',
	attributes: {
		'toggle': {
			type: 'boolean',
			default: 'true',
		},
		'more': {
			type: 'string',
		},
		'less': {
			type: 'string',
		},
		'btnClasses': {
			type: 'string',
			default: 'pronamic-block-read-more__btn',
		},
		'contentId': {
			type: 'string',
		}
	},
	edit: Edit,
	save,
} );
