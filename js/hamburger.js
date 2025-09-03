'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.nav__list--sp a');

  // メニューを閉じる処理
  const closeMenu = () => {
    overlay.classList.remove('show'); 
    open.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  // 三本線ボタンクリックでメニュー開閉（toggle）
  open.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('show');
    open.classList.toggle('is-active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // SPメニュー内リンククリックでメニューを閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // 画面サイズが1000px超えたらメニューを強制的に閉じる
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
      closeMenu();
    }
  });
}
