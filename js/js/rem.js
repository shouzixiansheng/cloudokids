function refresh() {
    var deviceWidth = document.documentElement.clientWidth;//移动端的浏览器视口的宽度 pc端用的是coffsetWidth;
    if (deviceWidth > 1080) {
        document.documentElement.style.fontSize = 1080 / 10.8 + "px";
    } else {
        document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
    }
}
refresh();