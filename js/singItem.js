$(function () {
    $("#footer").load("footer.html");
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var myTitle = decodeURI(getUrlParams("myTitle")).replace(/@/, "%");
    var myId = getUrlParams("myId");
    var ifDesigner = getUrlParams("ifDesigner");
    var ifApp = getUrlParams("ifApp");
    var ifAll = getUrlParams("ifAll");

    function getUrlParams(name) {
        var reg = new RegExp("(^|!)" + name + "=([^!]*)(!|$)");
        var r = window.location.search.substring(1).match(reg);
        if (r != null) {
            return r[2];
        }
        else {
            return "";
        }
    }
    $("title").html(myTitle);
    $(".proTitle").html(myTitle);
    var faceName;
    if (ifDesigner == "1") {
        faceName = "getDesigner"
    } else {
        faceName = "getCategory"
    }
    if (ifApp == "1") {
        $("nav").css({"display": "none"});
        $("#footer").css({"display": "none"});
    }
    var page = 0;
    $('.content').dropload({
        scrollArea: window,
        loadDownFn: function (me) {
            page++;
            var result = '';
            $.ajax({
                url: H5_AJAX_HTTP_URL,
                dataType: "json",
                data: {
                    interfaceName: faceName,
                    customerAccessKey: cusKey,
                    customerId: cusId,
                    customerEmail: cusEmail,
                    Id: myId,
                    pageNumber: page,
                    pageSize: 20
                },
                success: function (data) {
                    var myResult;
                    if (ifDesigner == "1") {
                        myResult = data.Designer;
                    } else {
                        myResult = data.Category;
                    }
                    var arrLen = myResult.Products.length;
                    if (arrLen > 0) {
                        for (var i = 0; i < myResult.Products.length; i++) {
                            var imgSrc = myResult.Products[i].DefaultPictureModel.ImageUrl;
                            var imgId = myResult.Products[i].Id;
                            var picSrc = '<img src="" myid="' + imgId + '" data-original="' + imgSrc + '" class="lazy">';
                            var proDesigner = myResult.Products[i].CustomProperties.DesignerName;
                            var proName = myResult.Products[i].Name;
                            var name = myResult.Name;
                            var proPrice = myResult.Products[i].ProductPrice.Price;
                            result += ' <div class="singleModel"><a>' + picSrc + '</a><span class="singleDesigner">' + proDesigner + '</span><span class="singleName">' + proName + '</span><span class="singlePrice">' + proPrice + '</span></div>';
                            if (myTitle == null || myTitle == undefined || myTitle == "") {
                                if (ifAll == "1") {
                                    $(".proTitle").html("全部");
                                }else{
                                    $(".proTitle").html(name);
                                }
                            }
                        }

                    } else {
                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
                    }
                    // 为了测试，延迟100毫秒加载
                    setTimeout(function () {
                        // 插入数据到页面，放到最后面
                        $('.lists').append(result);
                        $("img.lazy").lazyload(
                            {threshold: 100}
                        );
                        // 每次数据插入，必须重置
                        me.resetload();
                    }, 100);
                }
            });
        }
    });
    //商品点击进入详情页
    //cloudokids://product/
    $(".content").delegate("img", "click", function () {
        var proId = $(this).attr("myid");
        if (ifApp == "1") {
            $(this).parent("a").attr("href", "cloudokids://product/" + proId);
        } else {
            window.location.href = "detailPages.html#" + proId;
        }
    });
});
