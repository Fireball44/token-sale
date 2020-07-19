(function($) {
    "use strict";
    var e = function() {
        var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 140;
        (e -= 50) < 1 && (e = 1), e > 50 && $(".page-wrapper").css("min-height", e + "px")
    };
    $(window).ready(e), $(window).on("resize", e);

    // menu
    $(".menu-trigger").click(function() {
        $(".sidebar-wrap,body,.menu-trigger").toggleClass("active");
    });

    $(".toggle").click(function() {
        $(this).parent().toggleClass("active");
    });

    $('ul.metismenu').metisMenu({});

    $('.dc-table').DataTable({
        paging: true,
        searching: true,
        ordering: true,
        autoWidth: true
    });

    $("#txtEditor").Editor();
    $("#txtEditor2").Editor();
    $("#txtEditor3").Editor();

    $(window).on('load', function() {
        $('.preloader-wrapper').fadeOut();
    });
    $(window).on("scroll", function() {
        $('.preloader-wrapper').fadeOut();
    });
    
    /*================================
    login form
    ==================================*/
    // $('.form-gp input').on('focus', function() {
    //     $(this).parent('.form-gp').addClass('focused');
    // });
    // $('.form-gp input').on('focusout', function() {
    //     if ($(this).val().length === 0) {
    //         $(this).parent('.form-gp').removeClass('focused');
    //     }
    // });

    
})(jQuery);