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

	<div id="home-product" class="container pack-grid">
		<div class="span12 margin-top margin-bottom">
				
				<!-- <input type="button" data-filter="*" class="btn btn-blue button-size" value="Show All"> -->
				<select class="ignore tile-filters">
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
					<?php $terms = get_the_terms( $product->get_id(), 'product_cat' ); ?>

				    <div class="span6 tiles pack-item <?php echo $term->name;?>" style="background: url('<?php the_field( 'new_product_image' ); ?>'); background-size: cover;">
						<h2><?php the_title();?></h2>
						<div class="price"><?php echo $product->get_price_html(); ?></div>
					</div>
			<?php endwhile; ?>
		</div>
	</div>

	<div>
		<?php the_content();?>
	</div>

</div>

<script type="text/javascript">
  jQuery(document).ready(function($) {

      var $grid = $('.pack-grid').isotope({
        // options
        itemSelector: '.pack-item',
        layoutMode: 'fitRows'
      });

      $('.tile-filters').on( 'change', 'input', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
  });
</script>
