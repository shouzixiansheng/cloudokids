/**
 * Created by admin on 2017/5/19.
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
    var relaxSpringArr= [
        {"ID":"19327"},
        {"ID":"19091"},
        {"ID":"19094"},
        {"ID":"19338"},
        {"ID":"19092"},
        {"ID":"19449"},
        {"ID":"19448"},
        {"ID":"16797"},
        {"ID":"17138"},
        {"ID":"19028"},
        {"ID":"17189"},
        {"ID":"19350"},
        {"ID":"19247"},
        {"ID":"19334"},
        {"ID":"12003"},
        {"ID":"18652"},
        {"ID":"19093"},
        {"ID":"19030"},
        {"ID":"16736"},
        {"ID":"19029"},
        {"ID":"16735"},
        {"ID":"18385"},
        {"ID":"19401"},
        {"ID":"18428"},
        {"ID":"18429"},
        {"ID":"18430"},
        {"ID":"17596"},
        {"ID":"11030"},
        {"ID":"18716"},
        {"ID":"11024"},
        {"ID":"10533"},
        {"ID":"17828"},
        {"ID":"11912"},
        {"ID":"19000"}
    ];
    var model =  $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for(var i=0;i<relaxSpringArr.length;i++){
        var matchId=relaxSpringArr[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
            method:"get",
            async:false,
            dataType:"json",
            data:{
                interfaceName:"GetProduct",
                customerAccessKey:"2FC1677F60CF534915895AFDFE85664D2D27A823",
                customerId:9322763,
                customerEmail:"18201432580@cloudo.kids",
                id:matchId
            },
            success:function(data){
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name =  data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img src="" data-original="'+imgData+'" class="lazy">';
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
})
