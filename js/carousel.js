'use strict';

{
  const slides = document.querySelectorAll('.cover__carousel > div');
  let currentIndex = 0;

  // すべて非表示にしてから1つだけ表示
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentIndex].classList.add('active');

  // 5秒ごとに切り替え
  setInterval(() => {
    // 現在のスライドからactiveを外す
    slides[currentIndex].classList.remove('active');

    // 次のスライドに進む
    currentIndex++;

    // 最後までいったら最初に戻す
    if (currentIndex === slides.length) {
      currentIndex = 0;
    }

    // 新しいスライドにactiveをつける
    slides[currentIndex].classList.add('active');
  }, 5000);
}
