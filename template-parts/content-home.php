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
			        	echo '<a href="'. get_term_link($cat->slug, 'product_cat') .'">'. $cat->name .'</a>';
			    	}       
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

			<?php
				$productImage = get_field('new_product_image'); 
                $size = 'full'; 

				if ($wc_query->have_posts()) :
					while ($wc_query->have_posts()) :
                	$wc_query->the_post(); ?>
						
						<div class="span6 tiles" style="">
							<?php the_title();?>
							<!-- <img src="<?php echo $productImage; ?>" data-id="<?php echo $wc_query->post->ID; ?>"> -->
							<?php print_r($productImage);?>
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
