$(function () {
    function refresh() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 1080) {
            document.documentElement.style.fontSize = 1080 / 10.8 + "px";
        } else {
            document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
        }
    }

    refresh();
    window.onresize = function () {
        refresh();
    };
    $.ajax({
        url: H5_AJAX_HTTP_URL,
        async: false,
        dataType: "json",
        data: {
            interfaceName: "GetBuyers",
            customerId: "6",
            customerAccessKey: "475043A85C1AC34DD70F48EB47B6E1E1CB04D481",
            customerEmail: "h5@cloudokids.com"
        }
    }).done(function (result) {
        var buyer = result.Customers;
        var boxModel = $(".content").find(".modle").eq(0);
        $(".content").empty();
            for (var i = 0; i < buyer.length; i++) {
                boxModel.clone(true).appendTo($(".content"));
                var src = buyer[i].AvatarUrl;
                if (src == "") {
                    src = "http://h5.cloudokids.cn/buyers/listImg/cloudokids.png";
                }
                var imgData = '<img src="' + src + '" alt=""> ';
                var userName = buyer[i].Username;
                var userId = "window.location.href='../buyerMatch.html#"+buyer[i].Id+"'";
                $("a").eq(i).attr("onclick", userId);
                $(".img-wrap").eq(i).html(imgData);
                $(".myName").eq(i).html(userName);
            }

    });
});
