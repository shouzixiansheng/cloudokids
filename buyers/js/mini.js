
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
    var matchArr = [{"id": 734}, {"id": 516}];
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



    var matchArr2 = [{"id": 221}, {"id": 80}];
    var model2 = $(".recommendContent2").find(".recommend-wrap");
    $(".recommendContent2").empty();
    for(var i=0;i<matchArr2.length;i++){
        model2.clone(true).appendTo($(".recommendContent2"));
        var matchId=matchArr2[i].id;
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
            $(".recommendContent2").find(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("href",imgLink).html(imgPic);
            $(".recommendContent2").find(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommendContent2").find(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("href",buyerId);
            $(".recommendContent2").find(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommendContent2").find(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommendContent2").find(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("href",imgLink);
        })
    }
    var matchArr3 = [{"id": 496}, {"id": 803}];
    var model3 = $(".recommendContent3").find(".recommend-wrap");
    $(".recommendContent3").empty();
    for(var i=0;i<matchArr3.length;i++){
        model3.clone(true).appendTo($(".recommendContent3"));
        var matchId=matchArr3[i].id;
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
            $(".recommendContent3").find(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("href",imgLink).html(imgPic);
            $(".recommendContent3").find(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommendContent3").find(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("href",buyerId);
            $(".recommendContent3").find(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommendContent3").find(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommendContent3").find(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("href",imgLink);
        })
    }
    var matchArr4 = [{"id": 785}, {"id": 682}];
    var model4 = $(".recommendContent4").find(".recommend-wrap");
    $(".recommendContent4").empty();
    for(var i=0;i<matchArr4.length;i++){
        model4.clone(true).appendTo($(".recommendContent4"));
        var matchId=matchArr4[i].id;
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
            $(".recommendContent4").find(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("href",imgLink).html(imgPic);
            $(".recommendContent4").find(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommendContent4").find(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("href",buyerId);
            $(".recommendContent4").find(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommendContent4").find(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommendContent4").find(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("href",imgLink);
        })
    }

    $("img.lazy").lazyload(
        {threshold : 500}
    );


});