// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery
$(document).ready(function() {});


// Toggles modal popup 
function toggleDiv(popup) {
    $("#" + popup).fadeToggle(['fast']);
}

// Timepicker
$(document).ready(function() {
    var from_$input = $('#input_from').pickatime({ interval: 15 }),
        from_picker = from_$input.pickatime('picker')

    var to_$input = $('#input_to').pickatime({ interval: 15 }),
        to_picker = to_$input.pickatime('picker')
});

// File uploader
document.getElementById("uploadBtn").onchange = function() {
    document.getElementById("uploadFile").value = this.value;
};

// Start Ease scroll to text anchors****************************************
// *************************************************************************
$(function() {
    $('a[href*=#]:not( [href=#] )').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 750);
                return false;
            }
        }
    });
});


// Burger menu
/* 
Ultimate Burger Menu
copyright 24 February 2014, by Thomas Rambaud http://thomasrambaud.com
Permission to use this Javascript on your web page is
granted provided that all of the code in this script (including
these comments) is used without any alteration 
*/
$(function($) {

    $.fn.burgerMenu = function(options) {
        var settings = $.extend({
            buttonWidth: '40px',
            buttonHeight: '40px',
            linkSelector: 'li a',
            linkText: function($a) {
                return $a.text()
            },
            linkAccept: function($a, eq, $links) {
                return true;
            },
            fixed: true,
            zIndex: 100,
            top: 0,
            buttonMargin: 8,
            lineColor: '#fff',
            lineWidth: '26px',
            lineHeight: '4px',
            lineMargin: '4px',
            hideInitialNav: true,
            menuWidth: '200px',
            menuHeight: 'auto',
            menuBackground: '#fff',
            menuBorder: '1px solid black',
            linkColor: '#333',
            linkBackground: '#fff',
            linkPadding: '5px 10px',
            linkTextDecoration: 'none',
            linkBorderBottom: '1px solid #cdcdcd',
            linkNoBorderOnLast: true,
            position: 'left',
            keepButtonNextToMenu: false,
            animateSpeed: 0,
            hideOnBodyClick: true,
            showFromWidth: 0,
            showUntilWidth: 768,
            translate: true,
            overlay: true,
            customContent: false,
            customButton: false
        }, options);

        // function to create the burger menu button
        function createButton(eq) {
            // create the burger button and define its CSS
            var $button = $('<div class="burger-menu-button burger-menu-button-' + eq + '"></div>'),
                buttonCss = {
                    background: settings.buttonBg,
                    width: '100%',
                    height: settings.buttonHeight,
                    zIndex: settings.zIndex,
                    position: settings.fixed ? 'fixed' : 'absolute',
                    top: settings.top,
                    cursor: 'pointer',
                    opacity: '.9'

                };

            // position the button to the right or to the left, and space him if there's multiple burger menus to be displayed
            buttonCss[settings.position] = (parseInt(settings.buttonWidth) + parseInt(settings.buttonMargin)) * eq;

            $button.css(buttonCss);

            if (settings.customButton == false) {
                // create 3 lines in the button
                $button.append(createButtonLine(0));
                $button.append(createButtonLine(1));
                $button.append(createButtonLine(2));
            } else {
                $button.append(settings.customButton);
            }

            return $button;
        }

        // function to create a line in the button, to shape the burger
        function createButtonLine(eq) {
            // create a line and define its CSS
            var $line = $('<span class="burger-menu-line burger-menu-line-' + eq + '"></span>').css({
                // left: ((parseInt(settings.buttonWidth) - parseInt(settings.lineWidth)) / 2),
                top: ((parseInt(settings.buttonHeight) - (parseInt(settings.lineHeight) * 3 + parseInt(settings.lineMargin) * 2)) / 2) + (parseInt(settings.lineHeight) + parseInt(settings.lineMargin)) * eq,
                // display: 'block'
            });

            return $line;
        }

        // function to add links into the burger menu
        function createMenuLink($a, eq, len) {
            // create the link and define its CSS
            // the text of the link can be overloaded by the linkText setting (a function has to be provided)
            var $link = $('<a>').attr('href', $a.attr('href')).text(settings.linkText($a)),
                linkCss = {
                    color: settings.linkColor,
                    padding: settings.linkPadding,
                    background: settings.linkBackground,
                    display: 'block',
                    textDecoration: settings.linkTextDecoration,
                    borderBottom: settings.linkBorderBottom
                };

            $link.css(linkCss);

            // display (or not) a border on the last burger menu item
            if (settings.borderBottom != 'none' && settings.linkNoBorderOnLast && eq == len - 1) {
                $link.css('borderBottom', 'none');
            }

            return $link;
        }

        // create the menu which is displayed when clicking on the burger
        function createMenu(eq, $nav) {
            // create the menu and define its CSS
            var $menu = $('<div class="burger-menu burger-menu-' + eq + '"></div>'),
                menuCss = {
                    height: settings.menuHeight,
                    background: settings.menuBackground,
                    top: settings.keepButtonNextToMenu ? 0 : parseInt(settings.buttonHeight) - 1,
                    zIndex: settings.zIndex - 1,
                    position: settings.fixed ? 'fixed' : 'absolute',
                    border: settings.menuBorder,
                    boxSizing: 'border-box'
                },
                $links = $nav.find(settings.linkSelector);

            // position the menu to the left or the right, and hide it by giving it a negative position, so it is offscreen
            menuCss[settings.position] = '-' + settings.menuWidth;
            // set the width of the menu
            menuCss.width = getMenuWidth();

            // affect the css to the menu, and remove the border to the left or the right (depending of the position setting)
            $menu.css(menuCss).css('border-' + (settings.position), 'none');

            if (settings.customContent == false) {
                // loop through each link of the navigation
                $links.each(function(eq) {
                    // for each, create new a link based and add it to the menu. The informations of the link (href, text), are get from the initial nav
                    if (settings.linkAccept($(this), eq, $links)) {
                        $menu.append(createMenuLink($(this), eq, $links.length));
                    }
                });
            } else {
                // append custom content to the menu
                $menu.append(settings.customContent);
            }

            return $menu;
        }

        function getMenuWidth() {
            // if the button has to stay next to the menu
            if (settings.keepButtonNextToMenu) {
                // if the menu width is set in %
                if (settings.menuWidth.indexOf('%') > -1) {
                    // calculate the menu width depending on the window width, and substract the space of the button to that width
                    return ((($(window).width() * (parseInt(settings.menuWidth) / 95))) - parseInt(settings.buttonWidth)) + 'px';
                } else {
                    // just to substract the button width to the set menu width
                    return (parseInt(settings.menuWidth) - parseInt(settings.buttonWidth)) + 'px';
                }
            } else {
                // just return the menu width, as is
                return settings.menuWidth;
            }
        }

        // function to show / hide the menu when clicking on the burger
        var lastMenuShown = null;

        function showHideMenu($menu, hide, $button) {
            var menuAnimation = {},
                bodyAnimation = {},
                buttonAnimation = {},
                menuWidth = getMenuWidth();

            // if the page has to be translated
            if (settings.translate) {
                // translate the body
                bodyAnimation[settings.position] = (hide ? 0 : menuWidth);
                $('body').animate(bodyAnimation, settings.animateSpeed);
            }

            // animate the menu to the left or right, depending to the set position
            menuAnimation[settings.position] = (hide ? '-' + menuWidth : 0);
            $menu.animate(menuAnimation, settings.animateSpeed);

            // if the button has to stay next to the menu
            if (settings.keepButtonNextToMenu) {
                // animate the button too so it stays next to the menu, instead of staying at the corner
                buttonAnimation[settings.position] = (hide ? 0 : menuWidth);
                $button.animate(buttonAnimation, settings.animateSpeed);
            }

            // show overlay, if desired
            if (settings.overlay !== false) {
                if (!hide) {
                    // Add the overlay to the dom, then animate it
                    $('body').append($('<div>').attr('class', 'burger-menu-overlay').css({
                        opacity: .7,
                        background: settings.overlay,
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        zIndex: settings.zIndex - 2,
                        top: 0,
                        left: 0
                    }).animate({
                        opacity: 0.7
                    }, settings.animateSpeed));
                } else {
                    // fade overlay and remove it
                    $('.burger-menu-overlay').animate({
                        opacity: .7
                    }, function() {
                        $(this).remove();
                    });
                }
            }

            // hide the previous opened menu, if existing
            if (!hide) {
                if (lastMenuShown != null) {
                    showHideMenu(lastMenuShown, true);
                }
                lastMenuShown = $menu;
            } else {
                lastMenuShown = null;
            }
        }

        // for each element of the collection on which to apply burger menu
        return this.each(function(eq) {
            var $this = $(this),
                $button = createButton(eq),
                $menu = createMenu(eq, $this),
                hideMenuIfVisible = function() {
                    if ($button.hasClass('burger-menu-active')) {
                        $button.trigger('click');
                    }
                },
                ensureVisibleOnlyInBreakpoint = function(w) {
                    if (w >= settings.showFromWidth && w <= settings.showUntilWidth) {
                        // show burger and menu
                        $button.show();
                        $menu.show();

                        // hide the initial navigation
                        if (settings.hideInitialNav) {
                            $this.hide();
                        }
                    } else {
                        // hide burger and menu
                        $button.hide();
                        $menu.hide();

                        // show the initial navigation
                        if (settings.hideInitialNav) {
                            $this.show();
                        }
                    }
                };

            // when clicking on the burger
            $button.on('click', function(e) {
                var hide = $button.hasClass('burger-menu-active');
                // show the menu, or hide if already opened
                showHideMenu($menu, hide, $button);
                $button.toggleClass('burger-menu-active');
            });

            // append the created button and menu to the DOM
            $('body').append($button, $menu);

            // on resize
            $(window).on('resize', function() {
                // hide the menu if visible
                hideMenuIfVisible();

                // reset the menu width so it fits the screen as it should
                var menuWidth = getMenuWidth(),
                    menuCss = { width: menuWidth };
                menuCss[settings.position] = '-' + menuWidth;
                $menu.css(menuCss);

                // ensure the menu is only visible in the defined breakpoints
                ensureVisibleOnlyInBreakpoint($(this).width());
            }).trigger('resize');

            ensureVisibleOnlyInBreakpoint($(window).width());

            // hide the menu when clicking outside of it
            if (settings.hideOnBodyClick) {
                // when clicking anywhere
                $('body').on('click', function(event) {
                    var $target = $(event.target);
                    // check if the element clicked isn't the burger menu or button
                    if (!$target.hasClass('burger-menu-button') && !$target.hasClass('burger-menu') &&
                        $target.parents('.burger-menu').length === 0 && $target.parents('.burger-menu-button').length === 0) {
                        // if not, hide the menu
                        hideMenuIfVisible();
                    }
                });
            }

            // if the page has to be translated when the menu is shown
            if (settings.translate) {
                // set the overflow-x to hidden so the horizontal scrollbar does not appear
                // set position relative so we can animate the left/right property
                $('body').css({
                    'overflow-x': 'hidden',
                    'position': 'relative'
                });
            }
        });
    };

});

$(document).ready(function() {
    $('#nav').burgerMenu({
        translate: true,
        menuWidth: '50%',
        menuHeight: '100%',
        menuBorder: 'none',
        animateSpeed: 320,
        linkBorderBottom: 'none',
        keepButtonNextToMenu: true,
        overlay: '#ddd'
    });
});

jQuery(document).ready(function($){
    var $lateral_menu_trigger = $('#cd-menu-trigger'),
        $content_wrapper = $('.cd-main-content'),
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
        $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
        
        //check if transitions are not supported - i.e. in IE9
        if($('html').hasClass('no-csstransitions')) {
            $('body').toggleClass('overflow-hidden');
        }
    });

    //close lateral menu clicking outside the menu itself
    $content_wrapper.on('click', function(event){
        if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
            $lateral_menu_trigger.removeClass('is-clicked');
            $navigation.removeClass('lateral-menu-is-open');
            $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                $('body').removeClass('overflow-hidden');
            });
            $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
            //check if transitions are not supported
            if($('html').hasClass('no-csstransitions')) {
                $('body').removeClass('overflow-hidden');
            }

        }
    });

    //open (or close) submenu items in the lateral menu. Close all the other open submenu items.
    $('.item-has-children').children('a').on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
    });
});

// **********************************************************************************************************
// **********************************************************************************************************
//              END BURGER MENU
// **********************************************************************************************************
// **********************************************************************************************************

/**
 * simplePagination.js v1.6
 * A simple jQuery pagination plugin.
 * http://flaviusmatis.github.com/simplePagination.js/
 *
 * Copyright 2012, Flavius Matis
 * Released under the MIT license.
 * http://flaviusmatis.github.com/license.html
 */

(function($) {

    var methods = {
        init: function(options) {
            var o = $.extend({
                items: 1,
                itemsOnPage: 1,
                pages: 0,
                displayedPages: 5,
                edges: 2,
                currentPage: 0,
                hrefTextPrefix: '#page-',
                hrefTextSuffix: '',
                prevText: 'Prev',
                nextText: 'Next',
                ellipseText: '&hellip;',
                ellipsePageSet: true,
                cssStyle: 'light-theme',
                listStyle: '',
                labelMap: [],
                selectOnClick: true,
                nextAtFront: false,
                invertPageOrder: false,
                useStartEdge: true,
                useEndEdge: true,
                onPageClick: function(pageNumber, event) {
                    // Callback triggered when a page is clicked
                    // Page number is given as an optional parameter
                },
                onInit: function() {
                    // Callback triggered immediately after initialization
                }
            }, options || {});

            var self = this;

            o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
            if (o.currentPage)
                o.currentPage = o.currentPage - 1;
            else
                o.currentPage = !o.invertPageOrder ? 0 : o.pages - 1;
            o.halfDisplayed = o.displayedPages / 2;

            this.each(function() {
                self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
                methods._draw.call(self);
            });

            o.onInit();

            return this;
        },

        selectPage: function(page) {
            methods._selectPage.call(this, page - 1);
            return this;
        },

        prevPage: function() {
            var o = this.data('pagination');
            if (!o.invertPageOrder) {
                if (o.currentPage > 0) {
                    methods._selectPage.call(this, o.currentPage - 1);
                }
            } else {
                if (o.currentPage < o.pages - 1) {
                    methods._selectPage.call(this, o.currentPage + 1);
                }
            }
            return this;
        },

        nextPage: function() {
            var o = this.data('pagination');
            if (!o.invertPageOrder) {
                if (o.currentPage < o.pages - 1) {
                    methods._selectPage.call(this, o.currentPage + 1);
                }
            } else {
                if (o.currentPage > 0) {
                    methods._selectPage.call(this, o.currentPage - 1);
                }
            }
            return this;
        },

        getPagesCount: function() {
            return this.data('pagination').pages;
        },

        setPagesCount: function(count) {
            this.data('pagination').pages = count;
        },

        getCurrentPage: function() {
            return this.data('pagination').currentPage + 1;
        },

        destroy: function() {
            this.empty();
            return this;
        },

        drawPage: function(page) {
            var o = this.data('pagination');
            o.currentPage = page - 1;
            this.data('pagination', o);
            methods._draw.call(this);
            return this;
        },

        redraw: function() {
            methods._draw.call(this);
            return this;
        },

        disable: function() {
            var o = this.data('pagination');
            o.disabled = true;
            this.data('pagination', o);
            methods._draw.call(this);
            return this;
        },

        enable: function() {
            var o = this.data('pagination');
            o.disabled = false;
            this.data('pagination', o);
            methods._draw.call(this);
            return this;
        },

        updateItems: function(newItems) {
            var o = this.data('pagination');
            o.items = newItems;
            o.pages = methods._getPages(o);
            this.data('pagination', o);
            methods._draw.call(this);
        },

        updateItemsOnPage: function(itemsOnPage) {
            var o = this.data('pagination');
            o.itemsOnPage = itemsOnPage;
            o.pages = methods._getPages(o);
            this.data('pagination', o);
            methods._selectPage.call(this, 0);
            return this;
        },

        getItemsOnPage: function() {
            return this.data('pagination').itemsOnPage;
        },

        _draw: function() {
            var o = this.data('pagination'),
                interval = methods._getInterval(o),
                i,
                tagName;

            methods.destroy.call(this);

            tagName = (typeof this.prop === 'function') ? this.prop('tagName') : this.attr('tagName');

            var $panel = tagName === 'UL' ? this : $('<ul' + (o.listStyle ? ' class="' + o.listStyle + '"' : '') + '></ul>').appendTo(this);

            // Generate Prev link
            if (o.prevText) {
                methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, { text: o.prevText, classes: 'prev' });
            }

            // Generate Next link (if option set for at front)
            if (o.nextText && o.nextAtFront) {
                methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, { text: o.nextText, classes: 'next' });
            }

            // Generate start edges
            if (!o.invertPageOrder) {
                if (interval.start > 0 && o.edges > 0) {
                    if (o.useStartEdge) {
                        var end = Math.min(o.edges, interval.start);
                        for (i = 0; i < end; i++) {
                            methods._appendItem.call(this, i);
                        }
                    }
                    if (o.edges < interval.start && (interval.start - o.edges != 1)) {
                        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                    } else if (interval.start - o.edges == 1) {
                        methods._appendItem.call(this, o.edges);
                    }
                }
            } else {
                if (interval.end < o.pages && o.edges > 0) {
                    if (o.useStartEdge) {
                        var begin = Math.max(o.pages - o.edges, interval.end);
                        for (i = o.pages - 1; i >= begin; i--) {
                            methods._appendItem.call(this, i);
                        }
                    }

                    if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
                        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                    } else if (o.pages - o.edges - interval.end == 1) {
                        methods._appendItem.call(this, interval.end);
                    }
                }
            }

            // Generate interval links
            if (!o.invertPageOrder) {
                for (i = interval.start; i < interval.end; i++) {
                    methods._appendItem.call(this, i);
                }
            } else {
                for (i = interval.end - 1; i >= interval.start; i--) {
                    methods._appendItem.call(this, i);
                }
            }

            // Generate end edges
            if (!o.invertPageOrder) {
                if (interval.end < o.pages && o.edges > 0) {
                    if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
                        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                    } else if (o.pages - o.edges - interval.end == 1) {
                        methods._appendItem.call(this, interval.end);
                    }
                    if (o.useEndEdge) {
                        var begin = Math.max(o.pages - o.edges, interval.end);
                        for (i = begin; i < o.pages; i++) {
                            methods._appendItem.call(this, i);
                        }
                    }
                }
            } else {
                if (interval.start > 0 && o.edges > 0) {
                    if (o.edges < interval.start && (interval.start - o.edges != 1)) {
                        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
                    } else if (interval.start - o.edges == 1) {
                        methods._appendItem.call(this, o.edges);
                    }

                    if (o.useEndEdge) {
                        var end = Math.min(o.edges, interval.start);
                        for (i = end - 1; i >= 0; i--) {
                            methods._appendItem.call(this, i);
                        }
                    }
                }
            }

            // Generate Next link (unless option is set for at front)
            if (o.nextText && !o.nextAtFront) {
                methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, { text: o.nextText, classes: 'next' });
            }

            if (o.ellipsePageSet && !o.disabled) {
                methods._ellipseClick.call(this, $panel);
            }

        },

        _getPages: function(o) {
            var pages = Math.ceil(o.items / o.itemsOnPage);
            return pages || 1;
        },

        _getInterval: function(o) {
            return {
                start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
                end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
            };
        },

        _appendItem: function(pageIndex, opts) {
            var self = this,
                options, $link, o = self.data('pagination'),
                $linkWrapper = $('<li></li>'),
                $ul = self.find('ul');

            pageIndex = pageIndex < 0 ? 0 : (pageIndex < o.pages ? pageIndex : o.pages - 1);

            options = {
                text: pageIndex + 1,
                classes: ''
            };

            if (o.labelMap.length && o.labelMap[pageIndex]) {
                options.text = o.labelMap[pageIndex];
            }

            options = $.extend(options, opts || {});

            if (pageIndex == o.currentPage || o.disabled) {
                if (o.disabled || options.classes === 'prev' || options.classes === 'next') {
                    $linkWrapper.addClass('disabled');
                } else {
                    $linkWrapper.addClass('active');
                }
                $link = $('<span class="current">' + (options.text) + '</span>');
            } else {
                $link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + (options.text) + '</a>');
                $link.click(function(event) {
                    return methods._selectPage.call(self, pageIndex, event);
                });
            }

            if (options.classes) {
                $link.addClass(options.classes);
            }

            $linkWrapper.append($link);

            if ($ul.length) {
                $ul.append($linkWrapper);
            } else {
                self.append($linkWrapper);
            }
        },

        _selectPage: function(pageIndex, event) {
            var o = this.data('pagination');
            o.currentPage = pageIndex;
            if (o.selectOnClick) {
                methods._draw.call(this);
            }
            return o.onPageClick(pageIndex + 1, event);
        },


        _ellipseClick: function($panel) {
            var self = this,
                o = this.data('pagination'),
                $ellip = $panel.find('.ellipse');
            $ellip.addClass('clickable').parent().removeClass('disabled');
            $ellip.click(function(event) {
                if (!o.disable) {
                    var $this = $(this),
                        val = (parseInt($this.parent().prev().text(), 10) || 0) + 1;
                    $this
                        .html('<input type="number" min="1" max="' + o.pages + '" step="1" value="' + val + '">')
                        .find('input')
                        .focus()
                        .click(function(event) {
                            // prevent input number arrows from bubbling a click event on $ellip
                            event.stopPropagation();
                        })
                        .keyup(function(event) {
                            var val = $(this).val();
                            if (event.which === 13 && val !== '') {
                                // enter to accept
                                if ((val > 0) && (val <= o.pages))
                                    methods._selectPage.call(self, val - 1);
                            } else if (event.which === 27) {
                                // escape to cancel
                                $ellip.empty().html(o.ellipseText);
                            }
                        })
                        .bind('blur', function(event) {
                            var val = $(this).val();
                            if (val !== '') {
                                methods._selectPage.call(self, val - 1);
                            }
                            $ellip.empty().html(o.ellipseText);
                            return false;
                        });
                }
                return false;
            });
        }

    };

    $.fn.pagination = function(method) {

        // Method calling logic
        if (methods[method] && method.charAt(0) != '_') {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.pagination');
        }

    };

})(jQuery);
// **********************************************************************************************************
// **********************************************************************************************************
//              END Simple Pagination
// **********************************************************************************************************
// **********************************************************************************************************

// **********************************************************************************************************
// **********************************************************************************************************
//            Begin Easing
// **********************************************************************************************************
// **********************************************************************************************************
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) { j = k * 0.3 }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) { j = k * 0.3 }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) { j = k * (0.3 * 1.5) }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) { g = 1.70158 }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) { g = 1.70158 }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) { g = 1.70158 }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});


// **********************************************************************************************************
// **********************************************************************************************************
//              END EASING
// **********************************************************************************************************
// **********************************************************************************************************

// **********************************************************************************************************
// **********************************************************************************************************
//            Begin Date Dropdown
// **********************************************************************************************************
// **********************************************************************************************************

/*
 *  jQuery Date Dropdowns - v0.1.0
 *  A simple, customisable date select plugin
 *
 *  Made by Chris Brown
 *  Under MIT License
 */
;
(function($, window, document, undefined) {

    "use strict";

    // Create the defaults once
    var pluginName = "dateDropdowns",
        pluginDefaults = {
            defaultDate: null,
            defaultDateFormat: "mm-dd-yyyy",
            displayFormat: "dmy",
            submitFormat: "mm-dd-yyyy",
            minAge: null,
            maxAge: null,
            minYear: 2015,
            maxYear: 2115,
            submitFieldName: "expected-date",
            wrapperClass: "date-dropdowns",
            daySuffixes: true,
            monthSuffixes: true,
            monthFormat: "long"
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element; // Element handle
        this.$element = $(element); // jQuery element handle
        this.config = $.extend({}, pluginDefaults, options); // Plugin options
        this.internals = { // Internal variables
            objectRefs: {} // Generated element references
        };
        this._defaults = pluginDefaults; // Reference to the plugin defaults
        this._name = pluginName; // Reference to the plugin name
        this.init();

        return this;
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {

        /**
         * Initialise the plugin
         */
        init: function() {
            this.checkForDuplicateElement();
            this.setInternalVariables();
            this.setupMarkup();
            this.buildDropdowns();
            this.attachDropdowns();
            this.bindChangeEvent();

            if (this.config.defaultDate) {
                this.populateDefaultDate();
            }
        },

        /**
         * Check whether an element exists with the same name attribute. If so, throw an error
         */
        checkForDuplicateElement: function() {
            if ($("input[name=\"" + this.config.submitFieldName + "\"]").length) {
                $.error("Duplicate element found");
                return false;
            }

            return true;
        },

        /**
         * Set the plugin"s internal variables
         */
        setInternalVariables: function() {
            var date = new Date();
            this.internals.currentDay = date.getDate();
            this.internals.currentMonth = date.getMonth() + 1;
            this.internals.currentYear = date.getFullYear();
            this.internals.monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            this.internals.monthLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        },

        /**
         * Set the container which will hold the date dropdowns.
         *
         * - If the element on which the plugin was called is an input of type text or hidden, set it to
         *   be hidden and wrap it in a div. This outer div will become the container.
         * - If the element was an HTML element (e.g. <div/>), create a hidden text field within it, and use
         *   the div as the container.
         */
        setupMarkup: function() {
            var wrapper, hiddenField;

            if (this.element.tagName.toLowerCase() === "input") {

                // Configure the input element and wrap
                hiddenField = this.$element.attr("type", "hidden") // Set to type hidden after development
                    .wrap("<div class=\"" + this.config.wrapperClass + "\"  ></div>");

                wrapper = this.$element.parent();

            } else {

                // Build a hidden input and set this.$element as the wrapper
                hiddenField = $("<input/>", {
                    type: "hidden", // Set to type hidden after development
                    name: this.internals.submitFieldName
                });

                this.$element.append(hiddenField).addClass(this.config.wrapperClass);

                wrapper = this.$element;
            }

            // Store a reference to the wrapper and hidden field elements for later use
            this.internals.objectRefs.pluginWrapper = wrapper;
            this.internals.objectRefs.hiddenField = hiddenField;

            return true;
        },

        /**
         * Generate the Day, Month and Year dropdowns
         */
        buildDropdowns: function() {
            var $dayDropdown, $monthDropdown, $yearDropdown;

            // Build the day dropdown element
            $dayDropdown = this.buildDayDropdown();
            this.internals.objectRefs.dayDropdown = $dayDropdown;

            $monthDropdown = this.buildMonthDropdown();
            this.internals.objectRefs.monthDropdown = $monthDropdown;

            $yearDropdown = this.buildYearDropdown();
            this.internals.objectRefs.yearDropdown = $yearDropdown;

            return true;

            //this.internals.objectRefs.pluginWrapper.append($dayDropdown)
            //       .append($monthDropdown)
            //       .append($yearDropdown);
        },

        /**
         * Attach the generated dropdowns to the container
         */
        attachDropdowns: function() {
            var $element = this.internals.objectRefs.pluginWrapper,
                $daySelect = this.internals.objectRefs.dayDropdown,
                $monthSelect = this.internals.objectRefs.monthDropdown,
                $yearSelect = this.internals.objectRefs.yearDropdown;

            switch (this.config.displayFormat) {
                case "mdy":
                    $element.append($monthSelect, $daySelect, $yearSelect);
                    break;
                case "ymd":
                    $element.append($yearSelect, $monthSelect, $daySelect);
                    break;
                case "dmy":
                default:
                    $element.append($daySelect, $monthSelect, $yearSelect);
                    break;
            }

            return true;
        },

        /**
         * Bind the change event to the generated dropdowns
         */
        bindChangeEvent: function() {
            var $daySelect = this.internals.objectRefs.dayDropdown,
                $monthSelect = this.internals.objectRefs.monthDropdown,
                $yearSelect = this.internals.objectRefs.yearDropdown,
                pluginHandle = this,
                objectRefs = this.internals.objectRefs;

            objectRefs.pluginWrapper.on("change", "select", function() {
                var day = $daySelect.val(),
                    month = $monthSelect.val(),
                    year = $yearSelect.val(),
                    invalidDate = true,
                    newDate;

                // Find out whether the change has made the date invalid (e.g. 31st Feb)
                invalidDate = pluginHandle.checkDate(day, month, year);

                // If invalid - add an error class to the day dropdown and return
                if (invalidDate) {
                    objectRefs.dayDropdown.addClass("invalid");
                    return false;
                }

                if ("00" !== objectRefs.dayDropdown.val()) {
                    objectRefs.dayDropdown.removeClass("invalid");
                }

                // Only format the submit date if a full date has been selected
                if (!invalidDate && (day * month * year !== 0)) {
                    newDate = pluginHandle.formatSubmitDate(day, month, year);

                    objectRefs.hiddenField.val(newDate);
                }
            });
        },

        /**
         * Take a provided default date and populate both the hidden field and the
         * dropdown elements with the relevant formatted values
         *
         * @returns {boolean}
         */
        populateDefaultDate: function() {
            var date = this.config.defaultDate,
                parts = [],
                day = "00",
                month = "00",
                year = "0000";

            switch (this.config.defaultDateFormat) {
                case "yyyy-mm-dd":
                default:
                    parts = date.split("-");
                    day = parts[2];
                    month = parts[1];
                    year = parts[0];
                    break;

                case "dd/mm/yyyy":
                    parts = date.split("/");
                    day = parts[0];
                    month = parts[1];
                    year = parts[2];
                    break;

                case "mm/dd/yyyy":
                    parts = date.split("/");
                    day = parts[1];
                    month = parts[0];
                    year = parts[2];
                    break;
            }

            // Set the values on the dropdowns
            this.internals.objectRefs.dayDropdown.val(day);
            this.internals.objectRefs.monthDropdown.val(month);
            this.internals.objectRefs.yearDropdown.val(year);
            this.internals.objectRefs.hiddenField.val(date);

            if (true === this.checkDate(day, month, year)) {
                this.internals.objectRefs.dayDropdown.addClass("invalid");
            }

            return true;
        },

        /**
         * Build a generic dropdown element
         *
         * @param type
         * @returns {*|HTMLElement}
         */
        buildBaseDropdown: function(type) {
            return $("<select></select>", {
                class: type,
                name: this.config.submitFieldName + "_[" + type + "]"
            });
        },

        /**
         * Build the day dropdown element
         *
         * @returns {*|HTMLElement}
         */
        buildDayDropdown: function() {
            var day,
                dropdown = this.buildBaseDropdown("day");

            $("<option value=\"00\">Day</option>").appendTo(dropdown);

            // Days 1-9
            for (var i = 1; i < 10; i++) {
                if (this.config.daySuffixes) {
                    day = i + this.getSuffix(i);
                } else {
                    day = "0" + i;
                }
                $("<option value=\"0" + i + "\">" + day + "</option>").appendTo(dropdown);
            }

            // Days 10-31
            for (var j = 10; j <= 31; j++) {
                day = j;

                if (this.config.daySuffixes) {
                    day = j + this.getSuffix(j);
                }

                $("<option value=\"" + j + "\">" + day + "</option>").appendTo(dropdown);
            }

            return dropdown;
        },

        /**
         * Build the month dropdown element
         *
         * @returns {*|HTMLElement}
         */
        buildMonthDropdown: function() {
            var dropdown = this.buildBaseDropdown("month");

            $("<option value=\"00\">Month</option>").appendTo(dropdown);

            // Populate the month values
            for (var monthNo = 1; monthNo <= 12; monthNo++) {

                var month;

                switch (this.config.monthFormat) {
                    case "short":
                        month = this.internals.monthShort[monthNo - 1];
                        break;
                    case "long":
                        month = this.internals.monthLong[monthNo - 1];
                        break;
                    case "numeric":
                        month = monthNo;

                        if (this.config.monthSuffixes) {
                            month += this.getSuffix(monthNo);
                        }
                        break;
                }

                if (monthNo < 10) {
                    monthNo = "0" + monthNo;
                }

                $("<option value=\"" + monthNo + "\">" + month + "</option>").appendTo(dropdown);
            }

            return dropdown;
        },

        /**
         * Build the year dropdown element.
         *
         * By default minYear and maxYear are null, however if provided they take precedence over
         * the minAge and maxAge values.
         *
         * @returns {*|HTMLElement}
         */
        buildYearDropdown: function() {
            var minYear = this.config.minYear,
                maxYear = this.config.maxYear,
                dropdown = this.buildBaseDropdown("year");

            $("<option value=\"0000\">Year</option>").appendTo(dropdown);

            if (!minYear) {
                minYear = this.internals.currentYear - (this.config.maxAge + 1);
            }

            if (!maxYear) {
                maxYear = this.internals.currentYear - this.config.minAge;
            }

            for (var i = minYear; i <= maxYear; i++) {
                $("<option value=\"" + i + "\">" + i + "</option>").appendTo(dropdown);
            }

            return dropdown;
        },

        /**
         * Get the relevant suffix for a day/month number
         *
         * @param number
         * @returns {string}
         */
        getSuffix: function(number) {
            var suffix = "";

            switch (number % 10) {
                case 1:
                    suffix = (number % 100 === 11) ? "th" : "st";
                    break;
                case 2:
                    suffix = (number % 100 === 12) ? "th" : "nd";
                    break;
                case 3:
                    suffix = (number % 100 === 13) ? "th" : "rd";
                    break;
                default:
                    suffix = "th";
                    break;
            }

            return suffix;
        },

        /**
         * Check whether the date entered is invalid, e.g. 31st Feb
         *
         * @param day
         * @param month
         * @param year
         * @returns {boolean}
         */
        checkDate: function(day, month, year) {
            var invalidDate;

            if (month !== "00") {
                var numDaysInMonth = (new Date(year, month, 0).getDate()),
                    selectedDayInt = parseInt(day, 10);

                invalidDate = this.updateDayOptions(numDaysInMonth, selectedDayInt);

                // If the date is invalid, empty the hidden field to prevent invalid submissions
                if (invalidDate) {
                    this.internals.objectRefs.hiddenField.val("");
                }
            }

            return invalidDate;
        },

        /**
         * Update the day options available based on the month now selected
         *
         * @param numDaysInMonth
         * @param selectedDayInt
         * @returns {boolean}
         */
        updateDayOptions: function(numDaysInMonth, selectedDayInt) {
            var lastDayOption = parseInt(this.internals.objectRefs.dayDropdown.children(":last").val(), 10),
                newDayOption = "",
                newDayText = "",
                invalidDay = false;

            // If the selected month has less days than the Day dropdown currently contains - remove the extra days
            if (lastDayOption > numDaysInMonth) {

                while (lastDayOption > numDaysInMonth) {
                    this.internals.objectRefs.dayDropdown.children(":last").remove();
                    lastDayOption--;
                }

                // If the user-selected day is removed, indicate this so a message can be shown to the user
                if (selectedDayInt > numDaysInMonth) {
                    invalidDay = true;
                }

                // If the month contains more days than the Day dropdown contains - add the missing options
            } else if (lastDayOption < numDaysInMonth) {

                while (lastDayOption < numDaysInMonth) {

                    newDayOption = ++lastDayOption;
                    newDayText = newDayOption;

                    // Add the suffix if required
                    if (this.config.daySuffixes) {
                        newDayText += this.getSuffix(lastDayOption);
                    }

                    // Build the option and append to the dropdown
                    $("<option></option>")
                        .attr("value", newDayOption)
                        .text(newDayText)
                        .appendTo(this.internals.objectRefs.dayDropdown);
                }
            }

            return invalidDay;
        },

        /**
         * Format the selected date based on the submitFormat config value provided
         *
         * @param day
         * @param month
         * @param year
         * @returns {*}
         */
        formatSubmitDate: function(day, month, year) {
            var formattedDate;

            switch (this.config.submitFormat) {
                case "yyyy-mm-dd":
                default:
                    formattedDate = year + "-" + month + "-" + day;
                    break;

                case "mm/dd/yyyy":
                    formattedDate = month + "/" + day + "/" + year;
                    break;

                case "dd/mm/yyyy":
                    formattedDate = day + "/" + month + "/" + year;
                    break;
            }

            return formattedDate;
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });

        // chain jQuery functions
        return this;
    };

})(jQuery, window, document);

// **********************************************************************************************************
// **********************************************************************************************************
//              END date dropdown
// **********************************************************************************************************
// **********************************************************************************************************

// **********************************************************************************************************
// **********************************************************************************************************
//            Begin WOW Animations
// **********************************************************************************************************
// **********************************************************************************************************

/*! WOW - v1.1.2 - 2015-04-07
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments) } },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1 };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0 }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b] }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b) }, a }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
        return a.notSupported = !0, a.prototype.observe = function() {}, a }()), d = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass) }
        return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d }.call(a));
                    return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f } }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a) } : function(a) {
                return a() } }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0 }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h }.call(this));
            return d }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g }, e.prototype.animationName = function(a) {
            var b;
            try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") }
            return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0 }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e }() }).call(this);


// **********************************************************************************************************
// **********************************************************************************************************
//            End WOW Animations
// **********************************************************************************************************
// **********************************************************************************************************
