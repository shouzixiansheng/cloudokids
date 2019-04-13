$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var model = $(".content").find(".myPoint").eq(0);
    $(".content").empty();
    $.ajax({
        url: H5_AJAX_HTTP_URL,
        dataType: "json",
        data: {
            interfaceName: "GetCustomerRewardPoints",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail: cusEmail,
            nocache: 1
        }
    }).done(function (result) {
        //console.log(result);
        var point = result.CustomerRewardPoints.RewardPoints;
        for (var i = 0; i < point.length; i++) {
            model.clone(true).appendTo($(".content"));
            var message = point[i].Message;
            var allPoint = point[i].Points;
            var time = point[i].CreatedOn;
            var timess = time.split("(")[1].split(")")[0];
            var timestamp = new Date().getTime();
            var singlePoint = point[i].PointsBalance;
            $(".content").find(".pointName").eq(i).html(message);
            $(".content").find(".point").eq(i).html(allPoint);
            $(".content").find(".point2").eq(i).html("(" + singlePoint + ")");
            var differentTime = timestamp - timess;
            var year = parseInt(differentTime / (365 * 24 * 3600 * 1000));
            if (year > 0) {
                $(".registerTime").eq(i).html(year+"Y以前");
                continue;
            }
            var month = parseInt(differentTime / (30 * 24 * 3600 * 1000));
            if (month > 0) {
                $(".registerTime").eq(i).html(month+"M以前");
                continue;
            }
            var week = parseInt(differentTime / (7 * 24 * 3600*1000));
            if (week > 0) {
                $(".registerTime").eq(i).html(week+"W以前");
                continue;
            }
            var day = parseInt(differentTime / (24 * 3600 * 1000));
            if (day > 0) {
                $(".registerTime").eq(i).html(day+"d以前");
                continue;
            }
            var hour = parseInt(differentTime / (3600* 1000));
            if (hour > 0) {
                $(".registerTime").eq(i).html(hour+"h以前");
                continue;
            }
            var min=parseInt(differentTime / (60* 1000));
            if (min > 0) {
                $(".registerTime").eq(i).html(min+"m以前");
                continue;
            }
            var s = parseInt(differentTime/1000);
            if (s > 0) {
                $(".registerTime").eq(i).html(s+"s以前");
                continue;
            }
        }


    });


});
