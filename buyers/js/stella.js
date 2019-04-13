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
    var matchArr = [{"id": 2322},{"id": 2364}, {"id": 636}, {"id": 623}];
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
        {"ID":"16834"},
        {"ID":"16825"},
        {"ID":"16879"},
        {"ID":"16802"},
        {"ID":"16867"},
        {"ID":"16852"},
        {"ID":"16857"},
        {"ID":"16851"},
        {"ID":"16895"},
        {"ID":"16799"},
        {"ID":"16794"},
        {"ID":"16842"},
        {"ID":"16850"},
        {"ID":"16868"},
        {"ID":"16791"},
        {"ID":"16827"},
        {"ID":"16843"},
        {"ID":"16803"},
        {"ID":"16861"},
        {"ID":"16804"},
        {"ID":"16839"},
        {"ID":"16836"},
        {"ID":"16826"},
        {"ID":"16817"},
        {"ID":"16846"},
        {"ID":"16848"},
        {"ID":"16888"},
        {"ID":"16887"},
        {"ID":"16840"},
        {"ID":"16897"},
        {"ID":"16876"},
        {"ID":"16869"},
        {"ID":"16751"},
        {"ID":"16755"},
        {"ID":"16762"},
        {"ID":"16753"},
        {"ID":"16797"},
        {"ID":"16774"}
    ];
    var model =  $(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
    for(var i=0;i<fashionArr.length;i++){
        var matchId=fashionArr[i].ID;
        var proId = "../detailPages.html#" + fashionArr[i].ID;
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
