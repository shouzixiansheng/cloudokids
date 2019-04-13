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
    var buyerIdArr = ["8384", "4931"];
    for (var i = 0; i < buyerIdArr.length; i++) {
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "getBuyerProfile",
                buyerId: buyerIdArr[i],
                customerId: 7300407,
                customerAccessKey: "CC87C51A08C265664C0CCA5C6FED2B129CD8920B",
                customerEmail: "18301426710@cloudo.kids"
            }
        }).done(function (result) {
            var buyerLink = "../buyerMatch.html#"+buyerIdArr[i]+"";
            var imgUrl = result.CustomerProfile.AvatarUrl;
            var imgData = '<img src="' + imgUrl + '">';
            var Username = result.CustomerProfile.Username;
            //var Signature=result.CustomerProfile.Signature;
            $(".allBuyers").eq(i).find(".beautyBuyer").eq(0).find("a").attr("href", buyerLink).html(imgData);
            $(".allBuyers").eq(i).find(".beautyBuyer").eq(0).find(".buyerName").html(Username);
        });
    }
    for (var i = 0; i < 2; i++) {
        $(".allBuyers").eq(0).find(".beautyBuyer").eq(0).find(".signerNature").html("适合夏天的搭配，marni夏装就能完成所有造型");
        $(".allBuyers").eq(1).find(".beautyBuyer").eq(0).find(".signerNature").html("粉嫩菠萝套装，打造甜美小天使");
    }
    var productArrId = ["18648", "18854"];
    for (var i = 0; i < productArrId.length; i++) {
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "GetProduct",
                Id: productArrId[i],
                customerId: 7300407,
                customerAccessKey: "CC87C51A08C265664C0CCA5C6FED2B129CD8920B",
                customerEmail: "18301426710@cloudo.kids"
            }
        }).done(function (result) {
            var imgUrl = result.Product.DefaultPictureModel.ImageUrl;
            var imgData = '<img src="' + imgUrl + '">';
            var proLink="../detailPages.html#"+productArrId[i];
            $(".buyerProduct").eq(0).find("a").eq(i).attr("href", proLink).html(imgData);
            var designer = result.Product.CustomProperties.DesignerName;
            $(".buyerProduct").eq(0).find(".designerName").eq(i).html(designer);
            var price = result.Product.ProductPrice.Price;
            $(".buyerProduct").eq(0).find(".productPrice").eq(i).html(price);
        });
    }
    var productArrId2 = ["16988", "16990"];
    for (var i = 0; i < productArrId2.length; i++) {
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "GetProduct",
                Id: productArrId2[i],
                customerId: 7300407,
                customerAccessKey: "CC87C51A08C265664C0CCA5C6FED2B129CD8920B",
                customerEmail: "18301426710@cloudo.kids"
            }
        }).done(function (result) {
            var imgUrl = result.Product.DefaultPictureModel.ImageUrl;
            var imgData = '<img src="' + imgUrl + '">';
            //var proLink = "cloudokids://product/" + productArrId[i];
            var proLink="../detailPages.html#"+productArrId2[i];
            $(".buyerProduct").eq(1).find("a").eq(i).attr("href", proLink).html(imgData);
            var designer = result.Product.CustomProperties.DesignerName;
            $(".buyerProduct").eq(1).find(".designerName").eq(i).html(designer);
            var price = result.Product.ProductPrice.Price;
            $(".buyerProduct").eq(1).find(".productPrice").eq(i).html(price);
        });
    }


});
