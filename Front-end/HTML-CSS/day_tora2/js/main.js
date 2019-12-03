// <!-- スムーススクロール -->
$(function(){
  $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });
});

// アコーディオン
$(function(){
  $('.qa-ansewr').hide();
 });
 
//  $(function(){
//    $('.qa-col-right img').click(function(){
//      $(this).parent().parent().find('.qa-ansewr').slideToggle();
//  });
//  });
 $(function(){
   $('.qa-touch').click(function(){
    $(this).parent().parent().parent().find('.qa-ansewr').slideToggle();
 });
 });



 

