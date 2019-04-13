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
    var relaxSpringArr=[
        {"ID":"18868"},
        {"ID":"18316"},
        {"ID":"18886"},
        {"ID":"18888"},
        {"ID":"18319"},
        {"ID":"18778"},
        {"ID":"18786"},
        {"ID":"18792"},
        {"ID":"18754"},
        {"ID":"18879"}
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
