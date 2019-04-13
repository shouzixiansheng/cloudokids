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


    var relaxSpringArr=[
        {"ID":"16708"},
        {"ID":"20333"},
        {"ID":"16867"},
        {"ID":"16835"}
    ];

    var model =  $(".mustBuy1").find(".imModel").eq(0);
    $(".mustBuy1").empty();
    for(var i=0,ii=0;i<relaxSpringArr.length;i++){
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
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name =  data.Product.Name;
                var proId="../detailPages.html#"+data.Product.Id;
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img  src="'+imgData+'">';
                model.clone(true).appendTo($(".mustBuy1"));
                $(".mustBuy1").find(".imModel").eq(ii).find("a").attr("href",proId).html(imgLink);
                $(".mustBuy1").find(".imModel").eq(ii).find(".designer").html(designer);
                $(".mustBuy1").find(".imModel").eq(ii).find(".proName").html(name);
                $(".mustBuy1").find(".imModel").eq(ii).find(".price").html(price);
                ii++;

            }
        })

    }




    var relaxSpringArr1=[
        {"ID":"18966"},
        {"ID":"18681"},
        {"ID":"20294"},
        {"ID":"20501"}
    ];

    var model1 =  $(".mustBuy2").find(".imModel").eq(0);
    $(".mustBuy2").empty();
    for(var j=0,jj=0;j<relaxSpringArr1.length;j++){
        var matchId=relaxSpringArr1[j].ID;
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
                var proId="../detailPages.html#"+data.Product.Id;
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img  src="'+imgData+'">';
                model1.clone(true).appendTo($(".mustBuy2"));
                $(".mustBuy2").find(".imModel").eq(jj).find("a").attr("href",proId).html(imgLink);
                $(".mustBuy2").find(".imModel").eq(jj).find(".designer").html(designer);
                $(".mustBuy2").find(".imModel").eq(jj).find(".proName").html(name);
                $(".mustBuy2").find(".imModel").eq(jj).find(".price").html(price);
                jj++;
            }
        })

    }



    var relaxSpringArr2=[
        {"ID":"19000"},
        {"ID":"17544"},
        {"ID":"17546"},
        {"ID":"18385"}
    ];

    var model2 =  $(".mustBuy3").find(".imModel").eq(0);
    $(".mustBuy3").empty();
    for(var a=0,aa=0;a<relaxSpringArr2.length;a++){
        var matchId=relaxSpringArr2[a].ID;
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
                model2.clone(true).appendTo($(".mustBuy3"));
                $(".mustBuy3").find(".imModel").eq(aa).find("a").attr("href",proId).html(imgLink);
                $(".mustBuy3").find(".imModel").eq(aa).find(".designer").html(designer);
                $(".mustBuy3").find(".imModel").eq(aa).find(".proName").html(name);
                $(".mustBuy3").find(".imModel").eq(aa).find(".price").html(price);
                aa++;
            }
        })

    }


    var relaxSpringArr3=[
        {"ID":"18074"},
        {"ID":"18076"},
        {"ID":"21042"},
        {"ID":"20422"}
    ];

    var model3 =  $(".mustBuy4").find(".imModel").eq(0);
    $(".mustBuy4").empty();
    for(var b = 0,bb=0;b<relaxSpringArr3.length;b++){
        var matchId=relaxSpringArr3[b].ID;
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
                var proId="../detailPages.html#"+data.Product.Id;
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name =  data.Product.Name;
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img  src="'+imgData+'">';
                model3.clone(true).appendTo($(".mustBuy4"));
                $(".mustBuy4").find(".imModel").eq(bb).find("a").attr("href",proId).html(imgLink);
                $(".mustBuy4").find(".imModel").eq(bb).find(".designer").html(designer);
                $(".mustBuy4").find(".imModel").eq(bb).find(".proName").html(name);
                $(".mustBuy4").find(".imModel").eq(bb).find(".price").html(price);
                bb++;
            }
        })
    }

    $("img.lazy").lazyload(
        {threshold : 500}
    );

});



