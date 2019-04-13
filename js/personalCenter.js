$(function () {
    var deviceWidth = document.documentElement.clientWidth;
    var deviceHeight = document.documentElement.clientHeight;
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    if (storage.cusEmail != "" && storage.cusEmail != null && storage.cusEmail != undefined) {
        $(".exit").css({"display": "block"});
        //用户手机号置入
        $.ajax({
            data: {
                interfaceName: "GetCustomerInfo",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail
            }
        }).done(function (result) {
            var userPhone = result.CustomerInfo.Email;
            $(".userName").html(userPhone);
        });
        //用户头像置入
        $.ajax({
            data: {
                interfaceName: "GetCustomerAvatar",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail
            }
        }).done(function (result) {
            var userAvatarUrl = result.CustomerAvatar.AvatarUrl;
            var imgData;
            if (userAvatarUrl == "") {
                imgData = '<img src="img/avatar@2x.png">';
            }
            $(".userHeard").html(imgData);
        });
    } else {
        $(".userName").html("未登录");
        $(".exit").css({"display": "none"});
        $(".userHeard").click(function () {
            window.location.href = ("login.html");
        });
    }
    var absoluteHeight = deviceHeight / 2 + $(window).scrollTop();
    $(".exit").click(function () {
        $(".maskLayerWrap").css({"height": deviceHeight, "display": "block"});
        var data = '<div>确定退出吗？</div><div><span class="confirm">确定</span><span class="cancel">取消</span></div>';
        $(".maskLayer").css({
            "display": "block",
            "height": 1 + "rem",
            "marginTop": -1 + "rem",
            "borderRadius": 0,
            top: absoluteHeight
        }).html(data);
    });
    $(".maskLayer").on("click", ".confirm", function () {
        $(".maskLayerWrap").css({"height": deviceHeight, "display": "none"});
        localStorage.removeItem("cusId");
        localStorage.removeItem("cusKey");
        localStorage.removeItem("cusEmail");
        localStorage.removeItem("proList");
        localStorage.removeItem("recentlyUserLook");
        //个人修改的地址信息清除
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("phoneNumber");
        localStorage.removeItem("position");
        localStorage.removeItem("changeId");
        localStorage.removeItem("city");
        localStorage.removeItem("cityCode");
        localStorage.removeItem("detailPosition");
        //结束
        $(".exit").css("display", "none");
        window.location.reload();
    });
    $(".maskLayer").on("click", ".cancel", function () {
        $(".maskLayerWrap").css({"height": deviceHeight, "display": "none"});
    });
    if (storage.cusEmail == "" || storage.cusEmail == null || storage.cusEmail == undefined) {
        $(".userInfo").on("click", "li", function () {
            window.location.href = ("login.html");
        });
        $(".collectWrap").click(function () {
            window.location.href = ("login.html");
        })
    } else {
        $(".orderForm").click(function () {
            window.location.href = ("more/orderForm.html");
        });
        $(".personalInfo").click(function () {
            window.location.href = ("more/personalInfo.html");
        });
        $(".manageAddress").click(function () {
            window.location.href = ("more/address.html");
        });
        $(".myPoint").click(function () {
            window.location.href = ("more/myPoints.html");
        });
        $(".collectWrap").click(function () {
            window.location.href = ("more/collect.html");
        });
    }
    //不登陆也可以看最近浏览的商品
    $(".lookWrap").click(function () {
        window.location.href = ("more/recentlyView.html");
    });
    if (storage.cusEmail != "" && storage.cusEmail != null && storage.cusEmail != undefined) {
        $.ajax({
            data: {
                interfaceName: "GetProfileFavoriteCount",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                profileId: cusId,
                nocache: 1
            }
        }).done(function (result) {
            $(".hasCollect").html(result.Count);
        })
    }
    //商品图去重方法
    var newImgArr;

    function unique1(arr) {
        newImgArr = [];//新建一个数组
        for (var i = 0, len = arr.length; i < len; i++) {
            if (newImgArr.indexOf(arr[i]) == -1) {//若新数组中未包含该项则将其存入新数组
                newImgArr.push(arr[i]);
            }
        }
        return newImgArr;
    }

    //结束
    if (storage.recentlyUrl != undefined && storage.recentlyUrl != null && storage.recentlyUrl != "") {
        var recentlyArr = storage.recentlyUrl;
        var myRecentlyArr = recentlyArr.split(",");
        unique1(myRecentlyArr);
        if (newImgArr.length > 40) {
            $(".hasLook").html(40);
        } else {
            $(".hasLook").html(newImgArr.length);
        }
    }
});
