$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var deviceHeight = document.documentElement.clientHeight;
    var deviceWidth = document.documentElement.clientWidth;
    var absoluteHeight = $(window).scrollTop() + deviceHeight / 2;
    storage.proList = "";
    $(":checkbox").prop("checked", false);
    $("#footer").load("footer.html");
    var attributesXml, useBond, proId, id, wishListModel = $(".imModel").find("li").eq(0);
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    $(".imModel").empty();
    $.ajax({
        data: {
            interfaceName: "GetWishlistByCustomerId",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            nocache: 1
        }
    }).done(function (result) {
        //console.log(result);
        for (var i = 0; i < result.Wishlist.Items.length; i++) {
            wishListModel.clone(true).appendTo($(".imModel"));
            var picUrl = result.Wishlist.Items[i].Picture.ImageUrl;
            var detailSize = result.Wishlist.Items[i].AttributeInfo;
            var proSize = detailSize.split(":")[1].split("___")[0];
            var noStork = result.Wishlist.Warnings.length;
            attributesXml = detailSize.split(":")[1].split("___")[1];
            var detailName = result.Wishlist.Items[i].ProductName;
            var quantity = result.Wishlist.Items[i].Quantity;
            useBond = result.Wishlist.Items[i].UseBondedStock;
            proId = result.Wishlist.Items[i].ProductId;
            id = result.Wishlist.Items[i].Id;
            var designerName = detailName.split("___");
            var price = result.Wishlist.Items[i].UnitPrice;
            var data = '<img src="' + picUrl + '">';
            $(".cloth_show").eq(i).attr("myid", proId).attr("myxml", attributesXml).attr("myusebond", useBond).attr("id", id).attr("noStork", noStork);
            $(".cloth_show").eq(i).html(data);
            $(".brand").eq(i).html(designerName[1]);
            $(".myDetailName").eq(i).html(designerName[0]);
            $(".price").eq(i).html(price);
            $(".proSize").eq(i).html(proSize);
            $(".buyNumber").eq(i).html(quantity);
            if (result.Wishlist.Warnings.length == 0) {
                if (useBond == false) {
                    $(".expressInfo").eq(i).html("[直邮]")
                } else {
                    $(".expressInfo").eq(i).html("[国内仓]")
                }
            } else {
                $(".expressInfo").eq(i).html("[" + result.Wishlist.Warnings[0] + "]");
            }
        }
    });
    //全选点击
    var listNumber = 0;
    $(".checkedall").click(function () {
        $(".imModel :checkbox,.checkedall").prop("checked", $(".checkedall").prop("checked"));
        listNumber = $(".imModel :checkBox:checked").length;
        comFun();
    });
    //遮罩层
    $(".absolute").css({"top": absoluteHeight});
    $(".shade").css({
        "height": deviceHeight,
        "top": $(window).scrollTop()
    });
    //单选点击
    $(".imModel").delegate(".single", "click", function () {
        var warningLength = $(this).parents(".circle").siblings(".cloth_show").attr("noStork");
        if (warningLength != 0) {
            $(".shade").css("display", "block");
            var data = '<div class="waitMoment">暂时无货</div><div class="noStorkMent">确定</div>';
            $(".absolute").css({
                "width": 2.5 + "rem",
                "marginLeft": -1.25 + "rem",
                "height": 1.2 + "rem",
                "lineHeight": 0.6 + "rem",
                "top": absoluteHeight,
                "display": "block"
            }).html(data);
            return;
        }
        if ($(this).parents("li").siblings("li").find("input").prop("checked")) {
            $(".checkedall").prop("checked", true);
        }
        if ($(this).prop("checked")) {
            listNumber++;
        } else {
            listNumber--;
        }
        var listLength = $(".imModel :checkBox").length;
        if (listNumber < listLength && $(".checkedall").prop("checked")) {
            $(".checkedall").prop("checked", false);
        }
        comFun();
    });
    function comFun() {
        $(".hasShop").find("span").html(listNumber);
        if (listNumber > 0) {
            $(".shop_accounts button").removeAttr("disabled").css({"background": "#000", "color": "#fff"});
        } else {
            $(".shop_accounts button").attr("disabled", true).css({"background": "#DDDDDD", "color": "#8e8e8e"});
        }
    }

    //点击编辑部分
    $(".imModel").on("click", ".editor", function () {
        $(this).html("完成").addClass("complete").siblings(".cancel").css("display", "block").siblings(".cloth_introduce").css("visibility", "hidden").siblings(".proNumber").css("display", "block");
    });
    //点击取消部分
    $(".imModel").on("click", ".cancel", function () {
        $(this).siblings(".proNumber").find(".nowNumber").text("1");
        $(this).siblings(".editor").removeClass("complete");
        $(this).siblings(".proNumber").css("display", "none").siblings(".cloth_introduce").css("visibility", "visible").siblings(".cancel").css("display", "none").siblings(".editor").html("编辑");
    });
    //点击添加商品数量
    $(".imModel").on("click", ".add", function () {
        var selectNumber = $(this).siblings(".nowNumber").text();
        selectNumber++;
        $(this).siblings(".nowNumber").html(selectNumber);
    });
    //点击减少商品数量
    $(".imModel").on("click", ".cut", function () {
        var selectNumber = $(this).siblings(".nowNumber").text();
        selectNumber--;
        if (selectNumber <= 0) {
            $(this).siblings(".nowNumber").html("0");
            selectNumber = 0;
        } else {
            $(this).siblings(".nowNumber").html(selectNumber);
        }

    });
    //点击完成部分
    $(".imModel").on("click", ".complete", function () {
        var that = $(this);
        $(".shade").css("display", "block");
        var wishNumber = $(this).siblings(".proNumber").find(".nowNumber").text();
        var myXml = $(this).siblings(".cloth_show").attr("myxml");
        var myId = $(this).siblings(".cloth_show").attr("myid");
        var myBond = $(this).siblings(".cloth_show").attr("myusebond");
        $.ajax({
            type: "post",
            data: {
                interfaceName: "addProductToWishlist",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                spname: "addShoppingCartItem",
                addShoppingCartItem_productId: myId,
                addShoppingCartItem_quantity: wishNumber,
                addShoppingCartItem_shoppingCartTypeId: 2,
                addShoppingCartItem_attributesXml: myXml,
                addShoppingCartItem_useBondedStock: myBond,
                nocache: 1
            }

        }).done(function (result) {
            if (result.MetaData.ResponseCode == 2000.0) {
                var data = '<div class="loadingWrap"><img src="img/imLoading.gif" alt=""><div>请稍后...</div></div>';
                $(".absolute").css({
                    "width": 2.5 + "rem",
                    "marginLeft": -1.25 + "rem",
                    "height": 0.6 + "rem",
                    "lineHeight": 0.6 + "rem",
                    "top": absoluteHeight,
                    "display": "block"
                }).html(data);
                setTimeout(function () {
                    $(".shade").css("display", "none");
                    $(".absolute").css("display", "none");
                    that.siblings(".proNumber").css("display", "none").siblings(".cloth_introduce").css("visibility", "visible").siblings(".cancel").css("display", "none").siblings(".editor").html("编辑");
                    if (wishNumber == 0) {
                        that.parents("li").remove();
                    }
                    that.siblings(".cloth_introduce").find(".buyNumber").html(wishNumber);
                    that.removeClass("complete");
                }, 1500)
            } else if (result.MetaData.ResponseCode == 4100.0) {
                $(".absolute").css({"width": 4 + "rem", "marginLeft": -2 + "rem"});
                var data = '<div>抱歉</div><div>我们无法将您选定的商品添加到购物袋中</div><div>请返回重试</div><div class="confirmTrue">确定</div>';
                $(".absolute").css({
                    "display": "block",
                    "height": 2 + "rem",
                    "lineHeight": 0.35 + "rem",
                    "top": absoluteHeight - 100
                }).html(data);
            }
        })
    });
    //商品存货不足，点击确定返回
    $(".absolute").on("click", ".confirmTrue", function () {
        $(".shade").css("display", "none");
        $(".absolute").css("display", "none");
    });
    $(".shop_accounts button").click(function () {

    });
    //点击结算按钮
    $(".allCount").click(function () {
        if (cusEmail == "" || cusEmail == null || cusEmail == undefined) {
            storage.loginMark = 1;
            window.location.href = ('login.html');
        } else {
            //循环选中按钮
            var checkedArr = [];
            var length = $(".imModel input:checkbox:checked").length;
            for (var i = 0; i < length; i++) {
                var checkId = $(".imModel input:checkbox:checked").eq(i).parents(".circle").siblings(".cloth_show").attr("id");
                checkedArr.push(checkId);
            }
            //console.log(checkedArr);
            storage.proList = checkedArr;
            window.location.href = ("more/shopBag_two.html");
        }
    });

    //加入购物车后一段时间商品无货遮罩层点击
    $(".absolute").on("click", ".noStorkMent", function () {
        $(".shade").css("display", "none");
        $(".absolute").css("display", "none");
    });
});

















