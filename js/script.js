// ページトップのスクロールパターン
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});
//モバイルメニュー
$(".hmenu").click(function () {
  $("nav").slideToggle(500);
  $(this).toggleClass("close");
});
// PRのスリック
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  pauseOnHover: false,
});
// 1199px以下になったら発動スリック！！！
if (window.matchMedia("(max-width: 1199px)").matches) {
  $(".mslider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    pauseOnHover: false,
  });
}
// ーーーーーーーーーーー
// ホバーして画像が変わる
// ーーーーーーーーーーー
// img編
$(function () {
  $(".js-hover").each(function () {
    var src_off = $(this).find("img").attr("src"),
      src_on = src_off.replace("_off", "_on");

    $(".js-hover").attr("src", src_off);

    $(this).hover(
      function () {
        $(this).find("img").attr("src", src_on);
      },
      function () {
        $(this).find("img").attr("src", src_off);
      }
    );
  });
});
