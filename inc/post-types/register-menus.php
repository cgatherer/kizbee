<?php

$menus = new CPT(array(
    'post_type_name' => 'menu',
    'singular' => __('Menu'),
    'plural' => __('Menus'),
    'slug' => 'menu'
),
	array(
    'supports' => array('title', 'editor', 'thumbnail'),
    'menu_icon' => 'dashicons-book-alt'
));

$menus->register_taxonomy(array(
    'taxonomy_name' => 'menu_type',
    'singular' => __('Menu Type'),
    'plural' => __('Menu Types'),
    'slug' => 'menu-type'
));