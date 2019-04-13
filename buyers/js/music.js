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
    var matchArr = [{"id": 620}, {"id": 602}, {"id": 609}, {"id": 607}];
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
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"LUCKY\" SAXOPHONE PRINT SWEATER PINK MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-01.jpg","price":"564.20","ID":"16858"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"APPLIQUE \"BIZ\" SWEATER GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-02.jpg","price":"609.70","ID":"16897"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"BABIES \"BINGO\" MUSICAL NOTES SWEATER NAVY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-03.jpg","price":"646.10","ID":"16862"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"'BINGO' MUSICAL NOTES KNITTED SWEATER NAVY & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-04.jpg","price":"964.60","ID":"16855"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"ARLO\" ONE MAN BAND PRINT T-SHIRT WITH BADGES WHITE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-05.jpg","price":"445.90","ID":"16876"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"ED\" NOTE PRINT JACKET BLUE & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-06.jpg","price":"1,283.10","ID":"16890"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"ARLOW\" PARROT KARAOKE PRINT T-SHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-07.jpg","price":"409.50","ID":"16840"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"MUNSTER\" DENIM PIANO PRINT CREEPER SHOES BLUE, WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-08.jpg","price":"964.60","ID":"16755"},
        {"designer":"DOLCE & GABBANA","name":"BABIES \"DG FAMILY\" APPLIQUE JAZZ MUSICIANS ZIP HOODIE GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-09.jpg","price":"2,411.50","ID":"20781"},
        {"designer":"DOLCE & GABBANA","name":"\"DG FAMILY\" APPLIQUE JAZZ MUSICIANS ZIP HOODIE BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-10.jpg","price":"2129.40","ID":"17109"},
        {"designer":"DOLCE & GABBANA","name":"\"DG FAMILY\" APPLIQUE JAZZ MUSICIANS T-SHIRT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-11.jpg","price":"1665.30","ID":"17110"},
        {"designer":"DOLCE & GABBANA","name":"\"DG FAMILY\" APPLIQUE DRUMMER T-SHIRT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-12.jpg","price":"1665.30","ID":"17108"},
        {"designer":"DOLCE & GABBANA","name":"\"MAMBO\" APPLIQUE JAZZ MUSICIAN T-SHIRT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-13.jpg","price":"1119.30","ID":"17120"},
        {"designer":"DOLCE & GABBANA","name":"\"MAMBO\" #FOLLOWME APPLIQUE BADGES T-SHIRT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-14.jpg","price":"1665.30","ID":"17117"},
        {"designer":"DOLCE & GABBANA","name":"SAXOPHONE PLAYER T-SHIRT STRIPE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-15.jpg","price":"1119.30","ID":"17112"},
        {"designer":"DOLCE & GABBANA","name":"\"BUONA FORTUNA\" APPLIQUE JAZZ MUSICIAN T-SHIRT RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-16.jpg","price":"1665.30","ID":"20778"},
        {"designer":"DOLCE & GABBANA","name":"\"MAMBO\" APPLIQUE MUSICAL PALM TREE T-SHIRT BLACK & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-17.jpg","price":"1355.90","ID":"17119"},
        {"designer":"DOLCE & GABBANA","name":"\"MAMBO\" APPLIQUE MUSICAL PALM TREE T-SHIRT LIGHT BLUE & NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-18.jpg","price":"1355.90","ID":"17121"},
        {"designer":"DOLCE & GABBANA","name":"'JAZZ MUSIC' PRINT T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-20.jpg","price":"964.60","ID":"17123"},
        {"designer":"DOLCE & GABBANA","name":"\"BALLERINI JAZZ\" PRINT APPLIQUE CAT SHIRT BLACK, WHITE & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-19.jpg","price":"1665.30","ID":"17114"},
        {"designer":"DOLCE & GABBANA","name":"EMBROIDERED JAZZ MUSICIAN DENIM JEANS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-22.jpg","price":"1428.70","ID":"20785"},
        {"designer":"DOLCE & GABBANA","name":"\"BALLERINI JAZZ\" PRINT BERMUDA SHORTS BLACK, WHITE & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-21.jpg","price":"1119.30","ID":"17113"},
        {"designer":"KARL LAGERFELD KIDS","name":"DJ CAT PRINTED FLEECE SWEATSHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-23.jpg","price":"283.92","ID":"13133"},
        {"designer":"KARL LAGERFELD KIDS","name":"ROCKER PRINTED T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-24.jpg","price":"169.26","ID":"10719"},
        {"designer":"KARL LAGERFELD KIDS","name":"DESIGNER SILHOUETTE PRINTED T-SHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-25.jpg","price":"174.72","ID":"13131"},
        {"designer":"KARL LAGERFELD KIDS","name":"LONG SLEEVED PRINT T-SHIRT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!music-26.jpg","price":"196.56","ID":"13985"},

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
