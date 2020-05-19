$(document).ready(() => {
	$(window).scroll(() => {
		if (this.scrollY < window.innerHeight) {
			$("meta[name='theme-color']").attr("content", "#000");
		} else if (this.scrollY > window.innerHeight && this.scrollY < 2 * window.innerHeight) {
			$("meta[name='theme-color']").attr("content", "#fff");
		} else if (this.scrollY > 2 * window.innerHeight && this.scrollY < 3 * window.innerHeight) {
			$("meta[name='theme-color']").attr("content", "#ffd1dc");
		} else if (this.scrollY > 3 * window.innerHeight && this.scrollY < 4 * window.innerHeight) {
			$("meta[name='theme-color']").attr("content", "#add8e6");
		}
	})
	if ($(".data.pl-5.pr-5.pt-5").height() + 300 > window.innerHeight && window.innerWidth < 768) {
		$(".custom-image").css("display", "none");
	}
});