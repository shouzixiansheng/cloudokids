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
    var matchArr = [{"id": 3238},{"id": 3123},{"id":3204},{"id":3022}];
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
            var imgLink="singleModle.html?id="+result.Collage.Id;
            var buyerId="buyerMatch.html#"+result.Collage.CustomerProfileOverview.Id;
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
        {"ID":"24315"},
        {"ID":"20418"},
        {"ID":"20644"},
        {"ID":"20642"},
        {"ID":"20598"},
        {"ID":"20606"},
        {"ID":"20655"},
        {"ID":"20652"},
        {"ID":"20654"},
        {"ID":"20574"},
        {"ID":"26577"},
        {"ID":"20648"},
        {"ID":"21154"},
        {"ID":"20629"},
        {"ID":"20599"},
        {"ID":"20621"},
        {"ID":"20614"},
        {"ID":"20639"},
        {"ID":"20631"},
        {"ID":"20590"},
        {"ID":"20620"},
        {"ID":"20624"},
        {"ID":"20647"},
        {"ID":"20637"},
        {"ID":"20662"},
        {"ID":"20638"},
        {"ID":"20625"},
        {"ID":"20603"},
        {"ID":"20588"},
        {"ID":"20635"},
        {"ID":"20592"},
        {"ID":"20589"},
        {"ID":"20616"},
        {"ID":"20626"},
        {"ID":"24340"},
        {"ID":"20661"},
        {"ID":"21139"},
        {"ID":"20623"},
        {"ID":"21138"}
    ];
    var model =  $(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
    for(var i = 0,ii = 0;i<fashionArr.length;i++){
        var matchId = fashionArr[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
            type:"get",
            dataType:"json",
            data:{
                interfaceName:"GetProduct",
                customerAccessKey:"96B41E9935CFAA94B2BF75CA8AB284983BECC426",
                customerId:9322763,
                customerEmail:"18201432580@cloudo.kids",
                id:matchId
            },
            success:function(data){
                var proId="../detailPages.html#"+data.Product.Id;
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name =  data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img src="'+imgData+'">';
                model.clone(true).appendTo($(".gucciContent"));
                $(".gucciContent").find(".imModel").eq(ii).find("a").attr("href",proId).html(imgLink);
                $(".gucciContent").find(".imModel").eq(ii).find(".designer").html(designer);
                $(".gucciContent").find(".imModel").eq(ii).find(".proName").html(name);
                $(".gucciContent").find(".imModel").eq(ii).find(".price").html(price);
                ii++;
            }
        })

    }
    $("img.lazy").lazyload(
        {threshold : 500})
});
