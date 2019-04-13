$(function () {
    var storage = window.localStorage;
    if (storage.cusId == undefined || storage.cusId == "" || storage.cusId == null) {
        storage.cusKey = "";
        storage.cusId = "";
        storage.cusEmail = "";
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "GetGuestCustomer",
                customerAccessKey: "guest",
                customerId: 0
            }
        }).done(function (result) {
            //console.log(result);
            storage.cusKey = result.CustomerAuthentication.CustomerAccessKey;
            storage.cusId = result.CustomerAuthentication.CustomerId;
            storage.cusEmail = result.CustomerAuthentication.CustomerEmail;
        });
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "SelectSystemConfigurations",
                currencyCode: "RMB",
                languageCode: "cn",
                countryId: 21,
                customerAccessKey: "guest",
                customerId: storage.cusId
            }
        }).done(function (result) {
            //console.log(result);
        });
    }
});