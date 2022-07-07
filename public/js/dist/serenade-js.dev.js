"use strict";

//================
// 手機版 PC版 menu nav
//================
// 定義視窗寬度的變數
var windowWidth = $(window).width(); // 進網頁直接執行一次 判斷

if (windowWidth >= 768) {
  // 大於等於768執行
  // $('nav>ul>li').hover(function(){}, function(){})
  $('.main-nav').hover(function () {
    // 滑鼠滑入執行
    $(this).find('.submenu').addClass('active');
  }, function () {
    // 滑鼠滑出執行
    $(this).find('.submenu').removeClass('active');
  });
} else {
  // 小於768執行
  $('#btn-nav-switch').on('click', function () {
    $('.main-nav').toggleClass('active');
  }); // btn-nav-switch end

  $('#btn-nav-switch').on('click', function () {
    $(this).find('.submenu').toggleClass('active');
  }); // nav>ul>li end
} // windowWidth>=768 end
// scoll top


$('.pagetop').click(function () {
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
}); // scoll end