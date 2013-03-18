$("#dokument").ready(function () {

    var createAnimateFuncion = function (imgIndex) {

        return function () {
            $(".offer img").eq(imgIndex).show("fold", {horizFirst:true, direction:"up"}, 1500);
        };
    };

    for (var i = 0; i < 4; i++) {
        setTimeout(createAnimateFuncion(i), i * 1500);
    }
});
