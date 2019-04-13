/**
 * Created by admin on 2017/4/13.
 */
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

    var arr = [
        {"ID": "24907"},
        {"ID": "24946"},
        {"ID": "25299"},
        {"ID": "25031"}
    ];
    var model1 = $(".carToonModel").find(".carToonPro").eq(0);
    $(".carToonModel").empty();
    for (var i = 0, ii = 0; i < arr.length; i++) {
        var matchId = arr[i].ID;
        $.ajax({
            url: "http://h5.cloudokids.cn/mweb/inter/getResult",
            dataType: "json",
            data: {
                interfaceName: "GetProduct",
                customerAccessKey: "96B41E9935CFAA94B2BF75CA8AB284983BECC426",
                customerId: 9322763,
                customerEmail: "18201432580@cloudo.kids",
                id: matchId
            },
            success: function (data) {
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var proId = "../detailPages.html#" + data.Product.Id;
                var designer = data.Product.CustomProperties.DesignerName;
                var name = data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink = '<img src="' + imgData + '">';
                model1.clone(true).appendTo($(".carToonModel"));
                $(".carToonModel").find(".carToonPro").eq(ii).find("a").attr("href", proId);
                $(".carToonModel").find(".carToonPro").eq(ii).find("a").find(".imgWrap").html(imgLink);
                $(".carToonModel").find(".carToonPro").eq(ii).find(".carToonName").html(designer);
                $(".carToonModel").find(".carToonPro").eq(ii).find(".carToonDesigner").html(name);
                $(".carToonModel").find(".carToonPro").eq(ii).find(".carToonPrice").html(price);
                ii++;
            }
        })
    }


    var matchArr = [{"id": 3389}, {"id": 3373}, {"id": 3319}, {"id": 3285}];
    var model = $(".recommendContent").find(".recommend-wrap");
    $(".recommendContent").empty();
    for (var j = 0, jj = 0; j < matchArr.length; j++) {
        model.clone(true).appendTo($(".recommendContent"));
        var matchId = matchArr[j].id;
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            data: {
                interfaceName: "GetCollage",
                customerAccessKey: "guest",
                collageId: matchId
            }
        }).done(function (result) {
            var imgUrl = result.Collage.PictureUrl;
            var imgPic = '<img src="' + imgUrl + '">';
            var picDescription = result.Collage.Description;
            var buyerUrl = result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic = '<img src="' + buyerUrl + '">';
            var imgLink = "singleModle.html?id=" + result.Collage.Id;
            var buyerId = "../buyerMatch.html#" + result.Collage.CustomerProfileOverview.Id;
            var buyerName = result.Collage.CustomerProfileOverview.Username;
            $(".recommend-wrap").eq(jj).find(".recommend").find(".recommendPic").find("a").attr("href", imgLink).html(imgPic);
            $(".recommend-wrap").eq(jj).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommend-wrap").eq(jj).find(".recommend").find(".headPortrait").find("a").attr("href", buyerId);
            $(".recommend-wrap").eq(jj).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommend-wrap").eq(jj).find(".recommend").find(".userName").html(buyerName);
            $(".recommend-wrap").eq(jj).find(".clickCheck").find("a").attr("href", imgLink);
            jj++;

        })
    }

    var relaxSpringArr = [
        {"ID":"26427"},
        {"ID":"21057"},
        {"ID":"21063"},
        {"ID":"21064"},
        {"ID":"21312"},
        {"ID":"20589"},
        {"ID":"21060"},
        {"ID":"22092"},
        {"ID":"20590"},
        {"ID":"21056"},
        {"ID":"18026"},
        {"ID":"26567"},
        {"ID":"19108"},
        {"ID":"21094"},
        {"ID":"26543"},
        {"ID":"21326"},
        {"ID":"26555"},
        {"ID":"17972"},
        {"ID":"26544"},
        {"ID":"24946"},
        {"ID":"25299"}
    ];
    var model = $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for (var k = 0, kk = 0; k < relaxSpringArr.length; k++) {
        var matchId = relaxSpringArr[k].ID;
        $.ajax({
            url: "http://h5.cloudokids.cn/mweb/inter/getResult",
            dataType: "json",
            data: {
                interfaceName: "GetProduct",
                customerAccessKey: "96B41E9935CFAA94B2BF75CA8AB284983BECC426",
                customerId: 9322763,
                customerEmail: "18201432580@cloudo.kids",
                id: matchId
            },
            success: function (data) {
                var proId = "../detailPages.html#" + data.Product.Id;
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name = data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink = '<img src="" data-original="' + imgData + '" class="lazy">';
                model.clone(true).appendTo($(".recommendPro"));
                $(".recommendPro").find(".imModel").eq(kk).find("a").attr("href", proId).html(imgLink);
                $(".recommendPro").find(".imModel").eq(kk).find(".designer").html(designer);
                $(".recommendPro").find(".imModel").eq(kk).find(".proName").html(name);
                $(".recommendPro").find(".imModel").eq(kk).find(".price").html(price);
                kk++;
                if (kk == relaxSpringArr.length) {
                    $("img.lazy").lazyload(
                        {threshold: 500}
                    );
                }
            }
        })
    }
});
