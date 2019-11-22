
// <!-- navbarに赤色の下線を引く -->
$(function(){
$(".header-menu li a").click(function(){
  $(".header-menu li a").removeClass("clickred");
  $(this).addClass("clickred");
  });
  });

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
 $('.qa-answer').hide();
});

$(function(){
  $('.qa-title h2').click(function(){
    $(this).parent().parent().find('.qa-answer').slideToggle();
});
});


