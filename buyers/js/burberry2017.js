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
    var matchArr = [{"id": 1109},{"id": 679}, {"id": 590}, {"id": 338}];
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
        {"designer":"BURBERRY","name":"WATERPROOF HOODED COAT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew1.jpg","price":"1774.50","ID":"20497"},
        {"designer":"BURBERRY","name":"SATIN APPLIQUE CLOUD BOMBER JACKET NAVY BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew2.jpg","price":"2684.50","ID":"20395"},
        {"designer":"BURBERRY","name":"DUCK DOWN HOODED GILET BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew3.jpg","price":"1683.50","ID":"20483"},
        {"designer":"BURBERRY","name":"LONG SLEEVED STRIPE APPLIQUE TEXT LOGO SWEATER BLUE, WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew4.jpg","price":"1,319.50","ID":"20822"},
        {"designer":"BURBERRY","name":"DUCK DOWN HOODED GILET RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew5.jpg","price":"1683.50","ID":"20481"},
        {"designer":"BURBERRY","name":"STRIPE TOP RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew6.jpg","price":"546.00","ID":"20736"},
        {"designer":"BURBERRY","name":"SHORT SLEEVED APPLIQUE FLOWER SPORTY DRESS WHITE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew7.jpg","price":"1,046.50","ID":"20820"},
        {"designer":"BURBERRY","name":"BAND PRACTICE' TOP WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew8.jpg","price":"455.00","ID":"20444"},
        {"designer":"BURBERRY","name":"BABIES SHORT SLEEVED STRIPE APPLIQUE FLOWER T-SHIRT IVORY, BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew9.jpg","price":"728.00","ID":"20505"},
        {"designer":"BURBERRY","name":"STRIPE RAINCLOUD PRINT T-SHIRT BLUE & IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew10.jpg","price":"500.50","ID":"20509"},
        {"designer":"BURBERRY","name":"EMBROIDERED EQUESTRIAN KNIGHT WAFFLE SWEATER YELLOW & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew11.jpg","price":"773.50","ID":"20522"},
        {"designer":"BURBERRY","name":"BABIES EMBROIDERED EQUESTRIAN KNIGHT WAFFLE SWEATER BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew12.jpg","price":"682.50","ID":"20436"},
        {"designer":"BURBERRY","name":"SHIRT DRESS RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew13.jpg","price":"1410.50","ID":"20456"},
        {"designer":"BURBERRY","name":"BABIES CHECKED CUFF DETAIL SWEATER RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew14.jpg","price":"1,228.50","ID":"20490"},
        {"designer":"BURBERRY","name":"GIRLS CHECK SKIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew15.jpg","price":"864.50","ID":"20458"},
        {"designer":"BURBERRY","name":"GIRLS CHECK CAPE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew16.jpg","price":"5005.00","ID":"20452"},
        {"designer":"BURBERRY","name":"LONG SLEEVED STAR PRINT CASHMERE SWEATER BLACK & GOLD","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew17.jpg","price":"1,774.50","ID":"20506"},
        {"designer":"BURBERRY","name":"GIRLS CHECK STAR PRINT WELLIES BLACK, GOLD & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew18.jpg","price":"1,046.50","ID":"20824"},
        {"designer":"BURBERRY","name":"TRENCH COAT BEIGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew19.jpg","price":"5005.00","ID":"20487"},
        {"designer":"BURBERRY","name":"VELCRO CHECK TRAINERS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew20.jpg","price":"1046.50","ID":"20735"},
        {"designer":"BURBERRY","name":"WATERPROOF JACKET BEIGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew21.jpg","price":"2275.00","ID":"20442"},
        {"designer":"BURBERRY","name":"VELCRO CHECK TRAINERS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew22.jpg","price":"1137.50","ID":"20252"},
        {"designer":"BURBERRY","name":"HIGH TOP TRAINERS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew23.jpg","price":"1410.50","ID":"20728"},
        {"designer":"BURBERRY","name":"VELCRO CHECK TRAINERS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!esploreNew24.jpg","price":"1046.50","ID":"20409"},
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
