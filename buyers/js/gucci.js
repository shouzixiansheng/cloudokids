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
    var matchArr = [{"id": 566}, {"id": 565}, {"id": 503}, {"id": 484}];
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
        {"designer":"GUCCI","title":"TIGER & SNAKE APPLIQUE KNITTED CARDIGAN NAVY & RED","link":"img/455074-x5j20-4922.png","price":"5,141.50","ID":"18157"},
        {"designer":"GUCCI","title":"APPLIQUE PEA COAT NAVY MULTI","link":"img/452268-xba09-4368.png","price":"4,413.50","ID":"18156"},
        {"designer":"GUCCI","title":"STRIPE DETAIL CARDIGAN NAVY, GREEN & RED","link":"img/457712-x3f43-4104.png","price":"1,865.50","ID":"18225"},
        {"designer":"GUCCI","title":"CABLE KNIT CARDIGAN NAVY","link":"img/455082-x3f21-4180.png","price":"2,138.50","ID":"18224"},
        {"designer":"GUCCI","title":"BABIES KNITTED WOOL CARDIGAN NAVY","link":"img/458255-x1437-4058.png","price":"1,456.00","ID":"18197"},
        {"designer":"GUCCI","title":"BABIES APPLIQUE POLO SHIRT DRESS NAVY","link":"img/458202-x5n19-4581.png","price":"1,365.00","ID":"18207"},
        {"designer":"GUCCI","title":"BABIES STRIPE KNITTED WOOL CARDIGAN IVORY","link":"img/458255-x1437-9098.png","price":"1,456.00","ID":"18196"},
        {"designer":"GUCCI","title":"3/4 SLEEVE EMBROIDERED GLITTER HEM SWEATER GREEN MULTI","link":"img/458342-x5n03-4222.png","price":"1,638.00","ID":"18245"},
        {"designer":"GUCCI","title":"APPLIQUE BADGES ACID WASH DENIM JACKET BLUE MULTI","link":"img/453310-xr383-4211.png","price":"5,096.00","ID":"18226"},
        {"designer":"GUCCI","title":"TIGER APPLIQUE ACID WASH JEANS BLUE","link":"img/453303-xr508-4232.png","price":"1,638.00","ID":"18234"},
        {"designer":"GUCCI","title":"APPLIQUE BUMBLE BEE ZIP SWEATER GREEN MULTI","link":"img/455146-x5h95-3024.png","price":"2,138.50","ID":"18231"},
        {"designer":"GUCCI","title":"BLACK AND YELLOW TRIM JERSEY SHORTS GREEN","link":"img/455149-x5h96-3024.png","price":"1,410.50","ID":"18230"},
        {"designer":"GUCCI","title":"BUTTERFLY APPLIQUE AND PRINT T-SHIRT IVORY & NAVY","link":"img/457984-x5m69-9138.png","price":"1,092.00","ID":"18252"},
        {"designer":"GUCCI","title":"BUTTERFLY APPLIQUE JEANS BLUE","link":"img/457173-xr430-4325.png","price":"1,865.50","ID":"18255"},
        {"designer":"GUCCI","title":"BABIES APPLIQUE FLOWER DITSY PRINT PLEATED DRESS WHITE MULTI","link":"img/448734-zb936-9273.png","price":"3,321.50","ID":"18153"},
        {"designer":"GUCCI","title":"\"RABBIT\" GLITTER HANDBAG MULTI","link":"img/457138-k2ycn-8175.png","price":"3,185.00","ID":"18192"},
        {"designer":"GUCCI","title":"BABIES EMBROIDERED TIGER HEAD BIB DETAIL DRESS PINK MULTI","link":"img/450395-zb903-5710.png","price":"1,865.50","ID":"18204"},
        {"designer":"GUCCI","title":"BABIES KNITTED COLLAR BODYSUIT WHITE","link":"img/463265-x5b70-9060.png","price":"1,365.00","ID":"18218"},
        {"designer":"GUCCI","title":"BABIES TIGER FLOWER PRINT T-SHIRT RED","link":"img/457684-x5m91-6119.png","price":"864.50","ID":"18201"},
        {"designer":"GUCCI","title":"PLEATED STRIPE DETAIL SKIRT RED & NAVY BLUE","link":"img/pleated-stripe-detail-skirt-red-navy-blue.png","price":"1,592.50","ID":"20804"},
        {"designer":"GUCCI","title":"APPLIQUE THREE HEADED SNAKE BRODERIE ANGLAISE DRESS IVORY MULTI","link":"img/448749-zb911-9085.png","price":"9,282.00","ID":"18261"},
        {"designer":"GUCCI","title":"BABIES STRIPED APPLIQUE FLY ROMPER SUIT IVORY, RED & BLUE","link":"img/458220-x5n46-9083.png","price":"1,592.50","ID":"18205"},
        {"designer":"GUCCI","title":"PANTHER PRINT T-SHIRT IVORY MULTI","link":"img/455184-x5k15-9030.png","price":"910.00","ID":"18159"},
        {"designer":"GUCCI","title":"TAILORED EMBROIDERED STAR SHORTS BROWN MULTI","link":"img/418937-xbb06-2002.png","price":"1,592.50","ID":"18232"},
        {"designer":"GUCCI","title":"RENAISSANCE' TIGER AND STAR PRINT T-SHIRT GREY & MULTI","link":"img/455179-x5k84-1467.png","price":"773.50","ID":"18235"},
        {"designer":"GUCCI","title":"ROLL UP HEM DENIM SHORTS WHITE","link":"img/457170-xr440-9098.png","price":"1,456.00","ID":"18253"},
        {"designer":"GUCCI","title":"BABIES FLOWER HEART PRINT T-SHIRT IVORY & RED","link":"img/457675-x5m83-9123.png","price":"773.50","ID":"18202"},
        {"designer":"GUCCI","title":"EMBROIDERED FLORAL DENIM SHORTS DARK BLUE MULTI","link":"img/457164-xr434-4289.png","price":"2,593.50","ID":"18254"},
        {"designer":"GUCCI","title":"BABIES BIRD AND FLOWERS PRINT T-SHIRT IVORY & MULTI","link":"img/457686-x5m91-9128.png","price":"864.50","ID":"18200"},
        {"designer":"GUCCI","title":"FLORAL TIGER & BUMBLE BEE PRINT T-SHIRT GREY MULTI","link":"img/457972-x5m59-1066.png","price":"910.00","ID":"18251"},
        {"designer":"GUCCI","title":"CAT PRINT T-SHIRT IVORY & MULTI","link":"img/457977-x5m57-9127.png","price":"864.50","ID":"18250"},
        {"designer":"GUCCI","title":"FLORAL BUTTERFLY PRINT T-SHIRT PRINT PINK & MULTI","link":"img/457975-x5m66-5733.png","price":"864.50","ID":"18248"},
        {"designer":"GUCCI","title":"KNITTED BEANIE HAT NAVY","link":"img/459431-4k638-4000.png","price":"591.50","ID":"18167"},
        {"designer":"GUCCI","title":"KNITTED BEANIE HAT IVORY","link":"img/459431-4k638-9200.png","price":"591.50","ID":"18166"},
        {"designer":"GUCCI","title":"\"GG\" STRIPE BELT NAVY & RED","link":"img/gg-stripe-belt-navy-red.png","price":"910.00","ID":"20805"},
        {"designer":"GUCCI","title":"\"GG\" STRIPE BELT PINK & RED","link":"img/gg-stripe-belt-pink-red.png","price":"910.00","ID":"20803"},
        {"designer":"GUCCI","title":"APPLIQUE \"GG\" DRAGON BIB GREEN MULTI","link":"img/applique-gg-dragon-bib-green-multi.png","price":"1,001.00","ID":"20799"},
        {"designer":"GUCCI","title":"APPLIQUE \"GG\" DRAGON BIB YELLOW MULTI","link":"img/applique-gg-dragon-bib-yellow-multi.png","price":"1,001.00","ID":"20800"},
        {"designer":"GUCCI","title":"GIRLS \"RABBIT\" GLITTER VECLRO STRAP SNEAKERS MULTI","link":"img/455449455450455495-dxd20-8168.png","price":"1,956.50","ID":"18179"},
        {"designer":"GUCCI","title":"BOYS STRIPE VELCRO STRAP SANDALS RED, WHITE & NAVY","link":"img/257759257761-bln10-9064.png","price":"1,228.50","ID":"18185"},
        {"designer":"GUCCI","title":"\"GG\" TRILBY HAT BEIGE MULTI","link":"img/411790-3ha77-2168.png","price":"1,046.50","ID":"18177"}
    ];
    var gucciModel=$(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
    for(var i=0;i<gucciArr.length;i++){
        var designer=gucciArr[i].designer;
        var name=gucciArr[i].title;
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