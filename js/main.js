$('.layout-form').hover(
    function(){
        $('.gadgets-item').removeClass('gadget-active');
        $('.gadgets-item').eq($(this).index()).addClass('gadget-active')
    },
    function(){
        return null;
    }
)

window.onscroll = function () {
    if ( $(window).scrollTop() == ($(document).height() - $(window).height()) ) {
    $('.react-bg').addClass('react-bg-active');
    }
}
$('.navigation-menu-btn').on('click', ()=> {
    $('.navigation').toggleClass('navigation-open');
});

$('.navigation__link').on('click', ()=> {
    $('.navigation').removeClass('navigation-open');
})
