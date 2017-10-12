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

	<!-- <div class="entry-content">
		<?php
			the_content();
		?>
	</div> -->

	<div class="container">
		<div class="span12 margin-top">
			<?php
			  	$taxonomy     = 'product_cat';
			  	$orderby      = 'name';  

			  	$args = array(
			         'taxonomy'     => $taxonomy,
			         'orderby'      => $orderby
				);
			 
				$all_categories = get_categories($args);

				foreach ($all_categories as $cat) {
			    	// if($cat->category_parent == 0) {
			        	$category_id = $cat->term_id;       
			        	echo '<a href="'. get_term_link($cat->slug, 'product_cat') .'">'. $cat->name .'</a>';
			    	// }       
				}
			?>
		</div>

		<div class="span12 group">

		<?php
			$params = array(
				'posts_per_page' => 6, 
				'post_type' => 'product'
			);

			$wc_query = new WP_Query($params); ?>

			<?php $category = get_the_category();
					$firstCategory = $category[0]->cat_name; echo $firstCategory;?>

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
