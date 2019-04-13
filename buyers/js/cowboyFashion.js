/**
 * Created by admin on 2017/4/14.
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
    var matchArr = [{"id": 2011},{"id": 1983}, {"id": 1924}, {"id": 361},{"id": 1920    }];
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

            var imgLink="window.location.href='singleModle.html?id="+result.Collage.Id+"'";
            var buyerId="window.location.href='../buyerMatch.html#"+result.Collage.CustomerProfileOverview.Id+"'";
            var buyerName=result.Collage.CustomerProfileOverview.Username;
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("onclick",imgLink).html(imgPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("onclick",buyerId);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("onclick",imgLink);
        })
    }
    var fashionArr=[
            {"designer":"GUCCI","name":"EMBROIDERED NATURE PRINT DENIM JACKET BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion5.jpg","price":"4,823.00","ID":"18241"},
            {"designer":"DSQUARED2","name":"\'KENNY\' TWIST DISTRESSED JEAN LIGHT BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion6.jpg","price":"2,265.90","ID":"16301"},
            {"designer":"DOLCE & GABBANA","name":"\'MAMBO\' BADGE DETAIL DENIM AND JERSEY VARSITY JACKET GREY, BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion7.jpg","price":"2593.50","ID":"17127"},
            {"designer":"DOLCE & GABBANA","name":"\'MAMBO\' BADGE DETAIL DENIM FRONTED JOGGERS BLUE & GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion8.jpg","price":"1,738.10","ID":"17128"},
            {"designer":"DOLCE & GABBANA","name":"BABIES APPLIQUE BADGE VARSITY JACKET DENIM BLUE & GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion9.jpg","price":"2,129.40","ID":"17044"},
            {"designer":"DOLCE & GABBANA","name":"EMBROIDERED JAZZ MUSICIAN DENIM JEANS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion10.jpg","price":"1,428.70","ID":"20785"},
            {"designer":"GUCCI","name":"APPLIQUE BADGES ACID WASH DENIM JACKET BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion11.jpg","price":"5,096.00","ID":"18226"},
            {"designer":"GUCCI","name":"BUTTERFLY APPLIQUE JEANS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion12.jpg","price":"1,865.50","ID":"18255"},
            {"designer":"CHLOE","name":"DENIM JACKET BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion13.jpg","price":"1,264.90","ID":"18406"},
            {"designer":"GUCCI","name":"TIGER APPLIQUE ACID WASH JEANS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion14.jpg","price":"1,638.00","ID":"18234"},
            {"designer":"MONCLER","name":"FRINGED DENIM LOOK HOODED ZIP UP SWEATSHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion15.jpg","price":"1,274.00","ID":"16606"},
            {"designer":"DOLCE & GABBANA","name":"FRUIT AND FLOWERS APPLIQUE EMBROIDERED JEANS DARK BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion16.jpg","price":"4058.60","ID":"20860"},
            {"designer":"WOLF & RITA","name":"VALENTINA' FRINGED DENIM JACKET BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion17.jpg","price":"609.70","ID":"19674"},
            {"designer":"DOLCE & GABBANA","name":"GIRLS MOUSE PATCH JEANS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion18.jpg","price":"1,879.15","ID":"16091"},
            {"designer":"STELLA MCCARTNEY KIDS","name":"\'KIRI\' NAVY CAMO PRINT VEST","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion19.jpg","price":"427.70","ID":"16846"},
            {"designer":"BURBERRY","name":"DENIM JEANS WHITE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion20.jpg","price":"864.50","ID":"20272"},
            {"designer":"GUCCI","name":"BABIES HEART APPLIQUE DENIM DRESS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion21.jpg","price":"1,638.00","ID":"18206"},
            {"designer":" GUCCI","name":"BABIES STRIPED DENIM TROUSERS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion22.jpg","price":"1,319.50","ID":"18209"},
            {"designer":"MSGM","name":"EMBELLISHED COLLAR DENIM WAISTCOAT BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion23.jpg","price":"1,337.70","ID":"19935"},
            {"designer":"DOLCE & GABBANA","name":"APPLIQUE ICE LOLLY DENIM SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion24.jpg","price":"1355.90","ID":"17054"},
            {"designer":"BOBO CHOSES","name":"\'1968\' PRINT DENIM SHORT DUNGAREES BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion25.jpg","price":"609.70","ID":"17539"},
            {"designer":"MSGM","name":"DENIM LOGO PATCH DUNGAREES BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion26.jpg","price":"786.24","ID":"15218"},
            {"designer":"DSQUARED2","name":"\'COOL GUY\' DISTRESSED DENIM PAINT SPLATTER JEANS DARK BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion27.jpg","price":"1,510.60","ID":"16303"},
            {"designer":"DIESEL","name":"FADED 'SLEENKER' DENIM JOG JEANS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion28.jpg","price":"349.44","ID":"14310"},
            {"designer":"DOLCE & GABBANA","name":"\'BEST OF THE DAY\' APPLIQUE BADGE DENIM BERMUDA SHORTS DARK BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion29.jpg","price":"1,820.00","ID":"17122"},
            {"designer":"LITTLE MARC JACOBS","name":"EMBELLISHED DENIM SKIRT BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion30.jpg","price":"718.90","ID":"18468"},
            {"designer":"DOLCE & GABBANA","name":"APPLIQUE BADGES DENIM BERMUDA SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion31.jpg","price":"1,665.30","ID":"17126"},
            {"designer":"GUCCI","name":"EMBROIDERED FLORAL DENIM SHORTS DARK BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion32.jpg","price":"2,593.50","ID":"18254"},
            {"designer":"LITTLE MARC JACOBS","name":"STRIPE DENIM SHORT BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion33.jpg","price":"627.90","ID":"18488"},
            {"designer":" GUCCI","name":"ZIP POCKET DENIM SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion34.jpg","price":"1,365.00","ID":"18210"},
            {"designer":"STELLA MCCARTNEY KIDS","name":"\'MUNSTER\' DENIM PIANO PRINT CREEPER SHOES BLUE, WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion35.jpg","price":"919.10","ID":"16755"},
            {"designer":"STELLA MCCARTNEY KIDS","name":"FLORA' FELT FLOWER APPLIQUE ESPADRILLES DENIM BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion36.jpg","price":"837.20","ID":"16758"},
            {"designer":"BENSIMON","name":"\'ELLY\' CANVAS TENNIS PUMPS DENIM BLUE & WHITE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion37.jpg","price":"245.70","ID":"17524"},
            {"designer":"BENSIMON","name":"\'ELLY\' CANVAS TENNIS PUMPS LIGHT BLUE & WHITE","link":"http://img1.cloudokids.cn/buyers/our2017/300!cowboyFashion38.jpg","price":"245.70","ID":"17499"}
    ];
    var gucciModel=$(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
    for(var i=0;i<fashionArr.length;i++){
        var designer=fashionArr[i].designer;
        var name=fashionArr[i].name;
        var price="¥"+fashionArr[i].price;
        var proId="window.location.href='../detailPages.html#"+fashionArr[i].ID+"'";
        var imgLink=fashionArr[i].link;
        var imgData='<img src="" data-original="'+imgLink+'" class="lazy">';
        gucciModel.clone(true).appendTo($(".gucciContent"));
        $(".imModel").eq(i).find("a").attr("onclick",proId).html(imgData);
        $(".imModel").eq(i).find(".designer").html(designer);
        $(".imModel").eq(i).find(".proName").html(name);
        $(".imModel").eq(i).find(".price").html(price);
    }
    $("img.lazy").lazyload(
        {threshold : 500})
});
