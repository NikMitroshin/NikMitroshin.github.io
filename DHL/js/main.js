let currentSlidesToShow = 3;
if ($(window).width() > 980) {   
    new WOW().init();
};
if ($(window).width() < 600) {   
    $('.footer__item-link-DHL').text('');
    currentSlidesToShow = 2;
};
$(document).ready(function(){
    $('.block-partners').slick({
        slidesToShow: currentSlidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
    });
});

$('.about-btn-play').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    helpers : {
        media : {}
    }
});

$('.btn-nav__menu').on('click', function(){
    $('.box-nav').toggleClass('btn-nav__active');
    $('.btn-nav__menu-close').toggle();
});
$('.btn-nav__menu-close').on('click', function(){
    $('.box-nav').toggleClass('btn-nav__active');
    $('.btn-nav__menu-close').toggle();
});
$('.tab__item').on('click', function(){
    $('.tab__item').toggleClass('tab-pushed');
    $('.tabs-content').toggleClass('active');
});

$('.express-toggle-tittle').on('click', function(){
    let currentTab = $(this).parent().index();
    $('.express-toggle-content').removeClass('toggle-active');
    if ($(this).hasClass('btn-active')){
        $(this).removeClass('btn-active');
    } else {
        $('.express-toggle-tittle').removeClass('btn-active');
        $(this).addClass('btn-active');
        $(`.express-toggle-content:eq(${currentTab})`).addClass('toggle-active');
    }
});

