'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.nav__list--sp a');
  const close = document.querySelector('.overlay__close');

  const closeMenu = () => {
    overlay.classList.remove('show');
    open.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  // ハンバーガークリック時：開閉
  open.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('show');
    open.classList.toggle('is-active');

    // スクロール禁止・解除
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // メニューリンククリック時：閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ×ボタンで閉じる
  if (close) {
    close.addEventListener('click', closeMenu);
  }

  // 画面幅変更を監視してSPナビ開いてたら強制的に閉じる
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
      document.querySelector('.overlay').classList.remove('show');
      document.getElementById('open').classList.remove('is-active');
      document.body.style.overflow = '';
    }
  });
}
