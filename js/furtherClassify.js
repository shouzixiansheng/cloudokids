$(function () {
    var myTitle = decodeURI(getUrlParams("myTitle"));
    var myId = getUrlParams("myId");
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;

    function getUrlParams(name) {
        var reg = new RegExp("(^|!)" + name + "=([^!]*)(!|$)");
        var r = window.location.search.substring(1).match(reg);
        if (r != null) {
            return r[2];
        }
        else {
            return "";
        }
    }
    $(".assort_one").html(myTitle);
    $.ajax({
        url: H5_AJAX_HTTP_URL,
        dataType: "json",
        async: true,
        data: {
            interfaceName: "getCategories",
            customerAccessKey: cusKey,
            customerId: cusId,
            parentCategoryId: myId
        }
    }).done(function (result) {
        var sortData = '';
        for (var i = 0; i < result.Categories.length; i++) {
            var sortName = result.Categories[i].Name;
            var sortId = result.Categories[i].Id;
            var hasSub = result.Categories[i].HasSubCategories;
            sortData = sortData + '<li myid="' + sortId + '" myName="' + sortName + '" ifHas="' + hasSub + '">' + sortName + '<span class="imArrows"><img src="img/arrows2.png" alt=""></span></li>';
        }
        $(".sortData").html(sortData);

    });
    //产看全部点击
    $(".lookAll").click(function () {
        //alert(1231);
        window.location.href = "singItem.html?myId=" + myId + "!ifDesigner=" + 0+"!ifAll="+1;
    });
    //商品分类详情点击
    $(".assort_assort").delegate("li", "click", function () {
        var myTitle = $(this).attr("myName");
        var myId = $(this).attr("myid");
        var myHas = $(this).attr("ifHas");
        if (myHas == "true") {
            window.location.href = "imThreeClassify?myTitle=" + myTitle + "!myId=" + myId + "!ifDesigner=" + 0;
        } else {
            window.location.href = "singItem.html?myTitle=" + myTitle.replace(/%/, "@") + "!myId=" + myId + "!ifDesigner=" + 0;
        }
    });

});
