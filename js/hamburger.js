'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.nav__list--sp a');

  open.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('show');
    open.classList.toggle('is-active');

    // スクロール禁止・解除
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // 各リンククリックでもメニューを閉じてスクロール再開
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('is-active');
      document.body.style.overflow = '';
    });
  });
}
