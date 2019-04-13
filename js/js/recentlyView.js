$(function () {
    var deviceWidth = document.documentElement.clientWidth;
    var deviceHeight = document.documentElement.clientHeight;
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    var model = $(".content").find(".singleModel").eq(0);
    var height = $(window).width() / 3;
    $(".content").empty();
    //商品图去重方法
    var newImgArr;

    function unique1(arr) {
        newImgArr = [];//新建一个Img数组
        for (var i = 0, len = arr.length; i < len; i++) {
            if (newImgArr.indexOf(arr[i]) == -1) {//若新数组中未包含该项则将其存入新img数组
                newImgArr.push(arr[i]);
            }
        }
        return newImgArr;
    }

    //结束
    //点击收藏获取所有收藏的商品放进一个数组
    var productUrlArr = [];
    if (storage.recentlyUrl != undefined) {
        var productUrl = storage.recentlyUrl;
        productUrlArr = productUrl.split(",").reverse();
    }
    //结束
    unique1(productUrlArr);
    if (newImgArr.length > 40) {
        newImgArr.length = 40;
    }
    for (var i = 0; i < newImgArr.length; i++) {
        model.clone(true).appendTo($(".content"));
        $(".content").find(".singleModel").eq(i).find(".imgWrap").html(newImgArr[i]);
    }
    if (newImgArr.length == 0) {
        $(".viewNull").css("display","block").html("您的浏览最近是空的");
    }

    //浏览清空
    $(".markLayer").css("height", deviceHeight);
    $(".clear").click(function () {
        $(".markLayer").css({"height": deviceHeight, "display": "block", "top": $(window).scrollTop()});
        $("body").addClass("stopScroll");
    });
    $(".imTrue").click(function () {
        localStorage.removeItem("recentlyUrl");
        window.location.reload();
        $(".markLayer").css("display", "none");
        $("body").removeClass("stopScroll");
    });
    $(".noTrue").click(function () {
        $(".markLayer").css("display", "none");
        $("body").removeClass("stopScroll");
    });
    //浏览过的商品点击
    $(".content").on("click", "img", function () {
        var obtainId = $(this).attr("recentlyid");
        window.location.href = "../detailPages.html#" + obtainId;
    });


});

