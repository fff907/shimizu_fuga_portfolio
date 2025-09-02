'use strict';

{
  const slides = document.querySelectorAll('.cover__carousel > div');
  const dots = []; // ドットボタンを格納する配列
  let currentIndex = 0;
  let timer;

  // ドットを生成・追加する関数
  function setupDots() {
    const nav = document.createElement('nav');
    nav.classList.add('dots');
    slides.forEach((_, index) => {
      const button = document.createElement('button');

      button.addEventListener('click', () => {
        showSlide(index);
        resetTimer();
      });

      dots.push(button);
      nav.appendChild(button);
    });

    document.querySelector('.cover').appendChild(nav); // cover内の末尾にnav追加
    dots[0].classList.add('current'); // 初期表示にcurrentをつける
  }

  // スライドとドットを同期して表示
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('current', i === index);
    });

    currentIndex = index;
  }

  // 自動再生のためのタイマー
  function startTimer() {
    timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }, 5000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  // 初期化処理
  setupDots();
  showSlide(0);
  startTimer();
}
