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
        $('.aside__link--dropdown').on('mouseenter', function() {
            $('.aside__sub').addClass('is-active')
        }).on('mouseleave', function() {

            $('.aside__sub').removeClass('is-active')
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
                if ($('.advantage-item').isInViewport()) {
                    $('.advantage-item').each(function(i) {
                        var self = this
                        setInterval(function() {
                            $(self).addClass('animated bounceInLeft').css('opacity', 1)

                        }, i * 500);
                        $('.svg-wrapper img').addClass('fadeInLeft animated')
                    });
                };
                $('.title').each(function() {
                    if ($(this).isInViewport()) {
                        $(this).addClass('animated zoomIn').css('opacity', 1)
                    }

                });
                if ($('.icon-gift').isInViewport()) {
                    function animateIcon() {
                        $('.icon-gift').addClass('animated jackInTheBox')
                        setTimeout(function() {
                            $('.icon-gift').removeClass('animated jackInTheBox')
                        }, 2000)
                    }

                    setInterval(animateIcon, 4000)
                };

                if ($('.card__link').isInViewport()) {
                    function animatebutton() {
                        $('.card__link').addClass('animated pulse')
                        setTimeout(function() {
                            $('.card__link').removeClass('animated pulse')
                        }, 2000)
                    }
                    setInterval(animatebutton, 4000)

                };

                if ($('.bonus-number-item, .bonus-numbers-row i').isInViewport()) {
                    $('.bonus-number-item, .bonus-numbers-row i').each(function(i) {
                        var self = this
                        setInterval(function() {
                            $(self).addClass('animated bounceInLeft').css('opacity', 1)
                        }, i * 400)
                    });
                };
                $('.traders-card__heading--one-liner').each(function() {
                    if ($(this).isInViewport()) {
                        console.log(1)
                        var currValue = parseInt($(this).find('.curr-value').text());
                        var endValue = parseInt($(this).find('.end-value').text());
                        var percent = (currValue * 100) / endValue
                        if (percent === 100) {
                            $(this).parent().find('.indicator-wrapper__indicator').css({ 'width': percent + '%', 'background-color': 'red' })

                        }
                        $(this).parent().find('.indicator-wrapper__indicator').css('width', percent + '%')
                    }
                });

                if ($('.card--advantages').isInViewport()) {
                    $('.card--advantages').each(function(i) {
                        var self = this
                        setInterval(function() {
                            $(self).addClass('animated zoomIn').css('opacity', 1)
                        }, i * 300);
                    });
                };
                if ($('.demands-row h4').isInViewport()) {
                    $('.demands-row h4').each(function(i) {
                        var self = this
                        setInterval(function() {
                            $(self).addClass('animated zoomIn').css('opacity', 1)

                        }, i * 250)
                    });

                };
                if ($('.card--why').isInViewport()) {
                    $('.card--why').each(function(i) {
                        var self = this
                        setInterval(function() {
                            $(self).addClass('animated zoomIn').css('opacity', 1)
                        }, i * 250)
                    });

                };
                if ($('.card--stages').isInViewport()) {
                    $('.card--stages').each(function(i) {
                        var self = this
                        setInterval(function() {
                            $(self).addClass('animated zoomIn').css('opacity', 1)
                        }, i * 250)
                    });
                };
                if ($('.right-aligned').isInViewport()) {
                    $('.part').each(function(i) {
                        var self = this
                        setInterval(function() {
                            $(self).addClass('animated zoomIn').css('opacity', 1)
                        }, i * 500)
                        $('.start-work__link').addClass('animated zoomIn')
                    })
                }

            }
            // activateAnimation();

            $(window).on('resize scroll', function(e) {
                e.preventDefault()
                $('.aside__sub').removeClass('is-active')
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
            removalDelay: 300,
            mainClass: 'mfp-zoom-in',
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
        $('.infowindow__title span, .info__icon-close').on('click', function(e) {
            e.preventDefault()
            $.magnificPopup.close()
        });
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'inline',
            removalDelay: 300,
            mainClass: 'mfp-zoom-in',
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
        if ($('.personal-card--total h3 span, .personal-card__total').isInViewport()) {
            $('.personal-card--total h3 span, .personal-card__total').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter) + '.00');
                    }
                });
            })
        }
        if ($('.personal-card__number').isInViewport()) {
            $('.personal-card__number').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            })
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
            $(this).parent().find(".faq__answer").fadeToggle()
            $(this).find(".icon-toggle-wrapper .icon-minus").toggle()
            $(this).find(".icon-toggle-wrapper .icon-plus").toggle()
        })
    }());
    (function() {
        $('.form__input--mask').text('Паспорт.pdf').css('font-style', 'italic')
        $('input[type="file"]').on('change', function(e) {
            var filename = e.target.value.split('\\').pop();
            console.log(filename)
            $('.form__input--mask').text(filename.slice(0, 30).concat('...'))
        });
        $("input[type='tel'], input[type='number']").keydown(function(e) {
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
            if ($(this).attr('type') == 'number') return
            // var max = 11;
            // if (e.which < 0x20) {
            //     // e.which < 0x20, then it's not a printable character
            //     // e.which === 0 - Not a character
            //     return; // Do nothing
            // }
            // if (this.value.length == max) {
            //     e.preventDefault();
            // } else if (this.value.length > max) {
            //     // Maximum exceeded
            //     this.value = this.value.substring(0, max);
            // }
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

        function sendRequest(url, data, form) {
            form.reset();
            $.ajax({
                    url: url,
                    type: 'POST',
                    data: data,
                })
                .done(function() {
                    console.log("success");
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("compvare");
                });

        }

        $("#join").validate({
            ignore: ".ignore",
            debug: true,
            rules: {

                join__name: {
                    alpha: true,
                    required: true
                },
                join__email: {
                    required: true,
                    emailMethod: true
                },
                join__address: {
                    required: true,
                },
                join__tel: {
                    required: true,
                    // usPhone: true
                },
                join__message: {

                    required: false

                },
                join__work: {

                    required: true
                },
                join__document: {
                    required: true
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
            messages: {

            },
            submitHandler: function(form) {
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var data = $(form).serialize();
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $("#in").validate({
            ignore: ".ignore",
            debug: true,
            rules: {
                in__amount: {
                    required: true
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
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var data = $(form).serialize();
                var url = ''
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('input[type="number"]').on('change keyup', function() {
            console.log(1)
            if ($(this).val() < 0) {
                $(this).val(0)
            }
        });
        $("#out").validate({
            ignore: ".ignore",
            debug: true,
            rules: {
                out__amount: {
                    required: true,

                }
            },
            messages: {

            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                var url = ''
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('#cooperate-form').validate({
            ignore: ".ignore",
            debug: true,
            rules: {
                cooperate_form__value: {
                    required: true,

                }
            },
            messages: {

            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                var url = ''
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('#cooperate-form').validate({
            ignore: ".ignore",
            debug: true,
            rules: {
                cooperate_form__value: {
                    required: true,

                }
            },
            messages: {

            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                var url = ''
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('#login').validate({
            ignore: ".ignore",
            debug: true,
            rules: {
                login__email: {
                    required: true,
                    emailMethod: true

                },
                login__pass: {
                    required: true
                }

            },
            messages: {

            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                var url = ''
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('#register').validate({
            ignore: ".ignore",
            debug: true,
            rules: {
                register__login: {
                    required: true,
                    alpha: true
                },
                register__email: {
                    required: true,
                    emailMethod: true

                },
                register__pass: {
                    required: true
                },
                register__pass_again: {
                    required: true,
                    equalTo: '#register__pass'
                },
                register__agree: {
                    required: true
                }

            },
            messages: {

            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                var url = ''
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('#settings').validate({
            ignore: ".ignore",
            debug: true,
            rules: {
                settings__login: {
                    required: true,
                    alpha: true
                },
                settings__email: {
                    required: true,
                    emailMethod: true

                },
            },
            messages: {

            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                var url = ''
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('#register').validate({
            ignore: ".ignore",
            debug: true,
            rules: {
                register__login: {
                    required: true,
                    alpha: true
                },
                register__email: {
                    required: true,
                    emailMethod: true

                },
                register__pass: {
                    required: true
                },
                register__pass_again: {
                    required: true,
                    equalTo: '#register__pass'
                },
                register__agree: {
                    required: true
                }

            },
            messages: {

            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                var url = ''
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('#restore').validate({
            ignore: ".ignore",
            debug: true,
            rules: {

                restore__email: {
                    required: true,
                    emailMethod: true
                }
            },
            messages: {

            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                var url = ''
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('#restore2').validate({
            ignore: ".ignore",
            debug: true,
            rules: {

                restore2__password: {
                    required: true,

                },
                restore2__password_again: {
                    required: true,
                    equalTo: '#restore2__password'
                }

            },
            messages: {

            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                var url = ''
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        src: "#small-thanks"
                    },
                    type: 'inline',
                    removalDelay: 300,
                    mainClass: 'mfp-zoom-in',
                    fixedBgPos: false,
                    fixedContentPos: false,
                    closeBtnInside: false
                });
                var url = ''
                sendRequest(url, data, form)
            }
        });
        $('#register__agree-label').click(function() {
            $(this).parent().find('i').fadeToggle()
        })
        $('.form__input--cooperate').on('change', function() {
            // alert(1)
            var val = $(this).val()

            if (val <= 100) {

                val = 100
            }
            $(this).val(val)
        });
        // $('#restore2 input[type="password"]').on('keydown', function() {
        //     $(this).removeClass('is-invalid is-valid')
        //     if($(this).hasClass('valid')) {
        //         $(this).addClass('is-valid')
        //     } else {
        //         $(this).addClass('is-invalid')
        //     }
        // });
    }());
    (function() {
        $('#in label.form-control').click(function() {
            $('#in label.form-control').removeClass('is-active')
            $(this).addClass('is-active')
            var text = $(this).data('text')
            $('.rules').html('<div class="left-side"><p><strong>' + text[1] + '- </strong>' + text[2] + '</p></div><div class="right-side"><h2 class="rules__info">Время пополнения:<span>' + text[0] + '</span></h2></div>')
        });
    }());
    (function() {
        $('.traders-card__heading--closed').on('mouseenter', function(e) {
            e.preventDefault();
            $(this).parent().find('.traders-card__infowindow').fadeIn()
        }).on('mouseleave', function() {
            $(this).parent().find('.traders-card__infowindow').fadeOut()

        });
    }());
    (function() {
        $('.cards-row__hide').on('click', function() {
            if ($(this).hasClass('is-active')) {
                $(this).removeClass('is-active').find('span').text('Скрыть обработанные депозиты')

            } else {
                $(this).addClass('is-active').find('span').text('Показать обработанные депозиты')
            }
        })
    }());
    (function() {
        $('.finance-action-bar__link').on('click', function() {
            $('.finance-action-bar__link').removeClass('is-active')
            $(this).addClass('is-active')
            var index = $(this).index();
            $('.tab').fadeOut()
            $($('.tab')[index]).fadeIn()

        })
    }());
    (function() {
        $('.personal-card__link').on('click', function() {


            copyToClipboard('personal-link')
            $(this).parent().find('.toast').fadeIn()
            setTimeout(() => {

                $(this).parent().find('.toast').fadeOut()
            }, 1000)
        });

        function copyToClipboard(elementId) {
            var aux = document.createElement("input");
            aux.setAttribute("value", document.getElementById(elementId).innerHTML);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);

        }
    }());
    (function() {
        $('.personal-card').on('mouseover', function() {
            $(this).addClass('animated pulse')
        }).on('mouseleave', function() {
            $(this).removeClass('animated pulse')
        });
    }());


});