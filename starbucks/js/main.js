const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
	searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
	searchEl.classList.add("focused");
	searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
	searchEl.classList.remove("focused");
	searchInputEl.setAttribute("placeholder", "");
});

const badgeEL = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
	"scroll",
	_.throttle(function () {
		if (window.scrollY > 500) {
			//배지요소를 숨기기
			// gsap.to(요소,지속시간,옵션)
			gsap.to(badgeEL, 0.6, {
				opacity: 0,
				display: "none",
			});

			gsap.to(toTopEl, 0.2, {
				x: 0,
			});
		} else {
			// 배지 보이기
			gsap.to(badgeEL, 0.6, {
				opacity: 1,
				display: "block",
			});

			gsap.to(toTopEl, 0.2, {
				x: 100,
			});
		}
	}, 300)
);

toTopEl.addEventListener("click", function () {
	gsap.to(window, 0.7, {
		scrollTo: 0,
	});
});

// _.throttle(함수, 시간)
const fadeEls = document.querySelectorAll(".visual .fade-in");
// foreach(요소 ,횟수 )
fadeEls.forEach(function (fadeEl, index) {
	//gasp.to(요소,지속시간, 옵션)
	gsap.to(fadeEl, 1, {
		delay: (index + 0.5) * 0.7, // 순차적으로 나타내기 위해 index값 더하기
		opacity: 1,
	});
});

new Swiper(".notice-line .swiper", {
	direction: "vertical",
	autoplay: true,
	loop: true,
});

new Swiper(".promotion .swiper", {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: ".promotion .swiper-pagination",
		clickable: true,
	},
	navigation: {
		prevEl: ".promotion .swiper-prev",
		nextEl: ".promotion .swiper-next",
	},
});

new Swiper(".awards .swiper", {
	autoplay: true,
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	navigation: {
		prevEl: ".awards .swiper-prev",
		nextEl: ".awards .swiper-next",
	},
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		promotionEl.classList.add("hide");
	} else {
		promotionEl.classList.remove("hide");
	}
});

function random(min, max) {
	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
	// gsap.to(요소,시간,옵션)
	gsap.to(selector, random(1.5, 2.5), {
		y: size,
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInout,
		delay: random(0, delay),
	});
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
	new ScrollMagic.Scene({
		triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
		tirggerHook: 0.8,
	})
		.setClassToggle(spyEl, "show")
		.addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
