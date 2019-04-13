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
    var relaxSpringArr= [
        {"ID":"13415"},
        {"ID":"20479"},
        {"ID":"18662"},
        {"ID":"20584"},
        {"ID":"19219"},
        {"ID":"13408"},
        {"ID":"13399"},
        {"ID":"16523"},
        {"ID":"13402"},
        {"ID":"18310"},
        {"ID":"20729"},
        {"ID":"18659"},
        {"ID":"20937"},
        {"ID":"18422"},
        {"ID":"16579"},
        {"ID":"18036"},
        {"ID":"13382"},
        {"ID":"18779"},
        {"ID":"16519"},
        {"ID":"18628"},
        {"ID":"17165"},
        {"ID":"20800"},
        {"ID":"17099"},
        {"ID":"16325"},
        {"ID":"17593"},
        {"ID":"21020"},
        {"ID":"13445"},
        {"ID":"19228"},
        {"ID":"21012"},
        {"ID":"20094"},
        {"ID":"19225"},
        {"ID":"19315"},
        {"ID":"16724"},
        {"ID":"18337"},
        {"ID":"17591"},
        {"ID":"13381"}
    ];
    var model =  $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for(var i=0,ii = 0;i<relaxSpringArr.length;i++){
        var matchId=relaxSpringArr[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                model.clone(true).appendTo($(".recommendPro"));
                $(".recommendPro").find(".imModel").eq(ii).find("a").attr("href",proId).html(imgLink);
                $(".recommendPro").find(".imModel").eq(ii).find(".designer").html(designer);
                $(".recommendPro").find(".imModel").eq(ii).find(".proName").html(name);
                $(".recommendPro").find(".imModel").eq(ii).find(".price").html(price);
                ii++;
            }
        })

    }

});
