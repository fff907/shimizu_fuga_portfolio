$(document).ready(function () {
  // サムネイルリンクをクリックしてポップアップを開く
  $('.thumbnail-link').click(function (event) {
      event.preventDefault(); // デフォルト動作を無効化
      const targetPopup = $(this).attr('href'); // リンク先のハッシュ（例: #popup）を取得

      // 背景スクロールを停止
      $('body').css('overflow', 'hidden');

      // ポップアップを表示し、スクロール位置をリセット
      $(targetPopup).show().find('.popup-content').scrollTop(0);

      // URLのハッシュ部分を更新
      window.location.hash = targetPopup;
  });

  // 閉じるボタンをクリックしてポップアップを閉じる
  $('.close-btn').click(function (event) {
      event.preventDefault(); // デフォルト動作を無効化

      // 背景スクロールを復元
      $('body').css('overflow', '');

      // 対応するポップアップを非表示
      $(this).closest('.popup').hide();

      // URLのハッシュをクリア
      window.history.pushState('', document.title, window.location.pathname);
  });

  // オーバーレイをクリックしてポップアップを閉じる
  $('.popup-overlay').click(function () {
      // 背景スクロールを復元
      $('body').css('overflow', '');

      // クリックされたオーバーレイの親ポップアップを非表示
      $(this).closest('.popup').hide();

      // URLのハッシュをクリア
      window.history.pushState('', document.title, window.location.pathname);
  });
});