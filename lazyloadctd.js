/*! pv */
jQuery.getScript("//cdn.firebase.com/js/client/2.3.2/firebase.js").done(function(){
$.each($(".post-view[data-id]"),function(e,a){var i=$(a).parent().find("#postviews").addClass("view-load"),t=new Firebase("https://ctd-page-views-default-rtdb.firebaseio.com/pages/id/"+$(a).attr("data-id"));t.once("value",function(e){var o=e.val(),d=!1;null==o&&((o={}).value=0,o.url=window.location.href,o.id=$(a).attr("data-id"),d=!0),i.removeClass("view-load").text(o.value),o.value++,"/"!=window.location.pathname&&(d?t.set(o):t.child("value").set(o.value))})})});
/*! wpac */
wpac_init=window.wpac_init||[];wpac_init.push({widget:'Rating',id:31267,el:'wpac-rating-custom',html:'{{=it.stars}} {{?it.count>0}} {{=it.count}} {{=it.votes}}{{?}}'});(function(){if('WIDGETPACK_LOADED'in window)return;WIDGETPACK_LOADED=true;var mc=document.createElement('script');mc.type='text/javascript';mc.async=true;mc.src='https://cdn.widgetpack.com/widget.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(mc,s.nextSibling);})();
/*! dsq */
var disqus_shortname='catatandroid';(function(){var s=document.createElement('script');s.async=true;s.type='text/javascript';s.src='//'+disqus_shortname+'.disqus.com/count.js';(document.getElementsByTagName('HEAD')[0]||document.getElementsByTagName('BODY')[0]).appendChild(s);}());
/*! halamanjudul */
$(document).ready(function(){var e=$("a.blog-pager-older-link").attr("href");$("a.blog-pager-older-link").load(e+" .post-title:first",function(){var e=$("a.blog-pager-older-link").text();$("a.blog-pager-older-link").text(e)});e=$("a.blog-pager-newer-link").attr("href");$("a.blog-pager-newer-link").load(e+" .post-title:first",function(){var e=$("a.blog-pager-newer-link:first").text();$("a.blog-pager-newer-link").text(e)})});
