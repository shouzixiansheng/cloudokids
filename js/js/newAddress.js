$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    $(".save").click(function () {
        var address1 = $(".address").val();
        var address2 = $(".remarks").val();
        var city = $(".city").val();
        var countryName = "中国";
        var countryId = "21";
        //var email = storage.cusEmail;
        var firstName = $(".firstName").val();
        //var Id = storage.cusId;
        var lastName = $(".lastName").val();
        var phoneNumber = $(".phoneNumber").val();
        var postalCode = $(".postCode").val();
        $.ajax({
            url:H5_AJAX_HTTP_URL,
            dataType: "json",
            type: "post",
            data: {
                interfaceName: "addEditAddress",
                spname: "addressModel|customerAuthenticationModel",
                addressModel_address1: address1,
                addressModel_address2: address2,
                addressModel_city: city,
                addressModel_countryName: "中国",
                addressModel_countryId: "21",
                addressModel_email:storage.cusEmail,
                addressModel_firstName: firstName,
                addressModel_Id: storage.cusId,
                addressModel_lastName: lastName,
                addressModel_phoneNumber:phoneNumber,
                addressModel_stateProvinceId: 0,
                addressModel_zipPostalCode: postalCode,
                customerAuthenticationModel_customerAccessKey: cusKey,
                customerAuthenticationModel_customerId: storage.cusId,
                customerAuthenticationModel_customerEmail: cusEmail,
                nocache: 1
            }
        }).done(function (result) {
            console.log(result);
            if(result.MetaData.ResponseCode==2000.0){
                window.location.href=("shopBag_three.html");
            }
        });
    });
});
