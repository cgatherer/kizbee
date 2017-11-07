<?php
/**
 * Template part for displaying staff members on the home page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Kizbees_Kitchen
 */
?>

<div class="container pack-grid">
	<div class="span12 group margin-bottom">
		<?php
			$args = array('post_type' => 'Menu', 'posts_per_page' => 1);

				$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
					
						<?php if( have_rows('menu_items') ): ?>
							<?php while( have_rows('menu_items') ): the_row(); 

								// vars
								$headline = get_sub_field('menu_item_name');
								$message  = get_sub_field('menu_item_description');
								$price    = get_sub_field('menu_item_price');?>
						
								<div class="span4"> 
									<h2><?php echo $headline;?></h2>
									<p><?php echo $message;?></p>
									<p><?php echo $price;?></p>
								</div>

					<?php endwhile; ?>
				<?php endif; ?>

		<?php endwhile; ?>
	</div>
</div>
