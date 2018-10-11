/**
 * Created by lianxiang on 2018/10/9.
 */

(function ($) {

    var start_animate = $(".start-animate");
    var buffer = $(".buffer");
    var two_1 = $(".two_1");
    

    function startAnimate() {
        var windowScroll = $(window).scrollTop();

        if (windowScroll > 20) {
            $(".bg-txt").css({opacity:0});
            $(".head").css({background:"rgba(255,255,255,0.8)"});
            $(".head li").css({"height":"0.8rem","line-height":"0.8rem"});
            $(".head .logo").css({"height":"0.8rem","line-height":"0.8rem"})
        } else {
            $(".bg-txt").css({opacity:1});
            $(".head").css({background:"rgba(255,255,255,1)"});
            $(".head li").css({"height":"1.2rem","line-height":"1.2rem"});
            $(".head .logo").css({"height":"1.2rem","line-height":"1.2rem"})
        }



        two_1.css({transform:"matrix(1,0,0,1,0,"+  +")"})
    }

    startAnimate();

    $(window).scroll(function () {
        console.log($(window).scrollTop());
        startAnimate();
    });

    start_animate.on("click", function () {
        $('html,body').animate({scrollTop: '300px'}, 1000);
    });

    $(".bg-txt").css({transform:"translateY(-50%)"});

})($);