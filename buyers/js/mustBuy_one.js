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
        {"Id":"20333"},
        {"Id":"16708"},
        {"Id":"16867"},
        {"Id":"16835"},
        {"Id":"16869"},
        {"Id":"16836"},
        {"Id":"16855"},
        {"Id":"20495"},
        {"Id":"20497"},
        {"Id":"16905"},
        {"Id":"17056"},
        {"Id":"16944"},
        {"Id":"20565"},
        {"Id":"18035"},
        {"Id":"16895"},
        {"Id":"16876"},
        {"Id":"18371"},
        {"Id":"17068"},
        {"Id":"16697"},
        {"Id":"16725"},
        {"Id":"16922"},
        {"Id":"16974"},
        {"Id":"16972"}
    ];
    var model =  $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for(var i=0;i<relaxSpringArr.length;i++){
        var matchId=relaxSpringArr[i].Id;
        var proId="../detailPages.html#"+relaxSpringArr[i].Id;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
            method:"get",
            async:false,
            dataType:"json",
            data:{
                interfaceName:"GetProduct",
                customerAccessKey:"96B41E9935CFAA94B2BF75CA8AB284983BECC426",
                customerId:9322763,
                customerEmail:"18201432580@cloudo.kids",
                id:matchId
            },
            success:function(data){
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name =  data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img  data-original="'+imgData+'" class="lazy">';
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
