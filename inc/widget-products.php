<?php
/**
 * Widget Muffin Podcasts
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Kizbees_Kitchen
 */

class kizbees_kitchen_register_widget extends WP_Widget {
	
	/* ---------------------------------------------------------------------------
	 * Constructor
	 * --------------------------------------------------------------------------- */
	function __construct(){
		
		$widget_ops = array( 'classname' => 'widget_kizbees_kitchen_podcasts', 'description' => __( 'The most recent products on your site.' ) );
		
		parent::__construct( 'widget_kizbees_kitchen_events', __( 'Product Widget' ), $widget_ops );
		
		$this->alt_option_name = 'widget_kizbees_kitchen_podcasts';
	}
	
	
	/* ---------------------------------------------------------------------------
	 * Outputs the HTML for this widget.
	 * --------------------------------------------------------------------------- */
	function widget( $args ) {
		
		$args = array(
			'posts_per_page' => 1,
			'post_type'      => 'post'
		);
		
		$r = new WP_Query($args);
		
		if ($r->have_posts()){     
			     
			echo '<div class="span12">';
					
					while ( $r->have_posts() ){
						$r->the_post();
						echo the_content();
					}
					wp_reset_postdata();

			echo '</div>'."\n";
		}
	}


	/* ---------------------------------------------------------------------------
	 * Deals with the settings when they are saved by the admin.
	 * --------------------------------------------------------------------------- */
	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		
		$instance['title'] 		= strip_tags( $new_instance['title'] );
		$instance['count'] 		= (int) $new_instance['count'];
		$instance['category'] 	= strip_tags( $new_instance['category'] );
		
		return $instance;
	}

	
	/* ---------------------------------------------------------------------------
	 * Displays the form for this widget on the Widgets page of the WP Admin area.
	 * --------------------------------------------------------------------------- */
	function form( $instance ) {
		
		$title		= isset( $instance['title']) ? esc_attr( $instance['title'] ) : '';
		$count		= isset( $instance['count'] ) ? absint( $instance['count'] ) : 5;
		$category	= isset( $instance['category']) ? esc_attr( $instance['category'] ) : '';

		?>
			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php _e( 'Title:', 'mfn-opts' ); ?></label>
				<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
			</p>
			
			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'category' ) ); ?>"><?php _e( 'Category:', 'mfn-opts' ); ?></label>
				<select id="<?php echo esc_attr( $this->get_field_id( 'category' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'category' ) ); ?>" class="widefat" >
					<?php 
						$categories = mfn_get_categories( 'category' );
						foreach( $categories as $k=>$v ){
							$selected = ( $category == $k ) ? 'selected="selected"' : false;
							echo '<option value="'. $k .'" '. $selected .'>'. $v .'</option>';
						}
					?>
				</select>
			</p>
			
			<p>
				<label for="<?php echo esc_attr( $this->get_field_id( 'count' ) ); ?>"><?php _e( 'Number of posts:', 'mfn-opts' ); ?></label>
				<input id="<?php echo esc_attr( $this->get_field_id( 'count' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'count' ) ); ?>" type="text" value="<?php echo esc_attr( $count ); ?>" size="3"/>
			</p>
			
		<?php
	}
}
?>