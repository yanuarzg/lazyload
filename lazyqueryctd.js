/*! pv */
$.each($(".post-view[data-id]"),function(c,f){
  var b=$(f).parent().find("#postviews").addClass("view-load"),
      d=new Firebase("https://ctd-page-views-default-rtdb.firebaseio.com/pages/id/"+$(f).attr("data-id"));
  d.once("value",function(e){
    var h=e.val(),
        g=!1;
    null==h&&(h={},
              h.value=0,
              h.url=window.location.href,
              h.id=$(f).attr("data-id"),
              g=!0),
       lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ],
  rx = /\.0+$|(\.[0-9]*[1-9])0+$/,
  item = lookup.slice().reverse().find(function(item) {
    return h.value >= item.value;
  }),
      b.removeClass("view-load").text(item ? (h.value / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0"),
      h.value++,
      "/"!=window.location.pathname&&(g?d.set(h):d.child("value").set(h.value))})});
/*! wpac */
wpac_init=window.wpac_init||[];wpac_init.push({widget:'Rating',id:31267,el:'wpac-rating-custom',html:'{{=it.stars}} {{?it.count>0}} {{=it.count}} {{=it.votes}}{{?}}'});(function(){if('WIDGETPACK_LOADED'in window)return;WIDGETPACK_LOADED=true;var mc=document.createElement('script');mc.type='text/javascript';mc.async=true;mc.src='https://cdn.widgetpack.com/widget.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(mc,s.nextSibling);})();
/*! dsq */
var disqus_shortname='catatandroid';(function(){var s=document.createElement('script');s.async=true;s.type='text/javascript';s.src='//'+disqus_shortname+'.disqus.com/count.js';(document.getElementsByTagName('HEAD')[0]||document.getElementsByTagName('BODY')[0]).appendChild(s);}());
/*! imgani */
var scroll="yes",Fscroll=scroll.replace(/(\r\n|\n|\r)/gm," ");"yes"===Fscroll&&($(document).ready(function(){$("body").addClass("imgani")}),$(window).bind("load resize scroll",function(){var o=$(this).height();$(".post-body img,.post-body h2,.post-body h3,#share").each(function(){var s=.1*$(this).height()-o+$(this).offset().top;$(document).scrollTop()>s&&$(this).addClass("anime")})}));
/*! font resizer traliif */
$(function(){$('input').click(function(){var ourText=$('.post-body');var currFontSize=ourText.css('fontSize');var finalNum=parseFloat(currFontSize,10);var stringEnding=currFontSize.slice(-2);if(this.id=='tlarge'){finalNum*=1.1}else if(this.id=='tsmall'){finalNum/=1.1}else if(this.id=='treset'){finalNum=16}
ourText.animate({fontSize:finalNum+stringEnding},500)})});
