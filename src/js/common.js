$(document).ready(function() {

    // go js
    (function() {
        const wrapper = $('body')[0];
        const btn = $('.header__toggle')[0];
        const drawer = $('.aside')[0];

        btn.addEventListener('click', function(e) {
            console.log(1)
            // wrapper.classList.toggle('wrapper--active');
            // btn1.classList.add('sm-visible--active-visible')
            drawer.classList.toggle('aside--open');
            e.stopPropagation();
        });

        wrapper.addEventListener('click', checkEvent, false);
        wrapper.addEventListener('touchmove', checkEvent, false);
        drawer.addEventListener('touchmove', checkEvent, false);
        // sidebar handle
        function checkEvent(e) {
            if (drawer.classList.contains('aside--open')) {
                const target = e.target;
                if (target === drawer || drawer.contains(target)) {
                    return false
                }
                drawer.classList.toggle('aside--open');
                // btn.classList.toggle('sm-visible--active');
                // btn1.classList.remove('sm-visible--active-visible')
            }
            e.stopPropagation()
        }
    }());
    (function() {
        $('.aside__link--dropdown').on('click', function(e) {
            e.preventDefault()
            $('.aside__sub').slideToggle()
        })
    }());
    (function() {

        if ($(window).width() > 1426) {


            (function init() {
                window.addEventListener('scroll', function(e) {
                    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                        shrinkOn = 300,
                        header = $(".header");
                    if (distanceY > shrinkOn) {
                        header.addClass("header--tiny");
                    } else {
                        header.removeClass("header--tiny");
                    }
                });
            })();
        }
    }());

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    (function() {
        $(window).on('resize scroll', function() {
            $('.advantage-item').each(function(i) {
                if ($(this).isInViewport()) {
                    $(this).delay(i + 100 * 2).addClass('animated bounceInLeft')
                    $('.svg-wrapper img').addClass('fadeInLeft animated')
                } 
            });
            $('.title').each(function() {
                if($(this).isInViewport()) {
                    $(this).addClass('animated zoomIn')
                }
                
            })
            
        });
        $('.card__link').on('mouseover',function(e) {
            e.preventDefault()
            
            $(this).addClass('animated jello')
        }).on('mouseleave', function() {
            $(this).removeClass('animated jello')
            
        })
    }())

});