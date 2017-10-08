<?php

$staff = new CPT(array(
    'post_type_name' => 'Staff Member',
    'singular' => __('Staff Member'),
    'plural' => __('Staff Members'),
    'slug' => 'staff-member'
),
	array(
    'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
    'menu_icon' => 'dashicons-admin-users'
));

$staff->register_taxonomy(array(
    'taxonomy_name' => 'staff_member_type',
    'singular' => __('Staff Member Type'),
    'plural' => __('Staff Member Types'),
    'slug' => 'staff-member-type'
));