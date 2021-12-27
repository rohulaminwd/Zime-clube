

$(document).ready(function(){
    $('.banner-slider').slick({
        dots : true,
        arrows : false,
        autoplay : true
    });

    // team slider
    $('.team-slider').slick({
        arrows : false,
        slidesToShow : 4,
        dots : false,
        autoplay : true,
        // centerMode : true,
        responsive: [
            {
                breakpoint: 876,
                settings: {
                    slidesToShow : 2,
                    dots : false,
                    arrows: false,
                    slidesToscroll : 1,
                },
            },
        ],
    });

    // test slider
    $('.test-slider').slick({
        arrows : false,
        slidesToShow : 2,
        dots : true,
        autoplay : true,
        // centerMode : true,
        responsive: [
            {
                breakpoint: 876,
                settings: {
                    slidesToShow : 1,
                    dots : false,
                    arrows: false,
                    slidesToscroll : 1,
                },
            },
        ],
    });

    // classes slider
    $('.class-slider').slick({
        arrows : false,
        slidesToShow : 5,
        dots : false,
        autoplay : true,
        // centerMode : true,
        responsive: [
            {
                breakpoint: 876,
                settings: {
                    slidesToShow : 2,
                    dots : false,
                    arrows: false,
                    slidesToscroll : 1,
                },
            },
        ],
    });

    // scrolling function
    var backtoTop = $('back-to-top')
    var nav = $("nav");
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 400){
            nav.addClass('navfixd');
        }
        else{
            nav.removeClass('navfixd');
        }
    });

    //   counter up
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

// mixitup
    $('.day').click(function(){
        $(this).addClass('Active').siblings().removeClass('Active');
        $('.day-item').css({"background-color": "red", "color": "white"});
    });

    var mixer = mixitup('.days-work');

    $('.banner-content span').click(function(){
        $(this).css({"background-color": "red", "color": "white"});
        console.log("this is a click")
    });

});

new WOW().init();

new  AOS.init();