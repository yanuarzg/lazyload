/*! yang ngintip */
$.each($(".post-view[data-id]"),function(c,f){
  var b=$(f).parent().find("#postviews").addClass("view-load"),
      d=new Firebase("https://ctd-rating-default-rtdb.firebaseio.com/"+$(f).attr("data-id"));
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
