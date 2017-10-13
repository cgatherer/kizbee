<?php
/**
 * Template part for displaying page content in page-homepage.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Kizbees_Kitchen
 */

global $post, $product;
$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$thumbnail_size    = apply_filters( 'woocommerce_product_thumbnails_large_size', 'full' );
$post_thumbnail_id = get_post_thumbnail_id( $post->ID );
$full_size_image   = wp_get_attachment_image_src( $post_thumbnail_id, $thumbnail_size );
$placeholder       = has_post_thumbnail() ? 'with-images' : 'without-images';
$wrapper_classes   = apply_filters( 'woocommerce_single_product_image_gallery_classes', array(
	'woocommerce-product-gallery',
	'woocommerce-product-gallery--' . $placeholder,
	'woocommerce-product-gallery--columns-' . absint( $columns ),
	'images',
) );
?>

<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

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
				$attributes = array(
					'title'                   => get_post_field( 'post_title', $post_thumbnail_id ),
					'data-caption'            => get_post_field( 'post_excerpt', $post_thumbnail_id ),
					'data-src'                => $full_size_image[0],
					'data-large_image'        => $full_size_image[0],
					'data-large_image_width'  => $full_size_image[1],
					'data-large_image_height' => $full_size_image[2],
				);

				$html  = '<div data-thumb="' . get_the_post_thumbnail_url( $post->ID, 'shop_thumbnail' ) . '" class="woocommerce-product-gallery__image"><a href="' . esc_url( $full_size_image[0] ) . '">';
				$html .= get_the_post_thumbnail( $post->ID, 'shop_single', $attributes );
				$html .= '</a></div>';

				echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, get_post_thumbnail_id( $post->ID ) );

				do_action( 'woocommerce_product_thumbnails' );
			?>

		<!-- <?php
			$params = array(
				'posts_per_page' => 6, 
				'post_type' => 'product'
			);

			$wc_query = new WP_Query($params); ?>

			<?php print_r($wc_query);?> -->

			<!-- <?php
				$args = array( 
					'post_type' => 'product', 
					'posts_per_page' => 8
				);

				$loop = new WP_Query($args);

				while ( $loop->have_posts() ) : $loop->the_post(); global $product; 
					$thumbnail_size    = apply_filters( 'woocommerce_product_thumbnails_large_size', 'full' );
					$post_thumbnail_id = get_post_thumbnail_id( $post->ID );
					$full_size_image   = wp_get_attachment_image_src( $post_thumbnail_id, $thumbnail_size );?> -->

				    <!-- <div class="dvThumb col-xs-4 col-sm-3 col-md-3 profiler-select profiler<?php echo the_title(); ?>" data-profile="<?php echo $loop->post->ID; ?>">
				        <?php $featured_image = wp_get_attachment_image_src( get_post_thumbnail_id($loop->post->ID)); ?>
				        <?php if($featured_image) { ?>
				        <img src="<?php $featured_image[0]; ?>" data-id="<?php echo $loop->post->ID; ?>">
				        <?php } ?>
				        <p><?php the_title(); ?></p>
				        <span class="price"><?php echo $product->get_price_html(); ?></span>
				    </div> -->
				<!-- <?php endwhile; ?> -->

			<!-- <?php 

				if ($wc_query->have_posts()) :
					while ($wc_query->have_posts()) :
                	$wc_query->the_post(); ?>

                		<!-- <?php $featured_image = get_the_post_thumbnail_url('large'); ?> -->
						
						<!-- <div class="span6 tiles" style="">
							<?php the_title();?>
							<img src="<?php echo $featured_image; ?>" data-id="<?php echo $wc_query->post->ID; ?>">
						</div> -->
					
					<!-- <?php endwhile;
					wp_reset_postdata();
					else:  ?>
					
					<p>
					     <?php _e( 'No Products' ); ?>
					</p> -->
		<!-- <?php endif; ?> --> 

		</div>
	</div>

</div>
