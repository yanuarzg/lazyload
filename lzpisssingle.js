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
var relatedSimply = new Array(); var relatedSimplyNum = 0; var relatedUrls = new Array(); function related_results_labels(json) { for (var i = 0; i < json.feed.entry.length; i++) { var entry = json.feed.entry[i]; relatedSimply[relatedSimplyNum] = entry.title.$t; for (var k = 0; k < entry.link.length; k++) { if (entry.link[k].rel == 'alternate') {relatedUrls[relatedSimplyNum] = entry.link[k].href; relatedSimplyNum++; break;}}}} function removeRelatedDuplicates() { var tmp = new Array(0); var tmp2 = new Array(0); for(var i = 0; i < relatedUrls.length; i++) { if(!contains(tmp, relatedUrls[i])) { tmp.length += 1; tmp[tmp.length - 1] = relatedUrls[i]; tmp2.length += 1; tmp2[tmp2.length - 1] = relatedSimply[i];}} relatedSimply = tmp2; relatedUrls = tmp;} function contains(a, e) { for(var j = 0; j < a.length; j++) if (a[j]==e) return true; return false;} function printRelatedLabels() { var r = Math.floor((relatedSimply.length - 1) * Math.random()); var i = 0; document.write('<ul>'); while (i < relatedSimply.length && i < 20) { document.write('<li><a href="' + relatedUrls[r] + '">' + relatedSimply[r] + '</a></li>'); if (r < relatedSimply.length - 1) { r++; } else { r = 0;} i++;} document.write('</ul>');};
/*! Creator JS Related Post Widget for Blogger by Taufik Nurrohman => http://gplus.to/tovic */
/*! Telah dimodifikasi oleh you w4hyou => http://info-kmu.blogspot.com/ */
var randomRelatedIndex,showRelatedPost;(function(e,t,n){var r={widgetTitle:"<h4>Artikel Terkait:</h4>",homePage:"http://info-kmu.blogspot.com",numPosts:7,titleLength:"auto",callBack:function(){}};for(var i in relatedPostConfig){r[i]=relatedPostConfig[i]=="undefined"?r[i]:relatedPostConfig[i]}var s=function(e){var r=t.createElement("script");r.type="text/javascript";r.src=e;n.appendChild(r)},o=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u=function(e){var t=e.length,n,r;if(t===0){return false}while(--t){n=Math.floor(Math.random()*(t+1));r=e[t];e[t]=e[n];e[n]=r}return e},a=typeof labelArray=="object"&&labelArray.length>0?"/-/"+u(labelArray)[0]:"",f=function(e){var t=e.feed.openSearch$totalResults.$t-r.numPosts,n=o(1,t>0?t:1);s(r.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+a+"?alt=json-in-script&orderby=updated&start-index="+n+"&max-results="+r.numPosts+"&callback=showRelatedPost")},l=function(e){var t=document.getElementById(r.containerId),n=u(e.feed.entry),i=r.widgetStyle,s=r.widgetTitle+"<ul>",o=r.newTabLink?' target="_blank"':"",a='<span style="display:block;clear:both;"></span>',f,l,c,h,p;if(!t){return}for(var v=0;v<r.numPosts;v++){if(v==n.length){break}l=n[v].title.$t;c=r.titleLength!=="auto"&&r.titleLength<l.length?l.substring(0,r.titleLength)+"&hellip;":l;for(var m=0,g=n[v].link.length;m<g;m++){f=n[v].link[m].rel=="alternate"?n[v].link[m].href:"#"}s+='<li><a title="'+l+'" href="'+f+'"'+o+">"+c+"</a></li>"}t.innerHTML=s+="</ul>"+a;r.callBack()};randomRelatedIndex=f;showRelatedPost=l;s(r.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+a+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);
