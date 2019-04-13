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
        {"ID":"17900"},
        {"ID":"18766"},
        {"ID":"19600"},
        {"ID":"19648"},
        {"ID":"17235"},
        {"ID":"17202"},
        {"ID":"17644"},
        {"ID":"19880"},
        {"ID":"16835"},
        {"ID":"18459"},
        {"ID":"16839"},
        {"ID":"16569"},
        {"ID":"18713"},
        {"ID":"16990"},
        {"ID":"17984"},
        {"ID":"17182"},
        {"ID":"18421"},
        {"ID":"18410"},
        {"ID":"18359"},
        {"ID":"18994"},
        {"ID":"18005"},
        {"ID":"18462"},
        {"ID":"17643"},
        {"ID":"13392"},
        {"ID":"16719"},
        {"ID":"19331"},
        {"ID":"20706"},
        {"ID":"19310"},
        {"ID":"16703"},
        {"ID":"19311"},
        {"ID":"20112"},
        {"ID":"19722"},
        {"ID":"18420"},
        {"ID":"20327"},
        {"ID":"16510"},
        {"ID":"19036"}
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
