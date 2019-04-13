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
    var matchArr = [{"id": 1377}, {"id": 1414}, {"id": 1534}, {"id": 1343}];
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

    var gucciArr=[
        {"designer":"MOSCHINO KID","name":"PAINTED FACE PRINT CROPPED TOP IVORY & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist1.jpg","price":"427.70","ID":"19362"},
        {"designer":"MOSCHINO KID","name":"FACE PRINT TAILORED SHORTS WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist2.jpg","price":"591.50","ID":"19361"},
        {"designer":"MOSCHINO KID","name":"FACE PRINT DRESS WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist3.jpg","price":"737.10","ID":"19360"},
        {"designer":"MOSCHINO KID","name":"BOW & LOGO PRINT T-SHIRT IVORY, BLACK & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist4.jpg","price":"482.30","ID":"19404"},
        {"designer":"MOSCHINO KID","name":"LONG SLEEVED TEXT PRINT SHIRT WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist5.jpg","price":"709.80","ID":"19347"},
        {"designer":"MOSCHINO KID","name":"LONG SLEEVED GRAPHIC PRINT LOGO SWEATSHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist6.jpg","price":"564.20","ID":"19398"},
        {"designer":"MOSCHINO KID","name":"LOGO PRINT POLO SHIRT WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist7.jpg","price":"564.20","ID":"19420"},
        {"designer":"MOSCHINO KID","name":"LOGO PRINT T-SHIRT WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist8.jpg","price":"427.70","ID":"19416"},
        {"designer":"MOSCHINO KID","name":"LOGO PRINT POLO SHIRT BLUE & ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist9.jpg","price":"564.20","ID":"19394"},
        {"designer":"MOSCHINO KID","name":"GIRLS LOGO PRINT SWEATSHIRT RED & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist10.jpg","price":"509.60","ID":"19260"},
        {"designer":"MOSCHINO KID","name":"LOGO PRINT TOP GREY , BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist11.jpg","price":"427.70","ID":"19409"},
        {"designer":"MOSCHINO KID","name":"LOGO PRINT TOP YELLOW, WHITE, & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist12.jpg","price":"427.70","ID":"19408"},
        {"designer":"MOSCHINO KID","name":"PATCHWORK PRINT OVERSIZED T-SHIRT MULTI-COLOURED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist13.jpg","price":"509.60","ID":"19366"},
        {"designer":"MOSCHINO KID","name":"PATCHWORK PRINT LEGGINGS MULTICOLURED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist14.jpg","price":"427.70","ID":"19541"},
        {"designer":"MOSCHINO KID","name":"SHORT SLEEVED SHARK & TEDDY PRINT T-SHIRT MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist15.jpg","price":"646.10","ID":"19337"},
        {"designer":"MOSCHINO KID","name":"SURFING TEDDY BEAR & DOLPHIN PRINT T-SHIRT BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist16.jpg","price":"646.10","ID":"19403"},
        {"designer":"MOSCHINO KID","name":"BEACH TEDDY BEAR & LOGO PRINT T-SHIRT BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist17.jpg","price":"391.30","ID":"19421"},
        {"designer":"MOSCHINO KID","name":"BEACH TEDDY BEAR & LOGO PRINT T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist18.jpg","price":"391.30","ID":"19400"},
        {"designer":"MOSCHINO KID","name":"BABIES BEACH TEDDY BEAR & LOGO PRINT T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist19.jpg","price":"391.30","ID":"19272"},
        {"designer":"MOSCHINO KID","name":"BABIES BEACH TEDDY BEAR & LOGO PRINT DRESS WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist20.jpg","price":"564.20","ID":"19382"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR POCKET PRINT CARDIGAN PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist21.jpg","price":"527.80","ID":"19355"},
        {"designer":"MOSCHINO KID","name":"GOLD TEXT PRINT LEGGINGS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist22.jpg","price":"336.70","ID":"19363"},
        {"designer":"MOSCHINO KID","name":"EMBROIDERED FACE APPLIQUE BADGE KNITTED CARDIGAN PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist23.jpg","price":"773.50","ID":"19359"},
        {"designer":"MOSCHINO KID","name":"HEART PRINT FRILL DRESS PINK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist24.jpg","price":"591.50","ID":"19356"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT T-SHIRT PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist25.jpg","price":"391.30","ID":"19267"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT HOODED ZIP WATERPROOF JACKET PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist26.jpg","price":"1137.50","ID":"19353"},
        {"designer":"MOSCHINO KID","name":"SEQUIN HEART APPLIQUE T-SHIRT GREY & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist27.jpg","price":"509.60","ID":"19259"},
        {"designer":"MOSCHINO KID","name":"HEART PRINT LEGGINGS BLACK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist28.jpg","price":"427.70","ID":"19413"},
        {"designer":"MOSCHINO KID","name":"KNITTED EMBROIDERED LOGO CARDIGAN GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist29.jpg","price":"964.60","ID":"19411"},
        {"designer":"MOSCHINO KID","name":"LOGO PRINT LEGGINGS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist30.jpg","price":"336.70","ID":"19364"},
        {"designer":"MOSCHINO KID","name":"BABIES LOGO HOODED ZIP SWEATSHIRT GREY & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist31.jpg","price":"655.20","ID":"19262"},
        {"designer":"MOSCHINO KID","name":"BABIES BLACK TEXT PRINT JOGGERS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist32.jpg","price":"427.70","ID":"19261"},
        {"designer":"MOSCHINO KID","name":"BALLOON HEARTS & LOGO SWEATER YELLOW & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist33.jpg","price":"573.30","ID":"19357"},
        {"designer":"MOSCHINO KID","name":"GOLD TEXT PRINT LEGGINGS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist34.jpg","price":"254.80","ID":"19368"},
        {"designer":"MOSCHINO KID","name":"TEDDY BEAR BAG PRINT T-SHIRT DRESS YELLOW & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist35.jpg","price":"564.20","ID":"19402"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT T-SHIRT & SHORTS SET YELLOW, RED & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist36.jpg","price":"773.50","ID":"19374"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR & RUBBER DUCK PRINT T-SHIRT & SHORT SET PINK & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist37.jpg","price":"773.50","ID":"19376"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT T-SHIRT DRESS IVORY & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist38.jpg","price":"573.30","ID":"19385"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR BAG PRINT ROMPER SUIT PINK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist39.jpg","price":"591.50","ID":"19379"},
        {"designer":"MOSCHINO KID","name":"BABIES SHORT SLEEVED TEDDY PRINT FRILL DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist40.jpg","price":"564.20","ID":"19383"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT T-SHIRT & SHORTS SET IVORY, PINK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist41.jpg","price":"773.50","ID":"19377"},
        {"designer":"MOSCHINO KID","name":"BABIES HEARTS PRINT T-SHIRT & SHORTS IVORY, PINK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist42.jpg","price":"773.50","ID":"19265"},
        {"designer":"MOSCHINO KID","name":"TEDDY BEAR PRINT T-SHIRT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist43.jpg","price":"427.70","ID":"19396"},
        {"designer":"MOSCHINO KID","name":"HEARTS PRINT & LOGO T-SHIRT IVORY & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist44.jpg","price":"482.30","ID":"19256"},
        {"designer":"MOSCHINO KID","name":"BABIES POCKET DETAIL TEDDY PRINT T-SHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist45.jpg","price":"427.70","ID":"19269"},
        {"designer":"MOSCHINO KID","name":"TEDDY BEAR BAG PRINT T-SHIRT DRESS GREY & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist46.jpg","price":"564.20","ID":"19414"},
        {"designer":"MOSCHINO KID","name":"SHORT SLEEVED EMBROIDERED TEXT LOGO POLO SHIRT BLUE, RED & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist47.jpg","price":"509.60","ID":"19395"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist48.jpg","price":"391.30","ID":"19271"},
        {"designer":"MOSCHINO KID","name":"BABIES BEACH TEDDY BEAR & LOGO PRINT ROMPER SUIT IVORY & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist49.jpg","price":"591.50","ID":"19380"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR & RUBBER DUCK PRINT T-SHIRT & SHORT SET WHITE & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist50.jpg","price":"700.70","ID":"19375"},
        {"designer":"MOSCHINO KID","name":"BABIES LOGO PRINT JERSEY SHORTS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist51.jpg","price":"482.30","ID":"19389"},
        {"designer":"MOSCHINO KID","name":"EMBROIDERED TEXT LOGO SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist52.jpg","price":"591.50","ID":"19418"},
        {"designer":"MOSCHINO KID","name":"Babies logo Print Shorts Red , Black  & White","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist53.jpg","price":"482.30","ID":"19388"},
        {"designer":"MOSCHINO KID","name":"EMBROIDERED TEXT LOGO SHORTS GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist54.jpg","price":"591.50","ID":"19419"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT TWO PIECE ROMPER SUITS GIFT SET BLUE , RED & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist55.jpg","price":"1137.50","ID":"19378"},
        {"designer":"MOSCHINO KID","name":"BABIES BEACH TEDDY BEAR & LOGO PRINT SWIM SHORTS BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist56.jpg","price":"564.20","ID":"19372"},
        {"designer":"MOSCHINO KID","name":"TEDDY AT THE BEACH PRINT DRESS ORANGE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist57.jpg","price":"709.80","ID":"19257"},
        {"designer":"MOSCHINO KID","name":"BEACH TEDDY BEAR & LOGO PRINT SWIM SHORTS BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist58.jpg","price":"591.50","ID":"19410"},
        {"designer":"MOSCHINO KID","name":"BABIES BEACH TEDDY BEAR & LOGO PRINT DRESS RED & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist59.jpg","price":"564.20","ID":"19381"},
        {"designer":"MOSCHINO KID","name":"BABIES FRILL DETAIL TEDDY & DUCK PRINT SWIMSUIT RED & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist60.jpg","price":"646.10","ID":"19371"},
        {"designer":"MOSCHINO KID","name":"BEACH TEDDY BEAR & LOGO PRINT TWO PIECE SWIMSUIT PINK, WHITE, YELLOW MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist61.jpg","price":"591.50","ID":"19401"},
        {"designer":"MOSCHINO KID","name":"LOGO PRINT VEST IVORY & PURPLE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist62.jpg","price":"336.70","ID":"19406"},
        {"designer":"MOSCHINO KID","name":"BABIES LOGO PRINT POLO SHIRT & SHORTS SET WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist63.jpg","price":"855.40","ID":"20865"},
        {"designer":"MOSCHINO KID","name":"LOGO PRINT VEST BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist64.jpg","price":"336.70","ID":"19405"},
        {"designer":"MOSCHINO KID","name":"BERMUDA LOGO COTTON SHORT BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist65.jpg","price":"427.70","ID":"19415"},
        {"designer":"MOSCHINO KID","name":"GOLD TEXT PRINT LEGGINGS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!artist66.jpg","price":"336.70","ID":"19365"},

    ];
    var gucciModel=$(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
    for(var i=0;i<gucciArr.length;i++){
        var designer=gucciArr[i].designer;
        var name=gucciArr[i].name;
        var price="¥"+gucciArr[i].price;
        var proId="cloudokids://product/"+gucciArr[i].ID;
        var imgLink=gucciArr[i].link;
        var imgData='<img src="" data-original="'+imgLink+'" class="lazy">';
        gucciModel.clone(true).appendTo($(".gucciContent"));
        $(".imModel").eq(i).find("a").attr("href",proId).html(imgData);
        $(".imModel").eq(i).find(".designer").html(designer);
        $(".imModel").eq(i).find(".proName").html(name);
        $(".imModel").eq(i).find(".price").html(price);
    }
    $("img.lazy").lazyload(
        {threshold : 500}
    );



});