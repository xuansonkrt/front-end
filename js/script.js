
jQuery(document).ready(function ($) {
    function len(obj) // do dai cua object
                {
                    var x;
                    var count=0;
                    for(x in obj)
                        count++;
                    return count;
                }
    $("#clickMe").click(function () {
        alert("click me");
        this.hide();
    });
    $(".fa-stack").hover(function () {
        $(this).find(".circle").addClass("color-4");
        $(this).find(".icon").addClass("color-3");
    }, function () {
        $(this).find(".circle").removeClass("color-4");
        $(this).find(".icon").removeClass("color-3");
    });

    $("#tab-ChiTiet").mouseover(function () {
        // alert("demo");
    });
    $("#tabs").tabs();
    $("#tabs-img").tabs();

    $("#SoLuong").spinner({
        min: 1,
        max: 100,
        step: 1
    });
    $("#btnAdd").click(function () {
        var x = $("#countProd").html();
        var y = parseInt(x, 10);
        // alert(x+" "+typeof(x));
        // alert(y+" "+typeof(y));
        y++;
        $("#countProd").html(y);
        //to do something
    });

    $("#owl-DoiTac").load("owl-DoiTac.html");
    $("#zoom_01").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });
    $("#zoom_02").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });
    // $('[data-toggle="popover"]').popover(); 
    //load Thông số kỹ thuật
    $.ajax({
        url: "files/nokia-xl.json",
        success: function (data, status, xhr) {
            // $("#ThongSo").html(data);
            // alert(typeof(data));
            var x, y, text = "";

            for (x in data) {
                var row = $("<div></div>");
                row.addClass("row mb-1 bg-secondary ");
                var col1 = $("<div></div>"); // col left nhóm
                col1.addClass("col-2  bg-secondary my-auto");
                var title = $("<p></p>");
                title.addClass("text-white text-bold");
                title.append(x)
                col1.append(title);
                row.append(col1);
                var col2 = $("<div></div>"); //col right chi tiết
                col2.addClass("col-10 bg-white");
                var i=0;
                for (y in data[x]) {
                    
                    var rowSub = $("<div></div>");
                    rowSub.addClass("row bg-light mb-1");
                    var colSub1 = $("<div></div>");
                    colSub1.addClass("col-4");
                    colSub1.append(y);
                    var colSub2 = $("<div></div>");
                    colSub2.addClass("col-8");
                    colSub2.append(data[x][y]);
                    rowSub.append(colSub1);
                    rowSub.append(colSub2);
                    col2.append(rowSub);
                    i++;
                    // alert(typeof(data[x])); //object
                    // var myJson=JSON.parse(data[x]);
                    // alert((len(data[x])));
                    if(i==len(data[x]))
                        {
                            rowSub.removeClass("mb-1");
                            i=0;
                        }

                }
                function len(obj)
                {
                    var x;
                    var count=0;
                    for(x in obj)
                        count++;
                    return count;
                }
                row.append(col1);
                row.append(col2);
                $("#ThongSo").append(row);

            }
            // for( x in data)
            // {
            //    text+=x;
            // //    alert("x"+typeof(x));
            //    for(y in data[x]){
            //     text+=y;
            //     text+=data[x][y];
            //     text+="<br>";
            //    }                 
            // }
        },
        error: function (xhr, status, error) {
            $("#ThongSo").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }

    });
    // $("#btnCollapse").click(function(){
    //     $("#mySidenav").css("width","250px");
    // });
    $("#btnClose").click(function(){
        $("#mySidenav").css("width","0px");
    });
   
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }