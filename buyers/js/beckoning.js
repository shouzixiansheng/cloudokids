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
    var matchArr = [{"id": 2210}, {"id": 1994}, {"id": 2090}, {"id": 1529}];
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
        }).done(function (data) {
            var result = data;
            var imgUrl=result.Collage.PictureUrl;
            var imgPic='<img data-original="'+imgUrl+'" class="lazy">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img data-original="'+buyerUrl+'" class="lazy">';
            var imgLink="singleModle.html?id="+result.Collage.Id+"";
            var buyerId="../buyerMatch.html#"+result.Collage.CustomerProfileOverview.Id+"";
            var buyerName=result.Collage.CustomerProfileOverview.Username;
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("href",imgLink).html(imgPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("href",buyerId);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("href",imgLink);
        })
    }

    var fashionArr=[
        {"ID":"19647"},
        {"ID":"19868"},
        {"ID":"19875"},
        {"ID":"19648"},
        {"ID":"19187"},
        {"ID":"19205"},
        {"ID":"17357"},
        {"ID":"19186"},
        {"ID":"18969"},
        {"ID":"18993"},
        {"ID":"11377"},
        {"ID":"11804"},
        {"ID":"19188"},
        {"ID":"19292"},
        {"ID":"17349"},
        {"ID":"19189"},
        {"ID":"18980"},
        {"ID":"18202"},
        {"ID":"18972"},
        {"ID":"18965"},
        {"ID":"18988"},
        {"ID":"18958"},
        {"ID":"19265"},
        {"ID":"19256"},
        {"ID":"19356"},
        {"ID":"18483"},
        {"ID":"18440"},
        {"ID":"18466"},
        {"ID":"11788"},
        {"ID":"11854"},
        {"ID":"12061"},
        {"ID":"17765"},
        {"ID":"18858"},
        {"ID":"17819"},
        {"ID":"11756"},
        {"ID":"17818"},
        {"ID":"12088"},
        {"ID":"17829"}

    ];
    var model =  $(".cowContent").find(".imModel").eq(0);
    $(".cowContent").empty();
    for(var i=0;i<fashionArr.length;i++){
        var matchId=fashionArr[i].ID;
        var proId="../detailPages.html#"+fashionArr[i].ID;
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
                model.clone(true).appendTo($(".cowContent"));
                $(".cowContent").find(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".cowContent").find(".imModel").eq(i).find(".designer").html(designer);
                $(".cowContent").find(".imModel").eq(i).find(".proName").html(name);
                $(".cowContent").find(".imModel").eq(i).find(".price").html(price);

            }
        })

    }
    $("img.lazy").lazyload(
        {threshold : 500}
    );
});

