/**
 * Created by 24212 on 2017/4/17.
 */
$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var myOrderId = getUrlParams("orderId");
    var myOrderStatus = decodeURI(getUrlParams("orderStatus"));
    var myPaymentStatus = decodeURI(getUrlParams("paymentStatus"));
    $(".address").html("订单号#" + myOrderId);
    function getUrlParams(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substring(1).match(reg);
        if (r != null) {
            return r[2];
        }
        else {
            return "";
        }
    }
    if (myOrderStatus == "Cancelled" || myOrderStatus == "已取消" || myPaymentStatus == "Paid" || myPaymentStatus == "已付款") {
        $(".conform_info").css("display", "none");
    }
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    var model = $(".container").find(".imModel").eq(0);
    $(".container").empty();
    var userOrderGuid, userOrderValue;
    $.ajax({
        data: {
            interfaceName: "GetCustomerOrderDetails",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            orderId: myOrderId
        }
    }).done(function (result) {
        //支付订单号
        userOrderGuid = result.PlacedOrder.OrderGuid;
        //
        var currentList = result.PlacedOrder.Currencies;
        for (var j = 0; j < currentList.length; j++) {
            if (currentList[j].Key == "RMB") {
                userOrderValue = currentList[j].Value;
            }
        }
        var buyerOrder = result.OrderDetails;
        var buyerList = result.OrderDetails.Items;
        var ourAddress = result.OrderDetails.ShippingAddress;
        $(".statusOne").html(buyerOrder.OrderStatus);
        $(".statusTwo").html(buyerOrder.PaymentMethodStatus);
        $(".statusThree").html(buyerOrder.ShippingStatus);
        for (var i = 0; i < buyerList.length; i++) {
            model.clone(true).appendTo($(".container"));
            var imgUrl = buyerList[i].PictureThumbnailUrl;
            var data = '<img src="' + imgUrl + '">';
            $(".container").find(".cloth_show").eq(i).html(data);
            var designerName = buyerList[i].ProductName.split("___")[1];
            var designerDetailName = buyerList[i].ProductName.split("___")[0];
            var sizeInfo = buyerList[i].AttributeInfo.split(":")[1];
            var postWay = buyerList[i].UseBondedStock;
            var unitPrice = buyerList[i].UnitPrice;
            var quantity = buyerList[i].Quantity;
            $(".container").find(".brand").eq(i).html(designerName);
            $(".container").find(".myName").eq(i).html(designerDetailName);
            $(".container").find(".buyerSize").eq(i).html(sizeInfo);
            if (postWay == false) {
                $(".container").find(".postWay").eq(i).html("[直邮]");
            } else {
                $(".container").find(".postWay").eq(i).html("[国内仓]");
            }
            $(".container").find(".price").eq(i).html(unitPrice);
            $(".container").find(".quantity").eq(i).html(quantity);
        }
        $(".postWayTwo").html(result.OrderDetails.ShippingMethod);
        $(".firstName").html(ourAddress.LastName);
        $(".lastName").html(ourAddress.FirstName);
        $(".phoneNumber").html("(" + ourAddress.PhoneNumber + ")");
        $(".addressOne").html(ourAddress.Address1);
        $(".addressTwo").html(ourAddress.Address2);
        $(".city").html(ourAddress.City);
        $(".postCode").html(ourAddress.ZipPostalCode);
        $(".allPrice").html(buyerOrder.OrderSubtotal);
        $(".postMethod").html(buyerOrder.OrderShipping);
        $(".userPay").html(buyerOrder.OrderTotal);
        if (buyerOrder.OrderSubTotalDiscount != null) {
            $(".disCount").html(buyerOrder.OrderSubTotalDiscount);
        } else {
            $(".disCount").html("N/A");
        }
        if (buyerOrder.GiftCards > 0) {
            $(".giftCard").html(buyerOrder.GiftCards[0].Amount);
        } else {
            $(".giftCard").html("N/A");
        }
        if (buyerOrder.RedeemedRewardPointsAmount != null) {
            $(".userPoint").html(buyerOrder.RedeemedRewardPointsAmount);
        } else {
            $(".userPoint").html("N/A");
        }
    });

    $(".upLoad").click(function () {
        window.location.href = ("http://h5.cloudokids.cn/Pay/alipayRSAApi?WIDout_trade_no=" + userOrderGuid + "&WIDsubject=" + "cloudoKid" + "&WIDshow_url=" + "www.cloudokids.com" + "&WIDtotal_fee=" + userOrderValue + "&WIDbody=" + "cloudoKids")

    });


});