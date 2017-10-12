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
		  $taxonomy     = 'product_cat';
		  $orderby      = 'name';  
		  $show_count   = 0;      // 1 for yes, 0 for no
		  $pad_counts   = 0;      // 1 for yes, 0 for no
		  $hierarchical = 1;      // 1 for yes, 0 for no  
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
		 
		$all_categories = get_categories( $args );
			foreach ($all_categories as $cat) {
		    	if($cat->category_parent == 0) {
		        	$category_id = $cat->term_id;       
		        	echo '<br/><a href="'. get_term_link($cat->slug, 'product_cat') .'">'. $cat->name .'</a>';

			        $args2 = array(
			                'taxonomy'     => $taxonomy,
			                'child_of'     => 0,
			                'parent'       => $category_id,
			                'orderby'      => $orderby,
			                'show_count'   => $show_count,
			                'pad_counts'   => $pad_counts,
			                'hierarchical' => $hierarchical,
			                'title_li'     => $title,
			                'hide_empty'   => $empty
			        );

			        $sub_cats = get_categories( $args2 );
			        if($sub_cats) {
			            foreach($sub_cats as $sub_category) {
			                echo  $sub_category->name ;
			            }   
			        }
		    	}       
			}
		?>

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
