/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import metadata from './block.json';

registerBlockType(
	metadata.name, {
		edit: () => {
			return (
				<div { ...useBlockProps() }></div>
			);
		},
		save: () => {
			return (
				<div { ...useBlockProps.save() }></div>
			);
		},
	}
);
