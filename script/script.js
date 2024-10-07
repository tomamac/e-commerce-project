$(document).ready(function(){
    $('.promotion-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        prevArrow: "<button class='slick-prev carousel-control-prev' aria-label='Previous' type='button'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='visually-hidden'>Previous</span></button>",
        nextArrow: "<button class='slick-next carousel-control-next' aria-label='Next' type='button'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='visually-hidden'>Next</span></button>",
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                arrows: true,
            }
        }]
    });
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    $('.newproduct-carousel').slick({
        variableWidth:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite:false,
        autoplay: false,
        arrows: true,
        prevArrow: "<button class='slick-prev carousel-control-prev' aria-label='Previous' type='button'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='visually-hidden'>Previous</span></button>",
        nextArrow: "<button class='slick-next carousel-control-next' aria-label='Next' type='button'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='visually-hidden'>Next</span></button>",
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
            }
        }]
    });
    $('.category-carousel').slick({
        // variableWidth:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:false,
        autoplay: false,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    $('.nav-slick').slick({
        // variableWidth:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite:false,
        autoplay: false,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
            }
        }]
    });
});