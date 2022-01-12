$(".menu").hover(
    function(){
        $(".sub").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
    }
);
$(".logo").hover(
    function(){
        $(".logo").css("background", "lightblue");
    },
    function(){
        $(".logo").css("background", "yellow");
    }
);
