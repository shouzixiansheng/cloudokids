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
    var matchArr = [{"id": 2056}, {"id": 2206}, {"id": 2402}, {"id": 2366}];
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

    var relaxSpringArr = [
        {"ID": "16422"},
        {"ID": "16421"},
        {"ID": "16419"},
        {"ID": "16420"},
        {"ID": "16427"},
        {"ID": "16461"},
        {"ID": "20180"},
        {"ID": "20181"},
        {"ID": "18941"},
        {"ID": "18945"},
        {"ID": "18181"},
        {"ID": "17971"},
        {"ID": "20901"},
        {"ID": "20029"},
        {"ID": "20792"},
        {"ID": "12508"},
        {"ID": "16561"},
        {"ID": "18010"},
        {"ID": "19685"},
        {"ID": "19684"},
        {"ID": "16981"},
        {"ID": "16979"},
        {"ID": "12852"},
        {"ID": "12854"},
        {"ID": "18843"},
        {"ID": "18845"},
        {"ID": "12853"},
        {"ID": "20052"},
        {"ID": "16942"},
        {"ID": "16938"},
        {"ID": "11897"},
        {"ID": "16977"},
        {"ID": "14834"},
        {"ID": "16975"},
        {"ID": "16968"},
        {"ID": "18846"},
        {"ID": "18925"},
        {"ID": "10827"},
        {"ID": "18928"},
        {"ID": "18927"},
        {"ID": "11900"},
        {"ID": "11898"},
        {"ID": "18939"},
        {"ID": "16564"},
        {"ID": "18182"},
        {"ID": "17772"}
    ];
    var model = $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for (var i = 0; i < relaxSpringArr.length; i++) {
        var matchId = relaxSpringArr[i].ID;
        var proId = "../detailPages.html#" + relaxSpringArr[i].ID;
        $.ajax({
            url: "http://h5.cloudokids.cn/mweb/inter/getResult",
            method: "get",
            async: false,
            dataType: "json",
            data: {
                interfaceName: "GetProduct",
                customerAccessKey: "7193411AF501CAFFA93A7963D62F8F51058C592A",
                customerId: "7300407",
                customerEmail: "18301426710@cloudokids.com",
                id: matchId
            },
            success: function (data) {
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name = data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink = '<img src="' + imgData + '" data-original="' + imgData + '" class="lazy">';
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



