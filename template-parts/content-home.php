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
	<!-- <div class="entry-header">
		<?php the_title( '<h1>', '</h1>' ); ?>
	</div> -->

	<div class="entry-content">
		<?php
			the_content();
		?>
	</div>

	<div class="container">
		<div class="span12 group">

		<?php
			$params = array(
				'posts_per_page' => 6, 
				'post_type' => 'product'
			);

			$wc_query = new WP_Query($params); ?>

			<?php 
				if ($wc_query->have_posts()) :
					while ($wc_query->have_posts()) :
                	$wc_query->the_post(); ?>
						
						<div class="span6">
							<?php the_title();?>
						</div>
					
					<?php endwhile;
					wp_reset_postdata();
					else:  ?>
					
					<p>
					     <?php _e( 'No Products' ); // (6) ?>
					</p>
		<?php endif; ?>

		</div>
	</div>

</div>
