$(document).ready(
    function(){
        var bod= $("body");
        var dots=$("[class*='dot-']");
        $(".merryxmas,.texture,.texture p,.person,.about").hide();
        var n= $(".next");
        $('.next').on("click",function(){
            n.remove();
            var bod= $("body");
            $(".fimg").fadeOut(800);

            $(".trunk").css("visibility","visible");
            $(".trunk").animate({marginTop:"-2%",easing:"easein"},{duration:400,queue:false});
            $(".treetop").css("visibility","visible");
            $(".treetop").animate({marginTop:"-2%",easing:"easein"},{duration:500,queue:false});
            $('.star').css("visibility","visible");
            $(".star").animate({marginTop:"0%"},{duration:1000,queue:false});
            setTimeout(function(){
                for(var i=0; i<dots.length; i++){
                    $(dots[i]).animate(dotPositions[i],600);
                }
            },1200);
            setTimeout(function(){$(".merryxmas").fadeIn('slow')},6500)
            
            setTimeout(function(){
                $(".trunk").fadeOut(1300);
                $(".star,.treetop,.merryxmas").fadeOut(1500);
                $("[class*='dot-']").fadeOut(1500);
            },9000);
             setTimeout(function(){$(".texture,.texture p,.person").fadeIn(1500)},11000);
            setTimeout(function(){
                $(".texture,.texture p,.person").fadeOut(1500);
                $(".about").fadeIn(2000);
            },15000)
        });
            
});

var dotPositions= [
    {left:'49%',top:'20%'},
    {left:'51%',top:'29%'},
    {right:'51%',top:'36%',left:'auto'},
    {right:'54%',left:'auto',top:'48%'},
    {left:'52%',top:'42%'},
    {left:'56%',top:'50%'},
    {right:'57%',left:'auto',top:'56%'},
    {right:'48%',left:'auto',top:'55%'},
    {left:'56%',top:'58%'},
    {left:'60%',top:'66%'},
    {left:'52%',top:'70%'},
    {right:'53%',left:'auto',top:'67%'},
    {right:'61%',left:'auto',top:'66%'}
]

