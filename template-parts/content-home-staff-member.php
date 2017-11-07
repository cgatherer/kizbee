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
	<div class="span12 group margin-bottom staff">
		<?php
			$args = array('post_type' => 'Staff Member', 'posts_per_page' => 8);

				$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
						<div class="span4">
							<div class="staff-image">
								<?php if ( has_post_thumbnail() ) : ?>
									<?php the_post_thumbnail('full'); ?>
								<?php endif; ?>
							</div>
						</div>
						<div class="span8">
							<h2><?php the_title();?></h2>
							<h3><?php the_field('position');?></h3>
							<p><span><?php the_excerpt();?></span></p>
						</div>
		<?php endwhile; ?>
	</div>
</div>
