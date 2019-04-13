/**
 * Created by 杰 on 2017/1/8.
 */
/**
 * Created by 24212 on 2017/1/7.
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

    var mySwiper = new Swiper('.swiper-container_one', {
        direction: 'horizontal',
        loop: true,
        // 分页器
        pagination: '.swiper-pagination'
    });

//买手团队轮播部分
    var mySwiper_two = new Swiper('.swiper-container_two', {
        direction: 'horizontal',
        loop: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });


});