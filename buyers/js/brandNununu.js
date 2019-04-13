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
    var matchArr = [{"id": 3362},{"id": 3356},{"id":3354},{"id":3352}];
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
            var buyerId="../buyerMatch.html#"+result.Collage.CustomerProfileOverview.Id;
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
        {"ID":"24633"},
        {"ID":"24620"},
        {"ID":"24570"},
        {"ID":"24595"},
        {"ID":"24566"},
        {"ID":"24626"},
        {"ID":"24615"},
        {"ID":"24618"},
        {"ID":"24605"},
        {"ID":"24569"},
        {"ID":"24584"},
        {"ID":"24598"},
        {"ID":"24596"},
        {"ID":"19584"},
        {"ID":"24627"},
        {"ID":"24590"},
        {"ID":"24623"},
        {"ID":"24580"},
        {"ID":"15143"}
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
