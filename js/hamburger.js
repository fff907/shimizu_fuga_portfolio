'use strict';

const open = document.getElementById('open');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav__list a');

// メニューを閉じる関数
function closeMenu() {
  overlay.classList.remove('show');
  open.classList.remove('is-active');
  document.body.style.overflow = '';
}

open.addEventListener('click', () => {
  const isOpen = overlay.classList.toggle('show');
  open.classList.toggle('is-active');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// メニュー内リンクをクリックで閉じる
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// 1000pxを超えたらメニューを自動で閉じる
window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    closeMenu();
  }
});
