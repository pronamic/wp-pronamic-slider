/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { SelectControl,PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

registerBlockType(
	metadata.name, {
		edit: ( { attributes, setAttributes } ) => {
			return (
				<div>
					<InspectorControls>
						<PanelBody title={ __( 'Settings','pronamic-slider' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'type', 'pronamic-slider' ) }
								value={ attributes.paginationType }
								options={ [
									{ label: __( 'Bullets', 'pronamic-slider' ), value: 'bullets' },
									{ label: __( 'Progress bar', 'pronamic-slider' ), value: 'progressbar' },
								] }
								onChange={ ( paginationType ) => setAttributes( { paginationType } ) }
							/>
						</PanelBody>
					</InspectorControls>
				
					<div { ...useBlockProps() }></div>
				</div>
			);
		},
		save: () => {
			return (
				<div { ...useBlockProps.save() }></div>
			);
		},
	}
);
