var shareButton=document.getElementById("shareBtn"),
title=document.title,text=document.querySelector("title").textContent,url=window.location.href;shareButton.addEventListener("click",function(){navigator.share&&navigator.share({title:title,text:text,url:url})});
