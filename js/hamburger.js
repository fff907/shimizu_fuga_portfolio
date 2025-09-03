'use strict';
{
  const open = document.getElementById('open');
  const overlay = document.getElementById('overlay');
  const navLinks = document.querySelectorAll('.nav__list a');
  
  // メニューを閉じる関数(サブ)
  function closeMenu() {
    overlay.classList.remove('show');
    open.classList.remove('is-active');
    document.body.style.overflow = '';
  }
  
  // メニューを開閉する関数(メイン)
  open.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('show');
    open.classList.toggle('is-active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    // オーバーレイナビが表示された時ページ本体のスクロールを止める
    // if (isOpen) { document.body.style.overflow = 'hidden';
  　// } else { document.body.style.overflow = ''; } }); の短縮型
    // 'hidden'＝真のときの値＝スクロールを止める
    // isOpen ? → isOpenならば
    // : '' → そうでなければ空文字＝スクロールを戻す
  
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
  }
}
