$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var buyerId = window.location.hash.substring(1);
    $.ajax({
        url: H5_AJAX_HTTP_URL,
        dataType: "json",
        data: {
            interfaceName: "GetBuyerProfile",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            buyerId: buyerId
        }
    }).done(function (result) {
        if (result.MetaData.ResponseCode == 2000.0) {
            var backgroundUrl = result.CustomerProfile.ProfileBackgroundUrl;
            var backgroundImg = '<img src="' + backgroundUrl + '">';
            $(".background").html(backgroundImg);
            var buyerUrl = result.CustomerProfile.AvatarUrl;
            var buyerImg = '<img src="' + buyerUrl + '">';
            var buyerUserName = result.CustomerProfile.Username;
            $(".userPortrait").html(buyerImg);
            $(".userName").html(buyerUserName);
            var signature = result.CustomerProfile.Signature;
            $(".signature").html(signature);
        }
    });
    //获取搭配
    var matchModel = $(".content").find(".matchModel").eq(0);
    $(".content").empty();
    $.ajax({
        url: H5_AJAX_HTTP_URL,
        dataType: "json",
        data: {
            interfaceName: "GetCollages",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            buyerId: buyerId
        }
    }).done(function (result) {
        var buyer = result.Collages;
        if (result.MetaData.ResponseCode == 2000.0) {
            for (var i = 0; i < result.Collages.length; i++) {
                matchModel.clone(true).appendTo($(".content"));
                var AvatarUrl = buyer[i].CustomerProfileOverview.AvatarUrl;
                var avatarUrl = '<img src="' + AvatarUrl + '">';
                var matchId = buyer[i].Id;
                $(".buyerMatch").eq(i).attr("matchId", matchId);
                $(".portrait").eq(i).html(avatarUrl);
                var Signature = result.Collages[i].Description;
                $(".buyerSigner").eq(i).html(Signature);
                var detailName = buyer[i].CustomerProfileOverview.Username;
                $(".detailName").eq(i).html(detailName);
                var matchUrl = buyer[i].PictureUrl;
                var picImg = '<img src="' + matchUrl + '">';
                $(".buyerMatch").eq(i).html(picImg);
            }
        }
    });
//
    $(".content").on("click", ".buyerMatch", function () {
        var matchId = $(this).attr("matchId");
        window.location.href='buyers/singleModle.html?id='+matchId;
    });
});
