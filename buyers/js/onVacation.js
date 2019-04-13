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
    var matchArr = [{"id": 2524}, {"id": 2353}, {"id": 2454}, {"id": 2390}];
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

    var relaxSpringArr=[
        {"ID":"17285"},
        {"ID":"17287"},
        {"ID":"17288"},
        {"ID":"20862"},
        {"ID":"18407"},
        {"ID":"18413"},
        {"ID":"18757"},
        {"ID":"18414"},
        {"ID":"16985"},
        {"ID":"16995"},
        {"ID":"16560"},
        {"ID":"19654"},
        {"ID":"16826"},
        {"ID":"19926"},
        {"ID":"20777"},
        {"ID":"19933"},
        {"ID":"19356"},
        {"ID":"17644"},
        {"ID":"18408"},
        {"ID":"18417"},
        {"ID":"17963"},
        {"ID":"18832"},
        {"ID":"17978"},
        {"ID":"17636"},
        {"ID":"18646"},
        {"ID":"18019"},
        {"ID":"16293"},
        {"ID":"19081"},
        {"ID":"17617"},
        {"ID":"18582"},
        {"ID":"17980"},
        {"ID":"19905"},
        {"ID":"20879"},
        {"ID":"19772"},
        {"ID":"20370"},
        {"ID":"17343"},
        {"ID":"19856"},
        {"ID":"17800"},
        {"ID":"17948"},
        {"ID":"18214"}
    ];

    var model =  $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for(var i=0;i<relaxSpringArr.length;i++){
        var matchId=relaxSpringArr[i].ID;
        var proId = "../detailPages.html#" + relaxSpringArr[i].ID;
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
                $(".recommendPro").find(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
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



