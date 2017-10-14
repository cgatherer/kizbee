<?php
/**
 * Template part for displaying page content in page-homepage.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Kizbees_Kitchen
 */

global $product;

?>

<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="container">
		<div class="span12 margin-top">
			<select class="chosen-select">
				<?php
				  	$taxonomy     = 'product_cat';
				  	$orderby      = 'name';  
				  	$show_count   = 0;
				  	$pad_counts   = 0;
				  	$hierarchical = 1;
				  	$title        = '';  
				  	$empty        = 0;

				  	$args = array(
				         'taxonomy'     => $taxonomy,
				         'orderby'      => $orderby,
				         'show_count'   => $show_count,
				         'pad_counts'   => $pad_counts,
				         'hierarchical' => $hierarchical,
				         'title_li'     => $title,
				         'hide_empty'   => $empty
					);
				 
					$all_categories = get_categories($args);

					foreach ($all_categories as $cat) {
				    	if($cat->category_parent == 0) {
				        	$category_id = $cat->term_id;       
				        	// echo '<a href="'. get_term_link($cat->slug, 'product_cat') .'" class="btn btn-sm button-size">'. $cat->name .'</a>';
				        	echo '<option class="'. $cat->name .'">'. $cat->name .'</option>';
				    	}       
					}
				?>
			</select>
		</div>

		<div class="span12 group margin-bottom">

		<?php
			$params = array(
				'posts_per_page' => 6, 
				'post_type' => 'product'
			);

			$wc_query = new WP_Query($params); ?>

			<?php 
				if ($wc_query->have_posts()) :
					while ($wc_query->have_posts()) :
                	$wc_query->the_post(); 

                		?>
						
						<div class="span6 tiles" style="background: url('<?php the_field( 'new_product_image' ); ?>'); background-size: cover;">
							<h2><?php the_title();?></h2>

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
