<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Kizbees_Kitchen
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/img/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/favicon-16x16.png">
<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/img/manifest.json">
<link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/img/safari-pinned-tab.svg" color="#5bbad5">
<meta name="theme-color" content="#ffffff">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<!-- Styles -->
  	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
  	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/main.css">
  	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/fonts/font-awesome.min.css">

	<!-- Scripts -->
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  	<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr.js"></script>
  	<script src="<?php echo get_template_directory_uri(); ?>/js/scripts.js"></script>


	<?php //wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<!-- <div id="page" class="site"> -->
<main role="main" class="main">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'kizbees_kitchen' ); ?></a>

	<header role="banner" class="suite-header-bar clearfixshadow-1">
	  <?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) : ?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<?php else : ?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<?php
			endif;

			$description = get_bloginfo( 'description', 'display' );
			if ( $description || is_customize_preview() ) : ?>
				<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
	  <?php
			endif; ?>

      <!-- <a id="cms-logo" href="landing-page.html"><img src="<?php echo get_template_directory_uri(); ?>/img/Hibbert_CMS_logo.svg" alt="Homepage"></a> -->
      
      <!-- Okta -->
      <div id="cms-top-nav"> 
        <!-- <ul>
          <li><a class="okta" href="https://hibbert.okta.com/" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/img/Hibbert_Okta.svg" alt="Homepage"></a></li>
        </ul> -->
      </div>
      
      <!-- Menu -->
      <div class="dropdown">
        <a id="cms-menu-trigger" href="#">Menu <span class="cms-menu-icon"></span></a>
      </div>
    </header>

    <!-- Push Nav -->
    <nav id="cms-lateral-nav">
		<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_class'        => 'cms-navigation',
                'items_wrap'      => '<li>%3$s</li>'
			));
		?>
      <!-- <ul class="cms-navigation">
        <li><a href="#">Account Settings</a></li>
        <li><a href="#">Administration</a></li>
        <li><a href="#">Notification</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Logout</a></li>
      </ul>  -->
    </nav>

	<!-- <header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) : ?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<?php else : ?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<?php
			endif;

			$description = get_bloginfo( 'description', 'display' );
			if ( $description || is_customize_preview() ) : ?>
				<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
			<?php
			endif; ?>
		</div>

		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'kizbees_kitchen' ); ?></button>
			<?php
				wp_nav_menu( array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				) );
			?>
		</nav>
	</header> -->

	<div id="content" class="site-content">
