setViewWidth();
setPanelImg();
fadeIn();

// vwからスクロールバーの幅を除外する調整
function setViewWidth() {
	const setVw = function() {
		const vw = document.documentElement.clientWidth / 100;
		document.documentElement.style.setProperty('--vw', `${vw}px`);
	}
	window.addEventListener('DOMContentLoaded', setVw);
	window.addEventListener('resize', setVw);
}

// パネルの背景画像設定
function setPanelImg() {
	const target = document.querySelectorAll('[data-thum]');
	const targetCount = target.length;

	for (let i = 0; i < targetCount; i++) {
		target[i].style.backgroundImage = `url("img/${target[i].dataset.thum}.jpg")`;
	}

}

// フェードイン実装
function fadeIn() {
	const windowHeight = $(window).height();
	let scroll = $(window).scrollTop();

	// ファーストビュー
	$('.container > *').each(function () {
		let targetPosition = $(this).offset().top;
		if (targetPosition < windowHeight) {
			$(this).addClass("is-fadein");
		}
	});

	// スクロール
	$(window).scroll(function () {
		scroll = $(window).scrollTop();
		$('.container > *').each(function () {
			targetPosition = $(this).offset().top;
			if (scroll > targetPosition - windowHeight) {
				$(this).addClass("is-fadein");
			}
		});
	});
}