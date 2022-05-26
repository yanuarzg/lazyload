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
/* !dsq */
var disqus_shortname = 'catatandroid';
(function () {
   var s = document.createElement('script');
   s.async = true;
   s.type = 'text/javascript';
   s.src = '//' + disqus_shortname + '.disqus.com/count.js';
   (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());
