'use strict';

{
  const ul = document.querySelector('.cover__carousel');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;
  let timer;

  function setupDots() {
    const nav = document.createElement('nav');
    nav.classList.add('dots');

    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');

      button.addEventListener('click', () => {
        showSlide(i);
        resetTimer();
      });

      dots.push(button);
      nav.appendChild(button);
    }

    document.querySelector('.cover').appendChild(nav);
    dots[0].classList.add('current');
  }

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.toggle('active', i === index);
      dots[i].classList.toggle('current', i === index);
    }

    currentIndex = index;
  }

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
