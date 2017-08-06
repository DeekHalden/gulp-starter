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

        window.addEventListener('scroll', function(e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300,
                header = $(".header-wrapper");
            if (distanceY > shrinkOn) {
                header.addClass("header-wrapper--tiny");
            } else {
                header.removeClass("header-wrapper--tiny");
            }
        });

    }());

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    (function() {
        if ($(window).width() > 920) {
            $(window).on('resize scroll', function() {
                $('.advantage-item').fadeIn(1000).each(function(i) {
                    if ($(this).isInViewport()) {
                        $(this).delay(i + 100 * 2).delay(1000).addClass('animated bounceInLeft')
                        $('.svg-wrapper img').delay(1000).addClass('fadeInLeft animated')
                    }
                });
                $('.title').each(function() {
                    if ($(this).isInViewport()) {
                        $(this).delay(1000).addClass('animated zoomIn')
                    }

                })
                if ($('.stages').length > 0 && $('.stages').isInViewport()) {
                    $('.card--stages').fadeIn(1000).each(function() {
                        $(this).addClass('animated zoomIn')
                    })
                }
                if ($('.advantages-row').length > 0 && $('.advantages-row').isInViewport()) {
                    console.log(1)
                    $('.card--advantages').each(function(i) {
                        setInterval(() => {
                            $(this).fadeIn(500)
                        }, i * 200)
                    })
                }

            });
            $('.card__link').on('mouseover', function(e) {
                e.preventDefault()

                $(this).addClass('animated jello')
            }).on('mouseleave', function() {
                $(this).removeClass('animated jello')

            })
        }
    }());
    (function() {
        $('.carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<span class="carousel-control carousel-control--left"><i class="icon-left">',
            nextArrow: '<span class="carousel-control carousel-control--right"><i class="icon-right">',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }());
    (function() {

        $('.infowindow-open').magnificPopup({
            type: 'inline',
            midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeBtnInside: false,
            fixedContentPos: true,
        });
        $('.infowindow__title span').on('click', function(e) {
            e.preventDefault()
            $.magnificPopup.close()
        });
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'inline',
            closeOnContentClick: true,
            mainClass: 'container',
            fixedContentPos: false,
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            image: {
                verticalFit: true
            }

        });

    }());
    (function() {

        $('.info-window__details-toggle').on('click', function(e) {
            e.preventDefault()
            var data = $(this).data('email')
            $(this).text(data)
        })

    }());
    (function() {
        if ($('.card--statistics p').length > 0) {
            function startCounter() {
                var hT = $('.card--statistics p').offset().top,
                    hH = $('.card--statistics p').outerHeight(),
                    wH = $(window).height();
                if ($(window).scrollTop() > hT + hH - wH) {

                    $(window).off("scroll", startCounter);
                    $('.card--statistics p').each(function() {
                        var $this = $(this);
                        $({
                            Counter: 0
                        }).animate({
                            Counter: $this.text()
                        }, {
                            duration: 1200,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                } else {
                    return false
                }
            }
            $(window).scroll(startCounter);
        }
    }());
});