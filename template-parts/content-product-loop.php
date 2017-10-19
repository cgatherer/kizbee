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
	<div class="span12 margin-top margin-bottom">
				
				<!-- <input type="button" data-filter="*" class="btn btn-blue button-size" value="Show All"> -->
				<!-- <select class="ignore tile-filters"> -->
				<!-- <?php
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
				        	//echo '<a href="javascript:void(0);" data-filter="'. $cat->name .'">'. $cat->name .'</a>';
				        	// echo '<input type="button" data-filter=".'. $cat->name .'" class="btn btn-blue button-size" value="'. $cat->name .'">';
				        	echo '<option data-filter=".'. $cat->name .'" value="'. $cat->name .'">'. $cat->name .'</option>';
				    	}       
					}
				?> -->
				<!-- </select> -->
	</div>

	<div class="span12 group margin-bottom">
		<!-- <?php
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
		<?php endwhile; ?> -->
	</div>

	<div class="span12 margin-bottom" style="text-align: center;">
		<h2>Details About Shipping &amp; Availability</h2>
	</div>
</div>
