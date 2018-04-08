$(document).ready(function () {
    $('.menu-icon').on('click', function() {
        $('nav').toggleClass('opened');
    });
    $('body').on('click', function(e) {
        if(!e.target.classList.contains("navigation")
            && !e.target.classList.contains("menu-icon")
            && !e.target.classList.contains("menu-icon__line")) {
            $('nav').removeClass('opened');
            $('#js-menu-icon').removeClass('active');
        }
    });

    $(()=>{
        let menuIsOpened = false;
        let menuIcon = $('#js-menu-icon');
        let menuList = $('#js-menu');

        const toggleMenu = () => {
            menuIsOpened = !menuIsOpened;
            menuIcon.toggleClass('active');
            menuList.toggleClass('active');

        };
        menuIcon.on('click', toggleMenu);

    });


    $('.case-slider-wrapper').slick({
        variableWidth: true,
        infinite: false,
        swipe: false,
        slidesToScroll: 1,
        prevArrow: $('.slide-prev'),
        nextArrow: $('.slide-next')
    });

    $('.case-slider-wrapper').on('afterChange', function (event, slick, currentSlide) {
        var slides = 4;
        if ($( window ).width() <= 1100) {
            slides = 3;
        };
        if ($( window ).width() <= 768) {
            slides = 2;
        } ;
        if ($( window ).width() <= 520) {
            slides = 1;
        };

        var currentValue = slick.$slides.length - slides;
        if(currentSlide === currentValue) {
            $('.slide-next').addClass('hidden');
        } else {
            $('.slide-next').removeClass('hidden');
        }

        if(currentSlide === 0) {
            $('.slide-prev').addClass('hidden');
        } else {
            $('.slide-prev').removeClass('hidden');
        }
    });


    $('.case-element').on('click', function(e) {
        var popupIndex = $(this).data("index");

        $('.popup-wrapper[data-index="'+ popupIndex +'"]').css("display", "flex")
            .hide()
            .fadeIn();
    });

    $('.popup-wrapper').on('click', function(e) {
        if (e.target.className === "popup-wrapper" || e.target.className === "close-icon") {
            $('.popup-wrapper').fadeOut();
        }
    });

    $("#phoneNumber").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


    $("#contacts-form").on("submit", function(e) {
        e.preventDefault();
        var data = {};
        $('#contacts-form').find('input, textarea').each(function() {
            data[this.name] = $(this).val();
        });
        // data.phone = '+' + data.phone;
        data = JSON.stringify(data);
        //post data fields {name, phone, email, message}
        $.post('http://localhost:8080/', data, function() {
            $('#contacts-form').find('input, textarea').each(function() {
                $(this).val('');
            });
        }).fail(function() {
            alert( "error" );
        })
    })




    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex','-1');
                            $target.focus();
                        };
                    });
                }
            }
        });




});
   