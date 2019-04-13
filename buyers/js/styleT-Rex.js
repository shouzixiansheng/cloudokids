/**
 * Created by admin on 2017/4/13.
 */
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
    var matchArr = [{"id": 1082}, {"id": 1923}, {"id": 1758}, {"id": 1916}];
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

            var imgLink="window.location.href='singleModle.html?id="+result.Collage.Id+"'";
            var buyerId="window.location.href='../buyerMatch.html#"+result.Collage.CustomerProfileOverview.Id+"'";
            var buyerPic='<img src="" data-original="'+buyerUrl+'" class="lazy">';
            var buyerName=result.Collage.CustomerProfileOverview.Username;
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("onclick",imgLink).html(imgPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("onclick",buyerId);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("onclick",imgLink);

        })
    }

    var relaxSpringArr=[
        {"designer":"MILK ON THE ROCKS","name":"'WALK MUSIC' CASSETTE PLAYER PRINT T-SHIRT ORANGE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex7.jpg","price":"391.30 ","ID":"19854"},
        {"designer":"MILK ON THE ROCKS","name":"'WALK MUSIC' CASSETTE PLAYER PRINT T-SHIRT TURQUOISE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex8.jpg","price":"391.30 ","ID":"19855"},
        {"designer":"MILK ON THE ROCKS","name":"'TACOSAURUS' DINOSAUR PRINT T-SHIRT GREEN & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex9.jpg","price":"436.80 ","ID":"19857"},
        {"designer":"MILK ON THE ROCKS","name":"'TACOSAURUS' DINOSAUR PRINT T-SHIRT TURQUOISE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex10.jpg","price":"436.80 ","ID":"19858"},
        {"designer":"LANVIN","name":"BEADED SPIDER PRINT T-SHIRT ORANGE & BLACK","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex11.jpg","price":"846.30 ","ID":"19429"},
        {"designer":"LANVIN","name":"LANVIN LOGO T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex12.jpg","price":"546.00 ","ID":"20935"},
        {"designer":"LANVIN","name":"SPECKLE PRINT T-SHIRT NAVY, BLUE & RED","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex13.jpg","price":"846.30 ","ID":"19439"},
        {"designer":"WOLF & RITA","name":"'SEBATIAO' EMBROIDERED HANDS PRINT T-SHIRT BLUE & BLACK","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex14.jpg","price":"382.20 ","ID":"20874"},
        {"designer":"MILK ON THE ROCKS","name":"'T-REX' DINOSAUR PRINT T-SHIRT NAVY & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex15.jpg","price":"455.00 ","ID":"19859"},
        {"designer":"MILK ON THE ROCKS","name":"'GHOST CAR' T-SHIRT BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex16.jpg","price":"436.80 ","ID":"20916"},
        {"designer":"FENDI","name":"LIGHT BULB PRINT T-SHIRT YELLOW & BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex17.jpg","price":"955.50 ","ID":"18006"},
        {"designer":"FENDI","name":"BABIES LIGHT BULB PRINT T-SHIRT WHITE, PINK & ORANGE","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex18.jpg","price":"855.40 ","ID":"17594"},
        {"designer":"FENDI","name":"MONSTER PRINT T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex19.jpg","price":"1410.50 ","ID":"18035"},
        {"designer":"FENDI","name":"LIGHT BULB PRINT T-SHIRT WHITE, PINK & ORANGE","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex20.jpg","price":"1046.50 ","ID":"17974"},
        {"designer":"LANVIN","name":"SPECKLE PRINT T-SHIRT WHITE, RED & BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex21.jpg","price":"354.90 ","ID":"19427"},
        {"designer":"DOLCE & GABBANA","name":"FLORAL APPLIQUE CHINESE TEXT LOGO T- SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex22.jpg","price":"2120.30 ","ID":"20365"},
        {"designer":"LITTLE MARC JACOBS","name":"CINEMA GRAPHIC PRINT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex23.jpg","price":"354.90 ","ID":"18537"},
        {"designer":"MILK ON THE ROCKS","name":"'TACOS RAPIDOS' PRINT T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex24.jpg","price":"391.30 ","ID":"20917"},
        {"designer":"GUCCI","name":"BABIES BIRD AND FLOWERS PRINT T-SHIRT IVORY & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex25.jpg","price":"864.50 ","ID":"18200"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"'ARLO' MEAT FREE ANIMAL PRINT T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex26.jpg","price":"345.80 ","ID":"16906"},
        {"designer":"GUCCI","name":"BABIES FLOWER HEART PRINT T-SHIRT IVORY & RED","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex27.jpg","price":"773.50 ","ID":"18202"},
        {"designer":"GUCCI","name":"BABIES TIGER FLOWER PRINT T-SHIRT RED","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex28.jpg","price":"864.50 ","ID":"18201"},
        {"designer":"LITTLE MARC JACOBS","name":"RED CARPET MODEL PRINT T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex29.jpg","price":"263.90 ","ID":"18476"},
        {"designer":"LITTLE MARC JACOBS","name":"CINEMA USHER PRINT T-SHIRT RED & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex30.jpg","price":"263.90 ","ID":"18505"},
        {"designer":"MARNI","name":"GRAPHIC TREE PRINT T-SHIRT WHITE, BLUE & BLACK","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex31.jpg","price":"500.50 ","ID":"17205"},
        {"designer":"LITTLE MARC JACOBS","name":"CARTOON CINEMA DRINKS PRINT T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex32.jpg","price":"318.50 ","ID":"18657"},
        {"designer":"MARNI","name":"HOUSE PRINT T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex33.jpg","price":"427.70 ","ID":"17227"},
        {"designer":"MONCLER","name":"SURF DUCK PRINT T-SHIRT BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex34.jpg","price":"591.50 ","ID":"16620"},
        {"designer":"MOSCHINO KID","name":"BEACH TEDDY BEAR & LOGO PRINT T-SHIRT WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex35.jpg","price":"391.30 ","ID":"19400"},
        {"designer":"MOSCHINO KID","name":"BEACH TEDDY BEAR & LOGO PRINT T-SHIRT BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex36.jpg","price":"391.30","ID":"19421"},
        {"designer":"MOSCHINO KID","name":"SURFING TEDDY BEAR & DOLPHIN PRINT T-SHIRT BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex37.jpg","price":"646.10 ","ID":"19403"},
        {"designer":"MILK ON THE ROCKS","name":"BABIES 'VITAMIN C' FRUIT PRINT T-SHIRT TURQUOISE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex38.jpg","price":"391.30 ","ID":"19613"},
        {"designer":"MONCLER","name":"BABIES DUCK & ROCKET PRINT T-SHIRT BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex39.jpg","price":"500.50 ","ID":"16596"},
        {"designer":"MONCLER","name":"DUCK PINT T-SHIRT NAVY & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!styleT-Rex40.jpg","price":"546.00 ","ID":"16649"}
    ];

    var newModel=$(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    for(var j=0;j<relaxSpringArr.length;j++){
        var designer=relaxSpringArr[j].designer;
        var name=relaxSpringArr[j].name;
        var price="¥"+relaxSpringArr[j].price;
        var proId="window.location.href='../detailPages.html#"+relaxSpringArr[j].ID+"'";
        var imgLink=relaxSpringArr[j].link;
        var imgData='<img data-original="'+imgLink+'" class="lazy">';
        newModel.clone(true).appendTo($(".recommendPro"));
        $(".imModel").eq(j).find("a").attr("onclick",proId).html(imgData);
        $(".imModel").eq(j).find(".designer").html(designer);
        $(".imModel").eq(j).find(".proName").html(name);
        $(".imModel").eq(j).find(".price").html(price);
    }
    $("img.lazy").lazyload(
        {threshold : 500}
    );

});



