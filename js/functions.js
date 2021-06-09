$(function(){
  $('.bxslider').bxSlider({
   auto: true,
   mode: 'fade', // 横にスライド
   speed: 500, // アニメーションのスピード
   pause: 4000, // 画像の切り替わる間隔　（初期値: 4000）
   pager: false, // 下部にある画像切り替えボタンの表示・非表示　（初期値: true）
   controls: false // 左右の矢印の表示・非表示　（初期値: true）
  });



  $(".full-screen").slick({
    centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
    centerPadding: '200px', // センターモード時のサイドパディング。見切れるスライドの幅。’px’または’％’。
    dots: true, // ドットインジケーターの表示
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
    speed: 1000, // スライド/フェードアニメーションの速度を設定
    infinite: true, // スライドのループを有効にするか
    prevArrow: '<i class="far fa-hand-point-left" class="slide-arrow prev-arrow"></i>',
    nextArrow: '<i class="far fa-hand-point-right" class="slide-arrow next-arrow"></i>',
  });


 });
