    $(function(){
        $('[datetime]:not(.timeago)').each(function() {
            var $this = $(this);
            var data_timeago = $this.attr('datetime');
            $this.addClass('timeago');
            if(!$this.attr('title')) {
                $this.attr('title', data_timeago);
            }
            $this.text(get_timeago(data_timeago));
        });
    });
    function get_timeago(t) {
        var e = new Date(t),
            a = 36e5,
            o = 24 * a,
            s = 30 * o,
            i = 365 * o,
            n = "ago",
            l = new Date - e;
        return l < 6e4 ? Math.round(l / 1e3) + " secs " + n : l < a ? Math.round(l / 6e4) + " mins " + n : l < o ? Math.round(l / a) + " hours " + n : l < s ? Math.round(l / o) + " days " + n : l < i ? Math.round(l / s) + " months " + n : Math.round(l / i) + " years " + n
    }
