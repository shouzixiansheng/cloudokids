/**
 * Created by admin on 2017/4/14.
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
    var matchArr = [{"id": 2637},{"id": 2661}];
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
            var imgPic='<img src="" class="lazy" data-original="'+imgUrl+'">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img src="" class="lazy" data-original="'+buyerUrl+'">';
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
        {"ID":"20957"},
        {"ID":"20958"},
        {"ID":"20959"},
        {"ID":"20960"},
        {"ID":"20964"},
        {"ID":"20956"},
        {"ID":"12317"},
        {"ID":"16425"},
        {"ID":"20966"},
        {"ID":"20965"},
        {"ID":"12328"},
        {"ID":"16250"},
        {"ID":"12330"},
        {"ID":"12329"}
    ];
    var model =  $(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
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
                customerAccessKey:"2FC1677F60CF534915895AFDFE85664D2D27A823",
                customerId:9322763,
                customerEmail:"18201432580@cloudo.kids",
                id:matchId
            },
            success:function(data){
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name =  data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img src="" data-original="'+imgData+'" class="lazy">';
                model.clone(true).appendTo($(".gucciContent"));
                $(".gucciContent").find(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".gucciContent").find(".imModel").eq(i).find(".designer").html(designer);
                $(".gucciContent").find(".imModel").eq(i).find(".proName").html(name);
                $(".gucciContent").find(".imModel").eq(i).find(".price").html(price);

            }
        })

    }
    $("img.lazy").lazyload(
        {threshold : 500})
});
