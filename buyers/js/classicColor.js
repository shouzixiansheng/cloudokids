/**
 * Created by 24212 on 2017/3/10.
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
$(function () {
    var matchArr = [{"id": 580}, {"id": 424}, {"id": 417}, {"id": 451}];
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
        {"designer":"LITTLE MARC JACOBS","name":"BABIES COOL KOALA POPCORN APPLIQUE T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor1.jpg","price":"318.50","ID":"18541"},
        {"designer":"LITTLE MARC JACOBS","name":"BABIES CINEMA USHER T-SHIRT RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor2.jpg","price":"263.90","ID":"18539"},
        {"designer":"LITTLE MARC JACOBS","name":"CARTOON CINEMA DRINKS PRINT T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor3.jpg","price":"318.50","ID":"18657"},
        {"designer":"LITTLE MARC JACOBS","name":"BOXING SHORTS BLUE & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor4.jpg","price":"354.90","ID":"18491"},
        {"designer":"LITTLE MARC JACOBS","name":"BABIES 'M' STAR PRINT T-SHIRT GREY , BLUE & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor5.jpg","price":"318.50","ID":"18538"},
        {"designer":"LITTLE MARC JACOBS","name":"'M' APPLIQUE T-SHIRT GREY & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor6.jpg","price":"445.90","ID":"18472"},
        {"designer":"LITTLE MARC JACOBS","name":"BABIES 'M' BLOCK COLOUR TRACKSUIT GREY, WHITE, BLUE & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor7.jpg","price":"991.90","ID":"18534"},
        {"designer":"LITTLE MARC JACOBS","name":"POPCORN BELT DRESS RED & NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor8.jpg","price":"809.90","ID":"18473"},
        {"designer":"LITTLE MARC JACOBS","name":"THUMBS UP 1984 HOODED ZIP SWEATSHIRT GREY, BLUE & RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor9.jpg","price":"591.50","ID":"18502"},
        {"designer":"LITTLE MARC JACOBS","name":"USHER PRINT SWEATSHIRT RED, BLUE & GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor10.jpg","price":"591.50","ID":"18494"},
        {"designer":"TRUSSARDI","name":"KNITTED STRIPE SWEATER BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor11.jpg","price":"518.70","ID":"10658"},
        {"designer":"TRUSSARDI","name":"JERSEY COTTON POLO SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor12.jpg","price":"311.22","ID":"10576"},
        {"designer":"VEJA","name":"\"ESPLAR\" SMALL LEATHER VELCRO TRAINERS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor13.jpg","price":"646.10","ID":"17266"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"LUCKY MONSTER JUMPER RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor14.jpg","price":"439.53","ID":"14752"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"'CHAMP' KNITTED JUMPER BLUE AND GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor15.jpg","price":"605.15","ID":"14760"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"RHUBARB\" REVERSIBLE AIRPLANE PRINT JERSEY GILET RED & BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!classicColor16.jpg","price":"955.50","ID":"16899"},

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