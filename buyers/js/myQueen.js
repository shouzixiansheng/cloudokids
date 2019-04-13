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
    var matchArr = [{"id": 1386}, {"id": 965}, {"id": 1000}, {"id": 1633}];
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
        }).done(function (result) {
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

    var relaxSpringArr=[
        {"designer":"CHLOE","name":"LAYERED DRESS PEACH","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen1.jpg","price":"718.90 ","ID":"18407"},
        {"designer":"CHLOE","name":"RUFFLE SLEEVE DRESS WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen2.jpg","price":"1046.50 ","ID":"18410"},
        {"designer":"CHLOE","name":"Babies Ruffle Dress Pink, Peach &  Yellow","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen3.jpg","price":"991.9","ID":"18603"},
        {"designer":"CHLOE","name":"BABIES RUFFLE SLEEVE DRESS WHITE, PEACH & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen4.jpg","price":"991.9","ID":"18601"},
        {"designer":"CHLOE","name":"SHORT SLEEVED BRODERIE ANGLAISE FLORAL PRINT DRESS IVORY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen5.jpg","price":"1319.50 ","ID":"18418"},
        {"designer":"CHLOE","name":"BABIES BRODERIE ANGLAISE FLORAL PRINT DRESS IVORY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen6.jpg","price":"1319.50 ","ID":"18615"},
        {"designer":"GUCCI","name":"APPLIQUE THREE HEADED SNAKE BRODERIE ANGLAISE DRESS IVORY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen7.jpg","price":"9282.00 ","ID":"18261"},
        {"designer":"DOLCE & GABBANA","name":"SLEEVELESS SPOTTED TIERED MIDI DRESS WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen8.jpg","price":"2593.50 ","ID":"17067"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"GINGER\" SCALLOPED DETAIL DRESS NUDE PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen9.jpg","price":"691.60 ","ID":"16839"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"'ALABAMA' BRODERIE ANGLAISE DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen10.jpg","price":"837.20 ","ID":"16830"},
        {"designer":"KETIKETA","name":"\"CARMENSITA\" CROCHET TRIM DRESS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen11.jpg","price":"546.00 ","ID":"17304"},
        {"designer":"KETIKETA","name":"\"CARMENSITA\" CROCHET TRIM DRESS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen12.jpg","price":"546.00 ","ID":"17305"},
        {"designer":"BILLIEBLUSH","name":"BABIES ICE CREAM PRINT TULLE DRESS BLUE, WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen13.jpg","price":"354.90 ","ID":"18860"},
        {"designer":"BILLIEBLUSH","name":"SPOT PRINT TULLE PUFFBALL DRESS BLUE, WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen14.jpg","price":"354.90 ","ID":"18752"},
        {"designer":"BILLIEBLUSH","name":"APPLIQUE GLITTER SEQUIN & FLOWERS TULLE DRESS WHITE, PINK & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen15.jpg","price":"627.90 ","ID":"18730"},
        {"designer":"BILLIEBLUSH","name":"BABIES NEON POM POM COTTON BLOUSE IVORY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen16.jpg","price":"227.50 ","ID":"18854"},
        {"designer":"BILLIEBLUSH","name":"PLEATED LAYER DRESS GOLD & PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen17.jpg","price":"600.60 ","ID":"18729"},
        {"designer":"BONPOINT","name":"FLOWER PRINT DRESS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen18.jpg","price":"955.50 ","ID":"16554"},
        {"designer":"BONPOINT","name":"BABIES BIRD PRINT DRESS BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen19.jpg","price":"1001.00 ","ID":"16535"},
        {"designer":"BONPOINT","name":"'EMPIRE' BIRD PRINT PINAFORE DRESS BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen20.jpg","price":"1183.00 ","ID":"16557"},
        {"designer":"BONPOINT","name":"SMOCK DRESS NUDE PINK & GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen21.jpg","price":"637.00 ","ID":"16569"},
        {"designer":"BONPOINT","name":"PETER PAN COLLAR DRESS IVORY & NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen22.jpg","price":"1064.70 ","ID":"16558"},
        {"designer":"MARNI","name":"ROSE & STRIPE PRINT DRESS WHITE, YELLOW & GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen23.jpg","price":"1073.80 ","ID":"17212"},
        {"designer":"BILLIEBLUSH","name":"SLEEVELESS BRODERIE ANGLAISE DRESS BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen24.jpg","price":"536.90 ","ID":"18866"},
        {"designer":"MARNI","name":"STRIPES AND FLOWERS PRINT DRESS WHITE, YELLOW & GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen25.jpg","price":"573.30 ","ID":"17215"},
        {"designer":"MINI RODINI","name":"MUSIC PRINT DRESS IVORY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen26.jpg","price":"364.00 ","ID":"17586"},
        {"designer":"CHLOE","name":"SLEEVELESS DRESS ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen27.jpg","price":"1046.50 ","ID":"18419"},
        {"designer":"CHLOE","name":"WOVEN MULTICOLOR STRAP FRILL DETAIL DRESS ORANGE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen28.jpg","price":"809.90 ","ID":"18594"},
        {"designer":"CARRÉMENT BEAU","name":"EMBROIDERED DRESS ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen29.jpg","price":"445.90 ","ID":"18650"},
        {"designer":"CHLOE","name":"PINAFORE DRESS BRIGHT RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen30.jpg","price":"900.90 ","ID":"18421"},
        {"designer":"CHLOE","name":"BABIES EMBROIDERED PINEAPPLE RUFFLE DRESS ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen31.jpg","price":"682.50 ","ID":"18587"},
        {"designer":"KETIKETA","name":"'ISABEL' RUFFLE & STITCH DETAIL DRESS RED & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!queen32.jpg","price":"737.10 ","ID":"17287"},

    ];

    var newModel=$(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for(var j=0;j<relaxSpringArr.length;j++){
        var designer=relaxSpringArr[j].designer;
        var name=relaxSpringArr[j].name;
        var price="¥"+relaxSpringArr[j].price;
        var proId="cloudokids://product/"+relaxSpringArr[j].ID;
        var imgLink=relaxSpringArr[j].link;
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


