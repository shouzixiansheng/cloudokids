/**
 * Created by admin on 2017/5/7.
 */

$(function () {

    function refresh() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 1080) {
            document.documentElement.style.fontSize = 1080 / 10.8 + "px";
        } else {
            document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
        }
    }
    refresh();


    var mySwiper = new Swiper('.swiper-container_one', {
        direction: 'horizontal',
        loop: true,
        autoplay: 8000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination'
    });
    //买手团队轮播部分
    $.ajax({
        url: H5_AJAX_HTTP_URL,
        dataType: "json",
        async: false,
        data: {
            interfaceName: "GetBuyers",
            customerId: "6",
            customerAccessKey: "475043A85C1AC34DD70F48EB47B6E1E1CB04D481",
            customerEmail: "h5@cloudokids.com"
        }
    }).done(function (result) {
        var teamModel = $(".teamBox").find(".teamModel").eq(0);
        $(".teamBox").empty();
        var buyer = result.Customers;
        for (var i = 0; i < buyer.length; i++) {
            teamModel.clone(true).appendTo($(".teamBox"));
            var userId = "cloudokids://buyer/" + buyer[i].Id;
            var src = buyer[i].AvatarUrl;
            if (src == "") {
                src = "http://h5.cloudokids.cn/buyers/listImg/cloudokids.png";
            }
            $(".teamModel").eq(i).find("a").attr("href", userId);
            var imgData = '<img src="' + src + '" alt=""> ';
            $(".teamModel").eq(i).find(".imgWrap").html(imgData);
            var userName = buyer[i].Username;
            $(".teamModel").eq(i).find(".Name").html(userName);
        }
    });
    var mySwiper_two = new Swiper('.swiper-container_two', {
        scrollbar: '.swiper-scrollbar',
        slidesPerView: 5
    });
})
