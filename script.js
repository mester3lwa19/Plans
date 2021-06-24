$(function(){
    $(".info-list li").click(function () {
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(".content-info div").hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});