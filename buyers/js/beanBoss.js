function refresh() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 1080) {
        document.documentElement.style.fontSize = 1080 / 10.8 + "px";
    } else {
        document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
    }
}
refresh();
$(function () {
    var i = 0;
    var length=$(".allColor").length;
    function selfMotion() {
        i=i+1;
        for(var j=0;j<length;j++) {
            var k = i+j*3-1;
            $(".detailShow").eq(k).css("display", "block").siblings(".detailShow").css({"display": "none"});
        }
        if (i==3) {
            i = 0;
        }
    }
    selfMotion();
    setInterval(selfMotion, 3000);

});
