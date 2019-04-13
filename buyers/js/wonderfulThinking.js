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
    var matchArr = [{"id": 1059},{"id": 964}, {"id": 926}, {"id": 361},{"id": 1030}];
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
            var imgPic='<img src="" class="lazy" data-original="'+imgUrl+'">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img src="" class="lazy" data-original="'+buyerUrl+'">';
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
    var fashionArr=[
        {"designer":"FENDI","name":"SPACE THEME COMIC STRIP PRINT T-SHIRT MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking1.jpg","price":"1228.50 ","ID":"20553"},
        {"designer":"FENDI","name":"SPACE THEME COMIC STRIP PRINT CARDIGAN BLACK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking2.jpg","price":"1592.50 ","ID":"20555"},
        {"designer":"FENDI","name":"RUFFLE STRIPE & ROBOT GARDEN PRINT T-SHIRT BLACK, WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking3.jpg","price":"1228.50 ","ID":"20563"},
        {"designer":"FENDI","name":"Speech Bubble Print Jacket Beige & Multi","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking4.jpg","price":"2411.50 ","ID":"18014"},
        {"designer":"FENDI","name":"ROBOT & SPACE GRAPHIC PRINT T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking5.jpg","price":"1092.00 ","ID":"20558"},
        {"designer":"FENDI","name":"BABIES ROBOT GARDEN PRINT T-SHIRT WHITE, BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking6.jpg","price":"1001.00 ","ID":"20846"},
        {"designer":"FENDI","name":"BABIES SPACE PRINT WHITE T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking7.jpg","price":"791.70 ","ID":"20566"},
        {"designer":"FENDI","name":"ROBOT PRINT WHITE T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking8.jpg","price":"910.00 ","ID":"20565"},
        {"designer":"FENDI","name":"PALE BLUE ROBOT PRINT TRACKSUIT TOP","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking9.jpg","price":"1565.20 ","ID":"20725"},
        {"designer":"FENDI","name":"ROBOT PRINT JOGGERS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking10.jpg","price":"1137.50 ","ID":"20559"},
        {"designer":"FENDI","name":"BABIES ROBOT PRINT SUN HAT PINK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking11.jpg","price":"637.00 ","ID":"17597"},
        {"designer":"FENDI","name":"BABIES SPACE & ROBOT PRINT BODYSUIT PINK MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking12.jpg","price":"1410.50 ","ID":"20848"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"CIRCUS SWEATSHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking13.jpg","price":"388.57 ","ID":"14746"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"TROUSERS ANIMAL PRINT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking14.jpg","price":"414.05 ","ID":"14743"},
        {"designer":"LITTLE MARC JACOBS","name":"CINEMA GRAPHIC PRINT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking15.jpg","price":"354.90 ","ID":"18537"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"MARLA\" NAMES PRINT DUNGAREE DRESS WHITE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking16.jpg","price":"646.10 ","ID":"16873"},
        {"designer":"FENDI","name":"SLIP-ON SHOES WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking17.jpg","price":"2184.00 ","ID":"20722"},
        {"designer":"DOLCE & GABBANA","name":"BOYS ESPADRILLES MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking18.jpg","price":"655.20 ","ID":"16919"},
        {"designer":"DOLCE & GABBANA","name":"BOYS \"SUMMER LOVE ITALY\" LYCRA STRAP SANDALS BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking19.jpg","price":"1046.50 ","ID":"20787"},
        {"designer":"DOLCE & GABBANA","name":"BABIES \"SUMMER LOVE ITALY\" PRINT LYCRA SANDALS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking20.jpg","price":"1119.30 ","ID":"16918"},
        {"designer":"DOLCE & GABBANA","name":"ITALIA T-SHIRT MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking21.jpg","price":"964.60 ","ID":"17101"},
        {"designer":"DOLCE & GABBANA","name":"\"SUMMER LOVE ITALY\" PRINT WATERPROOF HOODED JACKET MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking22.jpg","price":"1738.10 ","ID":"17104"},
        {"designer":"DOLCE & GABBANA","name":"SWIM SHORTS ITALIA PRINT MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking23.jpg","price":"582.40 ","ID":"17092"},
        {"designer":"DOLCE & GABBANA","name":"BABIES SWIM SHORTS ITALIA PRINT MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking24.jpg","price":"891.80 ","ID":"17096"},
        {"designer":"KENZO","name":"GRAPHIC BADGES PRINT LONG SLEEVED SWEATSHIRT GREY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking25.jpg","price":"655.20 ","ID":"19172"},
        {"designer":"KENZO","name":"BABIES \"BEBERE\" BADGE PRINT JERSEY SHORTS GREY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking26.jpg","price":"427.70 ","ID":"19525"},
        {"designer":"KENZO","name":"\"BOLBI\" GRAPHIC BADGES PRINT T-SHIRT WHITE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking27.jpg","price":"382.20 ","ID":"19518"},
        {"designer":"DOLCE & GABBANA","name":"BOYS \"SUMMER LOVE ITALY\" PRINT FLIP FLOPS BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!wonderfulThinking28.jpg","price":"582.40 ","ID":"16921"},

    ];
    var gucciModel=$(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
    for(var i=0;i<fashionArr.length;i++){
        var designer=fashionArr[i].designer;
        var name=fashionArr[i].name;
        var price="¥"+fashionArr[i].price;
        var proId="cloudokids://product/"+fashionArr[i].ID;
        var imgLink=fashionArr[i].link;
        var imgData='<img src="" data-original="'+imgLink+'" class="lazy">';
        gucciModel.clone(true).appendTo($(".gucciContent"));
        $(".imModel").eq(i).find("a").attr("href",proId).html(imgData);
        $(".imModel").eq(i).find(".designer").html(designer);
        $(".imModel").eq(i).find(".proName").html(name);
        $(".imModel").eq(i).find(".price").html(price);
    }
    $("img.lazy").lazyload(
        {threshold : 500})
});
