$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    $(".package").css("width", $(window).width());
    $(".orderForm li").find("span").click(function () {
        $(this).siblings(".package").css({"display": "block"}).parents("li").siblings("li").find(".package").css({"display": "none"});
        $(this).find(".border").css("display", "block").parents("li").siblings("li").find(".border").css("display", "none");
    });

    var model = $(".littleForm").find(".formModel").eq(0);
    $(".littleForm").empty();
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    orderForm();
    function orderForm() {
        $(".littleForm").empty();
        $.ajax({
            async: false,
            cache: false,
            data: {
                interfaceName: "getCustomerOrders",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                orderStatus: "",
                nocache: 1
            }
        }).done(function (result) {
            //console.log(result);
            var timestamp = new Date().getTime();
            var myListOrder = result.CustomerOrders.Orders;
            if (myListOrder.length == 0) {
                $(".hasComplete1").css("display", "block");
            } else{
                for (var i = 0; i < myListOrder.length; i++) {
                    model.clone(true).appendTo($(".littleForm"));
                    var orderTime = myListOrder[i].CreatedOn;
                    var myOrderTime = orderTime.split("(")[1].split(")")[0];
                    var differentTime = timestamp - myOrderTime;
                    $(".littleForm").find(".formModel").eq(i).attr("myOrderId", myListOrder[i].Id).attr("orderStatus", myListOrder[i].OrderStatus).attr("paymentStatus", myListOrder[i].PaymentStatus);
                    $(".littleForm").find(".numberOne").eq(i).html("订单#" + myListOrder[i].Id);
                    $(".littleForm").find(".handleNumber").eq(i).html(myListOrder[i].OrderStatus);
                    $(".littleForm").find(".price").eq(i).html(myListOrder[i].OrderTotal);
                    var year = Math.floor(differentTime / (365 * 24 * 3600 * 1000));
                    if (year > 0) {
                        $(".littleForm").find(".usTime").eq(i).html(year + "Y以前");
                        continue;
                    }
                    var month = Math.floor(differentTime / (30 * 24 * 3600 * 1000));
                    if (month > 0) {
                        $(".littleForm").find(".usTime").eq(i).html(month + "M以前");
                        continue;
                    }
                    var week = Math.floor(differentTime / (7 * 24 * 3600 * 1000));
                    if (week > 0) {
                        $(".littleForm").find(".usTime").eq(i).html(week + "W以前");
                        continue;
                    }
                    var day = Math.floor(differentTime / (24 * 3600 * 1000));
                    if (day > 0) {
                        $(".littleForm").find(".usTime").eq(i).html(day + "D以前");
                        continue;
                    }
                    var hour = Math.floor(differentTime / (3600 * 1000));
                    if (hour > 0) {
                        $(".littleForm").find(".usTime").eq(i).html(hour + "H以前");
                        continue;
                    }
                    var min = Math.floor(differentTime / (60 * 1000));
                    if (min > 0) {
                        $(".littleForm").find(".usTime").eq(i).html(min + "m以前");
                        continue;
                    }
                    var s = Math.floor(differentTime / 1000);
                    if (s > 0) {
                        $(".littleForm").find(".usTime").eq(i).html(s + "s以前");
                        continue;
                    }
                }
            }
        })
    }

    $(".allForm").click(function (ev) {
        ev.stopPropagation();
        orderForm();
    });
    //待支付，待确认
    $(".waitConfirm").click(function (ev) {
        ev.stopPropagation();
        var timestamp = new Date().getTime();
        $(".littleForm2").empty();
        $.ajax({
            async: false,
            cache: false,
            data: {
                interfaceName: "getCustomerOrders",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                orderStatus: "pending",
                nocache: 1
            }
        }).done(function (result) {
            //console.log(result);
            var myListOrder = result.CustomerOrders.Orders;
            if (myListOrder.length == 0) {
                $(".hasComplete2").css("display", "block");
            } else{
                for (var i = 0; i < myListOrder.length; i++) {
                    model.clone(true).appendTo($(".littleForm2"));
                    var orderTime = myListOrder[i].CreatedOn;
                    var myOrderTime = orderTime.split("(")[1].split(")")[0];
                    var differentTime = timestamp - myOrderTime;
                    $(".littleForm2").find(".formModel").eq(i).attr("myOrderId", myListOrder[i].Id).attr("orderStatus", myListOrder[i].OrderStatus).attr("paymentStatus", myListOrder[i].PaymentStatus);
                    $(".littleForm2").find(".numberOne").eq(i).html("订单#" + myListOrder[i].Id);
                    $(".littleForm2").find(".handleNumber").eq(i).html(myListOrder[i].OrderStatus);
                    $(".littleForm2").find(".price").eq(i).html(myListOrder[i].OrderTotal);
                    var year = Math.floor(differentTime / (365 * 24 * 3600 * 1000));
                    if (year > 0) {
                        $(".littleForm2").find(".usTime").eq(i).html(year + "Y以前");
                        continue;
                    }
                    var month = Math.floor(differentTime / (30 * 24 * 3600 * 1000));
                    if (month > 0) {
                        $(".littleForm2").find(".usTime").eq(i).html(month + "M以前");
                        continue;
                    }
                    var week = Math.floor(differentTime / (7 * 24 * 3600 * 1000));
                    if (week > 0) {
                        $(".littleForm2").find(".usTime").eq(i).html(week + "W以前");
                        continue;
                    }
                    var day = Math.floor(differentTime / (24 * 3600 * 1000));
                    if (day > 0) {
                        $(".littleForm2").find(".usTime").eq(i).html(day + "D以前");
                        continue;
                    }
                    var hour = Math.floor(differentTime / (3600 * 1000));
                    if (hour > 0) {
                        $(".littleForm2").find(".usTime").eq(i).html(hour + "H以前");
                        continue;
                    }
                    var min = Math.floor(differentTime / (60 * 1000));
                    if (min > 0) {
                        $(".littleForm2").find(".usTime").eq(i).html(min + "min以前");
                        continue;
                    }
                    var s = Math.floor(differentTime / 1000);
                    if (s > 0) {
                        $(".littleForm2").find(".usTime").eq(i).html(s + "s以前");
                        continue;
                    }
                }
            }
        });
    });
    //处理中
    $(".processing").click(function (ev) {
        ev.stopPropagation();
        var timestamp = new Date().getTime();
        $(".littleForm3").empty();
        $.ajax({
            async: false,
            cache: false,
            data: {
                interfaceName: "getCustomerOrders",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                orderStatus: "processing",
                nocache: 1
            }
        }).done(function (result) {
            var myListOrder = result.CustomerOrders.Orders;
            if (myListOrder.length == 0) {
                $(".hasComplete3").css("display", "block");
            } else{
                for (var i = 0; i < myListOrder.length; i++) {
                    model.clone(true).appendTo($(".littleForm3"));
                    var orderTime = myListOrder[i].CreatedOn;
                    var myOrderTime = orderTime.split("(")[1].split(")")[0];
                    var differentTime = timestamp - myOrderTime;
                    $(".littleForm3").find(".formModel").eq(i).attr("myOrderId", myListOrder[i].Id).attr("orderStatus", myListOrder[i].OrderStatus).attr("paymentStatus", myListOrder[i].PaymentStatus);
                    $(".littleForm3").find(".numberOne").eq(i).html("订单#" + myListOrder[i].Id);
                    $(".littleForm3").find(".handleNumber").eq(i).html(myListOrder[i].OrderStatus);
                    $(".littleForm3").find(".price").eq(i).html(myListOrder[i].OrderTotal);
                    var year = Math.floor(differentTime / (365 * 24 * 3600 * 1000));
                    if (year > 0) {
                        $(".littleForm3").find(".usTime").eq(i).html(year + "Y以前");
                        continue;
                    }
                    var month = Math.floor(differentTime / (30 * 24 * 3600 * 1000));
                    if (month > 0) {
                        $(".littleForm3").find(".usTime").eq(i).html(month + "M以前");
                        continue;
                    }
                    var week = Math.floor(differentTime / (7 * 24 * 3600 * 1000));
                    if (week > 0) {
                        $(".littleForm3").find(".usTime").eq(i).html(week + "W以前");
                        continue;
                    }
                    var day = Math.floor(differentTime / (24 * 3600 * 1000));
                    if (day > 0) {
                        $(".littleForm3").find(".usTime").eq(i).html(day + "D以前");
                        continue;
                    }
                    var hour = Math.floor(differentTime / (3600 * 1000));
                    if (hour > 0) {
                        $(".littleForm3").find(".usTime").eq(i).html(hour + "H以前");
                        continue;
                    }
                    var min = Math.floor(differentTime / (60 * 1000));
                    if (min > 0) {
                        $(".littleForm3").find(".usTime").eq(i).html(min + "min以前");
                        continue;
                    }
                    var s = Math.floor(differentTime / 1000);
                    if (s > 0) {
                        $(".littleForm3").find(".usTime").eq(i).html(s + "s以前");
                        continue;
                    }
                }
            }
        });
    });
    //已完成
    $(".complete").click(function (ev) {
        var timestamp = new Date().getTime();
        ev.stopPropagation();
        $(".littleForm4").empty();
        $.ajax({
            async: false,
            cache: false,
            data: {
                interfaceName: "getCustomerOrders",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                orderStatus: "complete",
                nocache: 1
            }
        }).done(function (result) {
            var myListOrder = result.CustomerOrders.Orders;
            if (myListOrder.length == 0) {
                $(".hasComplete4").css("display", "block");
            } else {
                for (var i = 0; i < myListOrder.length; i++) {
                    model.clone(true).appendTo($(".littleForm4"));
                    var orderTime = myListOrder[i].CreatedOn;
                    var myOrderTime = orderTime.split("(")[1].split(")")[0];
                    var differentTime = timestamp - myOrderTime;
                    $(".littleForm4").find(".formModel").eq(i).attr("myOrderId", myListOrder[i].Id).attr("orderStatus", myListOrder[i].OrderStatus).attr("paymentStatus", myListOrder[i].PaymentStatus);
                    ;
                    $(".littleForm4").find(".numberOne").eq(i).html("订单#" + myListOrder[i].Id);
                    $(".littleForm4").find(".handleNumber").eq(i).html(myListOrder[i].OrderStatus);
                    $(".littleForm4").find(".price").eq(i).html(myListOrder[i].OrderTotal);
                    var year = Math.floor(differentTime / (365 * 24 * 3600 * 1000));
                    if (year > 0) {
                        $(".littleForm4").find(".usTime").eq(i).html(year + "Y以前");
                        continue;
                    }
                    var month = Math.floor(differentTime / (30 * 24 * 3600 * 1000));
                    if (month > 0) {
                        $(".littleForm4").find(".usTime").eq(i).html(month + "M以前");
                        continue;
                    }
                    var week = Math.floor(differentTime / (7 * 24 * 3600 * 1000));
                    if (week > 0) {
                        $(".littleForm4").find(".usTime").eq(i).html(week + "W以前");
                        continue;
                    }
                    var day = Math.floor(differentTime / (24 * 3600 * 1000));
                    if (day > 0) {
                        $(".littleForm4").find(".usTime").eq(i).html(day + "D以前");
                        continue;
                    }
                    var hour = Math.floor(differentTime / (3600 * 1000));
                    if (hour > 0) {
                        $(".littleForm4").find(".usTime").eq(i).html(hour + "H以前");
                        continue;
                    }
                    var min = Math.floor(differentTime / (60 * 1000));
                    if (min > 0) {
                        $(".littleForm4").find(".usTime").eq(i).html(min + "min以前");
                        continue;
                    }
                    var s = Math.floor(differentTime / 1000);
                    if (s > 0) {
                        $(".littleForm4").find(".usTime").eq(i).html(s + "s以前");
                        continue;
                    }
                }
            }
        });
    });

    $(".orderForm").on("click", "li", function (ev) {
        var myOrderId = $(this).attr("myOrderId");
        var myOrderStatus = $(this).attr("orderStatus");
        var myPaymentStatus = $(this).attr("paymentStatus");
        window.location.href = ("orderDetail.html?orderId=" + myOrderId + "&orderStatus=" + myOrderStatus + "&paymentStatus=" + myPaymentStatus);
        ev.stopPropagation();
    });
});

















