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
            var phoneNumber = address[i].PhoneNumber;
            var firstName = address[i].FirstName;
            var detailAddress = address[i].address;
            var lastName = address[i].LastName;
            var postCode = address[i].ZipPostalCode;
            var position = address[i].Address1;
            var detailPosition = address[i].Address2;
            var addressId = address[i].Id;
            $(".phoneNumber").html("(" + phoneNumber + ")");
            $(".firstName").eq(i).html(firstName);
            $(".lastName").eq(i).html(lastName);
            $(".address").eq(i).html(detailAddress);
            $(".postCode").eq(i).html("(" + postCode + ")");
            $(".position").eq(i).html(position);
            $(".detailPosition").eq(i).html(detailPosition);
            $(".detail_info").eq(i).attr("addressId", addressId);
        }
    });
    //遮罩层
    var removeId;
    var deviceHeight = document.documentElement.clientHeight;
    $(".maskerLayer").css({"height": deviceHeight});
    $(".user_info").on("click", ".deleted", function () {
        $(".maskerLayer").css({"display": "block"});
        $(".isTrue").css("display", "block");
        removeId = $(this).parents(".detail_info").attr("addressId");
    });
    $(".imTrue").click(function () {
        $(".isTrue").css("display", "none");
        $(".imAbsolute").css("display", "block");
        $.ajax({
            data: {
                interfaceName: "deleteAddress",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                nocache: 1,
                addressId: removeId
            }
        }).done(function (result) {
            if (result.MetaData.ResponseCode == 2000.0) {
                $(".maskerLayer").css({"display": "none"});
                window.location.reload();
            }
        })
    });
    $(".cancel").click(function () {
        $(".maskerLayer").css({"display": "none"});
        $(".isTrue").css("display", "none");
    });
    $(".change").click(function () {
        storage.setItem("firstName",$(this).siblings("li").find(".firstName").html());
        storage.setItem("lastName",$(this).siblings("li").find(".lastName").html());
        storage.setItem("phoneNumber",$(this).siblings("li").find(".phoneNumber").html().split("(")[1].split(")")[0]);
        storage.setItem("position",$(this).siblings("li").find(".position").html());
        storage.setItem("detailPosition",$(this).siblings("li").find(".position").html());
        storage.setItem("city",$(this).siblings("li").find(".address").html());
        storage.setItem("cityCode",$(this).siblings("li").find(".postCode").html().split("(")[1].split(")")[0]);
        storage.setItem("changeId",$(this).parents(".detail_info").attr("addressid"));
        window.location.href = "changeAddress.html"
    });
});

