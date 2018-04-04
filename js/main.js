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
        nextArrow: $('.slide-next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.case-slider-wrapper').on('afterChange', function (event, slick, currentSlide) {
        var currentValue = slick.$slides.length - 4;
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
    })




});
   