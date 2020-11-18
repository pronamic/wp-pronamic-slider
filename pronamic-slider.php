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
	$dir               = dirname( __FILE__ );
	$script_asset_path = $dir . '/build/index.asset.php';
	$index_js          = 'build/index.js';
	$script_asset      = require( $script_asset_path );
	$editor_css        = 'build/index.css';
	$style_css         = 'build/style-index.css';

	// Register block editor script for backend.
	wp_register_script(
		'pronamic-slider-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	// Register block editor style for backend.
	wp_register_style(
		'pronamic-slider-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	// Translations
	wp_set_script_translations(
		'pronamic-slider-block-editor',
		'pronamic-slider',
		plugin_dir_path( __FILE__ ) . 'languages'
	);

	// Register frontend style.
	wp_register_style(
		'pronamic-slider-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	// Register slick scripts and styles.
	wp_register_script(
		'slick',
		plugins_url( 'vendor/slick/slick.js', __FILE__ ),
		array(
			'jquery',
		),
		'1.8.1',
		true
	);

	wp_register_style(
		'slick',
		plugins_url( 'vendor/slick/slick.css', __FILE__ ),
		array(),
		'1.8.1'
	);

	wp_register_script(
		'pronamic-slider-blocks-frontend',
		plugins_url( 'js/script.min.js', __FILE__ ),
		array(
			'jquery',
			'slick',
		)
	);

	// Register block type
	$scripts = array( 'slick', 'pronamic-slider-blocks-frontend' );
	$styles  = array( 'slick', 'pronamic-slider-block' );

	register_block_type(
		'pronamic/slider',
		array(
			'editor_script' => 'pronamic-slider-block-editor',
			'script'        => $scripts,
			'editor_style'  => 'pronamic-slider-block-editor',
			'style'         => $styles,
		)
	);
}

add_action( 'init', 'pronamic_slider_init' );
