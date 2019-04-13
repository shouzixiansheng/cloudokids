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
    var matchArr = [{"id": 430}, {"id": 849}, {"id": 1617}, {"id": 876}];
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
        {"designer":"MOSCHINO KID","name":"Babies 2 Piece Teddy Print Bodysuit & Hat Gift Set Pink","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby1.jpg","price":"855.40 ","ID":"19276"},
        {"designer":"MOSCHINO KID","name":"BABIES 3 PIECE TEDDY BEAR PRINT BODYSUIT, BIB & HAT GIFT SET IVORY & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby2.jpg","price":"946.40 ","ID":"19275"},
        {"designer":"MOSCHINO KID","name":"BABIES BEACH TEDDY BEAR & LOGO PRINT ROMPER SUIT IVORY & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby3.jpg","price":"591.50 ","ID":"19380"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT TWO PIECE ROMPER SUITS GIFT SET BLUE , RED & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby4.jpg","price":"1137.50 ","ID":"19378"},
        {"designer":"KENZO","name":"BODYSUIT SET PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby5.jpg","price":"518.70 ","ID":"19540"},
        {"designer":"KENZO","name":"SET OF BODYSUITS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby6.jpg","price":"518.70 ","ID":"19539"},
        {"designer":"BURBERRY","name":"BABIES STRIPE LONG SLEEVED 3 PIECE BODYSUIT GIFT SET PINK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby7.jpg","price":"1228.50 ","ID":"20479"},
        {"designer":"BURBERRY","name":"BABIES STRIPE LONG SLEEVED 3 PIECE BODYSUIT GIFT SET BLUE & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby8.jpg","price":"1228.50 ","ID":"20413"},
        {"designer":"BURBERRY","name":"BABIES CHECK DETAIL BODYSUIT THREE PIECE GIFT SET WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby9.jpg","price":"864.50 ","ID":"20584"},
        {"designer":"BURBERRY","name":"CHECK DETAIL JACKET & BODYSUIT FOUR PIECE GIFT SET WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby10.jpg","price":"1774.50 ","ID":"20579"},
        {"designer":"BURBERRY","name":"BABIES LONG SLEEVED SUPER SOFT POCKET DETAIL BODYSUIT WHITE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby11.jpg","price":"682.50 ","ID":"20404"},
        {"designer":"BURBERRY","name":"SHORT SLEEVED CHECK DETAIL BODYSUIT BLUE & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby12.jpg","price":"364.00 ","ID":"20408"},
        {"designer":"DOLCE & GABBANA","name":"BOW TIE BODYSUIT BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby13.jpg","price":"1820.00 ","ID":"17064"},
        {"designer":"DOLCE & GABBANA","name":"BABIES TUXEDO BODYSUIT IN GIFT BOX","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby14.jpg","price":"1592.50 ","ID":"13859"},
        {"designer":"DOLCE & GABBANA","name":"EMBROIDERED CHERRY LOGO BODYSUIT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby15.jpg","price":"1201.20 ","ID":"17165"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"Cassidy Crocodile Print Bodysuit White, Green & Orange","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby16.jpg","price":"309.40 ","ID":"16808"},
        {"designer":"DOLCE & GABBANA","name":"BABIES LONG SLEEVED SHIRT BODYSUIT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby17.jpg","price":"1355.90 ","ID":"20775"},
        {"designer":"DOLCE & GABBANA","name":"DG FAMILY BODYSUIT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby18.jpg","price":"2047.50 ","ID":"16147"},
        {"designer":"DOLCE & GABBANA","name":"BABIES SPOTTED ROMPER SUIT WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby19.jpg","price":"1274.00 ","ID":"17161"},
        {"designer":"DOLCE & GABBANA","name":"BABIES \"DG FAMILY\" APPLIQUE POLKA DOT BODYSUIT NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby20.jpg","price":"1665.30 ","ID":"17179"},
        {"designer":"DOLCE & GABBANA","name":"CARRETTO CON ROSE FRILL COLLAR BODYSUIT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby21.jpg","price":"964.60 ","ID":"17141"},
        {"designer":"DOLCE & GABBANA","name":"BABIES LONG SLEEVED DG FAMILY BODYSUIT NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby22.jpg","price":"1774.50 ","ID":"13852"},
        {"designer":"DOLCE & GABBANA","name":"Mimmo The Dog House & Cactus Print Bodysuit Ivory","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby23.jpg","price":"1355.90 ","ID":"17099"},
        {"designer":"DOLCE & GABBANA","name":"BABIES 2 BODYSUITS BOX SET WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby24.jpg","price":"1410.50 ","ID":"14831"},
        {"designer":"DOLCE & GABBANA","name":"BABIES BODYSUIT AND BIB GIFT BOX","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby25.jpg","price":"1774.50 ","ID":"16022"},
        {"designer":"KENZO","name":"BABIES \"BAROU\" LONG SLEEVED BODY SUIT SET WITH CARRY CASE BABY BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby26.jpg","price":"600.60 ","ID":"19538"},
        {"designer":"DOLCE & GABBANA","name":"BABIES CROWN BODYSUIT IN GIFT BOX WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby27.jpg","price":"987.35 ","ID":"16018"},
        {"designer":"DOLCE & GABBANA","name":"MIMMO THE DOG ONE PIECE PYJAMA IN BOX","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby28.jpg","price":"1592.50 ","ID":"16162"},
        {"designer":"FENDI","name":"BABIES SPACE & ROBOT PRINT BODYSUIT PINK MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby29.jpg","price":"1410.50 ","ID":"20848"},
        {"designer":"LITTLE MARC JACOBS","name":"Babies Walrus Sea Print Bodysuit  Ivory","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby30.jpg","price":"591.50 ","ID":"18480"},
        {"designer":"LITTLE MARC JACOBS","name":"BABIES PRINCESS MERMAID CAT BODYSUIT GREY & PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby31.jpg","price":"718.90 ","ID":"18422"},
        {"designer":"LITTLE MARC JACOBS","name":"BABIES PIRATE WHALE SEA PRINT BODYSUIT & STRIPED HAT SET GREY, WHITE & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby32.jpg","price":"627.90 ","ID":"18478"},
        {"designer":"DOLCE & GABBANA","name":"BABIES BENGAL CAT VELOUR BODYSUIT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby33.jpg","price":"1369.55 ","ID":"13819"},
        {"designer":"BURBERRY","name":"Babies Short Sleeved Denim Romper Suit Blue","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby34.jpg","price":"864.50 ","ID":"20412"},
        {"designer":"DOLCE & GABBANA","name":"BABIES \"CHINESE NEW YEAR\" LITTLE CHICK PRINT ROMPER SUIT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby35.jpg","price":"1119.30 ","ID":"16960"},
        {"designer":"SONIA RYKIEL","name":"BABIES WAVES PRINT SLEEVELESS BODYSUIT WHITE, BLUE & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby36.jpg","price":"582.40 ","ID":"20539"},
        {"designer":"DOLCE & GABBANA","name":"BABIES \"SUMMER LOVE ITALY\" PRINT ROMPER SUIT BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby37.jpg","price":"964.60 ","ID":"17095"},
        {"designer":"DOLCE & GABBANA","name":"BABIES PINEAPPLE PRINT ROMPER SUIT PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby38.jpg","price":"1201.20 ","ID":"17150"},
        {"designer":"BONPOINT","name":"BABIES 'APRIL' FRILL COLLAR BODYSUIT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby39.jpg","price":"464.10 ","ID":"16530"},
        {"designer":"BONPOINT","name":"BABIES 'JUILLET' BODYSUIT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!styleBaby40.jpg","price":"464.10 ","ID":"16531"},

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



