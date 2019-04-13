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
        {"ID":"17727"},
        {"ID":"19366"},
        {"ID":"19472"},
        {"ID":"18727"},
        {"ID":"12638"},
        {"ID":"11371"},
        {"ID":"19990"},
        {"ID":"12906"},
        {"ID":"13427"},
        {"ID":"20508"},
        {"ID":"19472"},
        {"ID":"17447"},
        {"ID":"20837"},
        {"ID":"13411"},
        {"ID":"17227"},
        {"ID":"20552"},
        {"ID":"19396"},
        {"ID":"18032"},
        {"ID":"16484"},
        {"ID":"17570"},
        {"ID":"17919"},
        {"ID":"18509"},
        {"ID":"18966"},
        {"ID":"18202"},
        {"ID":"18294"},
        {"ID":"18200"},
        {"ID":"17331"},
        {"ID":"18681"},
        {"ID":"16649"},
        {"ID":"18526"},
        {"ID":"17022"}
    ];
    var model =  $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for(var i=0,ii = 0;i<relaxSpringArr.length;i++){
        var matchId=relaxSpringArr[i].ID;
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
