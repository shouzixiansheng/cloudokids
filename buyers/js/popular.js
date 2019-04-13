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
    var matchArr = [{"id": 2056}, {"id": 2340}, {"id": 1859}, {"id": 2572}];
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
        {"ID":"17004"},
        {"ID":"16476"},
        {"ID":"18259"},
        {"ID":"18301"},
        {"ID":"16731"},
        {"ID":"16703"},
        {"ID":"19984"},
        {"ID":"19989"},
        {"ID":"20291"},
        {"ID":"18712"},
        {"ID":"17461"},
        {"ID":"17460"},
        {"ID":"17479"},
        {"ID":"17481"},
        {"ID":"16474"},
        {"ID":"19054"},
        {"ID":"18032"},
        {"ID":"16744"},
        {"ID":"17332"},
        {"ID":"17349"},
        {"ID":"17348"},
        {"ID":"16710"},
        {"ID":"19438"},
        {"ID":"20339"},
        {"ID":"20508"},
        {"ID":"18260"},
        {"ID":"16686"},
        {"ID":"16732"},
        {"ID":"18790"},
        {"ID":"18818"},
        {"ID":"19049"},
        {"ID":"18646"},
        {"ID":"18719"},
        {"ID":"16742"},
        {"ID":"19665"},
        {"ID":"19776"},
        {"ID":"16694"},
        {"ID":"16691"},
        {"ID":"17941"},
        {"ID":"17517"},
        {"ID":"20740"},
        {"ID":"19860"},
        {"ID":"19754"},
        {"ID":"17370"},
        {"ID":"20951"},
        {"ID":"20953"},
        {"ID":"18327"},
        {"ID":"18330"}
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



