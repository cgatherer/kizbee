<?php
/**
 * Template Name: Home Page
 *
 * This is the template that displays the homepage.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Kizbees_Kitchen
 */

get_header(); ?>

<div class="container pack-grid">
	<div class="span6 margin-top margin-bottom">
		<select class="ignore tile-filters">
				<option data-filter="*" value="Show All">Show All</option>
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
				        	//echo '<a href="javascript:void(0);" data-filter="'. $cat->name .'">'. $cat->name .'</a>';
				        	// echo '<input type="button" data-filter=".'. $cat->name .'" class="btn btn-blue button-size" value="'. $cat->name .'">';
				        	echo '<option data-filter=".'. $cat->name .'" value="'. $cat->name .'">'. $cat->name .'</option>';
				    	}       
					}
				?>
		</select>
	</div>

	<div class="span12 group margin-bottom">
		<?php

			$args = array('post_type' => 'product', 'posts_per_page' => 8);

				$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
						<?php 
							$term = $product->get_categories();?>

				    		<div class="span6 tiles pack-item" style="background: url('<?php the_field( 'new_product_image' ); ?>'); background-size: cover;">
								<h2><?php the_title();?></h2>
								<div class="price"><?php echo $product->get_price_html(); ?></div>
								<p><?php echo $term; ?></p>
							</div>
		<?php endwhile; ?>
	</div>

	<div class="span12 margin-bottom" style="text-align: center;">
		<h2>Details About Shipping &amp; Availability</h2>
	</div>
</div>

<!-- Parallax Panel -->
<div id="About" data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true" data-vc-parallax="1.5" data-vc-parallax-image="http://kizbeeskitchen.com/wp-content/uploads/about.jpg" class="vc_row wpb_row vc_row-fluid vc_row-has-fill vc_row-o-full-height vc_row-o-columns-middle vc_row-o-content-middle vc_row-flex vc_general vc_parallax vc_parallax-content-moving" style="position: relative; left: 15px; box-sizing: border-box; width: 1444px;">
	<div class="wpb_column vc_column_container vc_col-sm-12">
		<div class="vc_column-inner ">
			<div class="wpb_wrapper">
				<div class="wpb_text_column wpb_content_element ">
					<div class="wpb_wrapper">

						<!-- Staff Members -->
						<div class="container pack-grid">
							<div class="span12 group margin-bottom">
								<?php
									$args = array('post_type' => 'staff-member', 'posts_per_page' => 2);
										$loop = new WP_Query( $args );
											while ( $loop->have_posts() ) : $loop->the_post(); ?>
												<h2><?php the_title();?></h2>
								<?php endwhile; ?>
							</div>
						</div>
						<!-- Staff Members End -->

					</div>
				</div>
			</div>
		</div>
	</div>
<div class="vc_parallax-inner skrollable skrollable-between" data-bottom-top="top: -50%;" data-top-bottom="top: 0%;" style="height: 150%; background-image: url('http://kizbeeskitchen.com/wp-content/uploads/about.jpg';); top: -38.465%;"></div></div>

<!-- <div id="primary" class="content-area">

	<?php
	while ( have_posts() ) : the_post();

		get_template_part( 'template-parts/content', 'home' );

	endwhile;
	?>

</div> --><!-- #primary -->

<?php
get_footer();
