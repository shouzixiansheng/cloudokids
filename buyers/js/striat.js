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
    var matchArr = [{"id": 645}, {"id": 273}, {"id": 437}];
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
            var result = data;
            var imgUrl=result.Collage.PictureUrl;
            var imgPic='<img src="'+imgUrl+'">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img src="'+buyerUrl+'">';
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
    var newColImg=[
        {"designer":"BURBERRY","name":"LONG SLEEVED STRIPE APPLIQUE TEXT LOGO SWEATER BLUE, WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!striated-01.jpg","price":"1,319.50","ID":"20822"},
        {"designer":"BURBERRY","name":"BABIES 'USE YOUR HEAD' MOTIF STRIPE T-SHIRT RED, WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!striated-02.jpg","price":"455","ID":"20701"},
        {"designer":"MINI RODINI","name":"PANDA APPLIQUE STRIPED DUNGAREES WHITE & NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!striated-03.jpg","price":"564.2","ID":"17584"},
        {"designer":"BURBERRY","name":"BABIES STRIPED APPLIQUE T-SHIRT & TROUSERS SET WHITE & NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!striated-04.jpg","price":"1,046.50","ID":"20504"},
        {"designer":"BURBERRY","name":"BABIES SHORT SLEEVED STRIPE APPLIQUE FLOWER T-SHIRT IVORY, BLUE & MULT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!striated-05.jpg","price":"728","ID":"20505"},
        {"designer":"MINI RODINI","name":"STRIPE SUN CAP BLUE & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!striated-06.jpg","price":"236.6","ID":"17761"},
        {"designer":"MARNI","name":"STRIPE COTTON JACKET MULTI","price":"1,681.68","ID":"11169","link":"http://img1.cloudokids.cn/buyers/newCollage/300!1.jpeg"},
        {"designer":"MARNI","name":"STRIPE COTTON SHORTS MULTI","price":"655.20","ID":"11178","link":"http://img1.cloudokids.cn/buyers/newCollage/300!2.jpeg"},
        {"designer":"MARNI","name":"A-LINE STRIPE COTTON DRESS MULTI","price":"862.68","ID":"11164","link":"http://img1.cloudokids.cn/buyers/newCollage/300!3.jpeg"},
        {"designer":"IL GUFO","name":"WIDE LEG TROUSER RED, WHITE & BLUE","price":"728.00","ID":"16694","link":"http://img1.cloudokids.cn/buyers/newCollage/300!4.jpeg"},
        {"designer":"MONCLER","name":"BABIES STRIPE POLO DRESS AND SHORTS SET RED","price":"1,092.00","ID":"10829","link":"http://img1.cloudokids.cn/buyers/newCollage/300!5.jpeg"},
        {"designer":"MONCLER","name":"BABIES STRIPED DRESS AND SHORTS SET NAVY","price":"1,092.00","ID":"10836","link":"http://img1.cloudokids.cn/buyers/newCollage/300!6.jpeg"},
        {"designer":"PAUL SMITH JUNIOR","name":"BABIES STRIPED 'MAHONE' CARDIGAN MULTI","price":"360.36","ID":"13993","link":"http://img1.cloudokids.cn/buyers/newCollage/300!7.jpeg"},
        {"designer":"PAUL SMITH JUNIOR","name":"LULU STRIPE JACKET MULTI","price":"507.78","ID":"13199","link":"http://img1.cloudokids.cn/buyers/newCollage/300!8.jpeg"},
        {"designer":"RALPH LAUREN","name":"BABIES STRIPE LONG SLEEVED POLO SHIRT GREEN AND BLUE","price":"273","ID":"14013","link":"http://img1.cloudokids.cn/buyers/newCollage/300!9.jpeg"},
        {"designer":"RALPH LAUREN","name":"STRIPE LONG SLEEVED POLO SHIRT RED AND NAVY","price":"327.60","ID":"14011","link":"http://img1.cloudokids.cn/buyers/newCollage/300!10.jpeg"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"TIGER STRIPE T-SHIRT RED","price":"280.28","ID":"14716","link":"http://img1.cloudokids.cn/buyers/newCollage/300!11.jpeg"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"BABIES STRIPED COTTON TROUSERS RED AND IVORY","price":"222.95","ID":"14704","link":"http://img1.cloudokids.cn/buyers/newCollage/300!12.jpeg"},
        {"designer":"DOLCE & GABBANA","name":"BABIES APPLIQUE CHERRY STRIPED T-SHIRT RED & IVORY","price":"1119.30","ID":"17155","link":"http://img1.cloudokids.cn/buyers/newCollage/300!13.jpeg"},
        {"designer":"IL GUFO","name":"RED AND WHITE STRIPE SLEEVELESS DRESS","price":"720.72","ID":"10635","link":"http://img1.cloudokids.cn/buyers/newCollage/300!14.jpeg"},
        {"designer":"GUCCI","name":"STRIPE CIRCUS TIGER HEAD PRINT T-SHIRT IVORY MULTI","price":"864.50","ID":"18237","link":"http://img1.cloudokids.cn/buyers/newCollage/300!15.jpeg"},
        {"designer":"IL GUFO","name":"STRIPED DRESS WHITE & BLUE","price":"1,365.00","ID":"16710","link":"http://img1.cloudokids.cn/buyers/newCollage/300!16.jpeg"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"BABIES CASSIDY STRIPE FLORAL BODYSUIT BLUE","price":"254.8","ID":"11530","link":"http://img1.cloudokids.cn/buyers/newCollage/300!17.jpeg"},
        {"designer":"CARRÉMENT BEAU","name":"STRIPED COTTON DRESS ORANGE AND IVORY","price":"256.62","ID":"13088","link":"http://img1.cloudokids.cn/buyers/newCollage/300!18.jpeg"},
        {"designer":"SIERRA JULIAN","name":"MILANO PRINTED T-SHIRT GREEN","price":"300.30","ID":"12632","link":"http://img1.cloudokids.cn/buyers/newCollage/300!19.jpeg"},
        {"designer":"BOBO CHOSES","name":"STRIPED BACKPACK GREEN AND BLACK","price":"343.98","ID":"13749","link":"http://img1.cloudokids.cn/buyers/newCollage/300!20.jpeg"},
        {"designer":"RALPH LAUREN","name":"POLO STYLE LONG SLEEVED STRIPED SHIRT PINK","price":"273.00","ID":"13995","link":"http://img1.cloudokids.cn/buyers/newCollage/300!21.jpeg"},
        {"designer":"RALPH LAUREN","name":"PINK AND WHITE STRIPED SHIRT","price":"273.00","ID":"13988","link":"http://img1.cloudokids.cn/buyers/newCollage/300!22.jpeg"},
        {"designer":"MONCLER","name":"BABIES STRIPED DRESS AND SHORTS SET PINK AND WHITE","price":"1,092.00","ID":"10830","link":"http://img1.cloudokids.cn/buyers/newCollage/300!23.jpeg"},
        {"designer":"HUCKLEBONES LONDON","name":"PINK AND WHITE STRIPED ORGANZA SKIRT","price":"333.06","ID":"11713","link":"http://img1.cloudokids.cn/buyers/newCollage/300!24.jpeg"},
        {"designer":"DOLCE & GABBANA","name":"SAXOPHONE PLAYER T-SHIRT STRIPE","price":"1119.30","ID":"17112","link":"http://img1.cloudokids.cn/buyers/newCollage/300!25.jpeg"},
        {"designer":"LITTLE MARC JACOBS","name":"LOGO PRINT STRIPE T-SHIRT NAVY & WHITE","price":"354.90","ID":"18503","link":"http://img1.cloudokids.cn/buyers/newCollage/300!26.jpeg"},
        {"designer":"DOLCE & GABBANA","name":"SHORT SLEEVED STRIPED APPLIQUE ANCHOR & CHERRY DRESS BLUE & WHITE","price":"2047.50","ID":"16996","link":"http://img1.cloudokids.cn/buyers/newCollage/300!27.jpeg"},
        {"designer":"DOLCE & GABBANA","name":"BLUE & WHITE STRIPE TROPICAL EMBELLISHMENT BAG","price":"2438.80","ID":"16951","link":"http://img1.cloudokids.cn/buyers/newCollage/300!28.jpeg"},
        {"designer":"WOLF & RITA","name":"SEBASTIAO BLACK AND WHITE STRIPE T-SHIRT","price":"159.25","ID":"12150","link":"http://img1.cloudokids.cn/buyers/newCollage/300!29.jpeg"},
        {"designer":"CAROLINE BOSMANS","name":"LIVE ON TWO LEGS' STRIPE TROUSERS","price":"469.56","ID":"14357","link":"http://img1.cloudokids.cn/buyers/newCollage/300!30.jpeg"},
        {"designer":"DOLCE & GABBANA","name":"STRIPED BOAT NECK KNITTED TOP NAVY BLUE & WHITE","price":"2047.50","ID":"20783","link":"http://img1.cloudokids.cn/buyers/newCollage/300!32.jpeg"},
        {"designer":"SIERRA JULIAN","name":"MILANO PRINTED T-SHIRT BLACK AND WHITE","price":"300.30","ID":"12628","link":"http://img1.cloudokids.cn/buyers/newCollage/300!31.jpeg"},
        {"designer":"CAROLINE BOSMANS","name":"PENGUINS ON THE MOON' DRESS STRIPE BLACK/WHITE","price":"589.68","ID":"14363","link":"http://img1.cloudokids.cn/buyers/newCollage/300!33.jpeg"},
        {"designer":"GOSOAKY","name":"STRIPED 'CROUCHING TIGER' CAPE NAVY AND WHITE","price":"299.39","ID":"14441","link":"http://img1.cloudokids.cn/buyers/newCollage/300!34.jpeg"},
        {"designer":"DOLCE & GABBANA","name":"STRIPED T-SHIRT WITH TOMATO EMBELLISHMENT BLACK & WHITE","price":"1355.90","ID":"17091","link":"http://img1.cloudokids.cn/buyers/newCollage/300!35.jpeg"},
        {"designer":"TRUSSARDI","name":"PINSTRIPE WAISTCOAT BLUE","price":"382.20","ID":"10657","link":"http://img1.cloudokids.cn/buyers/newCollage/300!36.jpeg"},
        {"designer":"IL GUFO","name":"COLLARLESS LONG SLEEVED LINEN STRIPED SHIRT BEIGE","price":"609.70","ID":"16704","link":"http://img1.cloudokids.cn/buyers/newCollage/300!37.jpeg"},
        {"designer":"TRUSSARDI","name":"STRIPE COTTON BLAZER JACKET IVORY","price":"682.50","ID":"10569","link":"http://img1.cloudokids.cn/buyers/newCollage/300!38.jpeg"},
        {"designer":"IL GUFO","name":"BABIES DUNGAREE BODYSUIT GREY","price":"343.98","ID":"14999","link":"http://img1.cloudokids.cn/buyers/newCollage/300!39.jpeg"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"BABIES STRIPED LION BODYSUIT BLUE","price":"305.76","ID":"14718","link":"http://img1.cloudokids.cn/buyers/newCollage/300!40.jpeg"},

    ];
    var cowModel=$(".cowContent").find(".imModel").eq(0);
    $(".cowContent").empty();
    for(var j=0;j<newColImg.length;j++){
        var designer=newColImg[j].designer;
        var name=newColImg[j].name;
        var price="¥"+newColImg[j].price;
        var proId="cloudokids://product/"+newColImg[j].ID;
        var imgLink=newColImg[j].link;
        var imgData='<img data-original="'+imgLink+'" class="lazy">';
        cowModel.clone(true).appendTo($(".cowContent"));
        $(".imModel").eq(j).find("a").attr("href",proId).html(imgData);
        $(".imModel").eq(j).find(".designer").html(designer);
        $(".imModel").eq(j).find(".proName").html(name);
        $(".imModel").eq(j).find(".price").html(price);
    }
    $("img.lazy").lazyload(
        {threshold : 500}
    );
});

