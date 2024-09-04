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
			return (
				<div { ...useBlockProps() }>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			);
		},
		save: ( { attributes } ) => {
			return (
				<div { ...useBlockProps.save() }>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			);
		},
	}
);
