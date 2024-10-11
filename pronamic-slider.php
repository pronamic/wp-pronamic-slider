<?php
/**
 * Plugin Name:     Pronamic Slider
 * Description:     Pronamic block with slider integration.
 * Version:         1.0.0
 * Author:          Pronamic
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     pronamic-slider
 *
 * @package         pronamic-slider
 */

/**
 * Enqueue frontend scripts and styles
 */
\add_action(
	'wp_enqueue_scripts',
	function() {
		$script_asset = require __DIR__ . '/build/index.asset.php';

		wp_enqueue_style(
			'pronamic-query-loop-slider',
			plugins_url( 'build/view.css', __FILE__ ),
			[],
			$script_asset['version']
		);
	
		\wp_enqueue_script(
			'pronamic-query-loop-slider',
			plugins_url( 'build/view.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);
	}
);

/**
 * Enqueue editor scripts
 */
\add_action(
	'enqueue_block_editor_assets',
	function() {
		$script_asset = require __DIR__ . '/build/index.asset.php';

		\wp_enqueue_script(
			'pronamic-slider',
			plugins_url( 'build/index.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);
	}
);

/**
 * Register blocks
 */
\add_action(
	'init',
	function() {
		// Swiper blocks
		\register_block_type( __DIR__ . '/blocks/slider' );
		\register_block_type( __DIR__ . '/blocks/slide' );

		// Swiper query block
		\register_block_type( __DIR__ . '/blocks/slider-navigation' );
		\register_block_type( __DIR__ . '/blocks/slider-pagination' );
	}
);

/**
 * Add slider settings to Pronamic Slider Query block and add slider wrapper.
 */
\add_filter(
	'render_block',
	function( $block_content, $block ) {
		if ( empty( $block['attrs']['namespace'] ) ) {
			return $block_content;
		}

		if ( 'pronamic/slider' !== $block['attrs']['namespace'] ) {
			return $block_content;
		}

		$slider_settings = pronamic_slider_get_settings( $block['attrs'] );

		$processor = new \WP_HTML_Tag_Processor( $block_content );

		if ( $processor->next_tag( 'div' ) ) {
			$processor->set_attribute( 'data-swiper-settings', wp_json_encode( $slider_settings ) );
		}

		if ( $processor->next_tag( 'ul' ) ) {
			$processor->add_class( 'swiper-wrapper' );
		}

		while ( $processor->next_tag( 'li' ) ) {
			$processor->add_class( 'swiper-slide' );
		}

		return $processor->get_updated_html();
	},
	20,
	2
);

/**
 * Add slider settings to Pronamic Slider block.
 */
\add_filter(
	'render_block',
	function( $block_content, $block ) {
		if ( 'pronamic/slider' !== $block['blockName'] ) {
			return $block_content;
		}

		$slider_settings = pronamic_slider_get_settings( $block['attrs'] );

		$processor = new \WP_HTML_Tag_Processor( $block_content );

		if ( $processor->next_tag( 'div' ) ) {
			$processor->set_attribute( 'data-swiper-settings', wp_json_encode( $slider_settings ) );
		}

		return $processor->get_updated_html();
	},
	20,
	2
);

/**
 * Get slider settings.
 * 
 * @param array $attrs
 */
function pronamic_slider_get_settings( $attrs ) {
	$slider_settings = [
		'slidesPerView' => 1,
		'pagination'    => true,
		'navigation'    => true,
		'autoplay'      => false,
		'effect'        => 'slide',
	];

	if ( isset( $attrs['slidesPerView'] ) ) {
		$slider_settings[ 'slidesPerView' ] = $attrs['slidesPerView'];
	}

	if ( isset( $attrs['pagination'] ) ) {
		$slider_settings[ 'pagination' ] = $attrs['pagination'];
	}

	if ( isset( $attrs['navigation'] ) ) {
		$slider_settings[ 'navigation' ] = $attrs['navigation'];
	}

	if ( isset( $attrs['autoplay'] ) ) {
		$slider_settings[ 'autoplay' ] = $attrs['autoplay'];
	}

	if ( isset( $attrs['effect'] ) ) {
		$slider_settings[ 'effect' ] = $attrs['effect'];
	}

	return $slider_settings;
}
