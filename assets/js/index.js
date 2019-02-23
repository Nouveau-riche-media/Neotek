$(function () {

    $('#homeClassNav').on('mouseoout mouseleave', function () {
        $('ul li').removeClass('active');
        $('ul #HomeP').addClass('active');

    });


    $('#ServiceLane').on('mouseover mouseenter', function () {

        $('ul li').removeClass('active');
        $('ul #serviced').addClass('active');

    });

   

    $('#form').on('mouseoout mouseleave', function () {
        $('ul li').removeClass('active');
        $('ul #contactUsnow').addClass('active');

    });


    // *************************8

    $('ul #contactUsnow').on('click', function () {
        $('html').animate({
                scrollTop: $('#form').offset().top
            },
            '5000'
        );
    });

    $('ul #HomeP').on('click', function () {
        $('html').animate({
                scrollTop: $('#PageStart').offset().top
            },
            '5000'
        );
    });


    // *************Mobile nav click
    $('#smallContact').on('click', function () {
        $('html').animate({
                scrollTop: $('#footer').offset().top
            },
            '5000'
        );
    });

    $('#smallService').on('click', function () {
        $('html').animate({
                scrollTop: $('#Sec02').offset().top
            },
            '5000'
        );
    });

    


})