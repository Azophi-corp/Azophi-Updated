<?php

if (!defined('ABSPATH')) exit;

function azophi_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'azophi'),
        'footer-1' => __('Footer Services Menu', 'azophi'),
        'footer-2' => __('Footer Company Menu', 'azophi')
    ));
}
add_action('after_setup_theme', 'azophi_setup');

function azophi_scripts() {
    wp_enqueue_style('azophi-style', get_stylesheet_uri());
    wp_enqueue_script('azophi-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0', true);
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true);
}
add_action('wp_enqueue_scripts', 'azophi_scripts');

// Register Custom Post Types
function azophi_register_post_types() {
    // Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'azophi'),
            'singular_name' => __('Testimonial', 'azophi')
        ),
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail')
    ));

    // Services
    register_post_type('service', array(
        'labels' => array(
            'name' => __('Services', 'azophi'),
            'singular_name' => __('Service', 'azophi')
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-networking',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
    ));

    // Case Studies
    register_post_type('case-study', array(
        'labels' => array(
            'name' => __('Case Studies', 'azophi'),
            'singular_name' => __('Case Study', 'azophi')
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-portfolio',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
    ));
}
add_action('init', 'azophi_register_post_types');

// Register Theme Options
if(function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Theme Options',
        'menu_title' => 'Theme Options',
        'menu_slug' => 'theme-options',
        'capability' => 'edit_posts',
        'redirect' => false
    ));
}