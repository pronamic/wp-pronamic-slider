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
 * Register block assets
 */
function pronamic_slider_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = $dir . '/build/index.asset.php';

	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "pronamic-slider/pronamic-slider" block first.'
		);
	}

	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );

	wp_register_script(
		'pronamic-slider-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	wp_set_script_translations(
		'pronamic-slider-block-editor',
		'pronamic-slider',
		plugin_dir_path( __FILE__ ) . 'languages'
	);

	$editor_css = 'build/index.css';

	wp_register_style(
		'pronamic-slider-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';

	wp_register_style(
		'pronamic-slider-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'pronamic/slider',
		array(
			'editor_script' => 'pronamic-slider-block-editor',
			'editor_style'  => 'pronamic-slider-block-editor',
			'style'         => 'pronamic-slider-block',
		)
	);
}

add_action( 'init', 'pronamic_slider_init' );

/**
 * Frontend scripts
 */
function pronamic_slider_frontend_scripts() {
	if ( has_block( 'pronamic-slider/pronamic-slider' ) ) {
		wp_enqueue_script(
			'pronamic-slider-blocks-frontend',
			plugins_url( 'js/script.min.js', __FILE__ ),
			array( 'jquery' )
		);
	}
}

add_action( 'wp_enqueue_scripts', 'pronamic_slider_frontend_scripts' );
