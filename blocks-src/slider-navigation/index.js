/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

registerBlockType(
	metadata.name, {
		edit: () => {
			return (
				<div { ...useBlockProps() }>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			);
		},
		save: () => {
			return (
				<div { ...useBlockProps.save() }>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			);
		},
	}
);
