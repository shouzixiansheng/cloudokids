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
    var matchArr = [{"id": 2291},{"id": 2318}, {"id": 2342}, {"id": 2331}];
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
        {"ID":"19052"},
        {"ID":"19478"},
        {"ID":"19501"},
        {"ID":"19055"},
        {"ID":"19053"},
        {"ID":"19480"},
        {"ID":"19502"},
        {"ID":"13365"},
        {"ID":"19059"},
        {"ID":"19479"},
        {"ID":"19058"},
        {"ID":"19500"},
        {"ID":"19492"},
        {"ID":"19503"},
        {"ID":"19489"},
        {"ID":"19496"},
        {"ID":"19056"},
        {"ID":"19057"},
        {"ID":"19049"},
        {"ID":"19504"},
        {"ID":"19490"},
        {"ID":"13375"},
        {"ID":"19505"},
        {"ID":"19491"},
        {"ID":"19484"},
        {"ID":"13174"},
        {"ID":"19054"},
        {"ID":"19119"},
        {"ID":"19482"},
        {"ID":"19475"},
        {"ID":"19477"},
        {"ID":"19476"},
        {"ID":"19474"},
        {"ID":"19046"},
        {"ID":"19045"},
        {"ID":"13191"},
        {"ID":"19495"},
        {"ID":"13958"},
        {"ID":"19499"},
        {"ID":"13968"},
        {"ID":"19051"},
        {"ID":"13199"},
        {"ID":"16049"},
        {"ID":"19065"},
        {"ID":"19064"},
        {"ID":"19066"},
        {"ID":"19062"},
        {"ID":"19068"},
        {"ID":"19061"},
        {"ID":"19067"},
        {"ID":"19069"},
        {"ID":"19117"},
        {"ID":"19071"},
        {"ID":"19486"}

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
