/*!dsq*/
var disqus_shortname = 'catatandroid';
(function () {
   var s = document.createElement('script');
   s.async = true;
   s.type = 'text/javascript';
   s.src = '//' + disqus_shortname + '.disqus.com/count.js';
   (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());
/*!imgani*/
var scroll = "yes",
   Fscroll = scroll.replace(/(\r\n|\n|\r)/gm, " ");
"yes" === Fscroll && ($(document).ready(function () {
   $("body").addClass("imgani")
}), $(window).bind("load resize scroll", function () {
   var o = $(this).height();
   $(".post-body img,.post-body h2,.post-body h3,#share").each(function () {
      var s = .1 * $(this).height() - o + $(this).offset().top;
      $(document).scrollTop() > s && $(this).addClass("anime")
   })
}));
/*!font resizer traliif*/
$(function () {
   $('input').click(function () {
      var ourText = $('.post-body');
      var currFontSize = ourText.css('fontSize');
      var finalNum = parseFloat(currFontSize, 10);
      var stringEnding = currFontSize.slice(-2);
      if (this.id == 'tlarge') {
         finalNum *= 1.1
      } else if (this.id == 'tsmall') {
         finalNum /= 1.1
      } else if (this.id == 'treset') {
         finalNum = 16
      }
      ourText.animate({
         fontSize: finalNum + stringEnding
      }, 500)
   })
});
