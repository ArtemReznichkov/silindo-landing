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
});
   