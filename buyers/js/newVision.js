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
    var matchArr = [{"id": 2178},{"id": 2222}, {"id": 2017}, {"id": 1757}];
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
            var imgPic='<img src="'+imgUrl+'" class="lazy" data-original="'+imgUrl+'">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img src="'+buyerUrl+'" class="lazy" data-original="'+buyerUrl+'">';
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
        {"ID":"19190"},
        {"ID":"19204"},
        {"ID":"19203"},
        {"ID":"19202"},
        {"ID":"19205"},
        {"ID":"19865"},
        {"ID":"19748"},
        {"ID":"19750"},
        {"ID":"19759"},
        {"ID":"19760"},
        {"ID":"19647"},
        {"ID":"19648"},
        {"ID":"19867"},
        {"ID":"19870"},
        {"ID":"19868"},
        {"ID":"19875"},
        {"ID":"19652"},
        {"ID":"19651"},
        {"ID":"19650"},
        {"ID":"19645"},
        {"ID":"19866"},
        {"ID":"19653"},
        {"ID":"17342"},
        {"ID":"17336"},
        {"ID":"17332"},
        {"ID":"17345"},
        {"ID":"17341"},
        {"ID":"17356"},
        {"ID":"17355"},
        {"ID":"17335"},
        {"ID":"17340"},
        {"ID":"17333"},
        {"ID":"20894"},
        {"ID":"20891"},
        {"ID":"20874"},
        {"ID":"20871"},
        {"ID":"20872"},
        {"ID":"18961"},
        {"ID":"18998"},
        {"ID":"18999"},
        {"ID":"18996"},
        {"ID":"18997"}
    ];
    var model =  $(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
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
                model.clone(true).appendTo($(".gucciContent"));
                $(".gucciContent").find(".imModel").eq(i).find("a").attr("onclick",proId).html(imgLink);
                $(".gucciContent").find(".imModel").eq(i).find(".designer").html(designer);
                $(".gucciContent").find(".imModel").eq(i).find(".proName").html(name);
                $(".gucciContent").find(".imModel").eq(i).find(".price").html(price);

            }
        })

    }
});
