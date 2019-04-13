$(function () {
    var deviceWidth = document.documentElement.clientWidth;
    var deviceHeight = document.documentElement.clientHeight;
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var cusCode = storage.securityCode;
    //密码验证[字母数字下划线]
    $("#imPassword").keyup(function () {
        $(".confirm").removeAttr("disabled");
        if ($("#imPassword").val() == "") {
            $(".confirm").prop("disabled", true);
        }
    });
    var passwordReg = /^[a-zA-Z0-9_]{6,}$/;
    //新密码

    $(".confirm").click(function () {
        var newPassword = $("#imPassword").val();
        if (!passwordReg.test(newPassword)) {
            $(".maskLayerWrap").css({"height": deviceHeight, "display": "block"});
            $(".maskLayer").css({
                "display": "block",
                "top": "50%",
                "left": "50%",
                "marginTop": -1 + "rem",
                "marginLeft": -2.5 + "rem"
            });
            var data = '<div class="sorry">抱歉，密码</div><div>至少输入6个字符[含字母、数字、下划线]</div><div class="imOk">好的</div>';
            $(".maskLayer").html(data);
        }
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            type: "post",
            data: {
                interfaceName: "ChangePassword",
                spname: "changePassword|customerAuthentication",
                changePassword_oldPassword: cusCode,
                changePassword_newPassword: newPassword,
                customerAuthentication_customerAccessKey: cusKey,
                customerAuthentication_customerId: cusId,
                customerAuthentication_customerEmail: cusEmail
            }
        }).done(function (result) {
            if (result.MetaData.ResponseCode == 2000.0) {
                storage.cusId = result.CustomerAuthentication.CustomerId;
                storage.cusKey = result.CustomerAuthentication.CustomerAccessKey;
                storage.cusEmail = result.CustomerAuthentication.CustomerEmail;
                window.location.href = ("personalCenter.html")
            }


        });
    });

    $(".maskLayer").on("click", ".imOk", function () {
        $(".maskLayerWrap").css({"display": "none"});
        $("maskLayer").css({"display": "none"});
    });
});
