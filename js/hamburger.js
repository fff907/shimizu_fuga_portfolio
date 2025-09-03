'use strict';

{
  const open = document.getElementById('open');         // ハンバーガー（三本線）
  const overlay = document.querySelector('.overlay');   // オーバーレイ背景＋メニュー
  const navLinks = document.querySelectorAll('.nav__list--sp a'); // 各ナビリンク

  // ハンバーガーをクリックするとオーバーレイを表示
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('is-active');
  });

  // 各リンククリックでもオーバーレイを閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('is-active');
    });
  });
}
