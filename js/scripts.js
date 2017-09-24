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

    // slide toggle SECTIONS

    jQuery(document).ready(function($) {
        function slide() {
            $(".table-collapse").slideToggle("1500");
            return false;
        }
        $(".table-toggle").click(slide, slide);
    });


    jQuery(document).ready(function($) {
        function slide() {
            $(this).siblings(".section-content-wrapper").slideToggle("1500");
            return false;
        }
        $(".section-header").click(slide, slide);
    });

    jQuery(document).ready(function($) {
        function slide() {
            $(this).siblings(".data-set").slideToggle("1500");
            return false;
        }
        $(".data-header").click(slide, slide);
    });

    jQuery(document).ready(function($) {
        function slide() {
            $(this).siblings(".trends").slideToggle("1500");
            return false;
        }
        $(".trending-header").click(slide, slide);
    });


    jQuery(document).ready(function($) {
        function slide() {
            $(this).siblings(".trending-content-wrapper").slideToggle("1500");
            return false;
        }
        $(".trending-header").click(slide, slide);
    });



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

// Slide Panel **************************************
// **************************************************
jQuery(document).ready(function($){

    $(".show-panel").click(function(){
        $(".panel-wrapper").slideToggle("slow");
    });
});

// Append Address ***********************************
// **************************************************

jQuery(document).ready(function($){
    var $mainAddress = $(
        '<div class="span6 address-block_main_append">' +
        '<div class="field">' +
        '<label for="#">Billing / Shipping:</label>' +
        '<select name="application">' +
        '<option value="--">--</option>' +
        '<option value="option1">Billing</option>' +
        '<option value="option2">Shipping</option>' +
        '</select>' +
        '</div>' +
        '<div class="field">' +
        '<label for="#">Address:</label>' +
        '<input name="address1" tabindex="4" type="text" value=""><br>' +
        '<input name="address2" tabindex="4" type="text" value="">' +
        '</div>' +

        '<div class="group">' +
        '<div class="span4">' +
        '<div class="field">' +
        '<label for="#">city:</label>' +
        '<input name="city" tabindex="3" type="text" value="">' +
        '</div>' +
        '</div>' +
        '<div class="span4">' +
        '<div class="field">' +
        '<label for="#">State:</label>' +
        '<input name="state" tabindex="3" type="text" value="">' +
        '</div>' +
        '</div>' +

        '<div class="span4">' +
        '<div class="field">' +
        '<label for="#">Zip:</label>' +
        '<input name="zip" tabindex="3" type="text" value="">' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="field">' +
        '<label for="#">Country:</label>' +
        '<input name="country" tabindex="4" type="text" value="" autocomplete="on">' +
        '</div>' +

        '<div class="field">' +
        '<label for="#">Email:</label>' +
        '<input name="billingEmail" tabindex="4" type="text" value="">' +
        '</div>' +
        '</div>');

    // ADD ADDRESS.
    $(".address-block_add").click(function(){
        $( ".address-block_main" ).after( $mainAddress );
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $(".address-block_remove").click(function() {
        $( $mainAddress ).remove();
    });
});

// Search Panel *************************************
// **************************************************

jQuery(document).ready(function($){

    var $searchPanel = $(
        '<div class="card" style="overflow: scroll;">' + '<section class="card-header ">' + '<span class="card-color-label label-blue clear">' + '<i class="fa fa-send"></i>' + '<h4 class="text-shadow card-header-label">Search Details</h4>' + '</span>' + '</section>' +
        '<table width="100%" border="0" data-role="table" data-mode="columntoggle" class="campaign-search-table clickable" id="campaignList">' + '<tbody><tr>' + '<th scope="col">' + '<a href="javascript:sortResults("Company Name")">Company Name</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Status")">Status</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Company Number")">Company Number</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Division Name")">Division Name</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Division Number")">Division Number</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Active Item Count")">Active Item Count</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Client UID")">Client UID</a>' + '</th>' +
        '<tr class="row-red" id="0">' + '<td>Company Name<input type="hidden" id="0_hibId" value="14844"><input type="hidden" id="0_fulfId" value="329"></td>' + '<td>EXPIRED<input type="hidden" id="0_status" value="EXPIRED"></td>' + '<td>1070</td>' + '<td>Clinical Trials</td>' + '<td>1000</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-red" id="1">' + '<td>Company Name<input type="hidden" id="1_hibId" value="14706"><input type="hidden" id="1_fulfId" value="324"></td>' + '<td>EXPIRED<input type="hidden" id="1_status" value="EXPIRED"></td>' + '<td>1071</td>' + '<td>Clinical Trials</td>' + '<td>1001</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-green" id="2">' + '<td>Company Name<input type="hidden" id="2_hibId" value="14887"><input type="hidden" id="2_fulfId" value="323"></td>' + '<td>ACTIVE<input type="hidden" id="2_status" value="ACTIVE"></td>' + '<td>1072</td>' + '<td>Clinical Trials</td>' + '<td>1002</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-green" id="3">'+ '<td>Company Name<input type="hidden" id="3_hibId" value="14883"><input type="hidden" id="3_fulfId" value="326"></td>'+ '<td>ACTIVE<input type="hidden" id="3_status" value="ACTIVE"></td>'+ '<td>1073</td>'+ '<td>Clinical Trials</td>'+ '<td>1004</td>'+ '<td>237</td>'+ '<td>0123456789</td>' + '</tr>'+
        '<tr class="row-green" id="4">'+ '<td>Company Name<input type="hidden" id="4_hibId" value="14765"><input type="hidden" id="4_fulfId" value="327"></td>'+ '<td>ACTIVE<input type="hidden" id="4_status" value="ACTIVE"></td>'+ '<td>1074</td>'+ '<td>Clinical Trials</td>'+ '<td>1005</td>'+ '<td>237</td>'+ '<td>0123456789</td>' + '</tr>'+
        '<tr class="row-red" id="5">' + '<td>Company Name<input type="hidden" id="5_hibId" value="15468"><input type="hidden" id="5_fulfId" value="442"></td>' + '<td>EXPIRED<input type="hidden" id="5_status" value="EXPIRED"></td>' + '<td>1075</td>' + '<td>Clinical Trials</td>' + '<td>1006</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-white" id="6">' + '<td>Company Name<input type="hidden" id="6_hibId" value="14896"><input type="hidden" id="6_fulfId" value="331"></td>' + '<td>DENIED<input type="hidden" id="6_status" value="DENIED"></td>' + '<td>1076</td>' + '<td>Clinical Trials</td>' + '<td>1007</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-green" id="7">' + '<td>Company Name<input type="hidden" id="7_hibId" value="14888"><input type="hidden" id="7_fulfId" value="330"></td>' + '<td>ACTIVE<input type="hidden" id="7_status" value="ACTIVE"></td>' + '<td>1077</td>' + '<td>Clinical Trials</td>' + '<td>1008</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-white" id="8">' + '<td>Company Name<input type="hidden" id="8_hibId" value="15078"><input type="hidden" id="8_fulfId" value="382"></td>' + '<td>LOCKED<input type="hidden" id="8_status" value="LOCKED"></td>' + '<td>1078</td>' + '<td>Clinical Trials</td>' + '<td>1009</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-white" id="9">' + '<td>Company Name<input type="hidden" id="9_hibId" value="15121"><input type="hidden" id="9_fulfId" value="388"></td>' + '<td>CREATED<input type="hidden" id="9_status" value="CREATED"></td>' + '<td>1079</td>' + '<td>Clinical Trials</td>' + '<td>1010</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-white" id="10">' + '<td>Company Name<input type="hidden" id="10_hibId" value="15275"><input type="hidden" id="10_fulfId" value="423"></td>' + '<td>CREATED<input type="hidden" id="10_status" value="CREATED"></td>' + '<td>1080</td>' + '<td>Clinical Trials</td>' + '<td>1011</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-green" id="11">' + '<td>Company Name<input type="hidden" id="11_hibId" value="14762"><input type="hidden" id="11_fulfId" value="325"></td>' + '<td>ACTIVE<input type="hidden" id="11_status" value="ACTIVE"></td>' + '<td>1081</td>' + '<td>Clinical Trials</td>' + '<td>1012</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-white" id="12">' + '<td>Company Name<input type="hidden" id="12_hibId" value="15502"><input type="hidden" id="12_fulfId" value="482"></td>' + '<td>LOCKED<input type="hidden" id="12_status" value="LOCKED"></td>' + '<td>1082</td>' + '<td>Clinical Trials</td>' + '<td>1013</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-white" id="13">' + '<td>Company Name<input type="hidden" id="13_hibId" value="15273"><input type="hidden" id="13_fulfId" value="422"></td>' + '<td>CREATED<input type="hidden" id="13_status" value="CREATED"></td>' + '<td>1083</td>' + '<td>Clinical Trials</td>' + '<td>1014</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '<tr class="row-red" id="14">' + '<td>Company Name<input type="hidden" id="14_hibId" value="15014"><input type="hidden" id="14_fulfId" value="363"></td>' + '<td>EXPIRED<input type="hidden" id="14_status" value="EXPIRED"></td>' + '<td>1084</td>' + '<td>Clinical Trials</td>' + '<td>1015</td>' + '<td>237</td>' + '<td>0123456789</td>' + '</tr>' +
        '</tbody></table>' + '<div class="right">' + '<div class="left" style="padding: 10px;">Viewing 1 of 2</div>' + '<div id="numbers" class="pagination light-theme simple-pagination"><ul><li class="disabled"><span class="current prev">Prev</span></li><li class="active"><span class="current">1</span></li><li><a href="#page-2" class="page-link">2</a></li><li><a href="#page-2" class="page-link next">Next</a></li></ul></div>' + '</div>' + '</section>' +
        '</div>');
    
    var $searchPanel2 = $(
        '<div class="card" style="overflow: scroll;">' + '<section class="card-header ">' + '<span class="card-color-label label-blue clear">' + '<i class="fa fa-send"></i>' + '<h4 class="text-shadow card-header-label">Search Details</h4>' + '</span>' + '</section>' +
        '<table width="100%" border="0" data-role="table" data-mode="columntoggle" class="campaign-search-table clickable" id="campaignList">' + '<tbody><tr>' + '<th scope="col">' + '<a href="javascript:sortResults("Company Number")">Company Number</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Status")">Status</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Customer Number")">Customer Number</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Customer First name")">Customer First name</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Customer LName")">Customer Last Name</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Customer UID")">Customer UID</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Division Name")">Division Name</a>' + '</th>' + '<th scope="col">' + '<a href="javascript:sortResults("Division Name")">Division Number</a>' + '</th>' + 
        '<tr class="row-red" id="0">' + '<td>1001<input type="hidden" id="0_hibId" value="14844"><input type="hidden" id="0_fulfId" value="329"></td>' + '<td>INACTIVE<input type="hidden" id="0_status" value="INACTIVE"></td>' + '<td>0001070</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-red" id="0">' + '<td>1001<input type="hidden" id="0_hibId" value="14844"><input type="hidden" id="0_fulfId" value="329"></td>' + '<td>INACTIVE<input type="hidden" id="0_status" value="INACTIVE"></td>' + '<td>0001070</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-red" id="1">' + '<td>1002<input type="hidden" id="1_hibId" value="14706"><input type="hidden" id="1_fulfId" value="324"></td>' + '<td>INACTIVE<input type="hidden" id="1_status" value="INACTIVE"></td>' + '<td>0001071</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-green" id="2">' + '<td>1003<input type="hidden" id="2_hibId" value="14887"><input type="hidden" id="2_fulfId" value="323"></td>' + '<td>ACTIVE<input type="hidden" id="2_status" value="ACTIVE"></td>' + '<td>0001072</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-green" id="3">'+ '<td>1004<input type="hidden" id="3_hibId" value="14883"><input type="hidden" id="3_fulfId" value="326"></td>'+ '<td>ACTIVE<input type="hidden" id="3_status" value="ACTIVE"></td>'+ '<td>0001073</td>'+ '<td>Jack</td>'+ '<td>Sparrow</td>'+ '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>'+
        '<tr class="row-green" id="4">'+ '<td>1005<input type="hidden" id="4_hibId" value="14765"><input type="hidden" id="4_fulfId" value="327"></td>'+ '<td>ACTIVE<input type="hidden" id="4_status" value="ACTIVE"></td>'+ '<td>0001074</td>'+ '<td>Jack</td>'+ '<td>Sparrow</td>'+ '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>'+
        '<tr class="row-red" id="5">' + '<td>1006<input type="hidden" id="5_hibId" value="15468"><input type="hidden" id="5_fulfId" value="442"></td>' + '<td>INACTIVE<input type="hidden" id="5_status" value="INACTIVE"></td>' + '<td>0001075</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-red" id="6">' + '<td>1007<input type="hidden" id="6_hibId" value="14896"><input type="hidden" id="6_fulfId" value="331"></td>' + '<td>INACTIVE<input type="hidden" id="6_status" value="INACTIVE"></td>' + '<td>0001076</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-green" id="7">' + '<td>1008<input type="hidden" id="7_hibId" value="14888"><input type="hidden" id="7_fulfId" value="330"></td>' + '<td>ACTIVE<input type="hidden" id="7_status" value="ACTIVE"></td>' + '<td>0001077</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-red" id="8">' + '<td>1009<input type="hidden" id="8_hibId" value="15078"><input type="hidden" id="8_fulfId" value="382"></td>' + '<td>INACTIVE<input type="hidden" id="8_status" value="INACTIVE"></td>' + '<td>0001078</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-red" id="9">' + '<td>1010<input type="hidden" id="9_hibId" value="15121"><input type="hidden" id="9_fulfId" value="388"></td>' + '<td>ACTIVE<input type="hidden" id="9_status" value="ACTIVE"></td>' + '<td>0001079</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-red" id="10">' + '<td>1011<input type="hidden" id="10_hibId" value="15275"><input type="hidden" id="10_fulfId" value="423"></td>' + '<td>ACTIVE<input type="hidden" id="10_status" value="ACTIVE"></td>' + '<td>0001080</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-green" id="11">' + '<td>1012<input type="hidden" id="11_hibId" value="14762"><input type="hidden" id="11_fulfId" value="325"></td>' + '<td>ACTIVE<input type="hidden" id="11_status" value="ACTIVE"></td>' + '<td>0001081</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-red" id="12">' + '<td>1013<input type="hidden" id="12_hibId" value="15502"><input type="hidden" id="12_fulfId" value="482"></td>' + '<td>INACTIVE<input type="hidden" id="12_status" value="INACTIVE"></td>' + '<td>0001082</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-red" id="13">' + '<td>1014<input type="hidden" id="13_hibId" value="15273"><input type="hidden" id="13_fulfId" value="422"></td>' + '<td>ACTIVE<input type="hidden" id="13_status" value="ACTIVE"></td>' + '<td>0001083</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '<tr class="row-red" id="14">' + '<td>1015<input type="hidden" id="14_hibId" value="15014"><input type="hidden" id="14_fulfId" value="363"></td>' + '<td>INACTIVE<input type="hidden" id="14_status" value="INACTIVE"></td>' + '<td>0001084</td>' + '<td>Jack</td>' + '<td>Sparrow</td>' + '<td>0123456789</td>' + '<td>Lilly</td>' + '<td>01234</td>' + '</tr>' +
        '</tbody></table>' + '<div class="right">' + '<div class="left" style="padding: 10px;">Viewing 1 of 2</div>' + '<div id="numbers" class="pagination light-theme simple-pagination"><ul><li class="disabled"><span class="current prev">Prev</span></li><li class="active"><span class="current">1</span></li><li><a href="#page-2" class="page-link">2</a></li><li><a href="#page-2" class="page-link next">Next</a></li></ul></div>' + '</div>' + '</section>' +
        '</div>');

    $(".show-search").click(function(){
        $(".search-panel").append($searchPanel); 
    });

    $(".show-search2").click(function(){
        $(".search-panel2").append($searchPanel2); 
    });
});


//ERRORS

jQuery(document).ready(function($){
    $("input").each(function () {
        $(this).keyup(function () {
            var errors = 0;
            if($.trim($('.readonly').val()) == errors){
                $("input[type=text]:focus").addClass("has-error");
                // $(".error-description").show(100);
            }
            if($.trim($('input[type=text]:focus').val()) > errors){
                $("input[type=text]:focus").removeClass("has-error");
                // $(".error-description").hide(100);
            }  
        });
    });
});

function CheckInputs() {
    var valid = false;
    $(".readonly").each(function () {
        if (valid) { return valid; }
        var input = $.trim($(this).val());
        valid = !input;
    });
    return valid;
}

// Toggle Popup *************************************
// **************************************************
 
function toggleDiv(popup) {
    $("#" + popup).fadeToggle(['fast']);
}
