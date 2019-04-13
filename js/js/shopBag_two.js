$(function () {
    var deviceWidth = document.documentElement.clientWidth;
    var deviceHeight = document.documentElement.clientHeight;
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var buyerBag = storage.proList;
    var giftCardId;
    //console.log(buyerBag);
    var wishId = buyerBag.split(",");
    //console.log(wishId);
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    var myModel = $(".container").find(".model").eq(0);
    $(".container").empty();
    //预购价格商品展示
    getCartId();
    function getCartId() {
        var length = arguments.length;
        var data = [];
        if (length > 0) {
            data = {
                interfaceName: "GetCartByCustomerId",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                nocache: 1
            };
        } else {
            data = {
                interfaceName: "GetCartByCustomerId",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                wishlistIds: storage.proList,
                nocache: 1
            };
        }
        $.ajax({
            async: false,
            cache: false,
            data: data
        }).done(function (result) {
            var list = result.Cart.Items;
            var listLength = list.length;
            for (var i = 0; i < listLength; i++) {
                myModel.clone(true).appendTo($(".container"));
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
            if (result.Cart.DiscountBox.CurrentCode != null) {
                $(".discountCode").val(result.Cart.DiscountBox.CurrentCode);
            }
            if ($(".discountCode").val() != "请输入" && $(".discountCode").val() != "") {
                $(".discountCode").prop("disabled", true);
            }
        });
    }

    //计算总的商品价格
    totalPrice();
    function totalPrice() {
        $.ajax({
            cache: false,
            data: {
                interfaceName: "GetOrderTotals",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                nocache: 1
            }
        }).done(function (result) {
            //console.log(result);
            var totalLast = result.OrderTotals;
            $(".total_price").html(totalLast.SubTotal);

            if (totalLast.GiftCards.length > 0) {
                $(".giftApply").css("display", "none");
                $(".giftDelete").css({"display": "block"});
                //删除礼品卡码待用
                giftCardId=totalLast.GiftCards[0].Id;
            }

            if (totalLast.Shipping == null) {
                $(".delivery").html("N/A");
            } else {
                $(".delivery").html(totalLast.Shipping);
            }
            if (totalLast.GiftCards.length == 0) {
                $(".giftCard").html("N/A");
            } else {
                var cardCode = totalLast.GiftCards[0].CouponCode;
                $(".giftCard").html(totalLast.GiftCards[0].Amount);
                $(".giftCode").val(cardCode).prop("disabled", true);

            }
            if (totalLast.SubTotalDiscount == null && totalLast.OrderTotalDiscount == null) {
                $(".favorable").html("N/A")
            }
            else if (totalLast.SubTotalDiscount != null && totalLast.OrderTotalDiscount != null) {
                $(".favorable").html(totalLast.SubTotalDiscount + ',' + totalLast.OrderTotalDiscount);
                $(".discountApply").css("display", "none");
                $(".discountDelete").css("display", "block");
            }
            else if (totalLast.SubTotalDiscount == null && totalLast.OrderTotalDiscount != null) {
                $(".favorable").html(totalLast.OrderTotalDiscount);
                $(".discountApply").css("display", "none");
                $(".discountDelete").css("display", "block");
            }
            else if (totalLast.SubTotalDiscount != null && totalLast.OrderTotalDiscount == null) {
                $(".favorable").html(totalLast.SubTotalDiscount);
                $(".discountApply").css("display", "none");
                $(".discountDelete").css("display", "block");
            }
        })
    }

    //礼品卡使用支付
    $(".maskLayerWrap").css({"height": deviceHeight});
    $(".giftApply").click(function () {
        var giftCode = $(".giftCode").val();
        var scrollTop = $(window).scrollTop();
        if (giftCode == "请输入" || giftCode == "") {
            $(".maskLayerWrap").css({"display": "block", "top": scrollTop});
            var data = '<div>抱歉</div><div>请完整填写所需信息</div><div class="imOk">好的</div>';
            $(".maskLayer").css("display", "block").html(data);
            $("body").addClass("stopScroll");
            return;
        }
        $.ajax({
            data: {
                interfaceName: "applyGiftCard",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                giftCardCouponCode: giftCode,
                nocache:1
            }
        }).done(function (result) {
            console.log(result);
            if (result.MetaData.ResponseCode == 2000.0 && result.Cart.GiftCardBox.IsApplied == true) {
                $(".giftCode").prop("disabled", true);
                $(".container").empty();
                //再次调用，用于系统整理订单
                getCartId(false);
                totalPrice();
                $(".giftApply").css("display", "none");
                $(".giftDelete").css("display", "block");
            } else {
                $(".giftCode").val("请输入");
            }
        });
    });
    //点击好的提示消失
    $(".maskLayer").on("click", ".imOk", function () {
        $(".maskLayerWrap").css({"display": "none"});
        $(".maskLayer").css("display", "none");
        $("body").removeClass("stopScroll");
    });
    //礼品卡使用结束
    //打折卡使用
    $(".discountApply").click(function () {
        var discountCode = $(".discountCode").val();
        var scrollTop = $(window).scrollTop();
        if (discountCode == "请输入" || discountCode == "") {
            $(".maskLayerWrap").css({"display": "block", "top": scrollTop});
            var data = '<div>抱歉</div><div>请完整填写所需信息</div><div class="imOk">好的</div>';
            $(".maskLayer").css("display", "block").html(data);
            $("body").addClass("stopScroll");
            return;
        }
        $.ajax({
            data: {
                interfaceName: "applyDiscountCoupon",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                discountCouponCode: discountCode,
                nocache:1
            }
        }).done(function (result) {
            //console.log(result);
            if (result.MetaData.ResponseCode == 2000.0 && result.Cart.DiscountBox.IsApplied == true) {
                $(".discountCode").prop("disabled", true);
                $(".container").empty();
                //再次调用，用于系统整理订单
                getCartId(false);
                totalPrice();
                $(".discountApply").css("display", "none");
                $(".discountDelete").css("display", "block");
            } else {
                $(".discountCode").val("请输入");
            }

        });
    });
    //打折卡使用结束
    $("input").focus(function () {
        $(this).val("");
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).val("请输入");
        }
    });

    //点击进入下一步
    $(".goNext").click(function () {
        window.location.href = ('shopBag_three.html');
    });
    //点击移除礼品卡码
    $(".giftDelete").click(function () {
        $.ajax({
           data:{
               interfaceName:"removeGiftCardById",
               customerAccessKey: cusKey,
               customerId: cusId,
               customerEmail: cusEmail,
               id:giftCardId,
               nocache: 1
           }
        }).done(function(result){
            //console.log(result);
            if(result.MetaData.ResponseCode == 2000.0){
                $(".container").empty();
                $(".giftCode").val("请输入").prop("disabled",false);
                $(".giftApply").css("display", "block");
                $(".giftDelete").css({"display": "none"});
                getCartId(false);
                totalPrice();
            }
        });
    });
    //礼品卡码移除成功
    //点击折扣码移除
    $(".discountDelete").click(function(){
        $.ajax({
            data:{
                interfaceName:"removeDiscountCoupon",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                nocache:1
            }
        }).done(function(result){
            if(result.MetaData.ResponseCode == 2000.0){
                $(".container").empty();
                $(".discountCode").val("请输入").prop("disabled",false);
                $(".discountApply").css("display", "block");
                $(".discountDelete").css({"display": "none"});
                getCartId(false);
                totalPrice();
            }
        })
    });
    //折扣码移除成功

});
