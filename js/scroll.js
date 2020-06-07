$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY < window.innerHeight) {
            $("meta[name='theme-color']").attr("content", "#000");
        } else if (
            this.scrollY > window.innerHeight &&
            this.scrollY < 2 * window.innerHeight
        ) {
            $("meta[name='theme-color']").attr("content", "#fff");
        } else if (
            this.scrollY > 2 * window.innerHeight &&
            this.scrollY < 4.3 * window.innerHeight
        ) {
            $("meta[name='theme-color']").attr("content", "#ffd1dc");
        } else if (
            this.scrollY > 4.3 * window.innerHeight &&
            this.scrollY < 5.3 * window.innerHeight
        ) {
            $("meta[name='theme-color']").attr("content", "#add8e6");
        }
        if (this.scrollY > 4.3 * window.innerHeight) {
            $(".animated-heart").hide();
        } else {
            $(".animated-heart").show();
        }
        if (this.scrollY > 2.0 * window.innerHeight) {
            $(".animated-heart").css("position", "fixed");
            let scale =
                ((this.scrollY - 2.0 * window.innerHeight) * 20) /
                window.innerHeight;
            let opacity =
                (this.scrollY - 2.0 * window.innerHeight) / window.innerHeight;
            if (scale > 1)
                $(".animated-heart").css("transform", "scale(" + scale + ")");
            if (scale > 1)
                $(".animated-heart").css(
                    "-webkit-transform",
                    "scale(" + scale + ")"
                );
            if (scale > 1)
                $(".animated-heart").css(
                    "-ms-transform",
                    "scale(" + scale + ")"
                );
            $(".animated-heart").css("opacity", 1 - opacity);
        } else {
            $(".animated-heart").css("position", "relative");
            $(".animated-heart").css("transform", "scale(1)");
            $(".animated-heart").css("-ms-transform", "scale(1)");
            $(".animated-heart").css("-webkit-transform", "scale(1)");
        }
        if (this.scrollY > 3.0 * window.innerHeight) {
            $(".animated-data").fadeIn(500);
            $(".animated-data").css("position", "relative");
            $(".animated-data").css("top", "130vh");
        } else {
            $(".animated-data").fadeOut(500);
        }
    });
    if (
        $(".data.pl-5.pr-5.pt-5").height() + 300 > window.innerHeight &&
        window.innerWidth < 768
    ) {
        $(".custom-image").css("display", "none");
    }
});
