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
    var matchArr = [{"id": 442}, {"id": 648}, {"id": 568}, {"id": 784}];
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
    var loveArr=[
        {"designer":"LITTLE MARC JACOBS","name":"BABIES HEART BAG PRINT DRESS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-01.jpg","price":"445.90","ID":"18440"},
        {"designer":"LITTLE MARC JACOBS","name":"HEART BAG PRINT DRESS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-02.jpg","price":"536.90","ID":"18466"},
        {"designer":"GUCCI","name":"BABIES FLOWER HEART PRINT T-SHIRT IVORY & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-03.jpg","price":"773.50","ID":"18202"},
        {"designer":"MOSCHINO KID","name":"TEDDY BEAR PRINT T-SHIRT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-04.jpg","price":"427.70","ID":"19396"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT T-SHIRT DRESS IVORY & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-05.jpg","price":"573.30","ID":"19385"},
        {"designer":"MOSCHINO KID","name":"BABIES 2 PIECE TEDDY PRINT BODYSUIT & HAT GIFT SET PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-06.jpg","price":"855.40","ID":"19276"},
        {"designer":"MOSCHINO KID","name":"BABIES SHORT SLEEVED TEDDY PRINT FRILL DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-07.jpg","price":"564.20","ID":"19383"},
        {"designer":"MOSCHINO KID","name":"BABIES TEDDY BEAR PRINT T-SHIRT PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-08.jpg","price":"391.30","ID":"19267"},
        {"designer":"JESSIE AND JAMES","name":"ADONIA WRAP BOW HEART DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-09.jpg","price":"758.94","ID":"10742"},
        {"designer":"JESSIE AND JAMES","name":"ADONIA WRAP BOW STRIPE DRESS PINK AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-10.jpg","price":"573.30","ID":"10741"},
        {"designer":"MOSCHINO KID","name":"HEART LOGO DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-11.jpg","price":"873.60","ID":"15567"},
        {"designer":"MOSCHINO KID","name":"HEART LOGO DRESS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-12.jpg","price":"873.60","ID":"15568"},
        {"designer":"MSGM","name":"WOOL HEART PONCHO PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-13.jpg","price":"524.16","ID":"15232"},
        {"designer":"MSGM","name":"WOOL HEART PONCHO NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-14.jpg","price":"524.16","ID":"15233"},
        {"designer":"MSGM","name":"HEART KNITTED SWEATER NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-15.jpg","price":"475.02","ID":"15234"},
        {"designer":"BANDITS GIRL","name":"FAUX FUR HEART WAISTCOAT BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-16.jpg","price":"1172.08","ID":"14144"},
        {"designer":"ETRE PETITE","name":"PINK HEART PRINT T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-17.jpg","price":"178.36","ID":"11377"},
        {"designer":"ETRE PETITE","name":"YELLOW HEART PRINT T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-18.jpg","price":"178.36","ID":"11379"},
        {"designer":"ETRE PETITE","name":"PINK HEART PRINT LEGGINGS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-19.jpg","price":"152.88","ID":"11374"},
        {"designer":"ETRE PETITE","name":"YELLOW HEART PRINT MINI SKIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-20.jpg","price":"178.36","ID":"11375"},
        {"designer":"OEUF","name":"'LOVE' WOOL SWEATER GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-21.jpg","price":"560.56","ID":"15682"},
        {"designer":"OEUF","name":"KNITTED LOVE HAT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-22.jpg","price":"293.02","ID":"15670"},
        {"designer":"MINI MELISSA","name":"MINI VW ULTRAGIRL HEART WING SANDALS NUDE PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-23.jpg","price":"655.20","ID":"15424"},
        {"designer":"MINI MELISSA","name":"MINI VW ULTRAGIRL HEART WING SANDALS PEARL AND RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-24.jpg","price":"655.20","ID":"15425"},
        {"designer":"GUCCI","name":"GIRLS \"RABBIT\" GLITTER VECLRO STRAP SNEAKERS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-25.jpg","price":"1956.50","ID":"18179"},
        {"designer":"GUCCI","name":"\"RABBIT\" GLITTER HANDBAG MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-26.jpg","price":"3185.00","ID":"18192"},
        {"designer":"SONIA RYKIEL","name":"EMBROIDERED BADGES POLO IVORY, BLACK & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-27.jpg","price":"527.80","ID":"20530"},
        {"designer":"SONIA RYKIEL","name":"EMBROIDERED BADGES FLAP BAG IVORY, BLACK & GOLD","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-28.jpg","price":"527.80","ID":"20812"},
        {"designer":"SONIA RYKIEL","name":"EMBROIDERED PATCH DENIM JACKET","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-29.jpg","price":"1010.10","ID":"20546"},
        {"designer":"SONIA RYKIEL","name":"EMBROIDERED PATCH DENIM SATCHEL","link":"http://img1.cloudokids.cn/buyers/newCollage/300!lovecare-30.jpg","price":"664.30","ID":"20825"},

    ];
    var newModel=$(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
    for(var j=0;j<loveArr.length;j++){
        var designer=loveArr[j].designer;
        var name=loveArr[j].name;
        var price="¥"+loveArr[j].price;
        var proId="cloudokids://product/"+loveArr[j].ID;
        var imgLink=loveArr[j].link;
        var imgData='<img data-original="'+imgLink+'" class="lazy">';
        newModel.clone(true).appendTo($(".gucciContent"));
        $(".imModel").eq(j).find("a").attr("href",proId).html(imgData);
        $(".imModel").eq(j).find(".designer").html(designer);
        $(".imModel").eq(j).find(".proName").html(name);
        $(".imModel").eq(j).find(".price").html(price);
    }
    $("img.lazy").lazyload(
        {threshold : 500})
});