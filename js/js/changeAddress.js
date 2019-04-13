$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;

    //取出缓存数据
    var firstName = storage.firstName;
    var lastName = storage.lastName;
    var phoneNumber = storage.phoneNumber;
    var position = storage.position;
    var detailPosition = storage.detailPosition;
    var city = storage.city;
    var postCode = storage.cityCode;
    var changeId=storage.changeId;
    //
    $(".firstName").val(firstName);
    $(".lastName").val(lastName);
    $(".phoneNumber").val(phoneNumber);
    $(".address").val(position);
    $(".remarks").val(detailPosition);
    $(".city").val(city);
    $(".postCode").val(postCode);
    $(".save").click(function () {
        var firstName =$(".firstName").val();
        var lastName =$(".lastName").val();
        var phoneNumber =$(".phoneNumber").val();
        var position =$(".address").val();
        var detailPosition =$(".remarks").val();
        var city =$(".city").val();
        var postCode = $(".postCode").val();
        var countryName = "中国";
        var countryId = "21";
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            type: "post",
            data: {
                interfaceName: "addEditAddress",
                spname: "addressModel|customerAuthenticationModel",
                addressModel_address1: position,
                addressModel_address2: detailPosition,
                addressModel_id:changeId,
                addressModel_city: city,
                addressModel_countryName: "中国",
                addressModel_countryId: "21",
                addressModel_email: storage.cusEmail,
                addressModel_firstName: firstName,
                addressModel_Id: storage.cusId,
                addressModel_lastName: lastName,
                addressModel_phoneNumber: phoneNumber,
                addressModel_stateProvinceId: 0,
                addressModel_zipPostalCode: postCode,
                customerAuthenticationModel_customerAccessKey: cusKey,
                customerAuthenticationModel_customerId: storage.cusId,
                customerAuthenticationModel_customerEmail: cusEmail,
                nocache: 1
            }
        }).done(function (result) {
            if (result.MetaData.ResponseCode == 2000.0) {
                window.location.href = ("address.html");
            }
        });
    });
});

