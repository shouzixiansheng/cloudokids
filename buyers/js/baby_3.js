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
        {"ID":"18941"},
        {"ID":"18945"},
        {"ID":"16438"},
        {"ID":"16437"},
        {"ID":"16936"},
        {"ID":"20790"},
        {"ID":"18045"},
        {"ID":"20788"},
        {"ID":"20170"},
        {"ID":"20169"},
        {"ID":"20171"},
        {"ID":"17989"},
        {"ID":"16403"},
        {"ID":"16402"},
        {"ID":"16455"},
        {"ID":"16458"},
        {"ID":"17954"},
        {"ID":"17955"},
        {"ID":"20944"},
        {"ID":"17611"},
        {"ID":"20176"},
        {"ID":"20177"},
        {"ID":"17612"},
        {"ID":"17609"},
        {"ID":"17610"},
        {"ID":"20174"},
        {"ID":"20411"},
        {"ID":"17081"}
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
