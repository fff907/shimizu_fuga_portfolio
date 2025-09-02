'use strict';

{
  const hamburger = document.querySelector('.header__hamburger');
  const nav = document.querySelector('.nav--sp');
  const navLinks = document.querySelectorAll('.nav__list--sp a');

  // ハンバーガーボタンをクリックしたとき、メニューを開閉
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('is-open'); // メニュー表示,非表示を切り替える
    hamburger.classList.toggle('is-active'); // ボタンの状態も切り替え
  });

  // ナビ内のリンクをクリックしたらメニューを閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      hamburger.classList.remove('is-active');
    });
  });
}

