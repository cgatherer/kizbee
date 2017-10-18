<?php
/**
 * Kizbees Kitchen functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Kizbees_Kitchen
 */

/**
 *  Widgets | Add
 */

if( ! function_exists( 'kizbees_kitchen_register_widget' )){
     function kizbees_kitchen_register_widget() {
         register_widget('kizbees_kitchen_product_Widget'); // Products
     }
}
add_action('widgets_init','kizbees_kitchen_register_widget');
