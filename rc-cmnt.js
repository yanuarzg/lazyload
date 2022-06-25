//
// Recent Comments blogger gadget by MS-potilas 2011
// see https://yabtb.blogspot.com/2011/11/return-of-better-recent-comments-gadget.html
//
// CONFIG:
var numRecentComments = 5;
var numPerPost = 2; // max comments per post (to try) or 0
var maxCommentChars = 40;
var maxPostTitleChars = 0; // if 0, use full post title
 
var txtWrote = 'wrote:';
var txtMore = 'Continue >>';
var txtTooltip = '[user] on &quot;[title]&quot; - [date MM/dd/yy hh:mm]';
var txtAnonymous = ''; // empty, or Anonymous user name localized
// Variables [xxx] in texts:
// supports [title], [user], [date], [time], [datetime], [date format]
// format supports: yyyy=long year, yy=short year, MM=month(01-12), dd=monthday, hh=hour, mm=min, ss=sec
 
var getTitles = true;   // false faster
var trueAvatars = true; // false faster
var urlMyAvatar = '';   // can be empty (then it is fetched) or url to image
var urlMyProfile = '';  // set if you have no profile gadget on page
//
var urlAnoAvatar = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=24';
var maxResultsPosts = "";       // or for example "&max-results=100"
var maxResultsComments = "";    // or for example "&max-results=300"
// CONFIG END
var urlToTitle = {};
function replaceVars(text, user, title, date) {
  text = text.replace('[user]', user);
  text = text.replace('[date]', date.toLocaleDateString());
  text = text.replace('[datetime]', date.toLocaleString());
  text = text.replace('[time]', date.toLocaleTimeString());
  text = text.replace('[title]', title.replace(/\"/g,'&quot;'));
  var i = text.indexOf("[date ");
  if(i > -1) {
    var format = /\[date\s+(.+?)\]/.exec(text)[1];
    if(format != '') {
      var txtDate = format.replace(/yyyy/i, date.getFullYear());
      txtDate = txtDate.replace(/yy/i, date.getFullYear().toString().slice(-2));
      txtDate = txtDate.replace("MM", String("0"+(date.getMonth()+1)).slice(-2));
      txtDate = txtDate.replace("mm", String("0"+date.getMinutes()).slice(-2));
      txtDate = txtDate.replace("ss", String("0"+date.getSeconds()).slice(-2));
      txtDate = txtDate.replace("dd", String("0"+date.getDate()).slice(-2));
//or: txtDate = txtDate.replace("dd", date.getDate());
      txtDate = txtDate.replace("hh", String("0"+date.getHours()).slice(-2));
//or: txtDate = txtDate.replace("hh", date.getHours());
      text = text.replace(/\[date\s+(.+?)\]/, txtDate)
    }
  }
  return text;
}
if(urlMyProfile == "") {
  var elements = document.getElementsByTagName("*");
  var expr = /(^| )profile-link( |$)/;
  for(var i=0 ; i<elements.length ; i++)
    if(expr.test(elements[i].className)) {
      urlMyProfile = elements[i].href;
      break;
    }
}
function getPostUrlsForComments(json) {
  for(var i = 0 ; i < json.feed.entry.length ; i++ ) {
    var entry = json.feed.entry[i];
    var href;
    for (var k = 0; k < entry.link.length; k++ ) {
      if (entry.link[k].rel == 'alternate') {
        href = entry.link[k].href;
        break;
      }
    }
    urlToTitle[href] = entry.title.$t;
  }
}
function showRecentComments(json) {
  var postHandled = {};
  var j = 0;
  if(numPerPost) {
    while(numPerPost < numRecentComments) {
      for(var i = 0 ; i < json.feed.entry.length ; i++ ) {
        var entry = json.feed.entry[i];
        if(entry["thr$in-reply-to"]) {
          if(!postHandled[entry["thr$in-reply-to"].href])
              postHandled[entry["thr$in-reply-to"].href] = 1;
          else
              postHandled[entry["thr$in-reply-to"].href]++;
          if(postHandled[entry["thr$in-reply-to"].href] <= numPerPost)
            j++;
        }
      }
      if(j >= numRecentComments)
        break;
      numPerPost++;
      j = 0;
      postHandled = {};
    }
    if(numRecentComments == numPerPost)
       numPerPost = 0;
  }
  postHandled = {};
  j = 0;
  for(var i = 0 ; j < numRecentComments && i < json.feed.entry.length ; i++ ) {
    var entry = json.feed.entry[i];
    if(numPerPost && postHandled[entry["thr$in-reply-to"].href] && postHandled[entry["thr$in-reply-to"].href] >= numPerPost)
      continue;
    if(entry["thr$in-reply-to"]) {
      if(!postHandled[entry["thr$in-reply-to"].href])
          postHandled[entry["thr$in-reply-to"].href] = 1;
      else
          postHandled[entry["thr$in-reply-to"].href]++;
      j++;
      var href='';
      for (var k = 0; k < entry.link.length; k++ ) {
        if (entry.link[k].rel == 'alternate') {
          href = entry.link[k].href;
          break;
        }
      }
      if(href=='') {j--; continue; }
      var hrefPost = href.split("?")[0];
      var comment = "";
      if("content" in entry) comment = entry.content.$t;
      else                   comment = entry.summary.$t;
      comment = comment.replace(/<br[^>]*>/ig, " ");
      comment = comment.replace(/<\S[^>]*>/g, "");
      var postTitle="-";
      if(urlToTitle[hrefPost]) postTitle=urlToTitle[hrefPost];
      else {
        if(hrefPost.match(/\/([^/]*)\.html/)) postTitle = hrefPost.match(/\/([^/]*)\.html/)[1].replace(/_\d{2}$/, "");
        postTitle = postTitle.replace(/-/g," ");
        postTitle = postTitle[0].toUpperCase() + postTitle.slice(1);
      }
      if(maxPostTitleChars && postTitle.length > maxPostTitleChars) {
        postTitle = postTitle.substring(0, maxPostTitleChars);
        var indexBreak = postTitle.lastIndexOf(" ");
        postTitle = postTitle.substring(0, indexBreak) + "...";
      }
 
      var authorName = entry.author[0].name.$t
      var authorUri = ""
      if(entry.author[0].uri && entry.author[0].uri.$t != "")
        authorUri = entry.author[0].uri.$t;
   
      var avaimg = urlAnoAvatar;
      var bloggerprofile = "https://www.blogger.com/profile/";
      if(trueAvatars && authorUri.substr(0,bloggerprofile.length) == bloggerprofile)
          avaimg = "https://avafavico.appspot.com/?userid=" + authorUri.substr(bloggerprofile.length);
      else {
        var parseurl = document.createElement('a');
        if(authorUri != "") {
          parseurl.href = authorUri;
          avaimg = 'https://www.google.com/s2/favicons?domain=' + parseurl.hostname;
        }
      }
      if(authorUri == urlMyProfile && urlMyAvatar != "")
        avaimg = urlMyAvatar;
      if(authorName == 'Anonymous' && txtAnonymous != '' && avaimg == urlAnoAvatar)
        authorName = txtAnonymous;
      var imgcode = '<img height="auto" width="15" title="'+authorName+'" src="'+avaimg+'" />';
      if (authorUri!="") imgcode = '<a href="'+authorUri+'">'+imgcode+'</a>';
 
      var clsAdmin = "";
      if(authorUri == urlMyProfile)
          clsAdmin = " recent-comment-admin";
 
      var datePart = entry.published.$t.match(/\d+/g); // assume ISO 8601
      var cmtDate = new Date(datePart[0],datePart[1]-1,datePart[2],datePart[3],datePart[4],datePart[5]);
 
      var txtHeader = txtWrote;
      if(txtWrote.indexOf('[')==-1)
        txtHeader = authorName + ' ' + txtWrote;
      else
        txtHeader = replaceVars(txtHeader, authorName, postTitle, cmtDate);
 
      var tooltip = replaceVars(txtTooltip, authorName, postTitle, cmtDate);
      if(!/#/.test(href)) href += "#comments";
      document.write('<div title="'+tooltip+'" class="recent-comment'+clsAdmin+'">');
      document.write('<div title="'+tooltip+'" class="recent-comment-header'+clsAdmin+'"><div title="'+tooltip+'" class="recent-comment-ico'+clsAdmin+'">'+imgcode+'</div><a title="'+tooltip+'" href="' + href + '">' + txtHeader + ' </a></div>');
      if(comment.length < maxCommentChars)
        document.write('<div title="'+tooltip+'" class="recent-comment-body'+clsAdmin+'">' + comment + '</div>');
      else {
        comment = comment.substring(0, maxCommentChars);
        var indexBreak = comment.lastIndexOf(" ");
        comment = comment.substring(0, indexBreak);
        document.write('<div title="'+tooltip+'" class="recent-comment-body'+clsAdmin+'">' + comment + '...</div>');
        if(txtMore != "") {
          var moretext = replaceVars(txtMore, authorName, postTitle, cmtDate);
          document.write('<div title="'+tooltip+'" class="recent-comment-footer'+clsAdmin+'"><a title="'+tooltip+'" href="' + href + '">' + moretext + '</a></div>');
        }
      }
      document.write('</div>');
    }
  }
}
