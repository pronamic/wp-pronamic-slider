/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

import './style.scss';

registerBlockType(
	metadata.name, {
		edit: ( { attributes, setAttributes } ) => {
			return <div className={ 'pronamic-block-slider_slide' }><InnerBlocks /></div>;
		},
		save: ( { attributes } ) => {
			return <div className={ 'pronamic-block-slider_slide' }><InnerBlocks.Content /></div>;
		},
	}
);