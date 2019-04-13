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
    var matchArr = [{"id": 1838}, {"id": 2316}, {"id": 2373}, {"id": 2613}];
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
            var imgLink = "singleModle.html?id=" + result.Collage.Id;
            var buyerId = "../buyerMatch.html#"+result.Collage.CustomerProfileOverview.Id+"";
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
        {"ID":"21023"},
        {"ID":"21024"},
        {"ID":"16325"},
        {"ID":"17565"},
        {"ID":"19761"},
        {"ID":"19742"},
        {"ID":"20087"},
        {"ID":"20995"},
        {"ID":"18201"},
        {"ID":"19501"},
        {"ID":"19059"},
        {"ID":"18316"},
        {"ID":"16958"},
        {"ID":"16959"},
        {"ID":"19374"},
        {"ID":"19377"},
        {"ID":"17572"},
        {"ID":"19878"},
        {"ID":"17573"},
        {"ID":"17571"},
        {"ID":"19619"},
        {"ID":"16962"},
        {"ID":"20085"},
        {"ID":"20084"},
        {"ID":"17753"},
        {"ID":"17488"},
        {"ID":"16582"},
        {"ID":"16596"}
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



