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
    var matchArr = [{"id": 2772}, {"id": 2390}, {"id": 1582}, {"id": 636}];
    var model = $(".recommendContent").find(".recommend-wrap");
    $(".recommendContent").empty();
    for (var i = 0; i < matchArr.length; i++) {
        model.clone(true).appendTo($(".recommendContent"));
        var matchId = matchArr[i].id;
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "GetCollage",
                customerAccessKey: "guest",
                collageId: matchId
            }
        }).done(function (result) {
            var imgUrl = result.Collage.PictureUrl;
            var imgPic = '<img src="" data-original="' + imgUrl + '" class="lazy">';
            var picDescription = result.Collage.Description;
            var buyerUrl = result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic = '<img src="" data-original="' + buyerUrl + '" class="lazy">';
            //var imgLink = "cloudokids://collage/" + result.Collage.Id;
            //var buyerId = "cloudokids://buyer/" + result.Collage.CustomerProfileOverview.Id;
            var imgLink="singleModle.html?id="+result.Collage.Id+"";
            var buyerId="../buyerMatch.html#"+result.Collage.CustomerProfileOverview.Id+"";
            var buyerName = result.Collage.CustomerProfileOverview.Username;
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("href", imgLink).html(imgPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("href", buyerId);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("href", imgLink);

        })
    }

    var relaxSpringArr =[
        {"ID":"19245"},
        {"ID":"16794"},
        {"ID":"19255"},
        {"ID":"19254"},
        {"ID":"19326"},
        {"ID":"19318"},
        {"ID":"10745"},
        {"ID":"10964"},
        {"ID":"18486"},
        {"ID":"16613"},
        {"ID":"18021"},
        {"ID":"18214"},
        {"ID":"19627"},
        {"ID":"17795"},
        {"ID":"10105"},
        {"ID":"18658"},
        {"ID":"17088"},
        {"ID":"18020"},
        {"ID":"16615"},
        {"ID":"21041"},
        {"ID":"19066"},
        {"ID":"19064"},
        {"ID":"19096"},
        {"ID":"19086"},
        {"ID":"19085"},
        {"ID":"19097"},
        {"ID":"19031"},
        {"ID":"19090"},
        {"ID":"19088"},
        {"ID":"19083"},
        {"ID":"17880"},
        {"ID":"17874"},
        {"ID":"17632"},
        {"ID":"17882"},
        {"ID":"21088"},
        {"ID":"21090"}
    ];
    var model = $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for (var i = 0; i < relaxSpringArr.length; i++) {
        var matchId = relaxSpringArr[i].ID;
        //var proId = "cloudokids://product/" + relaxSpringArr[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr[i].ID;
        $.ajax({
            url: "http://h5.cloudokids.cn/mweb/inter/getResult",
            method: "get",
            async: false,
            dataType: "json",
            data: {
                interfaceName:"GetProduct",
                customerAccessKey:"2FC1677F60CF534915895AFDFE85664D2D27A823",
                customerId:9322763,
                customerEmail:"18201432580@cloudo.kids",
                id:matchId
            },
            success: function (data) {
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name = data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink = '<img src="" data-original="' + imgData + '" class="lazy">';
                model.clone(true).appendTo($(".recommendPro"));
                $(".recommendPro").find(".imModel").eq(i).find("a").attr("href", proId).html(imgLink);
                $(".recommendPro").find(".imModel").eq(i).find(".designer").html(designer);
                $(".recommendPro").find(".imModel").eq(i).find(".proName").html(name);
                $(".recommendPro").find(".imModel").eq(i).find(".price").html(price);
            }
        })
    }
    $("img.lazy").lazyload(
        {threshold: 500}
    );

});



