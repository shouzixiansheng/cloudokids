function refresh() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 1080) {
        document.documentElement.style.fontSize = 1080 / 10.8 + "px";
    } else {
        document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
    }
}
refresh();
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
getUrlParams('id');
$(function () {
    var storage = window.localStorage;
    var cusId = storage.cusId;
    var cusKey = storage.cusKey;
    var cusEmail = storage.cusEmail;
    var productModel = $(".mainContentWrap").find(".mainContent").eq(0);
    $(".mainContentWrap").empty();
    var productId = decodeURI(getUrlParams('id'));
    productId = productId.replace(/，/ig, ',');
    var proDuctArr = productId.split(",");
    for (var q = 0; q < proDuctArr.length; q++) {
        if (proDuctArr[q] == null || proDuctArr[q] == "" || proDuctArr[q] == undefined) {
            proDuctArr.splice(q, 1);
            q = q - 1;
        }
    }
    var modelLength = Math.ceil(proDuctArr.length / 3);
    for (var i = 0; i < modelLength; i++) {
        productModel.clone(true).appendTo($(".mainContentWrap"));
    }
    for (var j = 0; j < proDuctArr.length; j++) {
        $(".productBg").eq(proDuctArr.length - 1).css({"display": "none"});
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "GetProduct",
                customerAccessKey: cusKey,
                customerId: cusId,
                customerEmail: cusEmail,
                id: proDuctArr[j]
            }
        }).done(function (result) {
            var imgUrl = result.Product.DefaultPictureModel.ImageUrl;
            var imgData = '<img src="' + imgUrl + '">';
            $(".imgWrap").eq(j).find("a").attr("href", "detailPages.html#" + result.Product.Id).html(imgData);
            $(".productNumber").eq(j).html("0" + (j + 1));
            $(".productName").eq(j).html(result.Product.Name);
            $(".designerName").eq(j).html(result.Product.CustomProperties.DesignerName);
            $(".productPrice").eq(j).html(result.Product.ProductPrice.Price);
        });
    }
    var nullLength = $("a").length;
    for (var k = 0; k < nullLength; k++) {
        if ($("a").eq(k).html() == "" || $("a").eq(k).html() == null || $("a").eq(k).html() == undefined) {
            $(".content").eq(k).css({"display": "none"});
        }
    }
});