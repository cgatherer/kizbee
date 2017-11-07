<?php
/**
 * Template Name: Home Page
 *
 * This is the template that displays the homepage.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Kizbees_Kitchen
 */

get_header(); ?>

<div id="primary" class="content-area">

	<?php
	while ( have_posts() ) : the_post();

		get_template_part( 'template-parts/content', 'home' );

	endwhile; 
	?>

</div>

<?php
get_footer();
