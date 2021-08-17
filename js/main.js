$(document).ready(function () {
    $(".parallax__cover").width($(window).width());
    $(".parallax__cover__mobile").width($(window).width());

    $(window).on('resize', function() {
        $(".parallax__cover").width($(window).width());
        $(".parallax__cover__mobile").width($(window).width());
    });

    function showImages(el) {
        var windowHeight = $(window).height();
        $(el).each(function() {
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if(topOfWindow + windowHeight - 200 > thisPos) {
                $(this).addClass("fadeIn");
            } else{
                $(this).removeClass("fadeIn");
            }
        });
    }

    $('#asdfa').scroll(function(){
        showImages('.photo');
    });

    //$(".photo-row").width($(window).width());
    /*var counter = 0;
    var lastPointScroll = 0;
    var test1 = -3000;
    $('#test').scroll(function (){
        var a = $(this).scrollTop();
        if(a == 0) {
            counter = 0;
            test1 = -3000;
        } else if (a > lastPointScroll) {
            counter += 0.05;
        } else if (counter - 0.05 > 0) {
            counter -= 0.05;
        }

        console.log(counter);
        $('#test1').css('transform','translateZ(' + (test1 + (counter*500)) + 'px)');
        lastPointScroll = a;
    });*/
})