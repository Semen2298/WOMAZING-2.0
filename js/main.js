$(window).on("scroll load resize",function () {
    var pixelTop = $(window).scrollTop();
    if(pixelTop > 0 && $(document).width() > 998) {
        $('.header__menu_wrapper').addClass('active');
    }else if(pixelTop < 1) {
        $('.header__menu_wrapper').removeClass('active');
    }
});