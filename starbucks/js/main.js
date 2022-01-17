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
		} else {
			// 배지 보이기
			gsap.to(badgeEL, 0.6, {
				opacity: 1,
				display: "block",
			});
		}
	}, 300)
);
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
