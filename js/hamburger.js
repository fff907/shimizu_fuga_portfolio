'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.nav__list--sp a');
  
  // ハンバーガーをクリックするとオーバーレイを開閉
  open.addEventListener('click', () => {
    overlay.classList.toggle('show');
    open.classList.toggle('is-active');
  });

  // 各リンククリック時はメニューを閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('is-active');
    });
  });
}
