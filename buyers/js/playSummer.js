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
    var matchArr = [{"id": 2721},{"id": 944},{"id":1596},{"id":2267}];
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
        {"ID":"19913"},
        {"ID":"19212"},
        {"ID":"17123"},
        {"ID":"20565"},
        {"ID":"18035"},
        {"ID":"18038"},
        {"ID":"18018"},
        {"ID":"16326"},
        {"ID":"16328"},
        {"ID":"18837"},
        {"ID":"18827"},
        {"ID":"19431"},
        {"ID":"19858"},
        {"ID":"19421"},
        {"ID":"19544"},
        {"ID":"13413"},
        {"ID":"17617"},
        {"ID":"17618"},
        {"ID":"17942"},
        {"ID":"20808"},
        {"ID":"19905"},
        {"ID":"21072"},
        {"ID":"18586"},
        {"ID":"18561"},
        {"ID":"20786"},
        {"ID":"17126"},
        {"ID":"20744"},
        {"ID":"16318"},
        {"ID":"18836"},
        {"ID":"18832"},
        {"ID":"19031"},
        {"ID":"19033"},
        {"ID":"19860"},
        {"ID":"19561"},
        {"ID":"19478"}
    ];
    var model =  $(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
    for(var i = 0,ii = 0;i<fashionArr.length;i++){
        var matchId=fashionArr[i].ID;
        var proId="../detailPages.html#"+fashionArr[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
            method:"get",
            async:true,
            dataType:"json",
            data:{
                interfaceName:"GetProduct",
                customerAccessKey:"96B41E9935CFAA94B2BF75CA8AB284983BECC426",
                customerId:9322763,
                customerEmail:"18201432580@cloudo.kids",
                id:matchId
            },
            success:function(data){
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
