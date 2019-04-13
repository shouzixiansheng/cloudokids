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
    var matchArr = [{"id": 677}, {"id": 752}, {"id": 674}, {"id": 768}];
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
        {"designer":"NUNUNU","name":"STAR PRINT BEACH TROUSERS WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle1.jpg","price":"409.50 ","ID":"19601"},
        {"designer":"NUNUNU","name":"SUPER SOFT STAR PRINT BAGGY TROUSERS GREY & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle2.jpg","price":"373.10 ","ID":"19578"},
        {"designer":"NUNUNU","name":"STAR PRINT BAGGY TROUSERS PINK & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle3.jpg","price":"373.10 ","ID":"19576"},
        {"designer":"NUNUNU","name":"STAR PRINT BEACH TROUSERS BLACK & GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle4.jpg","price":"409.50 ","ID":"20843"},
        {"designer":"NUNUNU","name":"SPLATTER PRINT BAGGY TROUSERS GREY & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle5.jpg","price":"373.10 ","ID":"20842"},
        {"designer":"MARCELO BURLON","name":"\"LAGUNAS BRAVAS\" FEATHER PRINT LEGGINGS BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle6.jpg","price":"955.50 ","ID":"20014"},
        {"designer":"NUNUNU","name":"TWO TONE BAGGY TROUSERS GREY & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle7.jpg","price":"345.80 ","ID":"20840"},
        {"designer":"NUNUNU","name":"BRUSH STROKE BAGGY TROUSERS BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle8.jpg","price":"427.70 ","ID":"19581"},
        {"designer":"LITTLE MARC JACOBS","name":"LOGO JOGGING BOTTOMS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle9.jpg","price":"445.90 ","ID":"18496"},
        {"designer":"MSGM","name":"FLEECE JOGGERS GOLD LOGO GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle10.jpg","price":"300.30 ","ID":"15225"},
        {"designer":"LITTLE MARC JACOBS","name":"EMBELLISHED JOGGING BOTTOMS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle11.jpg","price":"536.90 ","ID":"18454"},
        {"designer":"DOLCE & GABBANA","name":"PATCH JOGGER TROUSERS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle12.jpg","price":"1051.05 ","ID":"16041"},
        {"designer":"NUNUNU","name":"SPLATTER PRINT HAREM SHORTS BLACK & IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle13.jpg","price":"427.70 ","ID":"19572"},
        {"designer":"NUNUNU","name":"SPLATTER PRINT BAGGY TROUSERS BLACK & IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle14.jpg","price":"373.10 ","ID":"19579"},
        {"designer":"NUNUNU","name":"FADED RAW HEM SHORTS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle15.jpg","price":"427.70 ","ID":"19568"},
        {"designer":"NUNUNU","name":"OVERSIZED SHORTS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle16.jpg","price":"373.10 ","ID":"19566"},
        {"designer":"DIESEL","name":"LOGO PRINTED DISTRESSED JOGGER TROUSERS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle17.jpg","price":"311.22 ","ID":"14317"},
        {"designer":"NUNUNU","name":"BAGGY BEACH TROUSERS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle18.jpg","price":"409.50 ","ID":"19602"},
        {"designer":"DSQUARED2","name":"LOGO PRINT JOGGERS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle19.jpg","price":"900.90 ","ID":"16310"},
        {"designer":"DSQUARED3","name":"LOGO PRINT JOGGERS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle20.jpg","price":"900.90 ","ID":"16311"},
        {"designer":"NUNUNU","name":"RIDING TROUSERS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle21.jpg","price":"491.40 ","ID":"20856"},
        {"designer":"NUNUNU","name":"FADED RIDING TROUSERS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle22.jpg","price":"482.30 ","ID":"19580"},
        {"designer":"YOUNG VERSACE","name":"FLEECE JOGGER TROUSERS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle23.jpg","price":"491.40 ","ID":"15619"},
        {"designer":"MOSCHINO KID","name":"BABIES BLACK TEXT PRINT JOGGERS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle24.jpg","price":"427.70 ","ID":"19261"},
        {"designer":"NUNUNU","name":"\"ONE ON ONE\" LEGGINGS BLACK & GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle25.jpg","price":"327.60 ","ID":"19584"},
        {"designer":"MOSCHINO KID","name":"LOGO PRINT LEGGINGS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle26.jpg","price":"336.70 ","ID":"19364"},
        {"designer":"MOSCHINO KID","name":"GOLD TEXT PRINT LEGGINGS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle27.jpg","price":"336.70 ","ID":"19365"},
        {"designer":"MOSCHINO KID","name":"GOLD TEXT PRINT LEGGINGS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle28.jpg","price":"336.70 ","ID":"19363"},
        {"designer":"SOMEDAY SOON","name":"\"ANTON\" SIGNATURE SLIM FIT JOGGERS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle29.jpg","price":"409.50 ","ID":"17917"},
        {"designer":"SOMEDAY SOON","name":"\"ANTON\" SIGNATURE SLIM FIT JOGGERS BROWN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sportStyle30.jpg","price":"409.50 ","ID":"17916"},

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
