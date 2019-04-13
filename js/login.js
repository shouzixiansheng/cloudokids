$(function () {
    var deviceWidth = document.documentElement.clientWidth;
    var deviceHeight = document.documentElement.clientHeight;
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var loginMark=storage.loginMark;
    //手机号码或邮箱
    var phoneNumber;
    //邮箱正则
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //手机正则
    var phoneReg = /^1[34578]\d{9}$/;
    //手机号码验证
    $("#imPhone").keyup(function () {
        phoneNumber = $("#imPhone").val();
        if (phoneReg.test(phoneNumber)) {
            $(".isCode").removeAttr("disabled");
        }else {
            $(".isCode").prop("disabled", true);
        }
    });
    //获取验证码
    $(".isCode").click(function () {
        timeCount();
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            data: {
                interfaceName: "GetSMSVerificationCode",
                phone: phoneNumber,
                customerId: cusId,
                customerEmail: cusEmail,
                customerAccessKey: cusKey,
                nocache: 1
            }
        }).done(function (result) {
            //console.log(result);

        });
    });
    //验证码倒计时；
    function timeCount() {
        var i = 60;
        var time = setInterval(function () {
            var data = '<div>已发送<span>' + "(" + i + ")" + '</span></div>';
            $(".isCode").html(data).prop("disabled", true);
            i--;
            if (i == -1) {
                clearInterval(time);
                $(".isCode").html("获取验证码").prop("disabled", false);
            }
        }, 1000);
    }
    //登陆验证
    $(".login").click(function () {
        $(".maskLayerWrap").css({"height": deviceHeight, "display": "block"});
        $(".maskLayer").css({
            "display": "block",
            "height": 0.8 + "rem",
            "width": 4 + "rem",
            "top": "50%",
            "left": "50%",
            "marginTop": -1 + "rem",
            "marginLeft": -2 + "rem",
            "borderRadius":"8px"
        });
        var data = '<div class="worryCode"><div class="codeImg"><img src="img/imLoading.gif" alt=""></div><div class="checkout">验证中...</div></div>';
        $(".maskLayer").html(data);
        var passwordValue = $("#imPassword").val();
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            type: "post",
            data: {
                interfaceName: "CustomerRegisterLoginSMSVerification",
                nocache: 1,
                spname: "CustomerRegisterLoginGuest|CustomerRegisterLoginRequestSMSVerification",
                CustomerRegisterLoginGuest_customerId: cusId,
                CustomerRegisterLoginRequestSMSVerification_phone: phoneNumber,
                CustomerRegisterLoginRequestSMSVerification_verificationCode: passwordValue
            }
        }).done(function (result) {
            //console.log(result);
            if (result.MetaData.ResponseCode == 2000.0) {
                //验证码
                storage.securityCode = passwordValue;
                //用户信息
                storage.cusId = result.CustomerAuthentication.CustomerId;
                storage.cusKey = result.CustomerAuthentication.CustomerAccessKey;
                storage.cusEmail = result.CustomerAuthentication.CustomerEmail;
                $(".maskLayer").css({"display":"none"});
                $(".maskLayerWrap").css({"display": "none"});
                if(loginMark=="1"){
                    window.location.href=("shopBag.html");
                }else{
                    window.location.href=("personalCenter.html");
                }
            } else {
                $(".maskLayerWrap").css({"height": deviceHeight, "display": "block"});
                $(".maskLayer").css({
                    "display": "block",
                    "top": "50%",
                    "height": 2.1 + "rem",
                    "width": 4 + "rem",
                    "left": "50%",
                    "marginTop": -1 + "rem",
                    "marginLeft": -2 + "rem",
                    "borderRadius":0
                });
                var data = '<div class="sorry">抱歉</div><div class="sorryWrong">验证码错误</div><div class="imOk">好的</div>';
                $(".maskLayer").html(data);
            }
        });


    });
//遮罩层消失
    $(".maskLayer").on("click", ".imOk", function () {
        $(".maskLayerWrap").css({"display": "none"});
        $("maskLayer").css({"display": "none"});
    });
});
