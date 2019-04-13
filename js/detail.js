$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var recentlyUrls = [];
    var deviceHeight = document.documentElement.clientHeight;
    var deviceWidth = document.documentElement.clientWidth;
    if (storage.recentlyUrl == undefined || storage.recentlyUrl == "" || storage.recentlyUrl == null) {
        storage.recentlyUrl = "";
    } else {
        recentlyUrls.push(storage.recentlyUrl);
    }
    //遮罩层高度
    $(".shade").css("height",deviceHeight);
    //
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    var swiper = new Swiper(".info_product", {
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        freeModeMomentumBounceRatio: 1,
        scrollbar: '.swiper-scrollbar'
    });
    var myProductId = window.location.hash.substring(1);
    productLoad(myProductId);
    //其他推荐部分商品点击
    //直邮  保税仓 模型
    var proSizeModel = $(".proSize").find("li").eq(0);
    $(".proSize").empty();
    //结束
    $(".productMore").delegate("img", "click", function () {
        $(".addBag").css("background", "#A7A7A7").prop("disabled", true);
        $(".proSize").empty();
        myProductId = $(this).attr("myid");
        productLoad(myProductId);
        $("html,body").stop().animate({scrollTop: 0}, 500);
    });
    var detailName, designerId, moreCarterId, smallestId, favouriteUrl;
    //获取id用于其他推荐商品点击
    var caterArr = [], newCaterArr = [];
    function productLoad(myProductId) {
        $.ajax({
            data: {
                interfaceName: "GetProduct",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                id: myProductId,
                nocache: 1
            }
        }).done(function (result) {
            //console.log(result);
            //存储最近浏览的商品信息Id
            var viewId = result.Product.Id;
            //存储最近浏览的商品信息designerId
            var recentDesignerId = result.Product.CustomProperties.DesignerId;
            //存储最近浏览的品牌名称
            var recentDesignerTitle = result.Product.CustomProperties.DesignerName;
            //存储最近浏览商品的url;
            var recentlyImgUrl = result.Product.DefaultPictureModel.ImageUrl;
            //浏览过的商品Model
            var imgModel = '<img src="' + recentlyImgUrl + '" recentlyDesignerId="' + recentDesignerId + '" recentlyId="' + viewId + '" recentTitle="' + recentDesignerTitle + '">';
            recentlyUrls.push(imgModel);
            storage.recentlyUrl = recentlyUrls;
            //结束

            //存储主页浏览model
            //如果商品品牌名出现  ：  “” 下面注释的会有bug
            //var indexImgModel='{"designerName":"'+recentDesignerTitle+'","designerId":"'+recentDesignerId+'"}';（一种方法）
            var indexImgModel = {
                designerName: recentDesignerTitle,
                designerId: recentDesignerId
            };
            if (storage.recentlyUserLook == undefined || storage.recentlyUserLook == "" || storage.recentlyUserLook == null) {
                storage.recentlyUserLook = "[" + JSON.stringify(indexImgModel) + "]";
            } else {
                var changeType = {
                    designerId: recentDesignerId
                };
                changeType = JSON.stringify(changeType).replace("{", "").replace("}", "");
                if (storage.recentlyUserLook.indexOf(changeType) < 0) {
                    storage.recentlyUserLook = storage.recentlyUserLook.replace("]", "");
                    storage.recentlyUserLook += "," + JSON.stringify(indexImgModel) + "]";
                }
            }
            var productDescribe = result.Product.Name;
            detailName = result.Product.CustomProperties.DesignerName;
            designerId = result.Product.CustomProperties.DesignerId;
            moreCarterId = result.Product.CustomProperties.CategoryIds;
            favouriteUrl = result.Product.DefaultPictureModel.ImageUrl;
            caterArr = moreCarterId.split(",");
            function sortNumber(a, b) {
                return a - b
            }

            newCaterArr = caterArr.sort(sortNumber);
            smallestId = newCaterArr[0];
            var newPrice = result.Product.ProductPrice.Price;
            var describe = result.Product.ShortDescription;
            var fullDescribtion = result.Product.FullDescription;
            $(".myName").html(detailName);
            $(".info_name").html(productDescribe);
            $(".now_price").html(newPrice);
            $(".describe").html(fullDescribtion);
            var imgMore = result.Product.PictureModels;
            var imgLength = imgMore.length;
            for (var i = 0; i < imgLength; i++) {
                var imgDate = result.Product.PictureModels;
                var src = imgMore[i].ImageUrl;
                imgData = '<img src="' + src + '" alt=""> ';
                $(".beautyShow").eq(i).html(imgData)
            }
        });
        //同品牌其他商品
        $.ajax({
            data: {
                interfaceName: "GetRelatedProducts",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                productId: myProductId,
                relatedType: "Designer",
                nocache: 1
            }
        }).done(function (result) {
            if(result.MetaData.ResponseCode==2000.0){
                var designerModel = $(".pic_wrapOne").find(".wrapOne").find(".img_wrap").eq(0);
                $(".pic_wrapOne").find(".wrapOne").empty();
                for (var i = 0; i < result.Products.length; i++) {
                    designerModel.clone(true).appendTo($(".wrapOne"));
                    var proUrl = result.Products[i].DefaultPictureModel.ImageUrl;
                    var proSrc = '<img data-src="' + proUrl + '" myid="" alt="" class="swiper-lazy">';
                    var proName = result.Products[i].CustomProperties.DesignerName;
                    var proPrice = result.Products[i].ProductPrice.Price;
                    var comDesignerId = result.Products[i].Id;
                    $(".pic_wrapOne").find(".img_wrap").eq(i).find("a").html(proSrc);
                    $(".pic_wrapOne").find(".img_wrap").eq(i).find("a").find("img").attr("myid", comDesignerId);
                    $(".pic_wrapOne").find(".img_wrap").eq(i).find(".product_name").html(proName);
                    $(".pic_wrapOne").find(".img_wrap").eq(i).find(".product_price").html(proPrice);
                }
                new Swiper('.pic_wrapOne', {
                    direction: 'horizontal',
                    scrollbar: '.swiper-scrollbar',
                    slidesPerView: 3,
                    lazyLoading: true,
                    lazyLoadingInPrevNext: true,
                    lazyLoadingInPrevNextAmount: 3
                });
            }
        });
        //其他推荐商品
        $.ajax({
            data: {
                interfaceName: "GetRelatedProducts",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                productId: myProductId,
                relatedType: "",
                nocache: 1
            }
        }).done(function (result) {
            if(result.MetaData.ResponseCode==2000.0){
                var classModel = $(".pic_wrapTwo").find(".wrapTwo").find(".img_wrap").eq(0);
                $(".pic_wrapTwo").find(".wrapTwo").empty();
                for (var j = 0; j < result.Products.length; j++) {
                    classModel.clone(true).appendTo($(".wrapTwo"));
                    var proUrl = result.Products[j].DefaultPictureModel.ImageUrl;
                    var proSrc = '<img src="' + proUrl + '" myid="">';
                    var proName = result.Products[j].CustomProperties.DesignerName;
                    var proPrice = result.Products[j].ProductPrice.Price;
                    var comDesignerId = result.Products[j].Id;
                    $(".pic_wrapTwo").find(".img_wrap").eq(j).find("a").html(proSrc);
                    $(".pic_wrapTwo").find(".img_wrap").eq(j).find("a").find("img").attr("myid", comDesignerId);
                    $(".pic_wrapTwo").find(".img_wrap").eq(j).find(".product_name").html(proName);
                    $(".pic_wrapTwo").find(".img_wrap").eq(j).find(".product_price").html(proPrice);
                }
                new Swiper('.pic_wrapTwo', {
                    direction: 'horizontal',
                    scrollbar: '.swiper-scrollbar',
                    slidesPerView: 3,
                    lazyLoading: true,
                    lazyLoadingInPrevNext: true,
                    lazyLoadingInPrevNextAmount: 3
                });
            }
        });
        $.ajax({
            data: {
                interfaceName: "GetAttributeCombinations",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                productId: myProductId,
                nocache: 1
            }
        }).done(function (result) {
            if(result.MetaData.ResponseCode==2000.0){
                for (var i = 0; i < result.AttributeCombinations.length; i++) {
                    proSizeModel.clone(true).appendTo($(".proSize"));
                    var babyAge = result.AttributeCombinations[i].FormattedAttribute;
                    var age = babyAge.split(":");
                    $(".babyAge").eq(i).html(age[1]);
                    var linkId = result.AttributeCombinations[i].Id;
                    var myAttributesXml = result.AttributeCombinations[i].AttributesXml;
                    var myUseBondedStock = result.AttributeCombinations[i].UseBondedStock;
                    $(".selectSize").find("li").eq(i).attr("myid", linkId);
                    $(".selectSize").find("li").eq(i).attr("myAttributesXml", myAttributesXml);
                    $(".selectSize").find("li").eq(i).attr("myUseBondedStock", myUseBondedStock);
                    if (result.AttributeCombinations[i].InStock == true && result.AttributeCombinations[i].UseBondedStock == false) {
                        $(".proStore").eq(i).html("[直邮]");
                        $(".proSize").find("li").eq(i).addClass("click");
                    } else if (result.AttributeCombinations[i].InStock == true && result.AttributeCombinations[i].UseBondedStock == true) {
                        $(".proStore").eq(i).html("[国内仓]");
                        $(".proSize").find("li").eq(i).addClass("click");
                    } else {
                        $(".proStore").eq(i).html("[无货]");
                        $(".selectSize").find("li").eq(i).css({"color": "rgba(204,204,204,1)"});
                    }

                }
            }
        });
    }

    //同品牌其他商品更多
    $(".designerMore").click(function () {
        var myTitle = detailName;
        var myId = designerId;
        window.location.href = "singItem.html?myTitle=" + myTitle + "!myId=" + myId + "!ifDesigner=" + 1;
    });
    //其他推荐商品更多
    $(".cateGoryMore").click(function () {
        var myId = smallestId;
        window.location.href = "singItem.html?myId=" + myId + "!ifDesigner=" + 0;
    });
    //商品对照部分
    var ev = ev || window.event;
    $(".match").click(function (ev) {
        ev.stopPropagation();
        $.ajax({
            data: {
                interfaceName: "GetProduct",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                id: myProductId,
                nocache: 1
            }
        }).done(function (result) {
            if(result.MetaData.ResponseCode==2000.0){
                var matchData = result.Product.CustomProperties.DesignerSizeGuide;
                $(".matchData").html(matchData);
                $(".matchData").toggleClass("switchShow");
                $(".matchData").css({"height": deviceHeight});
            }

        });
    });
    //配送方式部分
    $(".customerAttention").click(function () {
        $(this).siblings(".imHide").slideToggle(300);
        $(this).find(".info-more").toggleClass("changeBg");
    });
    $(".proBack").click(function () {
        $(this).siblings(".imHide-2").slideToggle(300);
        $(this).find(".info-more").toggleClass("changeBg");
    });
    //尺码选择部分
    $(".mySize").click(function (ev) {
        $(".moreSize").addClass("switchShow");
        ev.stopPropagation();
    });
    $(".moreSize").click(function (ev) {
        ev.stopPropagation();
    });
    //尺码是否成功选择部分
    var selectedXml, selectedStock;
    $(".moreSize").delegate("li", "click", function () {
        $(this).find(".imChecked").css("display", "none").end().siblings("li").find(".imChecked").css("display", "none");
        $(".addBag").css("background", "#A7A7A7").attr("disabled", true);
    });
    $(".moreSize").delegate(".click", "click", function () {
        $(this).find(".imChecked").css("display", "block").end().siblings("li").find(".imChecked").css("display", "none");
        $(".addBag").css("background", "#000000").removeAttr("disabled");
        selectedXml = $(this).attr("myAttributesXml");
        selectedStock = $(this).attr("myUseBondedStock");
    });
    $("body").click(function () {
        $(".moreSize").removeClass("switchShow");
        $(".matchData").removeClass("switchShow");
    });
    //遮罩层显示隐藏的切换
    function triggerMask(){
        $(".shade").css({"display": "block", "top": $(window).scrollTop()});
        $("html,body").addClass("overflowHidden");
    }
    //点击收藏部分
    var collectId = 0;
    var collectMark = 0;
    $(".collect").click(function () {
        $(".absolute").html("");
        triggerMask();
        $(this).find(".collectBg").toggleClass("collectBg2");
        if (collectMark == 0) {
            $(".collectInfo").html("取消");
            $.ajax({
                type: "post",
                data: {
                    interfaceName: "addFavorites",
                    customerAccessKey: cusKey,
                    customerId: cusId,
                    customerEmail: cusEmail,
                    spname: "Favorites",
                    Favorites_id: 0,
                    Favorites_pictureUrl: favouriteUrl,
                    Favorites_productId: myProductId,
                    nocache: 1
                }
            }).done(function (result) {
                if(result.MetaData.ResponseCode==2000.0){
                    $(".absolute").html("已保存至收藏");
                    collectMark = 1;
                    setTimeout(function () {
                        $(".shade").css("display", "none");
                        $("html,body").removeClass("overflowHidden");
                    }, 1200);
                    isFavorite();
                }
            })
        }else if(collectMark == 1){
            $(".collectInfo").html("收藏");
            $.ajax({
                data: {
                    interfaceName: "deleteFavorite",
                    customerAccessKey: cusKey,
                    customerId: cusId,
                    customerEmail: cusEmail,
                    favoriteId: collectId,
                    nocache: 1
                }
            }).done(function (result) {
                if(result.MetaData.ResponseCode==2000.0){
                    collectMark = 0;
                    $(".absolute").html("已取消收藏");
                    setTimeout(function () {
                        $(".shade").css("display", "none");
                        $("html,body").removeClass("overflowHidden");
                    }, 1200);
                }
            })
        }
    });
    //收藏结束
    //获取所有收藏商品ID判断商品是否已经收藏

    function isFavorite(){
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: true,
            data: {
                interfaceName: "GetFavorites",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                favoriteIdFrom: 0,
                favoriteIdTo: 0,
                nocache: 1
            }
        }).done(function (result) {
            if(result.MetaData.ResponseCode==2000.0){
                var customerFavorite = result.Favorites;
                for (var i = 0; i < customerFavorite.length; i++) {
                    if (myProductId == customerFavorite[i].ProductId) {
                        $(".collectBg").addClass("collectBg2");
                        $(".collectInfo").html("取消");
                        collectMark = 1;
                        collectId = customerFavorite[i].Id;
                    }
                }
            }else{

            }
        });
    }
    isFavorite();
    //获取结束
    //点击添加购物袋开始
    $(".addBag").click(function () {
        triggerMask();
        $(".absolute").html("请稍后...");
        $(".addBag").css("background", "#A7A7A7").prop("disabled",true);
        $(".moreSize").removeClass("switchShow").find(".imChecked").css("display","none");
        $.ajax({
            type: "post",
            data: {
                interfaceName: "addProductToWishlist",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                spname: "addShoppingCartItem",
                addShoppingCartItem_productId: myProductId,
                addShoppingCartItem_quantity: 1,
                addShoppingCartItem_shoppingCartTypeId: 2,
                addShoppingCartItem_attributesXml: selectedXml,
                addShoppingCartItem_useBondedStock: selectedStock,
                nocache:1
            }
        }).done(function (result) {
            if(result.MetaData.ResponseCode==2000.0){
                $("html,body").removeClass("overflowHidden");
                $(".absolute").html("添加成功");
                setTimeout(function(){
                    $(".shade").css("display","none");
                },500)
            }else{
                $("html,body").removeClass("overflowHidden");
                $(".absolute").html("请稍后添加");
                setTimeout(function(){
                    $(".shade").css("display","none");
                },500)
            }
        })
    });
    //购物车点击
    $(".cartWrap").click(function () {
        window.location.href = "shopBag.html";
    });

});