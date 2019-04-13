$(function () {
    var deviceWidth = document.documentElement.clientWidth;
    var deviceHeight = document.documentElement.clientHeight;
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var myPostMethod;
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    var postModel = $(".user_info").find(".postWay").eq(0);
    $(".user_info").empty();
    //邮寄方式
    $.ajax({
        cache: "false",
        data: {
            interfaceName: "getShippingMethod",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            nocache: 1
        }
    }).done(function (result) {
        console.log(result);
        var postWay = result.CheckoutShippingMethod.ShippingMethods;
        for (var i = 0; i < postWay.length; i++) {
            postModel.clone(true).appendTo($(".user_info"));
            var userPostWay = postWay[i].Name + "___" + postWay[i].ShippingRateComputationMethodSystemName;
            $(".total_price").eq(i).html(postWay[i].Fee);
            $(".interNational").eq(i).html(postWay[i].Name);
            $(".workday").eq(i).html(postWay[i].Description);
            $(".postWay").eq(i).attr("postMethod", userPostWay);
        }
        $(".postWay").eq(0).css({"background": "#333"}).find("span").css("color", "#fff");
        //默认邮寄方式
        myPostMethod = postWay[0].Name + "___" + postWay[0].ShippingRateComputationMethodSystemName;
    });
    //邮寄方式选择
    $(".user_info").on("click", ".postWay", function () {
        myPostMethod = $(this).attr("postMethod");
        $(this).css({
            "background": "#333",
            "color": "#fff"
        }).find("span").css("color", "#fff").end().siblings(".postWay").css({"background": "#fff"}).find("span").css("color", "#000");
    });
    //邮寄选择结束

    //保存核对订单
    $("#confirm").click(function () {
        $.ajax({
            data: {
                interfaceName: "selectShippingMethod",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                shippingMethod: myPostMethod,
                nocache: 1
            }
        }).done(function (result) {
            console.log(result);
            if (result.MetaData.ResponseCode == 2000.0) {
                window.location.href = ('detailForm.html');
            }
        })
    });

});
