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
    var matchArr = [{"id": 599}, {"id": 523}, {"id": 650}, {"id": 600},{"id": 544},{"id": 658}];

    var model = $(".recommendContent").find(".recommend-wrap");
    $(".recommendContent").empty();
    for(var i=0;i<matchArr.length;i++){
        model.clone(true).appendTo($(".recommendContent"));
        var matchId=matchArr[i].id;
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "GetCollage",
                customerAccessKey: "guest",
                collageId: matchId
            }
        }).done(function (data) {
            var result =data;
            //console.log(result);
            var imgUrl=result.Collage.PictureUrl;
            var imgPic='<img src="" data-original="'+imgUrl+'" class="lazy">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img src="" data-original="'+buyerUrl+'" class="lazy">';
            var imgLink="cloudokids://collage/"+result.Collage.Id;
            var buyerId="cloudokids://buyer/"+result.Collage.CustomerProfileOverview.Id;
            var buyerName=result.Collage.CustomerProfileOverview.Username;
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("href",imgLink).html(imgPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("href",buyerId);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("href",imgLink);

        })
    }

    var newTermImg=[
        {"designer":"DOLCE & GABBANA","name":"CLASSIC BLAZER IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-1.jpg","price":"3439.80","ID":"17017"},
        {"designer":"DOLCE & GABBANA","name":"BOYS STITCH DETAIL TROUSERS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-2.jpg","price":"1820.00","ID":"17019"},
        {"designer":"DOLCE & GABBANA","name":"CLASSIC COTTON SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-3.jpg","price":"964.60","ID":"20712"},
        {"designer":"MARNI","name":"DIP HEM STRIPE DETAIL SHIRT WHITE & NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-4.jpg","price":"791.7","ID":"17197"},
        {"designer":"MOSCHINO KID","name":"KNITTED EMBROIDERED LOGO CARDIGAN GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-5.jpg","price":"964.6","ID":"19411"},
        {"designer":"CHLOE","name":"LONG SLEEVED JERSEY COAT GREY & PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-6.jpg","price":"1,501.50","ID":"18402"},
        {"designer":"DOLCE & GABBANA","name":"DRESS ROSE BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-7.jpg","price":"2902.90","ID":"20706"},
        {"designer":"BURBERRY","name":"CHECK SHIRT DRESS BEIGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-8.jpg","price":"1,410.50","ID":"20717"},
        {"designer":"DOLCE & GABBANA","name":"STRIPED BOAT NECK KNITTED TOP NAVY BLUE & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-9.jpg","price":"2047.50","ID":"20783"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"WILL\" MILITARY STYLE JACKET IVORY & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-10.jpg","price":"1,210.30","ID":"16851"},
        {"designer":"DOLCE & GABBANA","name":"APPLIQUE JAZZ MUSICIANS V NECK JUMPER BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-11.jpg","price":"2902.90","ID":"17083"},
        {"designer":"SOPHIA WEBSTER","name":"\"BIBI\" BUTTERFLY MINI BLACK & ROSE GOLD SHOES","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-12.jpg","price":"1,001.00","ID":"16370"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"MARLA\" NAMES PRINT DUNGAREE DRESS WHITE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-13.jpg","price":"682.5","ID":"16873"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"FRAN\" MULTICOLOR PRINT HOODED WATERPROOF JACKET MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-14.jpg","price":"1,128.40","ID":"16850"},
        {"designer":"LITTLE MARC JACOBS","name":"POPCORN AND MOVIE TICKET EMBELLISHED DRESS NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-15.jpg","price":"955.5","ID":"18475"},
        {"designer":"DOLCE & GABBANA","name":"\"SUMMER LOVE ITALY\" PRINT WATERPROOF HOODED JACKET MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-16.jpg","price":"1738.10","ID":"17104"},
        {"designer":"BOBO CHOSES","name":"KNITTED BICYCLE PRINT CARDIGAN RED & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-17.jpg","price":"555.1","ID":"17540"},
        {"designer":"MARNI","name":"PULL OVER SHIRT NAVY & ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-18.jpg","price":"1,510.60","ID":"17195"},
        {"designer":"DSQUARED2","name":"LONG SLEEVED SURF PRINT SWEATER YELLOW & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-19.jpg","price":"828.1","ID":"16308"},
        {"designer":"SONIA RYKIEL","name":"HARLEQUIN PRINT T-SHIRT WHITE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-20.jpg","price":"309.4","ID":"20547"},
        {"designer":"MARCELO BURLON","name":"\"LINQUIMAY\" CREW HOODED SWEATER BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-21.jpg","price":"1,337.70","ID":"20004"},
        {"designer":"BURBERRY","name":"SATIN APPLIQUE CLOUD BOMBER JACKET NAVY BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1-22.jpg","price":"2,684.50","ID":"20395"},

    ];

    var newModel=$(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for(var j=0;j<newTermImg.length;j++){
        var designer=newTermImg[j].designer;
        var name=newTermImg[j].name;
        var price="¥"+newTermImg[j].price;
        var proId="cloudokids://product/"+newTermImg[j].ID;
        var imgLink=newTermImg[j].link;
        var imgData='<img data-original="'+imgLink+'" class="lazy">';
        newModel.clone(true).appendTo($(".recommendPro"));
        $(".imModel").eq(j).find("a").attr("href",proId).html(imgData);
        $(".imModel").eq(j).find(".designer").html(designer);
        $(".imModel").eq(j).find(".proName").html(name);
        $(".imModel").eq(j).find(".price").html(price);
    }
    $("img.lazy").lazyload(
        {threshold : 500}
    );

});
