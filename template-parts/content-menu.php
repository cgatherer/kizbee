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
			$args = array('post_type' => 'Menu', 'posts_per_page' => 1);

				$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
						<div class="span4">
							<div class="staff-image">
								<?php if ( has_post_thumbnail() ) : ?>
									<?php the_post_thumbnail('large'); ?>
								<?php endif; ?>
							</div>
						</div>
		<?php endwhile; ?>
	</div>
</div>
