$("#dokument").ready(function () {
    $("#appear_box").show("slide", {}, 1000, function () {
        $('#show_box').show();
        $('#show_box').animate({opacity:1}, 2000);
    });

    $(".close").click(function () {
        $("#appear_box").hide("slow");
    });


    var createAnimateFunction = function (imgIndex) {

        return function () {
            $(".offer img").eq(imgIndex).show("fold", {horizFirst:true, direction:"up"}, 1500);
        };
    };

    for (var i = 0; i < 4; i++) {
        setTimeout(createAnimateFunction(i), i * 1500);
    }

});
