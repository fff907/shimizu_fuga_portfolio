'use strict';

{
  const openBtns = document.querySelectorAll('.works__thumbnail-link');
  
  openBtns.forEach(open => {
     const modal = open.closest('.works__item').querySelector('.popup');
     // document.querySelector → open.closest('.works__item')
     // 修正後：クリックされたボタンに対応するモーダルを取得
     // + open定義後に書く必要があるためアロー関数内に入れる
     // .closest('...')：クリックした要素から親をたどって特定クラスを持つ要素を探す
     const mask = modal.querySelector('.popup-overlay');
     const close = modal.querySelector('.close-btn');
     // 上記2行：document.querySelector → modal.querySelector
     // 「特定の要素の中だけ」で探す
    
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
 });
}
