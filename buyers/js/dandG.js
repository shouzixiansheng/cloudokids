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
    var matchArr = [{"id": 1082},{"id": 1083}, {"id": 1064}, {"id": 1090}];
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
        {"designer":"DOLCE & GABBANA","name":"RUFFLE & SPOT DETAIL BLOUSE BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG1.jpg","price":"1,119.30","ID":"17076"},
        {"designer":"DOLCE & GABBANA","name":"POLKA DOT TAILORED TROUSERS WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG2.jpg","price":"1,738.10","ID":"17001"},
        {"designer":"DOLCE & GABBANA","name":"BABIES APPLIQUE BADGE VARSITY JACKET DENIM BLUE & GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG3.jpg","price":"2129.40","ID":"17044"},
        {"designer":"DOLCE & GABBANA","name":"APPLIQUE ICE LOLLY DENIM SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG4.jpg","price":"1355.90","ID":"17054"},
        {"designer":"DOLCE & GABBANA","name":"\"MAMBO\" DOG JAZZ BAND PRINT T-SHIRT RED MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG5.jpg","price":"964.60","ID":"17116"},
        {"designer":"DOLCE & GABBANA","name":"BABIES EMBROIDERED JAZZ MUSICIAN DENIM BERMUDA SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG6.jpg","price":"1274.00","ID":"17037"},
        {"designer":"DOLCE & GABBANA","name":"FLORAL APPLIQUE CHINESE TEXT LOGO T- SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG7.jpg","price":"2120.30","ID":"20365"},
        {"designer":"DOLCE & GABBANA","name":"FLORAL APPLIQUE 'IO C'ERO' LOGO T- SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG8.jpg","price":"2120.30","ID":"20367"},
        {"designer":"DOLCE & GABBANA","name":"BABIES \"DG FAMILY\" APPLIQUE SCOOTER RIDE T-SHIRT PINK MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG9.jpg","price":"1665.30","ID":"17176"},
        {"designer":"DOLCE & GABBANA","name":"CATANIA MUSIC ' ISLAND PRINT T-SHIRT BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG10.jpg","price":"964.60","ID":"20370"},
        {"designer":"DOLCE & GABBANA","name":"MONOCHROME PINEAPPLE PRINT T-SHIRT BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG11.jpg","price":"964.60","ID":"20861"},
        {"designer":"DOLCE & GABBANA","name":"APPLIQUE \"DG FAMILY\" BACKPACK BLACK MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG12.jpg","price":"2902.90","ID":"16927"},
        {"designer":"DOLCE & GABBANA","name":"PINEAPPLE PRINT SUN DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG13.jpg","price":"1,274.00","ID":"17000"},
        {"designer":"DOLCE & GABBANA","name":"BABIES PINEAPPLE PRINT & BOW DRESS & BLOOMERS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG14.jpg","price":"2047.50","ID":"17152"},
        {"designer":"DOLCE & GABBANA","name":"BABIES PINEAPPLE PRINT SHORTS PINK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG15.jpg","price":"1046.50","ID":"17187"},
        {"designer":"DOLCE & GABBANA","name":"GIRLS PINEAPPLE PRINT STRAP SANDAL PINK & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG16.jpg","price":"1820.00","ID":"16981"},
        {"designer":"DOLCE & GABBANA","name":"PASTA PRINT LAYERED FRILL DRESS BLACK, YELLOW & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG17.jpg","price":"2120.30","ID":"20369"},
        {"designer":"DOLCE & GABBANA","name":"BABIES 'CARRETTO CON ROSE' FLORAL MOSAIC PRINT DRESS & BLOOMERS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG18.jpg","price":"2129.40","ID":"17140"},
        {"designer":"DOLCE & GABBANA","name":"\"CARRETTO CON ROSE\" EMBROIDERED FLORAL DETAIL DRESS IVORY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG19.jpg","price":"1820.00","ID":"17084"},
        {"designer":"DOLCE & GABBANA","name":"\"CARRETTO CON ROSE\" FLORAL & MOSAIC PRINT SLEEVELESS DRESS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG20.jpg","price":"2438.80","ID":"17071"},
        {"designer":"DOLCE & GABBANA","name":"FRUIT AND FLOWERS APPLIQUE EMBROIDERED JEANS DARK BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG21.jpg","price":"4058.60","ID":"20860"},
        {"designer":"DOLCE & GABBANA","name":"NAUTICAL STRIPE 3/4 LENGTH TROUSERS NAVY & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG22.jpg","price":"1355.90","ID":"16995"},
        {"designer":"DOLCE & GABBANA","name":"BABIES SEA THEME PRINT SWIMMING TRUNKS BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG23.jpg","price":"500.50","ID":"17090"},
        {"designer":"DOLCE & GABBANA","name":"PINEAPPLE APPLIQUE STRIPE PUMPS NAVY & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dandG24.jpg","price":"2,438.80","ID":"16971"},
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
