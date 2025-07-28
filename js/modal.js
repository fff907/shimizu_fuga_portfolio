'use strict';

{
  const openBtns = document.querySelectorAll('.works__thumbnail-link');
  const close = document.querySelector('.close-btn');
  const modal = document.querySelector('#popup');
  const mask = document.querySelector('.popup-overlay');
  
  openBtns.forEach(open => {
    open.addEventListener ('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      // モーダルを開いたときに背景スクロールを止める
      // ※body(背景全体)にoverflow: hiddenを指定 
      modal.querySelector('.popup-content').scrollTop = 0;
      // ポップアップを開いた時に 内容のスクロール位置をリセット
    });
  });

  close.addEventListener ('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    document.body.style.overflow = '';
    // モーダルを閉じたときにスクロールを元に戻す
    // ※空文字 '' で元のスタイルに戻る
  });

  mask.addEventListener('click', () => {
    close.click();
  });
}
