function refresh() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 1080) {
        document.documentElement.style.fontSize = 1080 / 10.8 + "px";
    } else {
        document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
    }
}
refresh();
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
GetQueryString('id');
$(function () {
    var proId = GetQueryString('id');
    $.ajax({
        url: "http://h5.cloudokids.cn/express/data",
        dataType: "json",
        async: true,
        method: "get",
        data: {
            num: proId
        }
    }).done(function (result) {
        var myInfo = $.parseJSON(result.data);
        if (result.responseCode == 200) {
            var data = '';
            for (var i = 0; i < myInfo.length; i++) {
                var content = myInfo[i].context;
                var time = myInfo[i].time;
                var data = data + '<div class="flowInfo"> <div class="singleInfoRight"> <div class="singleContext">' + content + '</div> <div class="singleTime">' + time + '</div> </div> <div class="singleInfoLeft"> <div class="point"></div> <div class="largePoint"></div> </div> </div>'
                $(".content").html(data);
                $(".flowInfo").eq(0).find(".largePoint").css({"display": "block"});
                $(".flowInfo").eq(0).find(".singleContext").css({"font-weight": "bolder"});
                $(".flowInfo").eq(0).find(".singleTime").css({"font-weight": "bolder"})
            }
        } else {
            var data = "<div class='failed'>暂无数据，请稍后查询!</div>";
            $(".content").html(data);
        }


    });

});
