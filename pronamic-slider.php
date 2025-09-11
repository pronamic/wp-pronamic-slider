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
		$script_asset = require __DIR__ . '/build/view.asset.php';

		// Swiper
		\wp_register_script(
			'swiper',
			plugins_url( 'assets/swiper/swiper-bundle.min.js', __FILE__ ),
			[],
			'11.2.10'
		);

		\wp_register_style(
			'swiper',
			\plugins_url( 'assets/swiper/swiper-bundle.min.css', __FILE__ ),
			[],
			'11.2.10'
		);

		// Pronamic Slider
		\wp_register_style(
			'pronamic-slider',
			plugins_url( 'build/view.css', __FILE__ ),
			[ 'swiper' ],
			$script_asset['version']
		);
	
		\wp_register_script(
			'pronamic-slider',
			plugins_url( 'build/view.js', __FILE__ ),
			array_merge( $script_asset['dependencies'], ['swiper'] ),
			$script_asset['version']
		);

		if ( has_block( 'core/query' ) ) {
			wp_enqueue_style( 'pronamic-slider' );
			wp_enqueue_script( 'pronamic-slider' );
		}
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
		\register_block_type( __DIR__ . '/blocks/slides' );
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

		if (
			$processor->next_tag( 
				[ 
					'tag_name'   => 'div',
					'class_name' => 'wp-block-query'
				]
			)
		) {
			$processor->add_class( 'swiper' );
			$processor->set_attribute( 'data-swiper-settings', wp_json_encode( $slider_settings ) );
		}

		if (
			$processor->next_tag(
				[
					'tag_name'   => 'ul',
					'class_name' => 'wp-block-post-template'
				]
			)
		) {
			$processor->add_class( 'swiper-wrapper' );
		}

		while (
			$processor->next_tag(
				[
					'tag_name'   => 'li',
					'class_name' => 'wp-block-post'
				]
			)
		) {
			$processor->add_class( 'swiper-slide' );
		}

		return $processor->get_updated_html();
	},
	20,
	2
);

/**
 * Add slider pagination settings.
 */
\add_filter(
	'render_block',
	function( $block_content, $block ) {
		if ( 'pronamic/slider-pagination' !== $block['blockName'] ) {
			return $block_content;
		}

		if ( ! isset( $block['attrs']['paginationType'] ) ) {
			return;
		}

		$processor = new \WP_HTML_Tag_Processor( $block_content );

		if (
			$processor->next_tag( 
				[ 
					'tag_name'   => 'div',
					'class_name' => 'wp-block-pronamic-slider-pagination'
				]
			)
		) {
			$processor->set_attribute(
				'data-swiper-pagination-settings',
				wp_json_encode( [ 'paginationType' => $block['attrs']['paginationType'] ] )
			);
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
			$processor->add_class( 'swiper' );
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
		'slidesPerView'       => 1,
		'autoplay'            => false,
		'autoplayDelay'       => 2000,
		'centeredSlides'      => false,
		'loop'                => false,
		'effect'              => 'slide',
		'spaceBetween'        => 24,
		'mobileSlidesPerView' => 1,
	];

	if ( isset( $attrs['slidesPerView'] ) ) {
		$slider_settings['slidesPerView'] = $attrs['slidesPerView'];
	}

	if ( isset( $attrs['loop'] ) ) {
		$slider_settings['loop'] = $attrs['loop'];
	}

	if ( isset( $attrs['autoplay'] ) ) {
		$slider_settings['autoplay'] = $attrs['autoplay'];
	}

	if ( isset( $attrs['autoplayDelay'] ) ) {
		$slider_settings['autoplayDelay'] = $attrs['autoplayDelay'];
	}

	if ( isset( $attrs['centeredSlides'] ) ) {
		$slider_settings['centeredSlides'] = $attrs['centeredSlides'];
	}

	if ( isset( $attrs['effect'] ) ) {
		$slider_settings['effect'] = $attrs['effect'];
	}

	if ( isset( $attrs['spaceBetween'] ) ) {
		$slider_settings['spaceBetween'] = $attrs['spaceBetween'];
	}

	if ( isset( $attrs['mobileSlidesPerView'] ) ) {
		$slider_settings['mobileSlidesPerView'] = $attrs['mobileSlidesPerView'];
	}

	return $slider_settings;
}
