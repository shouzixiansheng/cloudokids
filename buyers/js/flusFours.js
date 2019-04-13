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
    var matchArr = [{"id": 1769}, {"id": 1502}, {"id": 1618}, {"id": 1626}];
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
        {"designer":"KETIKETA","name":"BABIES 'NINA' RUFFLED TROUSERS RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus1.jpg","price":"218.40","ID":"17257"},
        {"designer":"KETIKETA","name":"BABIES 'NINA' RUCHED LEG TROUSERS GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus2.jpg","price":"218.40","ID":"17258"},
        {"designer":"KETIKETA","name":"BABIES \"NINA\" RUCHED LEG TROUSERS ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus3.jpg","price":"218.40","ID":"17260"},
        {"designer":"KETIKETA","name":"BABIES \"NINA\" RUCHED LEG TROUSERS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus4.jpg","price":"218.40","ID":"17254"},
        {"designer":"KETIKETA","name":"BABIES \"NINA\" RUCHED ORANGE BURST PRINT PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus5.jpg","price":"218.40","ID":"17253"},
        {"designer":"KETIKETA","name":"BABIES 'NINA' DENIM LOOK TROUSERS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus6.jpg","price":"218.40","ID":"17249"},
        {"designer":"KETIKETA","name":"BABIES 'NINA' STRIPE TROUSERS CREAM, PINK & ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus7.jpg","price":"218.40","ID":"17251"},
        {"designer":"KETIKETA","name":"BABIES \"NINA\" RUCHED LEG RED SPOT PRINT TROUSERS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus8.jpg","price":"218.40","ID":"17256"},
        {"designer":"EMILE ET IDA","name":"HAREM TROUSERS CITRON YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus9.jpg","price":"364.00","ID":"20923"},
        {"designer":"BEAU LOVES","name":"HEART PRINT DRAWSTRING TROUSERS CORAL & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus10.jpg","price":"327.60","ID":"18988"},
        {"designer":"WOLF & RITA","name":"FABIO' HIGH WAISTED TROUSERS RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus11.jpg","price":"500.50","ID":"19673"},
        {"designer":"WOLF & RITA","name":"FABIO' WATERMELON APPLIQUE STRIPED HIGH WAISTED TROUSERS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus12.jpg","price":"500.50","ID":"19665"},
        {"designer":"WOLF & RITA","name":"FABIO' HIGH WAISTED TROUSERS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus13.jpg","price":"500.50","ID":"19767"},
        {"designer":"DOLCE & GABBANA","name":"NAUTICAL STRIPE 3/4 LENGTH TROUSERS NAVY & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus14.jpg","price":"1355.90","ID":"16995"},
        {"designer":"KETIKETA","name":"BABIES 'NINA' BLOOMERS RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus15.jpg","price":"191.10","ID":"17315"},
        {"designer":"KETIKETA","name":"BABIES \"NINA\" RUCHED LEG BLOOMERS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus16.jpg","price":"191.10","ID":"17317"},
        {"designer":"KETIKETA","name":"BABIES \"NINA\" RUCHED LEG BLOOMERS ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus17.jpg","price":"191.10","ID":"17313"},
        {"designer":"KETIKETA","name":"BABIES 'NINA' DENIM LOOK BLOOMERS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus18.jpg","price":"245.70","ID":"17307"},
        {"designer":"LOUD APPAREL","name":"BABIES STRIPE BLOOMERS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus19.jpg","price":"236.60","ID":"17481"},
        {"designer":"LOUD APPAREL","name":"BABIES \"FLINT\" ARROW PRINT BLOOMERS BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus20.jpg","price":"236.60","ID":"17482"},
        {"designer":"NUNUNU","name":"MUSLIN YOGA SHORTS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus21.jpg","price":"318.50","ID":"19575"},
        {"designer":"BELLE ENFANT","name":"BABIES 'CECILE' STRIPED IVORY ROMPER SUIT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!flus22.jpg","price":"618.80","ID":"17508"},

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
    $(".imModel").eq(0).css({"marginTop":0.3+"rem"});
    $(".imModel").eq(1).css({"marginTop":0.3+"rem"});
    $("img.lazy").lazyload(
        {threshold : 500}
    );



});

