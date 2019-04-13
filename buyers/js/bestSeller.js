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
        {"ID": "21224"},
        {"ID": "21236"},
        {"ID": "21211"},
        {"ID": "21230"}
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
        {"ID": "22047"},
        {"ID": "21172"},
        {"ID": "21177"}
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




    var matchArr = [{"id": 3216}, {"id": 3015}, {"id": 3145}, {"id": 3118}];
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
        {"ID":"21236"},
        {"ID":"21233"},
        {"ID":"21223"},
        {"ID":"21197"},
        {"ID":"21215"},
        {"ID":"21228"},
        {"ID":"21230"},
        {"ID":"21194"},
        {"ID":"21211"},
        {"ID":"21224"},
        {"ID":"21219"},
        {"ID":"21213"},
        {"ID":"21231"},
        {"ID":"21212"},
        {"ID":"21234"},
        {"ID":"21199"},
        {"ID":"21200"},
        {"ID":"21218"},
        {"ID":"21203"},
        {"ID":"21217"},
        {"ID":"21209"},
        {"ID":"21207"},
        {"ID":"21226"},
        {"ID":"21936"},
        {"ID":"22056"},
        {"ID":"22047"},
        {"ID":"21179"},
        {"ID":"21929"},
        {"ID":"21171"},
        {"ID":"21176"},
        {"ID":"21935"},
        {"ID":"21187"},
        {"ID":"22044"},
        {"ID":"21191"},
        {"ID":"21177"},
        {"ID":"22046"},
        {"ID":"21186"},
        {"ID":"21178"}
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
