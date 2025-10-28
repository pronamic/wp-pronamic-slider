/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

registerBlockType(
	metadata.name, {
		edit: ( attributes ) => {
			const blockProps = useBlockProps(
				{
					className: attributes.__unstableLayoutClassNames,
				}
			);

			return (
				<div { ...blockProps }>
					<div className="wp-block-pronamic-slider-navigation-prev"></div>
					<div className="wp-block-pronamic-slider-navigation-next"></div>
				</div>
			);
		},
		save: () => {
			return (
				<div { ...useBlockProps.save() }>
					<div className="wp-block-pronamic-slider-navigation-prev"></div>
					<div className="wp-block-pronamic-slider-navigation-next"></div>
				</div>
			);
		},
	}
);
