$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var model = $(".user_info").find(".detail_info").eq(0);
    var userAddressId;
    $(".user_info").empty();
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    //获取用户地址
    $.ajax({
        async: false,
        data: {
            interfaceName: "getCustomerAddresses",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            nocache: 1
        }
    }).done(function (result) {
        var address = result.CustomerAddresses.Addresses;
        var addressLength = address.length;
        for (var i = 0; i < addressLength; i++) {
            model.clone(true).appendTo($(".user_info"));
            var firstName = address[i].FirstName;
            var phoneNumber=address[i].PhoneNumber;
            var detailAddress = address[i].address;
            var lastName = address[i].LastName;
            var postCode = address[i].ZipPostalCode;
            var position = address[i].Address1;
            var detailPosition = address[i].Address2;
            var addressId = address[i].Id;
            $(".phoneNumber").html("("+phoneNumber+")");
            $(".firstName").eq(i).html(firstName);
            $(".lastName").eq(i).html(lastName);
            $(".address").eq(i).html(detailAddress);
            $(".postCode").eq(i).html("(" + postCode + ")");
            $(".position").eq(i).html(position+",");
            $(".detailPosition").eq(i).html(detailPosition);
            $(".detail_info").eq(i).attr("addressId", addressId);
        }
        $(".user_info").find(".detail_info").eq(0).find(".checked").css({"visibility": "visible"});
        userAddressId = $(".user_info").find(".detail_info").eq(0).attr("addressId");
    });

    //用户选择邮寄地址
    $(".user_info").on("click", ".detail_info", function () {
        $(this).find(".checked").css("visibility", "visible").parents(".detail_info").siblings(".detail_info").find(".checked").css({"visibility": "hidden"});
        userAddressId = $(this).attr("addressId");
    });
    //添加用户地址
    $(".knowMore").click(function () {
        window.location.href = ("newAddress.html");
    });
    //点击进入下一步
    $(".nextStep").click(function () {
        $.ajax({
            data: {
                interfaceName: "selectShippingAddress",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                addressId: userAddressId,
                nocache: 1
            }
        }).done(function (result) {
            if (result.MetaData.ResponseCode == 2000.0) {
                window.location.href = ("shopBag_four.html");
            }
        });
    });
});
