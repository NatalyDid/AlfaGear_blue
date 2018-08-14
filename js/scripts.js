/**
 * Menu open/close
 * */
$(function() {
    $('.section-header .menu-open').on('click', function (e) {
        e.preventDefault();
        $('.section-header').find('.header-menu-wrapper').slideToggle();
    });
});

$(function() {
    $('body').on('click','.menu.headhesive.headhesive--stick .menu-open', function (e) {
        e.preventDefault();
        $('.menu.headhesive.headhesive--stick').find('.header-menu-wrapper').slideToggle();
        $('.menu.headhesive.headhesive--stick').toggleClass('fixed');
    });
});

$(function() {
    $('.section-header-innerpage .menu-open').on('click', function (e) {
        e.preventDefault();
        $('.section-header-innerpage').find('.header-menu-wrapper').slideToggle();
        $('.section-header-innerpage').toggleClass('fixed');
    });
});

/**
 * Size table open/close
 * */
$(function() {
    $('.section-order .question').on('click', function (e) {
        e.preventDefault();
        $('.section-order').find('.order-wrapper').slideToggle();
        $('.section-order').toggleClass('fixed');
    });
});

/**
 * Order
 * */
$(function(){
    var orderId;

    $('.order-switcher-item').on('click', function(){
        $('.order-switcher-item').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        orderId = $(this).attr('data-orderId');

        $('.image-order').each(function () {
            $(this).hide();
        });

       /* $('.reviews-div').find('.reviews-text#'+reviewId).show();*/

        $('.order').find('.image-order').each(function () {

            if($(this).attr('data-orderImgID') === orderId){
                $(this).show();
            }
        });
    });
});


/**OWL review - gallery slider*/
$('.slider-review-inner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1366:{
            items:1
        }
    }
})

/**OWL carousel - gallery slider*/
$('.mobile-gallery').owlCarousel({
    loop:true,

    nav:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        640:{
            items:1
        }
    }
})

// Create a new instance of Headhesive
var options = {
    offset: 700
}
var header = new Headhesive('.menu', options);
