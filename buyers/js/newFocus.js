/**
 * Created by 24212 on 2017/1/24.
 */
$(function(){
    function refresh() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 1080) {
            document.documentElement.style.fontSize = 1080 / 10.8 + "px";
        } else {
            document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
        }
    }

    refresh();
    window.onresize = function () {
        refresh();
    };
});