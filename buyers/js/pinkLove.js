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
    var matchArr = [{"id": 1604}, {"id": 1602}, {"id": 1545}, {"id": 1485}];
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
            var imgPic='<img data-original="'+imgUrl+'" class="lazy">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img data-original="'+buyerUrl+'" class="lazy">';
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

    var classArr=[
        {"designer":"BILLIEBLUSH","name":"FLUORESCENT TEXTURED BOW DRESS ORANGE & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!mainPush1.jpg","price":"555.10 ","ID":"18867"},
        {"designer":"BILLIEBLUSH","name":"FLUORESCENT TEXTURED BOW SKIRT ORANGE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!mainPush2.jpg","price":"491.40 ","ID":"18849"},
        {"designer":"LANVIN","name":"PEARL NECKLACE AND BOWS T-SHIRT PINK & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!mainPush3.jpg","price":"1246.70 ","ID":"20903"},
        {"designer":"LANVIN","name":"BEADED LOGO T-SHIRT PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!mainPush4.jpg","price":"691.60 ","ID":"19447"},
        {"designer":"BONPOINT","name":"BABIES LONG SLEEVED CARDIGAN PEACH","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove1.jpg","price":"673.40 ","ID":"16577"},
        {"designer":"MOSCHINO KID","name":"GOLD TEXT PRINT LEGGINGS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove2.jpg","price":"336.70 ","ID":"19363"},
        {"designer":"MOSCHINO KID","name":"EMBROIDERED FACE APPLIQUE BADGE KNITTED CARDIGAN PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove3.jpg","price":"773.50 ","ID":"19359"},
        {"designer":"BILLIEBLUSH","name":"GLITTER TULLE SKIRT WITH GOLD HEART BELL BADGE PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove4.jpg","price":"527.80 ","ID":"18864"},
        {"designer":"BILLIEBLUSH","name":"PLEATED LAYER DRESS GOLD & PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove5.jpg","price":"600.60 ","ID":"18729"},
        {"designer":"YOUNG VERSACE","name":"GLITTER HANDBAG WITH FUR POMPOM PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove6.jpg","price":"2675.40 ","ID":"18377"},
        {"designer":"MONCLER","name":"STRIPE POLO SHIRT PINK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove7.jpg","price":"500.50 ","ID":"16629"},
        {"designer":"BILLIEBLUSH","name":"PINK JERSEY RAINBOW TIE SHORTS PINK MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove8.jpg","price":"227.50 ","ID":"18724"},
        {"designer":"DOLCE & GABBANA","name":"PINEAPPLE PRINT KAFTAN DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove9.jpg","price":"1355.90 ","ID":"17185"},
        {"designer":"DOLCE & GABBANA","name":"PINEAPPLE PRINT HANDBAG PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove10.jpg","price":"1428.70 ","ID":"16950"},
        {"designer":"DOLCE & GABBANA","name":"PINEAPPLE PRINT & BOW DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove11.jpg","price":"2129.40 ","ID":"16989"},
        {"designer":"DOLCE & GABBANA","name":"PINEAPPLE PRINT SUN DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove12.jpg","price":"1274.00 ","ID":"17000"},
        {"designer":"DOLCE & GABBANA","name":"PINEAPPLE PRINT DRAWSTRING VEST AND SHORT SET PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove13.jpg","price":"1355.90 ","ID":"20772"},
        {"designer":"DOLCE & GABBANA","name":"GIRLS PINEAPPLE PRINT ESPADRILLES PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove14.jpg","price":"964.60 ","ID":"16980"},
        {"designer":"DOLCE & GABBANA","name":"\"DG FAMILY\" APPLIQUE SCOOTER RIDE T-SHIRT PINK MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove15.jpg","price":"1665.30 ","ID":"16999"},
        {"designer":"DOLCE & GABBANA","name":"GIRLS PINEAPPLE PRINT STRAP SANDAL PINK & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove16.jpg","price":"1820.00 ","ID":"16981"},
        {"designer":"BURBERRY","name":"BABIES STRIPE LONG SLEEVED 3 PIECE BODYSUIT GIFT SET PINK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove17.jpg","price":"1228.50 ","ID":"20479"},
        {"designer":"BURBERRY","name":"BABIES CHECK MERINO WOOL BLANKET PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove18.jpg","price":"1774.50 ","ID":"20823"},
        {"designer":"KENZO","name":"BABIES ANIMAL PRINT DUNGAREE DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove19.jpg","price":"536.9","ID":"19528"},
        {"designer":"DOLCE & GABBANA","name":"GIRLS LYCRA STRAP SANDALS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove20.jpg","price":"964.60 ","ID":"20792"},
        {"designer":"MOSCHINO KID","name":"HEART PRINT FRILL DRESS PINK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove21.jpg","price":"591.50 ","ID":"19356"},
        {"designer":"GUCCI","name":"GG' STRIPE BELT PINK & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove22.jpg","price":"910.00 ","ID":"20803"},
        {"designer":"NUNUNU","name":"STAR PRINT T-SHIRT AND SHORTS TWO PIECE SET PINK & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove23.jpg","price":"473.20 ","ID":"19592"},
        {"designer":"NUNUNU","name":"STAR PRINT LEGGINGS PINK & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove24.jpg","price":"273.00 ","ID":"20827"},
        {"designer":"NUNUNU","name":"STAR PRINT BAGGY TROUSERS PINK & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove25.jpg","price":"373.10 ","ID":"19576"},
        {"designer":"MINI MELISSA","name":"MINNIE ULTRAGIRL MINNIE & MICKEY MOUSE 'EARS' PUMPS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove26.jpg","price":"491.40 ","ID":"18932"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR & RUBBER DUCK PRINT T-SHIRT & SHORT SET PINK & YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove27.jpg","price":"773.50 ","ID":"19376"},
        {"designer":"FENDI","name":"MULTI-COLOUR STUD DETAIL STRAPPY SANDALS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove28.jpg","price":"2730.00 ","ID":"18010"},
        {"designer":"GUCCI","name":"FLORAL BUTTERFLY PRINT T-SHIRT PRINT PINK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove29.jpg","price":"864.50 ","ID":"18248"},
        {"designer":"SOPHIA WEBSTER","name":"\"CHIARA\" MINI PINK GLITTER SHOES","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove30.jpg","price":"1365.00 ","ID":"16363"},
        {"designer":"SONIA RYKIEL","name":"EMBELLISHED FLOWER PRINT VEST TOP PINK & GOLD","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove31.jpg","price":"391.30 ","ID":"20545"},
        {"designer":"BONPOINT","name":"GLITTER CHERRY SANDALS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove32.jpg","price":"1028.30 ","ID":"16561"},
        {"designer":"TINY COTTONS","name":"\"T\" TANK DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove33.jpg","price":"509.60 ","ID":"19704"},
        {"designer":"MINI MELISSA","name":"GIRLS \"QUEEN\" BLUSH HEART PEEP TOE SHOES PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!pinkLove34.jpg","price":"728.00 ","ID":"18948"},
    ];

    var cowModel=$(".cowContent").find(".imModel").eq(0);
    $(".cowContent").empty();
    for(var j=0;j<classArr.length;j++){
        var designer=classArr[j].designer;
        var name=classArr[j].name;
        var price="¥"+classArr[j].price;
        var proId="cloudokids://product/"+classArr[j].ID;
        var imgLink=classArr[j].link;
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
