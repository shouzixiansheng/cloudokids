$(function () {
    //获取商品分类
    var storage = window.localStorage;
    var cusId=storage.cusId;
    var cusKey=storage.cusKey;
    var cusEmail=storage.cusEmail;
    var sortId, sortName, hasSub;
    $.ajax({
        url:H5_AJAX_HTTP_URL,
        dataType: "json",
        data: {
            interfaceName: "getCategories",
            customerAccessKey: cusKey,
            customerId: cusId,
            customerEmail:cusEmail,
            parentCategoryId: 0
        }
    }).done(function (result) {
        var sortData = '';
        for (var i = 0; i < result.Categories.length; i++) {
            sortName = result.Categories[i].Name;
            sortId = result.Categories[i].Id;
            hasSub = result.Categories[i].HasSubCategories;
            sortData = sortData + '<li myid="' + sortId + '" myName="' + sortName + '" ifHas="' + hasSub + '">' + sortName + '<span class="imArrows"><img src="img/arrows2.png" alt=""></span></li>';
        }
        $(".assort_assort").html(sortData);
    });
    //商品分类详情点击
    $(".assort_assort").delegate("li", "click", function () {
        var myTitle = $(this).attr("myName");
        var myId = $(this).attr("myid");
        var myHas = $(this).attr("ifHas");
        if (myHas == "true") {
            window.location.href="furtherClassify.html?myTitle="+myTitle+"!myId="+myId+"!ifDesigner="+0;
        } else {
            window.location.href="singItem.html?myTitle="+myTitle+"!myId="+myId+"!ifDesigner="+0;
        }
    });
});