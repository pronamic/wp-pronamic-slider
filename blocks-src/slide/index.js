/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

registerBlockType(
	metadata.name, {
		edit: ( { attributes, setAttributes } ) => {
			return <div className={ 'swiper-slide' }><InnerBlocks /></div>;
		},
		save: ( { attributes } ) => {
			return <div className={ 'swiper-slide' }><InnerBlocks.Content /></div>;
		},
	}
);
