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
    //点击收藏获取所有收藏的商品
    $.ajax({
        async: false,
        data: {
            interfaceName: "getFavorites",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            favoriteIdFrom: 0,
            favoriteIdTo: 0,
            nocache: 1
        }
    }).done(function (result) {
        var userCollect = result.Favorites;
        for (var i = 0; i < userCollect.length; i++) {
            model.clone(true).appendTo($(".content"));
            var picUrl = userCollect[i].PictureUrl;
            var picId = userCollect[i].ProductId;
            var delId = userCollect[i].Id;
            var imgUrl = '<img src="' + picUrl + '" alt="" proid="' + picId + '" id="' + delId + '">';
            $(".content").find(".singleModel").eq(i).find(".imgWrap").html(imgUrl);
            if (i < 3) {
                $(".content").find(".singleModel").eq(i).css("borderTop", 0)
            }
        }
        for(var i = 0; i < userCollect.length; i++){
            $(".content").find(".singleModel").eq(3 * i).css("borderLeft", 0);
        }
        $(".singleModel").css({"height": height});
    });
    //点击图文进入详情页,添加mark标记，判断是否进入详情页
    var imgMark = 0;
    var imgArr = [];
    //检查数组是否存在某个值方法，选择删除图片获取id 添加 去除数组中此值
    Array.prototype.Contains = function (element) {
        var i = 0;
        for (; i < this.length; i++) {
            if (this[i] == element) {
                this.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    //检查结束
    var delArr = [];
    $(".content").delegate("img", "click", function () {
        if (imgMark == 0) {
            var obtainId = $(this).attr("proid");
            window.location.href = "../detailPages.html#" + obtainId;
            return;
        }
        $(this).parents(".imgWrap").siblings(".checkMe").toggleClass("isChecked");
        if (imgMark == 1) {
            var idList = $(this).attr("id");
            if (delArr.Contains(idList) == false) {
                delArr.push(idList);
            }
            if (delArr.length > 0) {
                $(".delCollect").prop("disabled", false);
            } else {
                $(".delCollect").prop("disabled", true);
            }
        }
    });
    //点击删除收藏
    $(".choose").click(function () {
        imgMark = 1;
        $(".choose").css("display", "none");
        $(".delete").css("display", "block");
    });

    $(".cancel").click(function () {
        imgMark = 0;
        $(".choose").css("display", "block");
        $(".delete").css("display", "none");
        $(".checkMe").removeClass("isChecked");
        delArr=[];
    });

    //删除选中商品图片的ID
    $(".markLayer").css({"height": deviceHeight});
    $(".delCollect").click(function () {
        $(".markLayer").css("display", "block");
        var delString = delArr.join(",");
        $.ajax({
            data: {
                interfaceName: "deleteFavorites",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                favoriteIds: delString
            }
        }).done(function (result) {
            if (result.MetaData.ResponseCode == 2000.0) {
                $(".waitMoment").html("删除成功");
                window.location.reload();
                setTimeout(function () {
                    $(".markLayer").css("display", "none");
                }, 500)
            }
        });
    });
});
