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
    })




});
   