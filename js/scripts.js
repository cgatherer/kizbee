/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
 */
function updateViewportDimensions() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    return { width: x, height: y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
 */
var waitForFinalEvent = (function() {
    var timers = {};
    return function(callback, ms, uniqueId) {
        if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
        if (timers[uniqueId]) { clearTimeout(timers[uniqueId]); }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 200;

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
 */
function loadGravatars() {
    // set the viewport using the function above
    viewport = updateViewportDimensions();
    // if the viewport is tablet or larger, we load in the gravatars
    if (viewport.width >= 768) {
        jQuery('.comment img[data-gravatar]').each(function() {
            jQuery(this).attr('src', jQuery(this).attr('data-gravatar'));
        });
    }
} // end function



/*
 $(document).ready(function() {
      $('select:not(.ignore)').niceSelect();      
      FastClick.attach(document.body);
    });    
 */


jQuery(document).ready(function($) {
    $(document).ready(function() {
        $('select:not(.ignore)').niceSelect();      
});   

// Start Ease scroll to text anchors****************************************
// *************************************************************************
jQuery(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 750);
                return false;
                }
            }
        });
    });
}); 

// Push Menu ****************************************
// **************************************************

jQuery(document).ready(function($){
    
    var $lateral_menu_trigger = $('#cms-menu-trigger'),
        $content_wrapper = $('.cms-main-content'),
        $navigation = $('header');

    //open-close lateral menu clicking on the menu icon
    $lateral_menu_trigger.on('click', function(event){
        event.preventDefault();
        
        $lateral_menu_trigger.toggleClass('is-clicked');
        $navigation.toggleClass('lateral-menu-is-open');
        $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
            $('body').toggleClass('overflow-hidden');
        });
        $('#cms-lateral-nav').toggleClass('lateral-menu-is-open');
        
        //check if transitions are not supported - i.e. in IE9
        if($('html').hasClass('no-csstransitions')) {
            $('body').toggleClass('overflow-hidden');
        }
    });

    //close lateral menu clicking outside the menu itself
    $content_wrapper.on('click', function(event){
        if( !$(event.target).is('#cms-menu-trigger, #cms-menu-trigger span') ) {
            $lateral_menu_trigger.removeClass('is-clicked');
            $navigation.removeClass('lateral-menu-is-open');
            $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                $('body').removeClass('overflow-hidden');
            });
            $('#cms-lateral-nav').removeClass('lateral-menu-is-open');
            //check if transitions are not supported
            if($('html').hasClass('no-csstransitions')) {
                $('body').removeClass('overflow-hidden');
            }

        }
    });
});

// Sticky Header ************************************
// **************************************************

jQuery(window).scroll(function($) {

    if ( $('body').scrollTop() >= 100){
        $('header').addClass('is-fixed');
    } else {
         $('header').removeClass('is-fixed');
    } 
});

// function resizeHeaderOnScroll() {
//   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
//   shrinkOn = 200,
//   headerEl = document.getElementById('suite-header-bar');
  
//   if (distanceY > shrinkOn) {
//     headerEl.classList.add("header-smaller");
//   } else {
//     headerEl.classList.remove("header-smaller");
//   }
// }

// window.addEventListener('scroll', resizeHeaderOnScroll);

// Floating Action Button JS ************************
// **************************************************

jQuery(document).ready(function($){  
  
    $(".fab,.backdrop").click(function(){        
        if($(".backdrop").is(":visible")){            
            $(".backdrop").fadeOut(125);            
            $(".fab.child")                
            .stop()                
            .animate({                    
                bottom  : $("#masterfab").css("bottom"),                    
                opacity : 0                
            },125,function(){                    
                $(this).hide();                
            });        
        }else{            
            $(".backdrop").fadeIn(125);            
        $(".fab.child").each(function(){                
            $(this)                    
        .stop()                    
        .show()                    
        .animate({                        
            bottom  : (parseInt($("#masterfab").css("bottom")) + parseInt($("#masterfab").outerHeight()) + 70 * $(this).data("subitem") - $(".fab.child").outerHeight()) + "px",                        
        opacity : 1                    
    },125);            
    });        
    }    
});
});

// File Upload **************************************
// **************************************************

jQuery(document).ready(function($){

    $("#upload_link").on('click', function(e){
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
});

// Toggle Popup *************************************
// **************************************************
 
function toggleDiv(popup) {
    $("#" + popup).fadeToggle(['fast']);
}

// Home Slider **************************************
// **************************************************

jQuery(document).ready(function(){
    /*
        convert a cubic bezier value to a custom mina easing
        http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
    */
    var duration = 300,
        delay = 300,
        epsilon = (1000 / 60 / duration) / 4,
        firstCustomMinaAnimation = bezier(.42,.03,.77,.63, epsilon),
        secondCustomMinaAnimation = bezier(.27,.5,.6,.99, epsilon);

    //initialize the slider
    $('.cd-slider-wrapper').each(function(){
        initSlider($(this));
    });

    function initSlider(sliderWrapper) {
        //cache jQuery objects
        var slider = sliderWrapper.find('.cd-slider'),
            sliderNavigation = sliderWrapper.find('.cd-slider-navigation').find('li'),
            svgCoverLayer = sliderWrapper.find('div.cd-svg-cover'),
            pathId = svgCoverLayer.find('path').attr('id'),
            svgPath = Snap('#'+pathId);
        
        //store path 'd' attribute values   
        var pathArray = [];
        pathArray[0] = svgCoverLayer.data('step1');
        pathArray[1] = svgCoverLayer.data('step6');
        pathArray[2] = svgCoverLayer.data('step2');
        pathArray[3] = svgCoverLayer.data('step7');
        pathArray[4] = svgCoverLayer.data('step3');
        pathArray[5] = svgCoverLayer.data('step8');
        pathArray[6] = svgCoverLayer.data('step4');
        pathArray[7] = svgCoverLayer.data('step9');
        pathArray[8] = svgCoverLayer.data('step5');
        pathArray[9] = svgCoverLayer.data('step10');    

        //update visible slide when user clicks .cd-slider-navigation buttons
        sliderNavigation.on('click', function(event){
            event.preventDefault();
            var selectedItem = $(this);
            if(!selectedItem.hasClass('selected')) {
                // if it's not already selected
                var selectedSlidePosition = selectedItem.index(),
                    selectedSlide = slider.children('li').eq(selectedSlidePosition),
                    visibleSlide = slider.find('.visible'),
                    visibleSlidePosition = visibleSlide.index(),
                    direction = '';
                direction = ( visibleSlidePosition < selectedSlidePosition) ? 'next': 'prev';
                updateSlide(visibleSlide, selectedSlide, direction, svgCoverLayer, sliderNavigation, pathArray, svgPath);
            }
        });
    }

    function updateSlide(oldSlide, newSlide, direction, svgCoverLayer, sliderNavigation, paths, svgPath) {
        if( direction == 'next' ) {
            var path1 = paths[0],
                path2 = paths[2],
                path3 = paths[4];
                path4 = paths[6];
                path5 = paths[8];
        } else {
            var path1 = paths[1],
                path2 = paths[3],
                path3 = paths[5];
                path4 = paths[7];
                path5 = paths[9];
        }

        svgCoverLayer.addClass('is-animating');
        svgPath.attr('d', path1);
        svgPath.animate({'d': path2}, duration, firstCustomMinaAnimation, function(){
            svgPath.animate({'d': path3}, duration, secondCustomMinaAnimation, function(){
                oldSlide.removeClass('visible');
                newSlide.addClass('visible');
                updateNavSlide(newSlide, sliderNavigation);
                setTimeout(function(){
                    svgPath.animate({'d': path4}, duration, firstCustomMinaAnimation, function(){
                        svgPath.animate({'d': path5}, duration, secondCustomMinaAnimation, function(){
                            svgCoverLayer.removeClass('is-animating');
                        });
                    });
                }, delay);
            });
        });
    }

    function updateNavSlide(actualSlide, sliderNavigation) {
        var position = actualSlide.index();
        sliderNavigation.removeClass('selected').eq(position).addClass('selected');
    }

    function bezier(x1, y1, x2, y2, epsilon){
        //https://github.com/arian/cubic-bezier
        var curveX = function(t){
            var v = 1 - t;
            return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
        };

        var curveY = function(t){
            var v = 1 - t;
            return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
        };

        var derivativeCurveX = function(t){
            var v = 1 - t;
            return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
        };

        return function(t){

            var x = t, t0, t1, t2, x2, d2, i;

            // First try a few iterations of Newton's method -- normally very fast.
            for (t2 = x, i = 0; i < 8; i++){
                x2 = curveX(t2) - x;
                if (Math.abs(x2) < epsilon) return curveY(t2);
                d2 = derivativeCurveX(t2);
                if (Math.abs(d2) < 1e-6) break;
                t2 = t2 - x2 / d2;
            }

            t0 = 0, t1 = 1, t2 = x;

            if (t2 < t0) return curveY(t0);
            if (t2 > t1) return curveY(t1);

            // Fallback to the bisection method for reliability.
            while (t0 < t1){
                x2 = curveX(t2);
                if (Math.abs(x2 - x) < epsilon) return curveY(t2);
                if (x > x2) t0 = t2;
                else t1 = t2;
                t2 = (t1 - t0) * .5 + t0;
            }

            // Failure
            return curveY(t2);

        };
    };
});
