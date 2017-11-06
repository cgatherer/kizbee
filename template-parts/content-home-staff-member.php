<?php
/**
 * Template part for displaying staff members on the home page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Kizbees_Kitchen
 */
?>

<div class="container pack-grid">
	<div class="span12 group margin-bottom">
		<?php
			$args = array('post_type' => 'staff-member', 'posts_per_page' => 2);
				$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
						<h2><?php the_title();?></h2>
		<?php endwhile; ?>
	</div>
</div>
