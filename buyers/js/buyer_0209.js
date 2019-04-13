function refresh() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 1080) {
        document.documentElement.style.fontSize = 1080 / 10.8 + "px";
    } else {
        document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
    }
}
refresh();
$(function () {
    refresh();
    window.onresize = function () {
        refresh();
    };
    var mySwiper = new Swiper('.swiper-container_one', {
        direction: 'horizontal',
        loop: true,
        autoplay: 8000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination'
    });
    //买手团队轮播部分
    $.ajax({
        url: H5_AJAX_HTTP_URL,
        dataType: "json",
        async: false,
        data: {
            interfaceName: "GetBuyers",
            customerId: "6",
            customerAccessKey: "475043A85C1AC34DD70F48EB47B6E1E1CB04D481",
            customerEmail: "h5@cloudokids.com"
        }
    }).done(function (result) {
        var teamModel = $(".teamBox").find(".teamModel").eq(0);
        $(".teamBox").empty();
        var buyer = result.Customers;
        for (var i = 0; i < buyer.length; i++) {
            teamModel.clone(true).appendTo($(".teamBox"));
            var userId = "../buyerMatch.html#"+buyer[i].Id+"";
            var src = buyer[i].AvatarUrl;
            if (src == "") {
                src = "http://h5.cloudokids.cn/buyers/listImg/cloudokids.png";
            }
            $(".teamModel").eq(i).find("a").attr("href", userId);
            var imgData = '<img src="' + src + '" alt=""> ';
            $(".teamModel").eq(i).find(".imgWrap").html(imgData);
            var userName = buyer[i].Username;
            $(".teamModel").eq(i).find(".Name").html(userName);
        }
    });
    var mySwiper_two = new Swiper('.swiper-container_two', {
        scrollbar: '.swiper-scrollbar',
        slidesPerView: 5
    });
    //推荐买手商品加载
    var a = 0;
    var b = 0;


        $.ajax({
            url: H5_AJAX_HTTP_URL,
            async: false,
            dataType: "json",
            data: {
                interfaceName: "GetTopCollages",
                customerId: "6",
                customerAccessKey: "475043A85C1AC34DD70F48EB47B6E1E1CB04D481",
                customerEmail: "h5@cloudokids.com",
                day: "50",
                pageNumber: 1,
                pageSize: "4"
            }
        }).done(function (result) {
            var buyerid = 0;
            for (var i = 0; i < result.Collages.length; i++) {
                var matchId = result.Collages[i].Id;
                $.ajax({
                    url: H5_AJAX_HTTP_URL,
                    async: false,
                    dataType: "json",
                    data: {
                        interfaceName: "GetCollage",
                        customerAccessKey: "guest",
                        collageId: matchId
                    }
                }).done(function (myMatch) {
                    if (a < 2) {
                            var matchId = result.Collages[i].Id;
                            var prefix = result.Collages[i].CustomerProfileOverview;
                            var adviceImg = prefix.AvatarUrl;
                            var imgData = '<img src="' + adviceImg + '">';

                            var userImgId = "../buyerMatch.html#"+prefix.Id+"";
                            var userName = prefix.Username;
                            var userSignature = prefix.Signature;
                            $(".shopAdvice").eq(a).find(".userImg").find("a").attr("href", userImgId).html(imgData);
                            $(".shopAdvice").eq(a).find(".userName").find("a").attr("href", userImgId).find("span").html(userName);
                            $(".shopAdvice").eq(a).find(".userWords").html(userSignature);
                            if (userSignature == "") {
                                $(".shopAdvice").eq(a).find(".words").css({"display": "none"});
                            }
                            var designerModel = $(".designerBox").eq(0).find("span").eq(0);
                            $(".designerBox").eq(a).empty();
                            var myMat = myMatch.Collage.Designers;
                            for (var k = 0; k < myMat.length && k < 3; k++) {
                                designerModel.clone(true).appendTo($(".designerBox").eq(a));
                                var designer = myMat[k].Name;
                                var designerId = "../singItem.html?myTitle="+designer+"!myId="+myMat[k].Id+"!ifDesigner=1";
                                $(".shopAdvice").eq(a).find(".designerName").eq(k).attr("href", designerId).html(designer);
                            }
                            var myPro = myMatch.Collage.Products;
                            for (var j = 0; j < myPro.length; j++) {
                                //商品链接
                                var matchClothPrice = myPro[j].ProductPrice.Price;
                                var matchDesigner = myPro[j].CustomProperties.DesignerName;
                                var matchClothName = myPro[j].Name;
                                var matchPic = myPro[j].DefaultPictureModel.ImageUrl;
                                var matchImgData = '<img src="' + matchPic + '">';
                                var matchImgId = "../detailPages.html#"+myPro[j].Id+"";
                                $(".brandShow").eq(a).find(".matchModel").eq(j).find("a").attr("href", matchImgId).html(matchImgData);
                                $(".brandShow").eq(a).find(".matchModel").eq(j).find(".cloth-name").html(matchClothName);
                                $(".brandShow").eq(a).find(".matchModel").eq(j).find(".cloth-brand").html(matchDesigner);
                                $(".brandShow").eq(a).find(".matchModel").eq(j).find(".price").html(matchClothPrice);
                            }
                        }
                        a++;
                        if (a > 2 && b < 2) {
                            var matchId = result.Collages[i].Id;
                            var prefix = result.Collages[i].CustomerProfileOverview;
                            var adviceImg = prefix.AvatarUrl;
                            var imgData = '<img src="' + adviceImg + '">';
                            var userImgId = "../buyerMatch.html#"+prefix.Id+"";
                            var userName = prefix.Username;
                            var userSignature = prefix.Signature;
                            var description = result.Collages[i].Description;
                            $(".matchContentTwo").eq(b).find(".userPic").find("a").attr("href", userImgId).find("div").html(imgData);
                            $(".matchContentTwo").eq(b).find(".userPic").find("a").attr("href", userImgId).find("span").html(userName);
                            $(".matchContentTwo").eq(b).find(".myDescription").html(description);

                            var myMatc = myMatch.Collage.Products;
                            for (var j = 0; j < myMatc.length; j++) {
                                var matchClothPrice = myMatc[j].ProductPrice.Price;
                                var matchDesigner = myMatc[j].CustomProperties.DesignerName;
                                var matchClothName = myMatc[j].Name;
                                var matchPic = myMatc[j].DefaultPictureModel.ImageUrl;
                                var matchImgData = '<img src="' + matchPic + '">';
                                var matchImgId = "../detailPages.html#"+myMatc[j].Id+"";
                                $(".matchContentTwo").eq(b).find(".beautyCloth").find(".myPic").eq(j).find("a").attr("href", matchImgId).html(matchImgData);
                                $(".matchContentTwo").eq(b).find(".beautyCloth").find(".myPic").eq(j).find(".beautyName").html(matchClothName);
                                $(".matchContentTwo").eq(b).find(".beautyCloth").find(".myPic").eq(j).find(".beautyBrand").html(matchDesigner);
                                $(".matchContentTwo").eq(b).find(".beautyCloth").find(".myPic").eq(j).find(".beautyPrice").find("span").html(matchClothPrice);
                            }
                            b++;
                        }
                });
            }
        });
    //单品模块加载
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        } else {
            var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    }

    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

    function getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    var number = 2;
    var stopMark = 0;
    window.onscroll = function () {
        //返回按钮
        if ($(window).scrollTop() > 800) {
            $(".goTop").show();
        } else {
            $(".goTop").hide();
        }
        //返回结束
        if (stopMark == 1) {
            return;
        }
        var height = getClientHeight();
        var theight = getScrollTop();
        var rheight = getScrollHeight();
        var bheight = rheight - theight - height;
        if (bheight < 15000) {
            if (stopMark == 1) {
                return;
            }
            stopMark = 1;
            $.ajax({
                url: H5_AJAX_HTTP_URL,
                dataType: "json",
                data: {
                    interfaceName: "GetCollages",
                    customerAccessKey: "475043A85C1AC34DD70F48EB47B6E1E1CB04D481",
                    customerId: 6,
                    customerEmail: "h5@cloudokids.com",
                    pageNumber: number,
                    pageSize: "20"
                }
            }).done(function (myJSON) {
                number++;
                var result = myJSON;
                var product = result.Collages;
                var length = product.length;
                //console.log("=="+length);
                //console.log(product);
                if (length == 0) {
                    stopMark = 1;
                    return;
                }
                var boxModel = $(".content").find(".largeMatch-wrap").eq(0);
                for (var i = 0; i < length; i++) {
                    var mark = 20 * (number - 2) + i;
                    boxModel.clone(true).appendTo($(".content"));
                    var userUrl = result.Collages[i].CustomerProfileOverview.AvatarUrl;
                    var imgData = '<img src="' + userUrl + '" alt=""> ';
                    $(".userMatch").eq(mark).find("div").html(imgData);
                    var userName = result.Collages[i].CustomerProfileOverview.Username;
                    $(".userMatch").eq(mark).find("span").html(userName);
                    var imgUrl = result.Collages[i].PictureUrl;
                    var imgData2 = '<img src="' + imgUrl + '" alt=""> ';
                    $(".bigPicShow").eq(mark).find("a").html(imgData2);
                    var wordsDes = result.Collages[i].Description;
                    $(".beauty-introduce").eq(mark).html(wordsDes);
                    var link = "singleModle.html?id=" + result.Collages[i].Id;
                    $(".bigPicShow").eq(mark).find("a").attr("href", link);
                    var link2 = "../buyerMatch.html#"+result.Collages[i].CustomerProfileOverview.Id+"";
                    $(".userMatch").eq(mark).find("a").attr("href", link2);
                }
                stopMark = 0;
            });
        }
    };
    //初始商品加载
    modelLoad();
    function modelLoad() {
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            data: {
                interfaceName: "GetCollages",
                customerAccessKey: "475043A85C1AC34DD70F48EB47B6E1E1CB04D481",
                customerId: 6,
                customerEmail: "h5@cloudokids.com",
                pageNumber: 1,
                pageSize: "20"
            }
        }).done(function (result) {
            var product = result.Collages;
            var length = product.length;
            var boxModel = $(".content").find(".largeMatch-wrap").eq(0);
            $(".content").empty();
            for (var i = 0; i < length; i++) {
                boxModel.clone(true).appendTo($(".content"));
                var userUrl = result.Collages[i].CustomerProfileOverview.AvatarUrl;
                var imgData = '<img src="' + userUrl + '" alt=""> ';
                $(".userMatch").eq(i).find("div").html(imgData);
                var userName = result.Collages[i].CustomerProfileOverview.Username;
                $(".userMatch").eq(i).find("span").html(userName);
                var imgUrl = result.Collages[i].PictureUrl;
                var imgData2 = '<img src="' + imgUrl + '" alt=""> ';
                $(".bigPicShow").eq(i).find("a").html(imgData2);
                var wordsDes = result.Collages[i].Description;
                $(".beauty-introduce").eq(i).html(wordsDes);
                var link = "singleModle.html?id="+result.Collages[i].Id+"" ;
                $(".bigPicShow").eq(i).find("a").attr("href", link);
                var link2 = "../buyerMatch.html#"+result.Collages[i].CustomerProfileOverview.Id+"";
                $(".userMatch").eq(i).find("a").attr("href", link2)
            }
        });
    }

    //返回顶部按钮
    $(".goTop").click(function () {
        $(".goTop").stop().animate({"bottom": 1.5 + "rem", "opacity": "0"}, 400, function () {
            $(".goTop").fadeOut().css({"opacity": 1, "bottom": 1.5 + "rem"});
        });
        $("html,body").stop().animate({scrollTop: 0}, 400);

    });

});
