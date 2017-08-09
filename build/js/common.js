$(document).ready(function() {

    // go js
    (function() {
        var wrapper = $('body')[0];
        var btn = $('.header__toggle')[0];
        var drawer = $('.aside')[0];

        btn.addEventListener('click', function(e) {
            console.log(1)
            // wrapper.classList.toggle('wrapper--active');
            // btn1.classList.add('sm-visible--active-visible')
            drawer.classList.toggle('aside--open');
            e.stopPropagation();
        });

        wrapper.addEventListener('click', checkEvent, false);
        wrapper.addEventListener('touchmove', function() {
            drawer.classList.remove('aside--open');
        }, false);
        // drawer.addEventListener('touchmove', checkEvent, false);
        // sidebar handle
        function checkEvent(e) {
            if (drawer.classList.contains('aside--open')) {
                var target = e.target;
                if (target === drawer || drawer.contains(target)) {
                    return false
                }
                drawer.classList.toggle('aside--open');
                // btn.classList.toggle('sm-visible--active');
                // btn1.classList.remove('sm-visible--active-visible')
            }
            e.stopPropagation()
        }
        $('.toggle-wrapper--personal').on('click', function() {
            $('.personal-header').toggleClass('is-active')
        });
        $('.toggle-wrapper--settings').on('click', function() {
            console.log(1)
            $('.personal-navigation').toggle()
        });

    }());
    (function() {
        $('.aside__link--dropdown').on('click', function() {
            $('.aside__sub').toggleClass('is-active')
        })
    }());
    (function() {

        window.addEventListener('scroll', function(e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = $(".header-wrapper");
            if (distanceY > shrinkOn) {
                header.addClass("header-wrapper--tiny");
            } else {
                header.removeClass("header-wrapper--tiny");
            }
        });

    }());

    $.fn.isInViewport = function() {
        if ($(this).length > 0) {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;
        }
    };

    (function() {
        if ($(window).width() > 920) {
            function activateAnimation() {
                $('.advantage-item').each(function(i) {
                    if ($(this).isInViewport()) {
                        var _this = this
                        setInterval(function() {
                            $(_this).addClass('animated bounceInLeft').css('opacity', 1)
                        }, i * 250)
                        $('.svg-wrapper img').addClass('fadeInLeft animated')
                    }
                });
                $('.title').each(function() {
                    if ($(this).isInViewport()) {
                        $(this).addClass('animated zoomIn').css('opacity', 1)
                    }

                })
                if ($('.icon-gift').isInViewport()) {
                    function animateIcon() {
                        $('.icon-gift').addClass('animated jackInTheBox')
                        setTimeout(function() {
                            $('.icon-gift').removeClass('animated jackInTheBox')
                        }, 2000)
                    }

                    setInterval(animateIcon, 4000)
                }


                $('.bonus-number-item, .bonus-numbers-row i').each(function(i) {
                    if ($(this).isInViewport()) {
                        var _this = this
                        setInterval(function() {
                            $(_this).addClass('animated bounceInLeft').css('opacity', 1)
                        }, i * 150)
                    }
                });
                if ($('.card--advantages, .demands-row h4, .card--why, .card--stages').isInViewport()) {
                    $('.card--advantages').each(function(i) {
                        var _this = this
                        setInterval(function() {
                            $(_this).addClass('animated zoomIn').css('opacity', 1)
                        }, i * 250)
                    });
                    $('.demands-row h4').each(function(i) {
                        var _this = this
                        setInterval(function() {
                            $(_this).addClass('animated zoomIn').css('opacity', 1)
                        }, i * 250)
                    });
                    $('.card--why').each(function(i) {
                        var _this = this
                        setInterval(function() {
                            $(_this).addClass('animated zoomIn').css('opacity', 1)
                        }, i * 250)
                    });
                    $('.card--stages').each(function(i) {
                        var _this = this
                        setInterval(function() {
                            $(_this).addClass('animated zoomIn').css('opacity', 1)
                        }, i * 250)
                    });
                }

            }
            activateAnimation()

            $(window).on('resize scroll', function() {
                activateAnimation()

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
            fixedContentPos: false,
            fixedBgPos: true,
            autoFocusLast: true,
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

        $('.infowindow__details-toggle').on('click', function(e) {
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
    (function() {
        if ($('video').length > 0) {
            $('video')[0].playbackRate = .65
        }
    }());
    (function() {
        $(".faq__qw").on('click', function(e) {
            e.preventDefault()
            var el = $(this).parent();
            el.find(".faq__answer").fadeToggle()
            el.find(".icon-toggle-wrapper .icon-minus").toggle()
            el.find(".icon-toggle-wrapper .icon-plus").toggle()
        })
    }());
    (function() {
        $('input[type="file"]').on('change', function(e) {
            var filename = e.target.value.split('\\').pop();
            console.log(filename)
            $('.form__input--mask').text(filename.slice(0, 30).concat('...'))
        });
        $("input[type='tel']").keydown(function(e) {
            // Allow: backspace, devare, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl/cmd+A
                (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: Ctrl/cmd+C
                (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: Ctrl/cmd+X
                (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // var it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
            var max = 11;
            if (e.which < 0x20) {
                // e.which < 0x20, then it's not a printable character
                // e.which === 0 - Not a character
                return; // Do nothing
            }
            if (this.value.length == max) {
                e.preventDefault();
            } else if (this.value.length > max) {
                // Maximum exceeded
                this.value = this.value.substring(0, max);
            }
        })
        $.validator.addMethod("alpha", function(value, element) {
            return this.optional(element) || value == value.match(/^[a-zA-Zа-яА-Я ]+$/);
        });

        $.validator.addMethod("emailMethod", function(value, element) {
            var isEmail = this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
            return isEmail
        });

        $.validator.addMethod("usPhone", function(value, element) {
            var isPhone = (this.optional(element) || /^\d+$/.test(value)) && this.getLength($.trim(value), element) === 11;


            return isPhone;

        }, "Please enter valid phone");

        $("#join").validate({
            ignore: ".ignore",
            debug: true,
            rules: {

                join__name: {
                    alpha: true
                },
                join__email: {
                    required: true,
                    emailMethod: true
                },
                join__tel: {
                    required: true,
                    usPhone: true

                },
                join__message: {
                    required: false,

                },
                hiddenRecaptcha: {
                    required: function() {
                        if (grecaptcha.getResponse() == '') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            },

            messages: {


            },
            submitHandler: function(form) {
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    fixedBgPos: true,
                    closeBtnInside: false
                });
                var data = $(form).serialize();
                $.ajax({
                        url: '',
                        type: 'POST',
                        data: data,
                    })
                    .done(function() {
                        form.reset();
                        console.log("success");
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("compvare");
                    });
            }
        });
        $("#in").validate({
            ignore: ".ignore",
            debug: true,
            rules: {
            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                console.log(data)
                $.ajax({
                        url: '',
                        type: 'POST',
                        data: data,
                    })
                    .done(function() {

                        form.reset();
                        console.log("success");
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("compvare");
                    });
            }
        });
    }());
    (function() {
        $('#in label.form-control').click(function () {
            $('#in label.form-control').removeClass('is-active')
            $(this).addClass('is-active')
            var text = $(this).data('text')
            $('.rules').html('<p><strong>' +text[1] +'- </strong>' + text[2] + '</p><h2 class="rules__info">Время пополнения<span>' +text[0]+'</span><h2>')
        });
    }())
});