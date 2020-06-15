$(function () {
    let header = $("#header");
    let scrollPos = $(window).scrollTop;
    checkScroll(scrollPos);
    $(window).on("scroll", function () {
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos);
    });

    function checkScroll(scrollPos) {
        if (scrollPos >= 1) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }
});
