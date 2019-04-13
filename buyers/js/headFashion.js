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
$(function(){
    var matchArr = [{"id": 2222}, {"id": 1911}, {"id": 2208}, {"id": 888}];
    var model = $(".recommendContent").find(".recommend-wrap");
    $(".recommendContent").empty();
    for(var i=0;i<matchArr.length;i++){
        model.clone(true).appendTo($(".recommendContent"));
        var matchId=matchArr[i].id;
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
            var imgUrl=result.Collage.PictureUrl;
            var imgPic='<img src="" data-original="'+imgUrl+'" class="lazy">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img src="" data-original="'+buyerUrl+'" class="lazy">';
            var imgLink="window.location.href='singleModle.html?id="+result.Collage.Id+"'";
            var buyerId="window.location.href='../buyerMatch.html#"+result.Collage.CustomerProfileOverview.Id+"'";
            var buyerName=result.Collage.CustomerProfileOverview.Username;
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("onclick",imgLink).html(imgPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("onclick",buyerId);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("onclick",imgLink);

        })
    }

    var fashionArr=[
        {"ID":"19746"},
        {"ID":"19845"},
        {"ID":"19744"},
        {"ID":"16932"},
        {"ID":"17822"},
        {"ID":"17898"},
        {"ID":"19006"},
        {"ID":"14582"},
        {"ID":"19179"},
        {"ID":"18905"},
        {"ID":"18146"},
        {"ID":"18147"},
        {"ID":"17086"},
        {"ID":"10192"},
        {"ID":"16948"},
        {"ID":"20770"},
        {"ID":"11052"},
        {"ID":"11051"},
        {"ID":"11994"},
        {"ID":"10189"},
        {"ID":"20531"},
        {"ID":"17698"},
        {"ID":"19688"},
        {"ID":"17821"},
        {"ID":"16915"},
        {"ID":"16914"},
        {"ID":"17548"},
        {"ID":"17549"},
        {"ID":"19735"},
        {"ID":"19740"},
        {"ID":"11678"},
        {"ID":"11681"},
        {"ID":"18756"},
        {"ID":"13231"},
        {"ID":"17843"},
        {"ID":"11753"},
        {"ID":"11157"},
        {"ID":"12939"},
        {"ID":"11109"},
        {"ID":"12885"},
        {"ID":"10733"},
        {"ID":"11049"},
        {"ID":"13779"},
        {"ID":"13785"}
    ];
    var model =  $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for(var i=0;i<fashionArr.length;i++){
        var matchId=fashionArr[i].ID;
        var proId="window.location.href='../detailPages.html#"+fashionArr[i].ID+"'";
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
            method:"get",
            async:false,
            dataType:"json",
            data:{
                interfaceName:"GetProduct",
                customerAccessKey:"7193411AF501CAFFA93A7963D62F8F51058C592A",
                customerId:"7300407",
                customerEmail:"18301426710@cloudokids.com",
                id:matchId
            },
            success:function(data){
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name =  data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img src="'+imgData+'" data-original="'+imgData+'" class="lazy">';
                model.clone(true).appendTo($(".recommendPro"));
                $(".recommendPro").find(".imModel").eq(i).find("a").attr("onclick",proId).html(imgLink);
                $(".recommendPro").find(".imModel").eq(i).find(".designer").html(designer);
                $(".recommendPro").find(".imModel").eq(i).find(".proName").html(name);
                $(".recommendPro").find(".imModel").eq(i).find(".price").html(price);

            }
        })

    }

    $("img.lazy").lazyload(
        {threshold : 500}
    );

});



