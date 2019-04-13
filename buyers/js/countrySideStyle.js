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
    var matchArr = [{"id": 1995}, {"id": 1940}, {"id": 1899}, {"id": 1929}];
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

    var classArr=[
        {"designer":"IMPS & ELFS","name":"FLORAL SLEEVELESS BLOUSE PURPLE","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle1.jpg","price":"185.64 ","ID":"12405"},
        {"designer":"CARRÉMENT BEAU","name":"BABIES LEMON LEAF PRINTED COTTON DRESS PINK","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle2.jpg","price":"180.18 ","ID":"10493"},
        {"designer":"BONPOINT","name":"EMPIRE' BIRD PRINT PINAFORE DRESS BLUE & MULTI","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle3.jpg","price":"1183.00 ","ID":"16557"},
        {"designer":"BONPOINT","name":"STAR PRINT BEACH TROUSERS BLACK & GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle4.jpg","price":"955.50 ","ID":"16554"},
        {"designer":"CARAMEL","name":"SPLATTER PRINT BAGGY TROUSERS GREY & BLACK","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle5.jpg","price":"864.50 ","ID":"17398"},
        {"designer":"CHLOE","name":"\"LAGUNAS BRAVAS\" FEATHER PRINT LEGGINGS BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle6.jpg","price":"1319.50 ","ID":"18615"},
        {"designer":"BONPOINT","name":"TWO TONE BAGGY TROUSERS GREY & BLACK","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle7.jpg","price":"746.20 ","ID":"16532"},
        {"designer":"BONPOINT","name":"BRUSH STROKE BAGGY TROUSERS BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle8.jpg","price":"746.20 ","ID":"16539"},
        {"designer":"BONPOINT","name":"LOGO JOGGING BOTTOMS GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle9.jpg","price":"527.80 ","ID":"16563"},
        {"designer":"MARNI","name":"FLEECE JOGGERS GOLD LOGO GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle10.jpg","price":"971.88 ","ID":"15323"},
        {"designer":"OEUF","name":"EMBELLISHED JOGGING BOTTOMS GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle11.jpg","price":"382.20 ","ID":"19655"},
        {"designer":"PETIT BATEAU","name":"PATCH JOGGER TROUSERS GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle12.jpg","price":"152.88 ","ID":"11709"},
        {"designer":"CARAMEL","name":"SPLATTER PRINT HAREM SHORTS BLACK & IVORY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle13.jpg","price":"546.00 ","ID":"17406"},
        {"designer":"CARAMEL","name":"SPLATTER PRINT BAGGY TROUSERS BLACK & IVORY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle14.jpg","price":"546.00 ","ID":"17388"},
        {"designer":"BONPOINT","name":"FADED RAW HEM SHORTS YELLOW","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle15.jpg","price":"900.90 ","ID":"16536"},
        {"designer":"BONPOINT","name":"OVERSIZED SHORTS GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle16.jpg","price":"354.90 ","ID":"16529"},
        {"designer":"BONPOINT","name":"LOGO PRINTED DISTRESSED JOGGER TROUSERS GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle17.jpg","price":"955.50 ","ID":"16535"},
        {"designer":"BONPOINT","name":"BAGGY BEACH TROUSERS YELLOW","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle18.jpg","price":"354.90 ","ID":"16546"},
        {"designer":"BONPOINT","name":"LOGO PRINT JOGGERS GREY","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle19.jpg","price":"555.10 ","ID":"16541"},
        {"designer":"BONPOINT","name":"LOGO PRINT JOGGERS BLACK","link":"http://img1.cloudokids.cn/buyers/our2017/300!countrySideStyle20.jpg","price":"309.40 ","ID":"16534"}
    ];

    var cowModel=$(".cowContent").find(".imModel").eq(0);
    $(".cowContent").empty();
    for(var j=0;j<classArr.length;j++){
        var designer=classArr[j].designer;
        var name=classArr[j].name;
        var price="¥"+classArr[j].price;
        var proId="window.location.href='../detailPages.html#"+classArr[j].ID+"'";
        var imgLink=classArr[j].link;
        var imgData='<img data-original="'+imgLink+'" class="lazy">';
        cowModel.clone(true).appendTo($(".cowContent"));
        $(".imModel").eq(j).find("a").attr("onclick",proId).html(imgData);
        $(".imModel").eq(j).find(".designer").html(designer);
        $(".imModel").eq(j).find(".proName").html(name);
        $(".imModel").eq(j).find(".price").html(price);
    }
    $("img.lazy").lazyload(
        {threshold : 500}
    );



});

