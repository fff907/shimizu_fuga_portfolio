'use strict';

{
  const slides = document.querySelectorAll('.cover__carousel > div');
  // .cover__carousel 内のスライド（div要素）をすべて取得
  // querySelectorAll → NodeList を返すため、forEach()が使える
  //（子要素の.childrenと違って柔軟に扱える） 

  const dots = []; // ドットボタン（丸ボタン）を格納する配列
  let currentIndex = 0; // 現在表示中のスライドのインデックス
  let timer; // setIntervalのIDを保持する変数（のちにclearIntervalで停止するため）

  // ドットボタンの生成＆追加処理
  function setupDots() {
    const nav = document.createElement('nav');
    // navタグを新たに作成 → ドットボタン群の意味的なまとまりを表す
    // （スライドを切り替えるドットボタン群は
    //「ナビゲーションの役割」を持つため、意味的に<nav>タグが適しており、
    // アクセシビリティやSEOの面で望ましい選択である。） 
    nav.classList.add('dots'); // CSSで整えるためのクラス名

    // slidesの数だけボタンを作る
    slides.forEach((_, index) => {
      // 第1引数 _ は「スライド要素そのもの」。
      // ここでは使わないため「捨て変数」としてアンダーバーにしている
      // 第2引数 index は0,1,2...と連番で渡ってくるインデックス番号

      const button = document.createElement('button'); // ボタン生成

      button.addEventListener('click', () => {
        // クリックされたらその index を使ってスライドを切り替える
        showSlide(index);
        resetTimer(); // 自動再生のタイミングをリセット
      });

      dots.push(button); // 配列dotsに追加して管理
      nav.appendChild(button); // navタグの末尾にボタンを追加
    });

    document.querySelector('.cover').appendChild(nav);
    // .cover要素の末尾に<nav class="dots">を追加（HTML構造に反映）

    dots[0].classList.add('current');
    // 初期状態で最初のドットだけに .current をつける（強調表示）
  }

  // スライドとドットの表示を連動して更新
  function showSlide(index) {
    // index番目のスライドだけを表示、他を非表示（activeクラスで制御）
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    // ドットも同様に、index番目だけ current をつけて強調
    dots.forEach((dot, i) => {
      dot.classList.toggle('current', i === index);
    });

    currentIndex = index;
    // 現在のインデックスを更新（次回以降の計算に必要）   
  }

  // 自動でスライドを進めるタイマー処理
  function startTimer() {
    timer = setInterval(() => {
      // 次に表示するスライド番号を計算：
      // 例）今が2、スライドが3枚 → (2+1) % 3 = 0 → 最初に戻る
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex); // 次のスライドを表示
    }, 5000); // 5000ミリ秒ごと（＝5秒間隔）
  }

  // 手動操作のあとにタイマーをリセットする関数
  function resetTimer() {
    clearInterval(timer); // 前のタイマーを止めて
    startTimer();         // 新しく開始し直す
  }

  // 初期化：ページ読み込み時に一度だけ実行
  setupDots();   // ドットを作る
  showSlide(0);  // 最初のスライドを表示
  startTimer();  // 自動再生開始
}
