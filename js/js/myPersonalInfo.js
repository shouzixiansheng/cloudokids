$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var model = $(".contentModel").find("li").eq(0);
    var deviceHeight = document.documentElement.clientHeight;
    $(".contentModel").empty();

    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json","type":"post"});
    $.ajax({
        async: false,
        type:"get",
        data: {
            interfaceName: "getCustomerInfo",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            nocache:1
        }
    }).done(function (result) {
        console.log(result);
        if (result.CustomerInfo.Email != null) {
            $(".userAcc").val(result.CustomerInfo.Email).prop("disabled", true);
        }
        $(".phoneNumber").val(result.CustomerInfo.Phone);
        $(".lastName").val(result.CustomerInfo.LastName);
        $(".firstName").val(result.CustomerInfo.FirstName);
        $(".nickName").val(result.CustomerInfo.Username);
    });
    //信息保存
    $(".maskerLayer").css({"height":deviceHeight});
    $(".save").click(function () {
        $(".maskerLayer").css({"display":"block"});
        var userLastName=$(".lastName").val();
        $.ajax({
            data: {
                interfaceName: "editCustomerInfo",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                spname:"editCustomerInfo",
                editCustomerInfo_isCustomCustomerAttribute:false,
                editCustomerInfo_key:"LastName",
                editCustomerInfo_value:userLastName,
                nocache:1
            }
        }).done(function(result){
        });
        var userFirstName=$(".firstName").val();
        $.ajax({
            data: {
                interfaceName: "editCustomerInfo",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                spname:"editCustomerInfo",
                editCustomerInfo_isCustomCustomerAttribute:false,
                editCustomerInfo_key:"FirstName",
                editCustomerInfo_value:userFirstName,
                nocache:1
            }
        }).done(function(result){
        });
        var userNickName=$(".nickName").val();
        $.ajax({
            data: {
                interfaceName: "editCustomerInfo",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                spname:"editCustomerInfo",
                editCustomerInfo_isCustomCustomerAttribute:false,
                editCustomerInfo_key:"Username",
                editCustomerInfo_value:userNickName,
                nocache:1
            }
        }).done(function(result){
        });
        var phoneNumber=$(".phoneNumber").val();
        $.ajax({
            data: {
                interfaceName: "editCustomerInfo",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                spname:"editCustomerInfo",
                editCustomerInfo_isCustomCustomerAttribute:false,
                editCustomerInfo_key:"Phone",
                editCustomerInfo_value:phoneNumber,
                nocache:1
            }
        }).done(function(result){
            console.log(result);
            if(result.MetaData.ResponseCode==2000.0){
                $(".imAbsolute").html("保存成功");
            }
            setTimeout(function(){
                $(".maskerLayer").css({"display":"none"});
            },800)
        });
    });
       //保存结束
});
