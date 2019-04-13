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
        var height = getClientHeight();
        var theight = getScrollTop();
        var rheight = getScrollHeight();
        var bheight = rheight - theight - height;
        if (stopMark == 1) {
            return;
        }
        if (bheight < 1000) {
            if (stopMark == 1) {
                return;
            }
            stopMark = 1;
            $.ajax({
                url: H5_AJAX_HTTP_URL,
                async: false,
                dataType: "json",
                data: {
                    interfaceName: "GetTopCollages",
                    customerId: "6",
                    customerAccessKey: "475043A85C1AC34DD70F48EB47B6E1E1CB04D481",
                    customerEmail: "h5@cloudokids.com",
                    day: "60",
                    pageNumber: number,
                    pageSize: "4"
                }
            }).done(function (result) {
                number++;
                //console.log(result);
                if(result.Collages.length==0){
                    return;
                }
                for (var i = 0; i < result.Collages.length; i++) {
                    var mark = 4 * (number - 2) + i;
                    buyerModel.clone(true).appendTo($(".mainContent"));
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
                    }).done(function (result) {
                        console.log(result);
                        var avatarUrl = result.Collage.CustomerProfileOverview.AvatarUrl;
                        var imgData = '<img src="' + avatarUrl + '">';
                        var buyerId = result.Collage.CustomerProfileOverview.Id;
                        var buyerLink = "../buyerMatch.html#" + buyerId;
                        $(".buyerImg").eq(mark).find("a").attr("href", buyerLink).html(imgData);
                        var signature = result.Collage.CustomerProfileOverview.Signature;
                        $(".buyerSingerNature").eq(mark).html(signature);
                        var userName = result.Collage.CustomerProfileOverview.Username;
                        $(".buyerName").eq(mark).html(userName);
                        for (var j = 0; j < result.Collage.Designers.length && j < 3; j++) {
                            var name = result.Collage.Designers[j].Name;
                            //var designerLink="cloudokids://designer/"+result.Collage.Designers[j].Id;
                            var designerLink="../singItem.html?myTitle="+name+"!myId="+result.Collage.Designers[j].Id+"!ifDesigner=1";
                            var designerData = '<span class="userDesigner"><a href="'+designerLink+'">' + name + '</a></span>';
                            $(designerData).appendTo($(".myBrand").eq(mark));
                        }
                        for (var j = 0; j < result.Collage.Products.length && j < 3; j++) {
                            var imgUrl = result.Collage.Products[j].DefaultPictureModel.ImageUrl;
                            var proName = result.Collage.Products[j].Name;
                            var proLink="../detailPages.html#"+result.Collage.Products[j].Id;
                            var brandName = result.Collage.Products[j].CustomProperties.DesignerName;
                            var price = result.Collage.Products[j].ProductPrice.Price;
                            var proData = '<img src="' + imgUrl + '">';
                            $(".productShow").eq(mark).find(".product").eq(j).find("a").attr("href",proLink).html(proData);
                            $(".productShow").eq(mark).find(".product").eq(j).find(".proName").html(proName);
                            $(".productShow").eq(mark).find(".product").eq(j).find(".brandName").html(brandName);
                            $(".productShow").eq(mark).find(".product").eq(j).find(".price").html(price);
                        }
                    });
                }
                stopMark = 0;
            });

        }
    };
    //买手商品加载
    var buyerModel = $(".mainContent").find(".buyerContent").eq(0);
    $(".mainContent").empty();
    productLoad();
    function productLoad() {
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            async: false,
            dataType: "json",
            data: {
                interfaceName: "GetTopCollages",
                customerId: "6",
                customerAccessKey: "475043A85C1AC34DD70F48EB47B6E1E1CB04D481",
                customerEmail: "h5@cloudokids.com",
                day: "30",
                pageNumber: 1,
                pageSize: "4"
            }
        }).done(function (result) {
            //console.log(result);
            for (var i = 0; i < result.Collages.length; i++) {
                buyerModel.clone(true).appendTo($(".mainContent"));
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
                }).done(function (result) {
                    //console.log(result);
                    var avatarUrl = result.Collage.CustomerProfileOverview.AvatarUrl;
                    var imgData = '<img src="' + avatarUrl + '">';
                    var buyerId = result.Collage.CustomerProfileOverview.Id;
                    var buyerLink = "../buyerMatch.html#" + buyerId;
                    $(".buyerImg").eq(i).find("a").attr("href", buyerLink).html(imgData);
                    var signature = result.Collage.CustomerProfileOverview.Signature;
                    $(".buyerSingerNature").eq(i).html(signature);
                    var userName = result.Collage.CustomerProfileOverview.Username;
                    $(".buyerName").eq(i).html(userName);
                    for (var j = 0; j < result.Collage.Designers.length && j < 3; j++) {
                        var name = result.Collage.Designers[j].Name;
                        var designerLink="../singItem.html?myTitle="+name+"!myId="+result.Collage.Designers[j].Id+"!ifDesigner=1";
                        var designerData = '<span class="userDesigner"><a href="'+designerLink+'">' + name + '</a></span>';
                        $(designerData).appendTo($(".myBrand").eq(i));
                    }
                    for (var j = 0; j < result.Collage.Products.length && j < 3; j++) {
                        var imgUrl = result.Collage.Products[j].DefaultPictureModel.ImageUrl;
                        var proName = result.Collage.Products[j].Name;
                        var brandName = result.Collage.Products[j].CustomProperties.DesignerName;
                        var price = result.Collage.Products[j].ProductPrice.Price;
                        var proLink="../detailPages.html#"+result.Collage.Products[j].Id;
                        var proData = '<img src="' + imgUrl + '">';
                        $(".productShow").eq(i).find(".product").eq(j).find("a").attr("href",proLink).html(proData);
                        $(".productShow").eq(i).find(".product").eq(j).find(".proName").html(proName);
                        $(".productShow").eq(i).find(".product").eq(j).find(".brandName").html(brandName);
                        $(".productShow").eq(i).find(".product").eq(j).find(".price").html(price);
                    }
                });


            }
        });
    }
});

