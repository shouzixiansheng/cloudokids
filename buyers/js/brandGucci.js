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
    var matchArr = [{"id": 3316},{"id": 3410},{"id":3314},{"id":3293}];
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
        {"ID":"26568"},
        {"ID":"26572"},
        {"ID":"26559"},
        {"ID":"26543"},
        {"ID":"26558"},
        {"ID":"26540"},
        {"ID":"26539"},
        {"ID":"26541"},
        {"ID":"26537"},
        {"ID":"26538"},
        {"ID":"26535"},
        {"ID":"26536"},
        {"ID":"26542"},
        {"ID":"26533"},
        {"ID":"26534"},
        {"ID":"26567"},
        {"ID":"26569"},
        {"ID":"26556"},
        {"ID":"26557"},
        {"ID":"26571"},
        {"ID":"26554"},
        {"ID":"26553"},
        {"ID":"26570"},
        {"ID":"26574"},
        {"ID":"26555"},
        {"ID":"26544"},
        {"ID":"26551"},
        {"ID":"26548"},
        {"ID":"26549"}
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
