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
    'taxonomy_name' => 'staff_member_type',
    'singular' => __('Staff Member Type'),
    'plural' => __('Staff Member Types'),
    'slug' => 'staff-member-type'
));