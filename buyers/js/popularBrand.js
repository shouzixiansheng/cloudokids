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
        {"ID":"20333"},
        {"ID":"20367"},
        {"ID":"20370"},
        {"ID":"17128"}
    ];
    var model =  $(".brand1").find(".imModel").eq(0);
    $(".brand1").empty();
    for(var i=0;i<relaxSpringArr.length;i++){
        var matchId=relaxSpringArr[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model.clone(true).appendTo($(".brand1"));
                $(".brand1").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand1").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand1").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }


    var relaxSpringArr1=[
        {"ID":"20283"},
        {"ID":"20437"},
        {"ID":"20431"},
        {"ID":"20508"}
    ];
    var model1 =  $(".brand2").find(".imModel").eq(0);
    $(".brand2").empty();
    for(var i=0;i<relaxSpringArr1.length;i++){
        var matchId=relaxSpringArr1[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr1[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr1[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model1.clone(true).appendTo($(".brand2"));
                $(".brand2").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand2").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand2").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }

    var relaxSpringArr2=[
        {"ID":"18261"},
        {"ID":"18182"},
        {"ID":"18240"},
        {"ID":"18179"}
    ];
    var model2 =  $(".brand3").find(".imModel").eq(0);
    $(".brand3").empty();
    for(var i=0;i<relaxSpringArr2.length;i++){
        var matchId=relaxSpringArr2[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr2[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr2[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model2.clone(true).appendTo($(".brand3"));
                $(".brand3").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand3").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand3").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }

    var relaxSpringArr3=[
        {"ID":"20562"},
        {"ID":"17975"},
        {"ID":"18035"},
        {"ID":"18032"}
    ];
    var model3 =  $(".brand4").find(".imModel").eq(0);
    $(".brand4").empty();
    for(var i=0;i<relaxSpringArr3.length;i++){
        var matchId=relaxSpringArr3[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr3[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr3[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model3.clone(true).appendTo($(".brand4"));
                $(".brand4").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand4").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand4").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }

    var relaxSpringArr4=[
        {"ID":"19124"},
        {"ID":"19123"},
        {"ID":"19172"},
        {"ID":"19135"}
    ];
    var model4 =  $(".brand5").find(".imModel").eq(0);
    $(".brand5").empty();
    for(var i=0;i<relaxSpringArr4.length;i++){
        var matchId=relaxSpringArr4[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr4[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr4[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model4.clone(true).appendTo($(".brand5"));
                $(".brand5").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand5").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand5").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }

    var relaxSpringArr5=[
        {"ID":"18472"},
        {"ID":"18459"},
        {"ID":"18657"},
        {"ID":"18537"}
    ];
    var model5 =  $(".brand6").find(".imModel").eq(0);
    $(".brand6").empty();
    for(var i=0;i<relaxSpringArr5.length;i++){
        var matchId=relaxSpringArr5[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr5[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr5[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model5.clone(true).appendTo($(".brand6"));
                $(".brand6").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand6").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand6").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }


    var relaxSpringArr6=[
        {"ID":"16869"},
        {"ID":"16868"},
        {"ID":"16876"},
        {"ID":"16867"}
    ];
    var model6 =  $(".brand7").find(".imModel").eq(0);
    $(".brand7").empty();
    for(var i=0;i<relaxSpringArr6.length;i++){
        var matchId=relaxSpringArr6[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr6[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr6[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model6.clone(true).appendTo($(".brand7"));
                $(".brand7").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand7").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand7").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }

    var relaxSpringArr7=[
        {"ID":"19054"},
        {"ID":"19055"},
        {"ID":"19474"},
        {"ID":"19046"}
    ];
    var model7 =  $(".brand8").find(".imModel").eq(0);
    $(".brand8").empty();
    for(var i=0;i<relaxSpringArr7.length;i++){
        var matchId=relaxSpringArr7[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr7[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr7[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model7.clone(true).appendTo($(".brand8"));
                $(".brand8").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand8").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand8").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }

    var relaxSpringArr8=[
        {"ID":"19258"},
        {"ID":"19405"},
        {"ID":"19421"},
        {"ID":"19420"}
    ];
    var model8 =  $(".brand9").find(".imModel").eq(0);
    $(".brand9").empty();
    for(var i=0;i<relaxSpringArr8.length;i++){
        var matchId=relaxSpringArr8[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr8[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr8[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model8.clone(true).appendTo($(".brand9"));
                $(".brand9").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand9").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand9").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }
    var relaxSpringArr9=[
        {"ID":"19940"},
        {"ID":"19937"},
        {"ID":"20026"},
        {"ID":"20028"}
    ];
    var model9 =  $(".brand10").find(".imModel").eq(0);
    $(".brand10").empty();
    for(var i=0;i<relaxSpringArr9.length;i++){
        var matchId=relaxSpringArr9[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr9[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr9[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model9.clone(true).appendTo($(".brand10"));
                $(".brand10").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand10").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand10").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }


    var relaxSpringArr10=[
        {"ID":"17729"},
        {"ID":"17684"},
        {"ID":"17706"},
        {"ID":"17715"}
    ];
    var model10 =  $(".brand11").find(".imModel").eq(0);
    $(".brand11").empty();
    for(var i=0;i<relaxSpringArr10.length;i++){
        var matchId=relaxSpringArr10[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr10[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr10[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model10.clone(true).appendTo($(".brand11"));
                $(".brand11").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand11").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand11").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }


    var relaxSpringArr11=[
        {"ID":"19647"},
        {"ID":"19648"},
        {"ID":"19646"},
        {"ID":"19645"}
    ];
    var model11 =  $(".brand12").find(".imModel").eq(0);
    $(".brand12").empty();
    for(var i=0;i<relaxSpringArr11.length;i++){
        var matchId=relaxSpringArr11[i].ID;
        //var proId="cloudokids://product/"+relaxSpringArr11[i].ID;
        var proId="../detailPages.html#"+relaxSpringArr11[i].ID;
        $.ajax({
            url:"http://h5.cloudokids.cn/mweb/inter/getResult",
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
                var price = data.Product.ProductPrice.Price;
                var imgLink='<img data-original="'+imgData+'" class="lazy">';
                model11.clone(true).appendTo($(".brand12"));
                $(".brand12").children(".imModel").eq(i).find("a").attr("href",proId).html(imgLink);
                $(".brand12").children(".imModel").eq(i).find(".designer").html(designer);
                $(".brand12").children(".imModel").eq(i).find(".price").html(price);
            }
        })
    }


    $("img.lazy").lazyload(
        {threshold : 500}
    );
})