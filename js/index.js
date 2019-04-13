$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    //自轮播商品加载
    var topProData = $(".topPro").find(".topProShow").eq(0);
    $(".topPro").empty();
    var topicModel = $(".topic-wrap").find(".topic").eq(0);
    $(".topic-wrap").empty();
    var h5Model = $(".h5-wrap").find(".h5").eq(0);
    $(".h5-wrap").empty();
    $.ajaxSetup({"url": H5_AJAX_HTTP_URL, "dataType": "json"});
    $.ajax({
        data: {
            interfaceName: "GetInspirations",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail
        }
    }).done(function (topData) {
        //console.log(topData);
        var topProLe = topData.Inspirations;
        var arrPro = [], h5Arr = [], topicArr = [];
        for (var i = 0; i < topProLe.length; i++) {
            var inspirationType = topData.Inspirations[i].InspirationType;
            if (inspirationType.indexOf("Inspiration") >= 0) {
                arrPro.push(topProLe[i]);
                topProData.clone(true).appendTo($(".topPro"));
            }
            if (inspirationType.indexOf("H5") >= 0) {
                h5Arr.push(topProLe[i]);
                //console.log(h5Arr);
                //console.log(h5Arr.length);
                h5Model.clone(true).appendTo($(".h5-wrap"));
                $(".h5").css("display", "block");
            }
            if (inspirationType.indexOf("Topic") >= 0) {
                topicArr.push(topProLe[i]);
                topicModel.clone(true).appendTo($(".topic-wrap"));
                $(".topic").css("display", "block");
            }
        }
        //顶部轮播展示
        //console.log(arrPro);
        for (var i = 0; i < arrPro.length; i++) {
            var topProUrl = arrPro[i].PictureModel.ImageUrl;
            var topSrc = '<img src="' + topProUrl + '">';
            $(".topProShow").eq(i).find("a").html(topSrc);
            var bottomPro = arrPro[i].Url;
            if (bottomPro == null) {
                continue;
            }
            var bottomUrl = bottomPro.split("/");
            $(".topProShow").eq(i).find("a").attr("myId", bottomUrl[1]).attr("myTitle", arrPro[i].Title).attr("designerId", arrPro[i].Id).attr("myUrl", bottomUrl[0]);
        }
        //h5 banner展示
        //console.log(h5Arr);
        for (var i = 0; i < h5Arr.length; i++) {
            var h5Url = h5Arr[i].PictureModel.ImageUrl;
            var h5Src = '<img src="' + h5Url + '">';
            $(".h5").eq(i).find("a").html(h5Src);
            //活动url
            //var goUrl= "buyers/"+h5Arr[i].Url.split("/")[4];
            var myIndex = h5Arr[i].Url.split("/")[3].lastIndexOf("!");
            //普通Url
            //console.log(h5Arr[i].Url.split("/")[4]);
            var goLink = h5Arr[i].Url.split("/")[3].substring(0, myIndex);
            if (h5Arr[i].Url.split("/")[4] != undefined) {
                $(".h5-wrap").find(".h5").eq(i).find("a").attr("href", "buyers/" + h5Arr[i].Url.split("/")[4])
            } else {
                $(".h5-wrap").find(".h5").eq(i).find("a").attr("href", goLink)
            }
        }
        //topic Banner展示
        for (var i = 0; i < topicArr.length; i++) {
            var topicUrl = topicArr[i].PictureModel.ImageUrl;
            var topicSrc = '<img src="' + topicUrl + '">';
            $(".h5").eq(i).html(topicSrc);
        }
        //顶部自轮播
        new Swiper('.selfCarousel', {
            direction: 'horizontal',
            autoplay: 5000,
            pagination: '.swiper-pagination',
            loop: true,
            onSlideChangeStart: function (swiper) {
                var picIndex = swiper.activeIndex;
                var proId = $(".topProShow").eq(picIndex).find("a").attr("myId");
                var proUrl = $(".topProShow").eq(picIndex).find("a").attr("myUrl");
                var faceName;
                if (proUrl == "Manufacturer") {
                    faceName = "getDesigner"
                } else {
                    faceName = "getCategory"
                }
                $.ajax({
                    data: {
                        interfaceName: faceName,
                        customerAccessKey: cusKey,
                        Id: proId,
                        customerId: cusId,
                        customerEmail: cusEmail
                    }

                }).done(function (result) {
                    var proResult;
                    if (faceName == "getDesigner") {
                        proResult = result.Designer;
                    } else {
                        proResult = result.Category;
                    }
                    //console.log(proResult.Products.length);
                    for (var k = 0; k < proResult.Products.length && k < 2; k++) {
                        var botoProSrc = proResult.Products[k].DefaultPictureModel.ImageUrl;
                        var imgId = proResult.Products[k].Id;
                        var imgSrc = '<img src="' + botoProSrc + '" myid="' + imgId + '">';
                        var newProPrice = proResult.Products[k].ProductPrice.Price;
                        var newProName = proResult.Name;
                        var oldProPrice = proResult.Products[k].ProductPrice.OldPrice;
                        $(".productTop").eq(k).find("a").html(imgSrc);
                        $(".productTop").eq(k).find(".newProBrand").html(newProName);
                        $(".productTop").eq(k).find(".newPrice").html(newProPrice);
                        $(".productTop").eq(k).find(".oldPrice").find("del").html(oldProPrice);
                    }
                })
            }
        });
    });
    //首页商品加载开始
    //商品Id;
    var obtainId;
    var imgDataIndex;
    var ProductData = $(".content").find(".content_wrap").eq(0);
    $(".content").empty();
    var dataInfo = [{"title": "本周新品", "id": "8"}, {"title": "婴儿", "id": "2"}, {
        "title": "女孩",
        "id": "3"
    }, {"title": "男孩", "id": "4"}, {"title": "童鞋", "id": "5"}, {"title": "玩具&礼物", "id": "6"}];
    mainUrl();
    productLoad();
    function mainUrl() {
        for (var i = 0; i < 6; i++) {
            ProductData.clone(true).appendTo($(".content"));
            $(".swiper-container").eq(i + 1).addClass("swiper-container" + i);
            $(".title_name").eq(i).html(dataInfo[i].title);
            $(".title_more").eq(i).attr("myid", dataInfo[i].id).html("更多");
        }
    }

    function productLoad() {
        var src, imgId, name, nowPrice, oldPrice;
        for (var j = 0; j < 6; j++) {
            imgDataIndex = j;
            //商品加载
            imgUrl(imgDataIndex);
        }

    }

    //商品加载
    function imgUrl(imgDataIndex) {
        $.ajax({
            data: {
                interfaceName: "getCategory",
                customerAccessKey: cusKey,
                Id: dataInfo[imgDataIndex].id,
                customerId: cusId,
                customerEmail: cusEmail
            }
        }).done(function (myData) {
            var dataNew = myData.Category;
            var Imgdata = '';
            for (var k = 0; k < dataNew.Products.length; k++) {
                src = dataNew.Products[k].DefaultPictureModel.ImageUrl;
                imgId = dataNew.Products[k].Id;
                name = dataNew.Products[k].Name;
                var proName = dataNew.Products[k].CustomProperties.DesignerName;
                nowPrice = dataNew.Products[k].ProductPrice.Price;
                oldPrice = dataNew.Products[k].ProductPrice.OldPrice;
                Imgdata = Imgdata + '<div class="swiper-slide img_wrap">' +
                    '<img data-src="' + src + '" alt="" myid="' + imgId + '" class="swiper-lazy"><span class="name">' + proName + '</span>' +
                    '<span class="price"><span class="now_price">' + nowPrice + '</span></span> ' +
                    '</div>';
            }
            $(".swiper-wrapper").eq(imgDataIndex + 1).html(Imgdata);
            new Swiper('.swiper-container' + imgDataIndex, {
                direction: 'horizontal',
                scrollbar: '.swiper-scrollbar',
                slidesPerView: 3,
                lazyLoading: true,
                lazyLoadingInPrevNext: true,
                lazyLoadingInPrevNextAmount: 3
            });
        });
    }

    $(".content,.productTop-wrap").delegate("img", "click", function () {
        var obtainId = $(this).attr("myid");
        window.location.href = "detailPages.html#" + obtainId;
    });
    //更多点击
    $(".content").delegate(".title_more", "click", function () {
        var myTitle = $(this).siblings(".title_name").html();
        var myId = $(this).attr("myid");
        window.location.href = "singItem.html?myTitle=" + myTitle + "!myId=" + myId;
    });
    //购物车点击
    $(".buyerBag").click(function () {
        window.location.href = "shopBag.html";
    });

    //获取浏览过的商品Id和name;
    var userHasLook;
    var userHasLookArr;
    if (storage.recentlyUserLook != undefined) {
        userHasLook = storage.recentlyUserLook;
        userHasLookArr = JSON.parse(userHasLook).reverse();
    }
    var hasLookModel = $(".hasLookContentWrap").find(".content_wrap").eq(0);
    $(".hasLookContentWrap").empty();
    if (userHasLookArr) {
        for (var i = 0; i < userHasLookArr.length; i++) {
            hasLookModel.clone(true).appendTo($(".hasLookContentWrap"));
            $(".hasLookContentWrap").find(".swiper-container").eq(i).addClass("hasLook" + i);
            var designerId = userHasLookArr[i].designerId;
            var title = userHasLookArr[i].designerName;
            $(".hasLookContentWrap").find(".title_name").eq(i).html(title);
            $(".hasLookContentWrap").find(".title_more").eq(i).attr("myId", designerId).html("更多");
            $.ajax({
                async: false,
                data: {
                    interfaceName: "getDesigner",
                    customerAccessKey: cusKey,
                    customerId: cusId,
                    customerEmail: cusEmail,
                    Id: designerId,
                    pageNumber: 1,
                    pageSize: 20
                }
            }).done(function (result) {
                var Imgdata = '';
                var lookProImg = result.Designer.Products;
                for (var j = 0; j < lookProImg.length; j++) {
                    var lookSrc = lookProImg[j].DefaultPictureModel.ImageUrl;
                    var loogImgId = lookProImg[j].Id;
                    var lookImgName = lookProImg[j].CustomProperties.DesignerName;
                    var lookNewPrice = lookProImg[j].ProductPrice.Price;
                    Imgdata = Imgdata + '<div class="swiper-slide img_wrap">' +
                        '<img data-src="' + lookSrc + '" alt="" myid="' + loogImgId + '" class="swiper-lazy"><span class="name">' + lookImgName + '</span>' +
                        '<span class="price"><span class="now_price">' + lookNewPrice + '</span></span> ' +
                        '</div>';
                }
                $(".hasLookContentWrap").find(".swiper-wrapper").eq(i).html(Imgdata);
                new Swiper('.hasLook' + i, {
                    direction: 'horizontal',
                    scrollbar: '.swiper-scrollbar',
                    slidesPerView: 3,
                    lazyLoading: true,
                    lazyLoadingInPrevNext: true,
                    lazyLoadingInPrevNextAmount: 3
                });
            })
        }
    }
    //浏览过的商品进行点击
    $(".hasLookContentWrap").on("click", "img", function () {
        var obtainId = $(this).attr("myid");
        window.location.href = "detailPages.html#" + obtainId;
    });
    //更多点击
    $(".hasLookContentWrap").on("click", ".title_more", function () {
        var myTitle = $(this).siblings(".title_name").html();
        var myId = $(this).attr("myid");
        window.location.href = "singItem.html?myTitle=" + myTitle + "!myId=" + myId + "!ifDesigner=" + 1
    });
//商品顶部点击
    $(".topPro").on("click", "a", function () {
        var myTitle = $(this).attr("myTitle");
        var myId = $(this).attr("myId");
        var myUrl=$(this).attr("myurl");
        if(myUrl=="Category"){
            window.location.href = "singItem.html?myTitle=" + myTitle + "!myId=" + myId + "!ifDesigner=" + 0
        }else{
            window.location.href = "singItem.html?myTitle=" + myTitle + "!myId=" + myId + "!ifDesigner=" + 1
        }

    });
});