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
  	<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
  	<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
  	<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr.js"></script>
  	<script src="<?php //echo get_template_directory_uri(); ?>/js/scripts.js"></script>


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
                'items_wrap'     => '<ul class="cms-navigation">%3$s</ul>'
			));
		?>
    </nav>

	<!-- Hero Image -->
	<?php if(is_page('Home')){ ?>

		<section class="cd-slider-wrapper">
			<ul class="cd-slider">
				
				<?php if( have_rows('hero_slider') ): ?>
					<?php while( have_rows('hero_slider') ): the_row(); 

						// vars
						$headline = get_sub_field('hero_headline');
						$message  = get_sub_field('hero_messaging');
						$link     = get_sub_field('hero_button_link');
						$text     = get_sub_field('hero_button_link_text');
						$image    = get_sub_field('hero_image');
						$class    = get_sub_field('hero_class'); ?>
						
						<li class="<?php echo $class; ?>" style="background-image: url('<?php echo $image; ?>');">
							<div>
								<h2><?php echo $headline;?></h2>
								<p><?php echo $message;?></p>
								<a href="<?php echo $link;?>" class="cd-btn"><?php echo $text;?></a>
							</div>
							<div class="overlay"></div>
						</li>

					<?php endwhile; ?>
				<?php endif; ?>

			</ul> 

			<ol class="cd-slider-navigation">

				<?php if( have_rows('hero_slider') ): ?>
					<?php while( have_rows('hero_slider') ): the_row(); 

						// vars
						$navClass = get_sub_field('navigation_class'); 
						$navTitle = get_sub_field('navigation_title'); ?> 

						<li class="<?php echo $navClass;?>"><a href="#"><em><?php echo $navTitle;?></em></a></li>

					<?php endwhile; ?>
				<?php endif; ?>
			</ol>
				
			<div class="cd-svg-cover" data-step1="M1402,800h-2V0.6c0-0.3,0-0.3,0-0.6h2v294V800z" data-step2="M1400,800H383L770.7,0.6c0.2-0.3,0.5-0.6,0.9-0.6H1400v294V800z" data-step3="M1400,800H0V0.6C0,0.4,0,0.3,0,0h1400v294V800z" data-step4="M615,800H0V0.6C0,0.4,0,0.3,0,0h615L393,312L615,800z" data-step5="M0,800h-2V0.6C-2,0.4-2,0.3-2,0h2v312V800z" data-step6="M-2,800h2L0,0.6C0,0.3,0,0.3,0,0l-2,0v294V800z" data-step7="M0,800h1017L629.3,0.6c-0.2-0.3-0.5-0.6-0.9-0.6L0,0l0,294L0,800z" data-step8="M0,800h1400V0.6c0-0.2,0-0.3,0-0.6L0,0l0,294L0,800z" data-step9="M785,800h615V0.6c0-0.2,0-0.3,0-0.6L785,0l222,312L785,800z" data-step10="M1400,800h2V0.6c0-0.2,0-0.3,0-0.6l-2,0v312V800z">
				<svg height='100%' width="100%" preserveAspectRatio="none" viewBox="0 0 1400 800">
					<title>SVG cover layer</title>
					<path id="cd-changing-path" d="M1402,800h-2V0.6c0-0.3,0-0.3,0-0.6h2v294V800z"/>
				</svg>
			</div> 
		</section> 
	
	<?php } else { ?>
		<!-- Do Nothing -->
	<?php } ?> 
    
	<div id="content">

