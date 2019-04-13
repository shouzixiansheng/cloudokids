/**
 * Created by admin on 2017/4/17.
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

$(function () {
    var babyArr=[
        {"ID":"18481"},
        {"ID":"18482"},
        {"ID":"16655"},
        {"ID":"10834"},
        {"ID":"16656"},
        {"ID":"10831"},
        {"ID":"10835"},
        {"ID":"10830"},
        {"ID":"10829"},
        {"ID":"10836"},
        {"ID":"20865"},
        {"ID":"16585"},
        {"ID":"19374"},
        {"ID":"19265"},
        {"ID":"19377"},
        {"ID":"19376"},
        {"ID":"20504"},
        {"ID":"20451"},
        {"ID":"18520"},
        {"ID":"10634"},
        {"ID":"13820"},
        {"ID":"18425"},
        {"ID":"16678"},
        {"ID":"16713"},
        {"ID":"13813"},
        {"ID":"13814"},
        {"ID":"13867"},
        {"ID":"13868"},
        {"ID":"10943"},
        {"ID":"10944"}
    ];
    var gucciModel=$("#baby").find(".imModel").eq(0);
    $("#baby").empty();
    for(var i=0;i<babyArr.length;i++){
        var matchId=babyArr[i].ID;
        var proId="../detailPages.html#"+babyArr[i].ID;
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
                gucciModel.clone(true).appendTo($("#baby"));
                $("#baby").find(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $("#baby").find(".imModel").eq(i).find(".designer").html(designer);
                $("#baby").find(".imModel").eq(i).find(".proName").html(name);
                $("#baby").find(".imModel").eq(i).find(".price").html(price);

            }
        })

    }
    var girlArr=[
        {"ID":"16988"},
        {"ID":"16990"},
        {"ID":"19362"},
        {"ID":"19361"},
        {"ID":"16719"},
        {"ID":"16723"},
        {"ID":"18642"},
        {"ID":"18641"},
        {"ID":"19652"},
        {"ID":"19651"},
        {"ID":"19868"},
        {"ID":"19875"},
        {"ID":"17294"},
        {"ID":"17297"},
        {"ID":"20708"},
        {"ID":"20710"},
        {"ID":"17786"},
        {"ID":"17785"},
        {"ID":"17846"},
        {"ID":"17847"},
        {"ID":"19867"},
        {"ID":"19870"},
        {"ID":"19647"},
        {"ID":"19648"},
        {"ID":"20048"},
        {"ID":"20053"},
        {"ID":"19672"},
        {"ID":"20876"},
        {"ID":"17145"},
        {"ID":"17156"},
        {"ID":"16686"},
        {"ID":"16732"},
        {"ID":"18393"},
        {"ID":"18392"},
        {"ID":"16485"},
        {"ID":"16486"},
        {"ID":"17580"},
        {"ID":"17585"},
        {"ID":"18908"},
        {"ID":"18909"}
    ];

    var gucciMode2=$("#girl").find(".imModel").eq(0);
    $("#girl").empty();
    for(var i=0;i<girlArr.length;i++){
        var matchId=girlArr[i].ID;
        var proId="../detailPages.html#"+girlArr[i].ID;
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
                gucciMode2.clone(true).appendTo($("#girl"));
                $("#girl").find(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $("#girl").find(".imModel").eq(i).find(".designer").html(designer);
                $("#girl").find(".imModel").eq(i).find(".proName").html(name);
                $("#girl").find(".imModel").eq(i).find(".price").html(price);

            }
        })

    }

    var boyArr=[
        {"ID":"19439"},
        {"ID":"19081"},
        {"ID":"19050"},
        {"ID":"19478"},
        {"ID":"18635"},
        {"ID":"18637"},
        {"ID":"17114"},
        {"ID":"17113"},
        {"ID":"17101"},
        {"ID":"17092"},
        {"ID":"19853"},
        {"ID":"19850"},
        {"ID":"17921"},
        {"ID":"17918"},
        {"ID":"16292"},
        {"ID":"16352"},
        {"ID":"17617"},
        {"ID":"17615"},
        {"ID":"18797"},
        {"ID":"18801"},
        {"ID":"18911"},
        {"ID":"18570"},
        {"ID":"20037"},
        {"ID":"20035"},
        {"ID":"18394"},
        {"ID":"18836"},
        {"ID":"19553"},
        {"ID":"19573"},
        {"ID":"19913"},
        {"ID":"19715"},
        {"ID":"16488"},
        {"ID":"16482"},
        {"ID":"17341"},
        {"ID":"17354"},
        {"ID":"19906"},
        {"ID":"19905"},
        {"ID":"17339"},
        {"ID":"17337"},
        {"ID":"18044"},
        {"ID":"18043"}
    ];
    var gucciMode2=$("#boy").find(".imModel").eq(0);
    $("#boy").empty();
    for(var i=0;i<boyArr.length;i++){
        var matchId=boyArr[i].ID;
        var proId="../detailPages.html#"+boyArr[i].ID;
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
                gucciMode2.clone(true).appendTo($("#boy"));
                $("#boy").find(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $("#boy").find(".imModel").eq(i).find(".designer").html(designer);
                $("#boy").find(".imModel").eq(i).find(".proName").html(name);
                $("#boy").find(".imModel").eq(i).find(".price").html(price);

            }
        })

    }
    jQuery(function($) {
        $(".goLike a").click(function() {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, 1000);
            return false;
        });
    });
    $("img.lazy").lazyload(
        {threshold : 500})
})
