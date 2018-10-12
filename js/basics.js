/**
 * Created by lianxiang on 2018/10/9.
 */

(function ($) {

    var start_animate = $(".start-animate");
    var buffer = $(".buffer");
    var two_1 = $(".two_1");
    var flag;

    startAnimate();

    $(window).scroll(function () {
        startAnimate();

        bufferExercise();

    });

    start_animate.on("click", function () {
        $('html,body').animate({scrollTop: '300px'}, 1000);
    });

    $(".bg-txt").css({transform: "translateY(-50%)"});

    function startAnimate() {
        var windowScroll = $(window).scrollTop();

        if (windowScroll > 20) {
            $(".bg-txt").css({opacity: 0});
            $(".head").css({background: "rgba(255,255,255,0.8)"});
            $(".head li").css({"height": "0.8rem", "line-height": "0.8rem"});
            $(".head .logo").css({"height": "0.8rem", "line-height": "0.8rem"})
        } else {
            $(".bg-txt").css({opacity: 1});
            $(".head").css({background: "rgba(255,255,255,1)"});
            $(".head li").css({"height": "1.2rem", "line-height": "1.2rem"});
            $(".head .logo").css({"height": "1.2rem", "line-height": "1.2rem"})
        }
    }

    var p=0,
        t=0;
    $(window).scroll(function(){
        p=$(this).scrollTop();
        t<p? flag=true : flag=false;
        setTimeout(function(){ t = p ; },0)
    });

    function bufferExercise() {
        //声明定时器运行次数
        var index = -1;
        //声明步长值step
        var step;
        //声明当前值cur
        var cur, parameterString, i;
        //声明目标值
        var target = parseFloat('83');

        clearInterval(two_1.timer);
        two_1.timer = setInterval(function () {
            //更新定时器的工作次数
            index++;
            //更新步长值
            step = 2 - (3 * index + 1) / target;
            //更新当前值
            if (getCSS(two_1[0], 'transform') !== "none") {
                parameterString = getCSS(two_1[0], 'transform').split(',')[5];
                cur = parseFloat(parameterString.slice(0, parameterString.length - 1));
            } else {
                cur = 0;
            }

            if(flag){
                i = cur + step;
            }else{
                i = cur - step;
            }

            //若步长设置值使得元素超过目标点时，将步长设置值更改为目标点值 - 当前值
            // if((cur+step-target)*step>0){
            //     step = target - cur;
            // }

            // console.log(i);
            //更新left值
            two_1.css({transform: "matrix(1,0,0,1,0," + i + ")"});

            //当元素到达目标点时，停止定时器
            // if(step === target - cur){
            //     clearInterval(two_1.timer);
            // }

            if (step < 0) {
                clearInterval(two_1.timer);
            }
        }, 80);
    }

})($);