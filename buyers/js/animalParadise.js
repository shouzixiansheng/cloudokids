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
        {"ID": "22053"},
        {"ID": "21165"},
        {"ID": "21947"}
    ];
    var model1 = $(".newSame").find(".carToonPro").eq(0);
    $(".newSame").empty();
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
                model1.clone(true).appendTo($(".newSame"));
                $(".newSame").find(".carToonPro").eq(ii).find("a").attr("href", proId);
                $(".newSame").find(".carToonPro").eq(ii).find("a").find(".imgWrap").html(imgLink);
                $(".newSame").find(".carToonPro").eq(ii).find(".carToonName").html(designer);
                $(".newSame").find(".carToonPro").eq(ii).find(".carToonDesigner").html(name);
                $(".newSame").find(".carToonPro").eq(ii).find(".carToonPrice").html(price);
                ii++;
            }
        })
    }


    var arr1 = [
        {"ID": "26474"},
        {"ID": "21270"},
        {"ID": "21304"}
    ];
    var model1 = $(".classSame").find(".carToonPro").eq(0);
    $(".classSame").empty();
    for (var a = 0, aa = 0; a < arr1.length; a++) {
        var matchId = arr1[a].ID;
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
                model1.clone(true).appendTo($(".classSame"));
                $(".classSame").find(".carToonPro").eq(aa).find("a").attr("href", proId);
                $(".classSame").find(".carToonPro").eq(aa).find("a").find(".imgWrap").html(imgLink);
                $(".classSame").find(".carToonPro").eq(aa).find(".carToonName").html(designer);
                $(".classSame").find(".carToonPro").eq(aa).find(".carToonDesigner").html(name);
                $(".classSame").find(".carToonPro").eq(aa).find(".carToonPrice").html(price);
                aa++;
            }
        })
    }




    var matchArr = [{"id": 3339}, {"id": 3385}, {"id": 3330}, {"id": 3365}];
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
        {"ID":"24946"},
        {"ID":"22007"},
        {"ID":"24845"},
        {"ID":"21151"},
        {"ID":"20094"},
        {"ID":"20092"},
        {"ID":"20093"},
        {"ID":"20997"},
        {"ID":"20091"},
        {"ID":"20088"},
        {"ID":"20089"},
        {"ID":"20084"},
        {"ID":"20085"},
        {"ID":"21243"},
        {"ID":"21270"},
        {"ID":"21304"},
        {"ID":"26474"},
        {"ID":"24544"},
        {"ID":"20881"},
        {"ID":"26560"},
        {"ID":"21947"},
        {"ID":"21156"},
        {"ID":"21165"},
        {"ID":"22054"},
        {"ID":"22055"},
        {"ID":"21155"},
        {"ID":"20590"},
        {"ID":"20637"},
        {"ID":"26540"},
        {"ID":"26541"},
        {"ID":"26539"},
        {"ID":"26559"}
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
                var imgLink = '<img src="' + imgData + '">';
                model.clone(true).appendTo($(".recommendPro"));
                $(".recommendPro").find(".imModel").eq(kk).find("a").attr("href", proId).html(imgLink);
                $(".recommendPro").find(".imModel").eq(kk).find(".designer").html(designer);
                $(".recommendPro").find(".imModel").eq(kk).find(".proName").html(name);
                $(".recommendPro").find(".imModel").eq(kk).find(".price").html(price);
                kk++;
            }
        })
    }
});
