## ドキュメント
https://www.webprofessional.jp/how-to-approach-javascript-projects-what-the-tutorials-dont-tell-you/
https://www.sejuku.net/blog/31671

## swiper
https://haniwaman.com/swiper/

## スムーススクロール
jqueyがslim.minだとanimateがサポートされていないため注意
```
// jquery読み込み
 src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

// jquery
<script>
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
    </script>
```