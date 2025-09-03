'use strict';

{
  const open = document.getElementById('open'); // 三本線ボタン
  const overlay = document.querySelector('.overlay'); // オーバーレイ
  const navLinks = document.querySelectorAll('.nav__list--sp a'); // SPメニュー内リンク
  const close = document.querySelector('.overlay__close'); // ×ボタン

  const closeMenu = () => {
    overlay.classList.remove('show');           // オーバーレイ非表示
    open.classList.remove('is-active');         // 三本線の変形を戻す
    document.body.style.overflow = '';          // スクロール復活
  };

  // 三本線ボタンクリック：開閉切り替え
  open.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('show');
    open.classList.toggle('is-active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // メニュー内リンククリック時：閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ×ボタンで閉じる
  if (close) {
    close.addEventListener('click', closeMenu);
  }

  // 画面サイズが1000px超えたら強制的に閉じる
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
      closeMenu();
    }
  });
}
