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
