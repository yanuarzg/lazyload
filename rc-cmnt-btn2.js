$(function() {postscribe('#RecentComments', '<script src=https://catatandroid.disqus.com/recent_comments_widget.js?num_items=15&hide_mods=0&hide_avatars=1&avatar_size=32&excerpt_length=100><\/script>');});
$(function(){$(".notif-show").on("click",function(){$("#disqus-notif").addClass("active").focus()});$(".close-1").on("click",function(){$("#disqus-notif").removeClass("active")})});
$(function(){$(".notif-show").on("click",function(){$("#overlay-1").addClass("active").focus()});$(".close-1").on("click",function(){$("#overlay-1").removeClass("active")})});
$("#RecentComments a").filter(function(){return this.hostname&&this.hostname!==location.hostname}).attr('rel', 'nofollow noopener').attr('target', '_blank');
$(function(){$(".notif-show").on("click",function(){$("dsq-widget-list").addClass("active").focus()});$(".close-1").on("click",function(){$("dsq-widget-list").removeClass("active")})});
