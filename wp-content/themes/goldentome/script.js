jQuery(function($) {
    
    var $siteMenu = $('.site-menu');
    var $menuBtn = $('.menu-btn');
    
    $('.menu-hide').on('click', function() {
        if ( ! $siteMenu.hasClass('d-none') ) {
            $siteMenu.addClass('d-none');
            $menuBtn.removeClass('d-none');
        }
    });
    
    $('.menu-toggle').on('click', function() {
        if ( $siteMenu.hasClass('d-none') ) {
            $siteMenu.removeClass('d-none');
            $menuBtn.addClass('d-none');
        }
    });

       $('.search-btn').on('click', function () {
        $('.search-input').toggleClass('d-none');
    });
    
});