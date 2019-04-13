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
    var matchArr = [{"id": 759}, {"id": 831}, {"id": 725}, {"id": 664}];
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
        {"designer":"NUNUNU","name":"NO' PRINT T-SHIRT BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild1.jpg","price":"336.70","ID":"19544"},
        {"designer":"NUNUNU","name":"\"ONE ON ONE\" LEGGINGS BLACK & GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild2.jpg","price":"327.60","ID":"19584"},
        {"designer":"NUNUNU","name":"PAINT HAND PRINT T-SHIRT IVORY & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild3.jpg","price":"327.60","ID":"20829"},
        {"designer":"NUNUNU","name":"STAR PRINT BEACH TROUSERS WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild4.jpg","price":"409.50","ID":"19601"},
        {"designer":"NUNUNU","name":"PAINT SPLATTER T-SHIRT BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild5.jpg","price":"336.70","ID":"19612"},
        {"designer":"NUNUNU","name":"SPLATTER PRINT HAREM SHORTS BLACK & IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild6.jpg","price":"427.70","ID":"19572"},
        {"designer":"NUNUNU","name":"RIPPED T- SHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild7.jpg","price":"336.70","ID":"19549"},
        {"designer":"NUNUNU","name":"PAINT SPLATTER PRINT TROUSERS GREY & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild8.jpg","price":"373.10","ID":"20838"},
        {"designer":"NUNUNU","name":"LIGHTWEIGHT HEART PRINT VEST TOP BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild9.jpg","price":"391.30","ID":"19551"},
        {"designer":"NUNUNU","name":"MAXI TULLE SKIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild10.jpg","price":"473.20","ID":"19600"},
        {"designer":"NUNUNU","name":"PAINT SPLATTER VEST WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild11.jpg","price":"273.00","ID":"19552"},
        {"designer":"NUNUNU","name":"SHORT SLEEVED COLLARLESS V-NECK KAFTAN IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild12.jpg","price":"455.00","ID":"19597"},
        {"designer":"NUNUNU","name":"SHORT SLEEVED DENIM OVERALL BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild13.jpg","price":"737.10","ID":"19604"},
        {"designer":"NUNUNU","name":"SLEEVELESS TOP & PANTS TWO PIECE LOUNGE SET BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild14.jpg","price":"436.80","ID":"19594"},
        {"designer":"NUNUNU","name":"SUPER SOFT ZIP HOODED SWEATER YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild15.jpg","price":"527.80","ID":"19564"},
        {"designer":"NUNUNU","name":"BAGGY BEACH TROUSERS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild16.jpg","price":"409.50","ID":"19602"},
        {"designer":"DSQUARED2","name":"SHORT SLEEVED MAPLE LEAF PRINT T-SHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild17.jpg","price":"600.60","ID":"16290"},
        {"designer":"DSQUARED2","name":"LOGO PRINT JERSEY SHORTS RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild18.jpg","price":"828.10","ID":"16354"},
        {"designer":"TINY COTTONS","name":"\"LINE\" SLEEVELESS ROMPER PALE BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild19.jpg","price":"445.90","ID":"19896"},
        {"designer":"BOBO CHOSES","name":"BABIES \"TEAM\" CHECK BASKET BALL BADGE ROMPER WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild20.jpg","price":"382.20","ID":"17748"},
        {"designer":"TINY COTTONS","name":"COLOUR BLOCK DRESS PINK & ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild21.jpg","price":"591.50","ID":"19705"},
        {"designer":"BOBO CHOSES","name":"\"A LEGEND\" SLEEVELESS TAILORED ROMPER SUIT RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild22.jpg","price":"482.30","ID":"17710"},
        {"designer":"MARNI","name":"GRAPHIC TREE PRINT T-SHIRT WHITE, BLUE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild23.jpg","price":"500.50","ID":"17205"},
        {"designer":"MARNI","name":"HOUSE PRINT SHORT SLEEVED SWEATER WHITE, GREY & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild24.jpg","price":"646.10","ID":"17210"},
        {"designer":"MARNI","name":"TEA POT & SPOT PRINT BLOUSE WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild25.jpg","price":"864.50","ID":"17223"},
        {"designer":"MARNI","name":"POCKET DETAIL JERSEY SKIRT GREY & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild26.jpg","price":"573.30","ID":"17193"},
        {"designer":"TINY COTTONS","name":"MOUJIK THE DOG PRINT DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild27.jpg","price":"573.30","ID":"19706"},
        {"designer":"TINY COTTONS","name":"\"T\" TANK DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild28.jpg","price":"509.60","ID":"19704"},
        {"designer":"BOBO CHOSES","name":"BABIES BASKETBALL KIMONO SHIRT BEIGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild29.jpg","price":"382.20","ID":"17739"},
        {"designer":"BOBO CHOSES","name":"\"TEAM\" CHECK BLOUSE BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild30.jpg","price":"455.00","ID":"17725"},
        {"designer":"DSQUARED2","name":"SHORT SLEEVED FACE PRINT T-SHIRT WHITE, BLACK & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild31.jpg","price":"682.50","ID":"16340"},
        {"designer":"DSQUARED2","name":"BABIES SHARK THREE PIECE GIFT SET WHITE, BLUE & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild32.jpg","price":"1510.60","ID":"16325"},
        {"designer":"BOBO CHOSES","name":"PADDED BASKET BALL PRINT BACKPACK PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild33.jpg","price":"536.90","ID":"17708"},
        {"designer":"BOBO CHOSES","name":"PADDED BASKET BALL BADGES BACKPACK BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild34.jpg","price":"536.90","ID":"17712"},
        {"designer":"NUNUNU","name":"BABIES STAR PRINT BIB GREY & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild35.jpg","price":"182.00","ID":"19606"},
        {"designer":"NUNUNU","name":"BABIES SKULL & CROSSBONES PRINT BIB BLACK AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!popularChild36.jpg","price":"182.00","ID":"19608"},

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

