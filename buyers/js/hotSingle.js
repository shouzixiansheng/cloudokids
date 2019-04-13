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
        {"ID":"16867"},
        {"ID":"16835"},
        {"ID":"18757"},
        {"ID":"17900"},
        {"ID":"18648"},
        {"ID":"17290"},
        {"ID":"19190"},
        {"ID":"17866"},
        {"ID":"18475"},
        {"ID":"16558"},
        {"ID":"20437"},
        {"ID":"20458"},
        {"ID":"20565"},
        {"ID":"20087"},
        {"ID":"16869"},
        {"ID":"16876"},
        {"ID":"19545"},
        {"ID":"19584"},
        {"ID":"19555"},
        {"ID":"20843"},
        {"ID":"19590"},
        {"ID":"19594"},
        {"ID":"17715"},
        {"ID":"17717"},
        {"ID":"18459"},
        {"ID":"19414"},
        {"ID":"18371"},
        {"ID":"19572"},
        {"ID":"18713"},
        {"ID":"17706"},
        {"ID":"20430"},
        {"ID":"18450"},
        {"ID":"19175"},
        {"ID":"19135"},
        {"ID":"19447"},
        {"ID":"18038"},
        {"ID":"17729"},
        {"ID":"17294"},
        {"ID":"16895"},
        {"ID":"19421"},
        {"ID":"16421"},
        {"ID":"16461"},
        {"ID":"16404"},
        {"ID":"16440"},
        {"ID":"16457"},
        {"ID":"16437"},
        {"ID":"18932"},
        {"ID":"18132"},
        {"ID":"19008"},
        {"ID":"17798"}
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
