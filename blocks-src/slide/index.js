/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

registerBlockType(
	metadata.name, {
		edit: () => {
			const blockProps = useBlockProps(
				{
					className: 'swiper-slide'
				}
			);
	
			return <div { ...blockProps }><InnerBlocks /></div>;
		},
		save: () => {
			const blockProps = useBlockProps.save(
				{
					className: 'swiper-slide'
				}
			);

			return <div { ...blockProps }><InnerBlocks.Content /></div>;
		},
	}
);
