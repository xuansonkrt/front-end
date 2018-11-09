$(document).ready(function(){
    $("#clickMe").click(function(){
        alert("click me");
        this.hide();
    });
    $(".fa-stack").mouseover(function(){
        // alert("demo");
        $(".circle").toggle("color-4");
        //$("i:first").toggle("slow");
    });
    $(".fa-stack").mouseout(function(){
        // alert("demo");
        $(".circle").show("slow");
    });

});