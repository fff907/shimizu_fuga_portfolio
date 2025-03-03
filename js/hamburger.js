$(document).ready(function() {
	// ハンバーガーメニューボタンのクリックイベント
	$(".header__hamburger").click(function(event) {
	$(".nav--sp").slideToggle();
	});
	// ナビゲーションリンクのクリックイベント
	$(".nav__list--sp a").click(function(event) {
	$(".nav--sp").slideUp();
	});
	});
