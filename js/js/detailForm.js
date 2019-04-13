$(function () {
    var deviceWidth = document.documentElement.clientWidth;
    var deviceHeight = document.documentElement.clientHeight;
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    $(".markLayer").css("height",deviceHeight);
    var designerModel = $(".container").find(".imModel").eq(0);
    var userAllPay,userAllPayPrice;
    $(".container").empty();
    $.ajax({
        async: false,
        data: {
            interfaceName: "GetCartByCustomerId",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            wishlistIds: storage.proList,
            nocache: 1
        }
    }).done(function (result) {
        //console.log(result);
        var list = result.Cart.Items;
        var listAddress = result.Cart.OrderReviewData.ShippingAddress;
        $(".lastName").html(listAddress.FirstName);
        $(".firstName").html(listAddress.LastName);
        $(".phoneNumber").html("(" + listAddress.PhoneNumber + ")");
        $(".addressOne").html(listAddress.Address1);
        $(".addressTwo").html(listAddress.Address2);
        $(".city").html(listAddress.City);
        $(".postCode").html("(" + listAddress.ZipPostalCode + ")");
        $(".postWay").html(result.Cart.OrderReviewData.ShippingMethod);
        for (var i = 0; i < list.length; i++) {
            designerModel.clone(true).appendTo($(".container"));
            var imgUrl = list[i].Picture.ImageUrl;
            var imgData = '<img src="' + imgUrl + '">';
            $(".cloth_show").eq(i).html(imgData);
            var designerName = list[i].ProductName.split("___");
            $(".brand").eq(i).html(designerName[1]);
            $(".myName").eq(i).html(designerName[0]);
            var mySize = list[i].AttributeInfo.split(":")[1].split("___")[0];
            $(".buyerSize").eq(i).html(mySize);
            var myPrice = list[i].UnitPrice;
            var quantity = list[i].Quantity;
            $(".price").eq(i).html(myPrice);
            $(".quantity").eq(i).html(quantity);
            var postWay = list[i].UseBondedStock;
            if (postWay == false) {
                $(".postWay").eq(i).html("[直邮]")
            } else {
                $(".postWay").eq(i).html("[国内仓发货]")
            }
        }
    });
    $.ajax({
        data: {
            interfaceName: "GetOrderTotals",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            nocache: 1
        }
    }).done(function (result) {
        //console.log(result);
        var listTotal = result.OrderTotals;
        userAllPay=listTotal.SubTotal;
        console.log(userAllPay);
        userAllPayPrice=userAllPay.split("¥")[1];
        $(".allPrice").html(userAllPay);
        $(".postMethod").html(listTotal.Shipping);
        if (listTotal.SubTotalDiscount != null) {
            $(".disCount").html(listTotal.SubTotalDiscount);
        } else {
            $(".disCount").html("N/A");
        }
        if (listTotal.GiftCards.length > 0) {
            $(".giftCard").html(listTotal.GiftCards[0].Amount);
        } else {
            $(".giftCard").html("N/A");
        }
        $(".userPay").html(listTotal.OrderTotal);
    });
    //获取积分
    $.ajax({
        data: {
            interfaceName: "getAvailableRewardPoints",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            nocache: 1
        }
    }).done(function (result) {
        //console.log(result);
        if (result.AvailableRewardPoints.RewardPointsBalance > 0) {
            $(".pointWrap").css({"display": "block"});
            $(".canUse").html(result.AvailableRewardPoints.RewardPointsBalance + "积分");
            $(".money").html("(" + result.AvailableRewardPoints.RewardPointsAmount + ")");
        }
    });
    var isUseRewardPoint = false;
    $(".circle3").click(function () {
        $(this).toggleClass("isApply");
        isUseRewardPoint = !isUseRewardPoint;
    });
    $(".upLoad").click(function () {
        $(".markLayer").css({"display":"block","top":$(window).scrollTop()});
        $("body").addClass("stopScroll");
        var userValue;
        var userOrderGuid;
        $.ajax({
            url:H5_AJAX_HTTP_URL,
            data: {
                interfaceName: "placeOrder",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                useRewardPoint: isUseRewardPoint,
                paymentSystemName: "Payments.AliPay",
                nocache: 1
            }
        }).done(function (result) {
            console.log(result);
            if(result.MetaData.ResponseCode==2000.0){
                $(".markLayer").css("display","none");
                $("body").removeClass("stopScroll");
                var userOrder = result.PlacedOrders[0].Currencies;
                userOrderGuid=result.PlacedOrders[0].OrderGuid;
                for (var i = 0; i < userOrder.length; i++) {
                    if (userOrder[i].Key == "RMB") {
                        userValue=userOrder[i].Value;
                    }
                }
                window.location.href=("http://h5.cloudokids.cn/Pay/alipayRSAApi?WIDout_trade_no="+userOrderGuid+"&WIDsubject="+"cloudoKid"+"&WIDshow_url="+"www.cloudokids.com"+"&WIDtotal_fee="+userValue+"&WIDbody="+"cloudoKids")
            }
        })
    });
});
