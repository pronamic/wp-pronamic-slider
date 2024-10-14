/**
 * WordPress dependencies
 */
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { TextControl, SelectControl, ToggleControl, RangeControl, PanelBody } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

registerBlockType(
	metadata.name, {
		edit: () => {
			const allowedBlocks = [ 'pronamic/slide' ];

			const blockProps = useBlockProps(
				{
					className: 'swiper-wrapper'
				}
			);

			return (
				<div { ...blockProps }>
					<InnerBlocks allowedBlocks={ allowedBlocks } />
				</div>
			);
		},
		save: () => {
			const blockProps = useBlockProps.save(
				{
					className: 'swiper-wrapper'
				}
			);

			return (
				<div { ...blockProps }>
					<InnerBlocks.Content />
				</div>
			);
		},
	}
);
