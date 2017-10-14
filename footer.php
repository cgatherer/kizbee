<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Kizbees_Kitchen
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'kizbees_kitchen' ) ); ?>"><?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'kizbees_kitchen' ), 'WordPress' );
			?></a>
			<span class="sep"> | </span>
			<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'kizbees_kitchen' ), 'kizbees_kitchen', '<a href="http://seasideconnections.com">christopher gatherer</a>' );
			?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<script src="<?php echo get_template_directory_uri(); ?>/js/chosen.jquery.min.js"></script> 
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.nice-select.min.js"></script> 
<script src="<?php echo get_template_directory_uri(); ?>/js/snap.svg-min.js"></script> 
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<?php wp_footer(); ?>

</body>
</html>
