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
		
		<section class="cd-slider-wrapper">
			<ul class="cd-slider">
				<li class="visible">
					<div>
						<h2>Animated SVG Hero Slider</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, explicabo.</p>
						<a href="http://codyhouse.co/?p=854" class="cd-btn">Article &amp; Download</a>
					</div>
				</li>
					
				<li>
					<div>
						<h2>Slide #2 Title</h2>
						<p>Lorem ipsum dolor sit amet, consectetur.</p>
						<a href="http://codyhouse.co/?p=854" class="cd-btn">Learn more</a>
					</div>
				</li>

				<li>
					<div>
						<h2>Slide #3 Title</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, distinctio!.</p>
						<a href="http://codyhouse.co/?p=854" class="cd-btn">Learn more</a>
					</div>
				</li>

				<li>
					<div>
						<h2>Slide #4 Title</h2>
						<p>Lorem ipsum dolor sit amet.</p>
						<a href="http://codyhouse.co/?p=854" class="cd-btn">Learn more</a>
					</div>
				</li>
			</ul> <!-- .cd-slider -->
		
			<ol class="cd-slider-navigation">
				<li class="selected"><a href="#0"><em>Item 1</em></a></li>
				<li><a href="#0"><em>Item 2</em></a></li>
				<li><a href="#0"><em>Item 3</em></a></li>
				<li><a href="#0"><em>Item 4</em></a></li>
			</ol> <!-- .cd-slider-navigation -->
			
			<div class="cd-svg-cover" data-step1="M1402,800h-2V0.6c0-0.3,0-0.3,0-0.6h2v294V800z" data-step2="M1400,800H383L770.7,0.6c0.2-0.3,0.5-0.6,0.9-0.6H1400v294V800z" data-step3="M1400,800H0V0.6C0,0.4,0,0.3,0,0h1400v294V800z" data-step4="M615,800H0V0.6C0,0.4,0,0.3,0,0h615L393,312L615,800z" data-step5="M0,800h-2V0.6C-2,0.4-2,0.3-2,0h2v312V800z" data-step6="M-2,800h2L0,0.6C0,0.3,0,0.3,0,0l-2,0v294V800z" data-step7="M0,800h1017L629.3,0.6c-0.2-0.3-0.5-0.6-0.9-0.6L0,0l0,294L0,800z" data-step8="M0,800h1400V0.6c0-0.2,0-0.3,0-0.6L0,0l0,294L0,800z" data-step9="M785,800h615V0.6c0-0.2,0-0.3,0-0.6L785,0l222,312L785,800z" data-step10="M1400,800h2V0.6c0-0.2,0-0.3,0-0.6l-2,0v312V800z">
				<svg height='100%' width="100%" preserveAspectRatio="none" viewBox="0 0 1400 800">
					<title>SVG cover layer</title>
					<desc>an animated layer to switch from one slide to the next one</desc>
					<path id="cd-changing-path" d="M1402,800h-2V0.6c0-0.3,0-0.3,0-0.6h2v294V800z"/>
				</svg>
			</div> <!-- .cd-svg-cover -->
		</section> <!-- .cd-slider-wrapper -->



