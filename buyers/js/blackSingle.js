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
    var matchArr = [{"id": 2272}, {"id": 2069}, {"id": 2035}, {"id": 2289}];
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
        }).done(function (data) {
            var result = data;
            var imgUrl=result.Collage.PictureUrl;
            var imgPic='<img data-original="'+imgUrl+'" class="lazy">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img data-original="'+buyerUrl+'" class="lazy">';
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
        {"ID":"17963"},
        {"ID":"18992"},
        {"ID":"12335"},
        {"ID":"16487"},
        {"ID":"17929"},
        {"ID":"20904"},
        {"ID":"16481"},
        {"ID":"19550"},
        {"ID":"17849"},
        {"ID":"20837"},
        {"ID":"20924"},
        {"ID":"17454"},
        {"ID":"18984"},
        {"ID":"19612"},
        {"ID":"20856"},
        {"ID":"18966"},
        {"ID":"19582"},
        {"ID":"18837"},
        {"ID":"18748"},
        {"ID":"19584"},
        {"ID":"17464"},
        {"ID":"20843"},
        {"ID":"19544"},
        {"ID":"19561"},
        {"ID":"19554"},
        {"ID":"16496"},
        {"ID":"17868"},
        {"ID":"10904"},
        {"ID":"19551"},
        {"ID":"19850"},
        {"ID":"17480"},
        {"ID":"18995"},
        {"ID":"18999"},
        {"ID":"18997"},
        {"ID":"17956"},
        {"ID":"19573"},
        {"ID":"18974"},
        {"ID":"18985"},
        {"ID":"19760"},
        {"ID":"19285"},
        {"ID":"19589"},
        {"ID":"19721"},
        {"ID":"19746"},
        {"ID":"19006"}
    ];
    var model =  $(".cowContent").find(".imModel").eq(0);
    $(".cowContent").empty();
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
                model.clone(true).appendTo($(".cowContent"));
                $(".cowContent").find(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".cowContent").find(".imModel").eq(i).find(".designer").html(designer);
                $(".cowContent").find(".imModel").eq(i).find(".proName").html(name);
                $(".cowContent").find(".imModel").eq(i).find(".price").html(price);

            }
        })

    }
    $("img.lazy").lazyload(
        {threshold : 500}
    );



});

