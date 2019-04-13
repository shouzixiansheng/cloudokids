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
            }).done(function (result) {
                number++;
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
                    //console.log("mark=" + mark);
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
                    var link2 = "../buyerMatch.html#" + result.Collages[i].CustomerProfileOverview.Id;
                    $(".userMatch").eq(mark).find("a").attr("href", link2);

                }
                //console.log("stopMark++2="+stopMark);
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
        }).done(function (myJSON) {
            var result = myJSON;
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
                var link = "singleModle.html?id=" + result.Collages[i].Id;
                $(".bigPicShow").eq(i).find("a").attr("href", link);
                var link2 = "../buyerMatch.html#" + result.Collages[i].CustomerProfileOverview.Id;
                $(".userMatch").eq(i).find("a").attr("href", link2)
            }
        });
    }
});

