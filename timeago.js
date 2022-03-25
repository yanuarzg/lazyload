/*! timeago kangrian */
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
            n = "yang lalu",
            l = new Date - e;
        return l < 6e4 ? Math.round(l / 1e3) + " detik " + n : l < a ? Math.round(l / 6e4) + " menit " + n : l < o ? Math.round(l / a) + " jam " + n : l < s ? Math.round(l / o) + " hari " + n : l < i ? Math.round(l / s) + " bulan " + n : Math.round(l / i) + " tahun " + n
    }
