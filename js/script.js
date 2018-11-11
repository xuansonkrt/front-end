
jQuery(document).ready(function($){
    $("#clickMe").click(function(){
        alert("click me");
        this.hide();
    });
    $(".fa-stack").hover(function(){
        $(this).find("i:first").addClass("color-4");
        $(this).find(".icon").addClass("color-3");
    },function(){
        $(this).find(".circle").removeClass("color-4");
        $(this).find(".icon").removeClass("color-3");
    }),
    
    $("#tab-ChiTiet").mouseover(function(){
        // alert("demo");
        
    });
    $("#tabs").tabs();
    $("#SoLuong").spinner({
        min:1,
        max:100,
        step:1
    });

});