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

<main role="main" class="main">
	<header role="banner" class="suite-header-bar clearfixshadow-1">
		<div class="site-branding">
			<a id="cms-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?php echo get_template_directory_uri(); ?>/img/LOGO-Transparent-e1485136889476.gif" alt="home">
			</a>
		</div>
      
      <!-- Okta -->
      <div id="cms-top-nav"> 
        <!-- <ul>
          <li><a class="okta" href="https://hibbert.okta.com/" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/img/Hibbert_Okta.svg" alt="Homepage"></a></li>
        </ul> -->
      </div>
      
      <!-- Menu -->
      <div class="dropdown">
        <a id="cms-menu-trigger" href="#">
        	<span class="cms-menu-text">Menu</span>
        	<span class="cms-menu-icon"></span>
        </a>
      </div>
    </header>

    <!-- Push Nav -->
    <nav id="cms-lateral-nav">
		<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_class'     => 'cms-navigation',
                'items_wrap'     => '<li>%3$s</li>'
			));
		?>
    </nav>
    
	<div id="content" class="container">
