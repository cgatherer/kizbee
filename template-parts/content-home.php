<?php
/**
 * Template part for displaying page content in page-homepage.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Kizbees_Kitchen
 */
?>
<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="span12 group margin-bottom">
		<?php
			$args = array('post_type' => 'product', 'posts_per_page' => 8);

				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
					<?php 
						$term = $product->get_categories(); ?>

				    <div class="span6 tiles pack-item" style="background: url('<?php the_field( 'new_product_image' ); ?>'); background-size: cover;">
						<h2><?php the_title();?></h2>
						<div class="price"><?php echo $product->get_price_html(); ?></div>
						<p><?php echo $term; ?></p>
					</div>
			<?php endwhile; ?>

		<div class="span12 margin-bottom" style="text-align: center;">
			<h2>Details About Shipping &amp; Availability</h2>
		</div>
	</div>

	<div class="entry-content">
		<?php
			the_content();

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'kizbees_kitchen' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
				edit_post_link(
					sprintf(
						wp_kses(
							/* translators: %s: Name of current post. Only visible to screen readers */
							__( 'Edit <span class="screen-reader-text">%s</span>', 'kizbees_kitchen' ),
							array(
								'span' => array(
									'class' => array(),
								),
							)
						),
						get_the_title()
					),
					'<span class="edit-link">',
					'</span>'
				);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</div><!-- #post-<?php the_ID(); ?> -->