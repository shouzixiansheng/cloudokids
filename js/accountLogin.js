$(function () {
    var deviceWidth = document.documentElement.clientWidth;
    var deviceHeight = document.documentElement.clientHeight;
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var loginMark=storage.loginMark;
    var phoneNumber;
    //邮箱正则
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //手机正则
    var phoneReg = /^1[34578]\d{9}$/;
    //手机号码验证
    //登陆验证
    $(".login").click(function () {
        //手机号码或邮箱
        var phoneNumber = $("#imPhone").val();
        var passwordValue = $("#imPassword").val();
        if(!phoneReg.test(phoneNumber)&&!emailReg.test(phoneNumber)){
            $(".maskLayerWrap").css({"height": deviceHeight, "display": "block"});
            $(".maskLayer").css({
                "display": "block",
                "top": "50%",
                "left": "50%",
                "marginTop": -1 + "rem",
                "marginLeft": -2.5 + "rem"
            });
            var data = '<div class="sorry">抱歉</div><div>请输入有效的电子邮箱或电话</div><div class="imOk">好的</div>';
            $(".maskLayer").html(data);
        }
        if (phoneReg.test(phoneNumber)) {
            phoneNumber = phoneNumber + "@cloudo.kids"
        }
        //正在加载中...
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
        //加载结束
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            type:"post",
            data: {
                interfaceName: "CustomerLogin",
                spname: "customerRegisterLoginGuest|customerRegisterLoginRequest",
                customerRegisterLoginGuest_customerId: cusId,
                customerRegisterLoginRequest_email: phoneNumber,
                customerRegisterLoginRequest_password: passwordValue
            }
        }).done(function (myResult) {
            var result= $.parseJSON(myResult);
            console.log(result);
            if(result.MetaData.ResponseCode==2000.0){
                storage.cusId = result.CustomerAuthentication.CustomerId;
                storage.cusKey = result.CustomerAuthentication.CustomerAccessKey;
                storage.cusEmail = result.CustomerAuthentication.CustomerEmail;
                $(".maskLayerWrap").css("display","none");
                $(".maskLayer").css("display","none");
                if(loginMark=="1"){
                    window.location.href=("shopBag.html")
                }else{
                    window.location.href=("personalCenter.html")
                }
            }else{
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
                var data = '<div class="sorry">抱歉</div><div class="sorryWrong">账号或密码输入错误</div><div class="imOk">好的</div>';
                $(".maskLayer").html(data);


            }
        })


    });
//遮罩层消失
    $(".maskLayer").on("click", ".imOk", function () {
        $(".maskLayerWrap").css({"display": "none"});
        $("maskLayer").css({"display": "none"});
    });
});

