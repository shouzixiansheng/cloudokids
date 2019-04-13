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
    var matchArr = [{"id": 1766}, {"id": 1796}, {"id": 1750}, {"id": 1758}];
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
        {"designer":"WOLF & RITA","name":"'SEBATIAO' STRIPED PRINT T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist1.jpg","price":"382.20","ID":"20887","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist1.jpg"},
        {"designer":"WOLF & RITA","name":"'LUANA' STRIPED PONCHO STYLE T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist2.jpg","price":"391.30","ID":"20886","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist2.jpg"},
        {"designer":"WOLF & RITA","name":"'JEAN CHARLES' JACKET MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist3.jpg","price":"1092.00","ID":"20894","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist3.jpg"},
        {"designer":"WOLF & RITA","name":"'SEBATIAO' EMBROIDERED HANDS PRINT T-SHIRT BLUE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist4.jpg","price":"382.20","ID":"20874","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist4.jpg"},
        {"designer":"WOLF & RITA","name":"'RICARDO' EMBROIDERED HANDS PRINT JOGGING BOTTOMS BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist5.jpg","price":"391.30","ID":"20871","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist5.jpg"},
        {"designer":"WOLF & RITA","name":"'MARTIM' ILLUSTRATION JUMPSUIT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist6.jpg","price":"500.50","ID":"20891","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist6.jpg"},
        {"designer":"WOLF & RITA","name":"'LUNA ' GRAPHIC PRINT BLOUSE GREY & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist7.jpg","price":"500.50","ID":"19778","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist7.jpg"},
        {"designer":"WOLF & RITA","name":"BABIES 'CARMINHO' GRAPHIC PRINT PETER PAN COLLAR BODYSUIT BLACK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist8.jpg","price":"391.30","ID":"19663","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist8.jpg"},
        {"designer":"WOLF & RITA","name":"'LURDES' RAINFOREST PRINT SKIRT MULTI-COLOURED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist9.jpg","price":"500.50","ID":"20878","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist9.jpg"},
        {"designer":"WOLF & RITA","name":"BABIES 'CARMINHO' STRIPED PETER PAN COLLAR BODYSUIT DUSKY PINK, BLACK & GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist10.jpg","price":"391.30","ID":"19770","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist10.jpg"},
        {"designer":"WOLF & RITA","name":"'LEONOR' RAINFOREST PRINT SKORT MULTI-COLOURED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist11.jpg","price":"500.50","ID":"20880","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist11.jpg"},
        {"designer":"WOLF & RITA","name":"'EMA' PLAYSUIT DUSKY PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist12.jpg","price":"391.30","ID":"19764","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist12.jpg"},
        {"designer":"WOLF & RITA","name":"'LUCIA' WATERMELON APPLIQUE STRIPED WRAP TOP","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist13.jpg","price":"582.40","ID":"19768","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist13.jpg"},
        {"designer":"WOLF & RITA","name":"'FABIO' WATERMELON APPLIQUE STRIPED HIGH WAISTED TROUSERS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist14.jpg","price":"500.50","ID":"19665","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist14.jpg"},
        {"designer":"WOLF & RITA","name":"'AUGUSTO' WATERMELON APPLIQUE STRIPED SHORTS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist15.jpg","price":"382.20","ID":"19776","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist15.jpg"},
        {"designer":"WOLF & RITA","name":"BABIES 'LEONOR' WATERMELON APPLIQUE STRIPED SKORT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist16.jpg","price":"391.30","ID":"19771","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist16.jpg"},
        {"designer":"WOLF & RITA","name":"'MARGARIDA' CARDIGAN GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist17.jpg","price":"546.00","ID":"19766","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist17.jpg"},
        {"designer":"WOLF & RITA","name":"'RAFAELA' WATERMELON APPLIQUE LEGGINGS BLACK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist18.jpg","price":"254.80","ID":"19667","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist18.jpg"},
        {"designer":"WOLF & RITA","name":"'RAFAELA' LEGGINGS PURPLE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist19.jpg","price":"254.80","ID":"20890","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist19.jpg"},
        {"designer":"WOLF & RITA","name":"'MANUEL' KNITTED CULOTTES BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist20.jpg","price":"300.30","ID":"20869","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist20.jpg"},
        {"designer":"WOLF & RITA","name":"'RAFAELA' LETTERS PRINT LEGGINGS BLUE & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist21.jpg","price":"254.80","ID":"20888","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist21.jpg"},
        {"designer":"WOLF & RITA","name":"'VALENTINA' FRINGED DENIM JACKET BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist22.jpg","price":"609.70","ID":"19674","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist22.jpg"},
        {"designer":"WOLF & RITA","name":"'VANIA' STRIPED WAVES PRINT T-SHIRT RED & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist23.jpg","price":"345.80","ID":"19672","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist23.jpg"},
        {"designer":"WOLF & RITA","name":"'ALVARO' STRIPED WAVES PRINT TROUSERS RED & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist24.jpg","price":"436.80","ID":"20876","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist24.jpg"},
        {"designer":"WOLF & RITA","name":"'FRANCISCA' BLOOMERS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist25.jpg","price":"254.80","ID":"19662","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist25.jpg"},
        {"designer":"WOLF & RITA","name":"'ELISA' FRAYED CULOTTES GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist26.jpg","price":"455.00","ID":"20870","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist26.jpg"},
        {"designer":"WOLF & RITA","name":"'ALVARO' LOOSE FIT TROUSERS BURGUNDY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist27.jpg","price":"436.80","ID":"19668","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist27.jpg"},
        {"designer":"WOLF & RITA","name":"' ELISA' FRAYED CULOTTES BURGUNDY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist28.jpg","price":"455.00","ID":"20881","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist28.jpg"},
        {"designer":"WOLF & RITA","name":"'ALVARO' LOOSE FIT TROUSERS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist29.jpg","price":"436.80","ID":"19772","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist29.jpg"},
        {"designer":"WOLF & RITA","name":"WHITE STRIPE SOCKS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist30.jpg","price":"109.20","ID":"20896","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist30.jpg"},
        {"designer":"WOLF & RITA","name":"LETTERS SOCKS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist31.jpg","price":"109.20","ID":"19889","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist31.jpg"},
        {"designer":"WOLF & RITA","name":"'VOILETA' TIE DETAIL BASEBALL STRAW HAT CAMEL & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!modernist32.jpg","price":"427.70","ID":"19661","":"http://img1.cloudokids.cn/buyers/newCollage/300!","":"modernist32.jpg"},

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
    $(".imModel").eq(0).css({"marginTop":0.3+"rem"});
    $(".imModel").eq(1).css({"marginTop":0.3+"rem"});
    $("img.lazy").lazyload(
        {threshold : 500}
    );



});