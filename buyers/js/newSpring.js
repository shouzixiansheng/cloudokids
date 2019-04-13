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
    var matchArr = [{"id": 1288}, {"id": 1181}, {"id": 1169}, {"id": 1109}];
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
        {"designer":"BURBERRY","name":"WATERPROOF HOODED COAT YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring1.jpg","price":"1774.50","ID":"20495"},
        {"designer":"BURBERRY","name":"WATERPROOF HOODED COAT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring2.jpg","price":"1774.50","ID":"20497"},
        {"designer":"MONCLER","name":"\"AYROLLETTE\" POCKET DETAIL WATERPROOF HOODED COAT YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring3.jpg","price":"1956.50","ID":"16646"},
        {"designer":"GOSOAKY","name":"\"ELEPHANT MAN\" DIP DIE EFFECT HOODED WATERPROOF COAT GREEN & GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring4.jpg","price":"591.50","ID":"17947"},
        {"designer":"MONCLER","name":"\"CLEANTHE\" WATERPROOF HOODED POCKET DETAIL COAT NAVY BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring5.jpg","price":"2384.20","ID":"16599"},
        {"designer":"MONCLER","name":"\"HABEN\" WATERPROOF HOODED DENIM PANEL COAT NAVY BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring6.jpg","price":"1365.00","ID":"16644"},
        {"designer":"MONCLER","name":"\"TREGUIER\" TEXT PRINT WATERPROOF JERSEY JACKET BLACK & GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring7.jpg","price":"2247.70","ID":"16608"},
        {"designer":"GOSOAKY","name":"\"BLACK SWAN\" HOODED WATERPROOF CAPE INDIGO BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring8.jpg","price":"473.20","ID":"18150"},
        {"designer":"GOSOAKY","name":"CROUCHING TIGER' CAPE PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring9.jpg","price":"267.54","ID":"14440"},
        {"designer":"GOSOAKY","name":"\"CROUCHING TIGER\" STRIPED HOODED WATERPROOF CAPE IVORY & ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring10.jpg","price":"436.80","ID":"18151"},
        {"designer":"MONCLER","name":"BABIES \"CRISTOPHE\" DOUBLE POCKET DETAIL HOODED WATERPROOF COAT NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring11.jpg","price":"1,510.60","ID":"16587"},
        {"designer":"STONE ISLAND","name":"ZIP UP SWEATSHIRT NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring12.jpg","price":"1,046.50","ID":"19282"},
        {"designer":"BURBERRY","name":"SATIN APPLIQUE CLOUD BOMBER JACKET NAVY BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring13.jpg","price":"2684.50","ID":"20395"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"ED\" NOTE PRINT JACKET BLUE & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring14.jpg","price":"1219.40","ID":"16890"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"EASTWOOD' APPLIQUE SILK REVERSIBLE BOMBER JACKET KHAKI, CREAM & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring15.jpg","price":"1028.30","ID":"16905"},
        {"designer":"LITTLE MARC JACOBS","name":"APPLIQUE HOODED ZIP SWEATSHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring16.jpg","price":"718.90","ID":"18457"},
        {"designer":"DOLCE & GABBANA","name":"VOLCANO & PALM TREE PRINT HOODED WATERPROOF JACKET BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring17.jpg","price":"1738.10","ID":"17105"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"BABIES \"SCOUT\" HAWAIIAN PRINT HOODED WATERPROOF JACKET BLUE & GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring18.jpg","price":"837.20","ID":"16859"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"FRAN\" MULTICOLOR PRINT HOODED WATERPROOF JACKET MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring19.jpg","price":"1073.80","ID":"16850"},
        {"designer":"DSQUARED2","name":"LONG SLEEVED HOODED ZIP MAPLE LEAF PRINT SWEATER RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring20.jpg","price":"1055.60","ID":"16302"},
        {"designer":"MARCELO BURLON","name":"\"AIAS\" WINGS PRINT HOODED ZIP SWEATSHIRT BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring21.jpg","price":"1574.30","ID":"19923"},
        {"designer":"DOLCE & GABBANA","name":"EMBROIDERED CROWN ZIP HOODIE BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring22.jpg","price":"1428.70","ID":"17077"},
        {"designer":"GUCCI","name":"BABIES STRIPE DETAIL HOODED ZIP SWEATSHIRT NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring23.jpg","price":"1456.00","ID":"18212"},
        {"designer":"STONE ISLAND","name":"HOODED SWEATSHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!newSpring24.jpg","price":"1137.50","ID":"19280"},

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


