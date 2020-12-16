$(document).ready(function () {
    function showOrHide(classList) {
        const hideIndex = classList.indexOf('hide');
        const showIndex = classList.indexOf('show');
        if (hideIndex > -1) {
            return true;
        } else if (showIndex > -1) {
            return false;
        }
    }

    $("#category-1").on("click", () => {
        var classList = $("#main-category-1").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#main-category-1").addClass("show").removeClass("hide");
            $("#main-category-2").addClass("hide").removeClass("show");
            $("#main-category-3").addClass("hide").removeClass("show");
        } else {
            $("#main-category-1").addClass("hide").removeClass("show");
        }
    });
    $("#category-2").on("click", () => {
        var classList = $("#main-category-2").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#main-category-2").addClass("show").removeClass("hide");
            $("#main-category-1").addClass("hide").removeClass("show");
            $("#main-category-3").addClass("hide").removeClass("show");
        } else {
            $("#main-category-2").addClass("hide").removeClass("show");
        }
    });
    $("#category-3").on("click", () => {
        var classList = $("#main-category-3").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#main-category-3").addClass("show").removeClass("hide");
            $("#main-category-2").addClass("hide").removeClass("show");
            $("#main-category-1").addClass("hide").removeClass("show");
        } else {
            $("#main-category-3").addClass("hide").removeClass("show");
        }
    });

    $("#main-1-1").on("click", () => {
        var classList = $("#sub-category-1-1").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#sub-category-1-1").addClass("show").removeClass("hide");
            $("#sub-category-1-2").addClass("hide").removeClass("show");
            $("#sub-category-1-3").addClass("hide").removeClass("show");
        } else {
            $("#sub-category-1-1").addClass("hide").removeClass("show");
        }
    });
    $("#main-1-2").on("click", () => {
        var classList = $("#sub-category-1-2").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#sub-category-1-2").addClass("show").removeClass("hide");
            $("#sub-category-1-3").addClass("hide").removeClass("show");
            $("#sub-category-1-1").addClass("hide").removeClass("show");
        } else {
            $("#sub-category-1-2").addClass("hide").removeClass("show");
        }
    });
    $("#main-1-3").on("click", () => {
        var classList = $("#sub-category-1-3").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#sub-category-1-3").addClass("show").removeClass("hide");
            $("#sub-category-1-2").addClass("hide").removeClass("show");
            $("#sub-category-1-1").addClass("hide").removeClass("show");
        } else {
            $("#sub-category-1-3").addClass("hide").removeClass("show");
        }
    });
    $("#main-2-1").on("click", () => {
        var classList = $("#sub-category-2-1").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#sub-category-2-1").addClass("show").removeClass("hide");
            $("#sub-category-2-2").addClass("hide").removeClass("show");
            $("#sub-category-2-3").addClass("hide").removeClass("show");
        } else {
            $("#sub-category-2-1").addClass("hide").removeClass("show");
        }
    });
    $("#main-2-2").on("click", () => {
        var classList = $("#sub-category-2-2").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#sub-category-2-2").addClass("show").removeClass("hide");
            $("#sub-category-2-3").addClass("hide").removeClass("show");
            $("#sub-category-2-1").addClass("hide").removeClass("show");
        } else {
            $("#sub-category-2-2").addClass("hide").removeClass("show");
        }
    });
    $("#main-2-3").on("click", () => {
        var classList = $("#sub-category-2-3").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#sub-category-2-3").addClass("show").removeClass("hide");
            $("#sub-category-2-2").addClass("hide").removeClass("show");
            $("#sub-category-2-1").addClass("hide").removeClass("show");
        } else {
            $("#sub-category-2-3").addClass("hide").removeClass("show");
        }
    });
    $("#main-2-4").on("click", () => {
        var classList = $("#sub-category-2-4").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#sub-category-2-4").addClass("show").removeClass("hide");
            $("#sub-category-2-2").addClass("hide").removeClass("show");
            $("#sub-category-2-1").addClass("hide").removeClass("show");
            $("#sub-category-2-3").addClass("hide").removeClass("show");
        } else {
            $("#sub-category-2-4").addClass("hide").removeClass("show");
        }
    });
    $("#main-3-1").on("click", () => {
        var classList = $("#sub-category-3-1").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#sub-category-3-1").addClass("show").removeClass("hide");
            $("#sub-category-3-2").addClass("hide").removeClass("show");
            $("#sub-category-3-3").addClass("hide").removeClass("show");
        } else {
            $("#sub-category-3-1").addClass("hide").removeClass("show");
        }
    });
    $("#main-3-2").on("click", () => {
        var classList = $("#sub-category-3-2").attr("class").split(' ');
        if (showOrHide(classList)) {
            $("#sub-category-3-2").addClass("show").removeClass("hide");
            $("#sub-category-3-3").addClass("hide").removeClass("show");
            $("#sub-category-3-1").addClass("hide").removeClass("show");
        } else {
            $("#sub-category-3-2").addClass("hide").removeClass("show");
        }
    });

});