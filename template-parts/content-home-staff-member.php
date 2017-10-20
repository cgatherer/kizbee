<?php
/**
 * Template part for displaying page content in page-homepage.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Kizbees_Kitchen
 */
?>

<div class="container pack-grid">
	<div class="span12 group margin-bottom">
		<?php

			$args = array('post_type' => 'staff_member', 'posts_per_page' => 1);

				$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>

				    		<!-- <div class="span6 tiles pack-item" style="background: url('<?php the_field( 'new_product_image' ); ?>'); background-size: cover;">
								<h2><?php the_title();?></h2>
								<div class="price"><?php echo $product->get_price_html(); ?></div>
								<p><?php echo $term; ?></p>
							</div> -->
							<h2>Testing</h2>
		<?php endwhile; ?>
	</div>
</div>
