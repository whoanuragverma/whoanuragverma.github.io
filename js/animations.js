$(function () {
	const navBar = anime.timeline({
		easing: 'easeInCubic',
		duration: 200,
		autoplay: false
	});
	navBar.add({
		targets: '.one',
		rotate: 45
	});
	navBar.add({
		targets: '.bar span',
		borderColor: ["#fff", "#000"],
		duration: 400
	}, "-=400");
	navBar.add({
		targets: '.two',
		rotate: -45,
		translateX: -6.5,
		translateY: -15
	}, "-=200");
	navBar.add({
		targets: '.bar',
		left: 35
	}, "-=200");
	navBar.add({
		targets: '.name',
		color: "#000"
	}, "-=100")
	navBar.add({
		targets: '.menu',
		left: 0,
		duration: 500
	}, "-=200");
	$(".bar").on('click', function () {
		if ($(this).hasClass("active")) {
			navBar.reverse();
			$(this).toggleClass("active");
		} else {
			navBar.play();
			$(this).toggleClass("active");
		}
	})
});
$(function () {
	const navBar = anime.timeline({
		easing: 'easeInCubic',
		duration: 200,
		autoplay: false
	});
	navBar.add({
		targets: '.one-m',
		rotate: 45
	});
	navBar.add({
		targets: '.bar-mobile span',
		borderColor: ["#fff", "#000"]
	}, "-=200");
	navBar.add({
		targets: '.bar-mobile',
		top: "2vw"
	}, "-=200");
	navBar.add({
		targets: '.two-m',
		rotate: -45,
		translateX: -7.5,
		translateY: -16.5
	}, "-=200");
	navBar.add({
		targets: '.name',
		color: "#000"
	}, "-=100")
	navBar.add({
		targets: '.menu-mobile',
		top: 0,
		opacity: [0, 1],
		duration: 500
	}, "-=200");
	$(".bar-mobile").on('click', function () {
		if ($(this).hasClass("active")) {
			navBar.reverse();
			$(this).toggleClass("active");
		} else {
			navBar.play();
			$(this).toggleClass("active");
		}
	})
});

$(function () {
	const links = anime.timeline({
		easing: 'easeInCubic',
		duration: 300,
		autoplay: false
	});
	links.add({
		targets: '.menu .backdrop',
		opacity: [0, 1],
		scaleX: [1.15, 1.0]
	})
	$(".menu>li>a").hover(function () {
		const col = [
			"#F6D8D8",
			"#82CAFA",
			"#98FF98",
			"#ECC5C0",
			"#EEE8AA",
			"#AFEEEE",
			"#FFB6C1",
			"#D3D3D3"
		]
		let c = col[Math.floor(Math.random() * col.length)];
		$(".menu .backdrop").css("color",c);
		let t = $(this).text();
		if (t == "Home" || t == "Diary") {
			$(".menu .backdrop").css("left", "39vh");
		} else if (t == "Github") {
			$(".menu .backdrop").css("left", "33vh");
		} else {
			$(".menu .backdrop").css("left", "25vh");
		}
		$(".menu .backdrop").text(t);

		links.play();
	}, function () {
		$(".menu .backdrop").text("");
	});
})
$(function () {
	const links = anime.timeline({
		easing: 'easeInCubic',
		duration: 300,
		autoplay: false
	});
	links.add({
		targets: '.menu-mobile .backdrop',
		opacity: [0, 1],
		scaleX: [1.15, 1.0]
	})
	$(".menu-mobile>li>a").hover(function () {
		let t = $(this).text();
		const col = [
			"#F6D8D8",
			"#82CAFA",
			"#98FF98",
			"#ECC5C0",
			"#EEE8AA",
			"#AFEEEE",
			"#FFB6C1",
			"#D3D3D3"
		]
		let c = col[Math.floor(Math.random() * col.length)];
		$(".menu-mobile .backdrop").css("color",c);
		if (t == "Home" || t == "Diary") {
			$(".menu-mobile .backdrop").css("left", "25vw");
		} else if (t == "Github") {
			$(".menu-mobile .backdrop").css("left", "20vw");
		} else {
			$(".menu-mobile .backdrop").css("left", "16vw");
		}
		$(".menu-mobile .backdrop").text(t);
		links.play();
	}, function () {
		$(".menu-mobile .backdrop").text("");
	});
})