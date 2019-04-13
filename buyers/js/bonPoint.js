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
    var matchArr = [{"id": 371}, {"id": 369}, {"id": 362}, {"id": 305}];

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
        //console.log(result);
        var imgUrl=result.Collage.PictureUrl;
        var imgPic='<img src="'+imgUrl+'">';
        var picDescription=result.Collage.Description;
        var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
        var buyerPic='<img src="'+buyerUrl+'">';
        var imgLink="cloudokids://collage/"+result.Collage.Id;
        var buyerId="cloudokids://buyer/"+result.Collage.CustomerProfileOverview.Id;
        var buyerName=result.Collage.CustomerProfileOverview.Username;
        //console.log(imgPic);
        //console.log(i);
        $(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("href",imgLink).html(imgPic);
        $(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
        $(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("href",buyerId);
        $(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
        $(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
        $(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("href",imgLink);

    })
}

});
