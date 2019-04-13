/**
 * Created by 24212 on 2017/5/19.
 */
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
    var buyerIdArr = ["8384", "4931", "10186", "7627", "8206", "1755", "68553", "2602"];
    for(var i=0;i<buyerIdArr.length;i++){
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "getBuyerProfile",
                buyerId: buyerIdArr[i],
                customerId:7300407,
                customerAccessKey: "CC87C51A08C265664C0CCA5C6FED2B129CD8920B",
                customerEmail: "18301426710@cloudo.kids"
            }
        }).done(function(result){
            var buyerLink = "../buyerMatch.html#"+buyerIdArr[i]+"";
            var imgUrl=result.CustomerProfile.AvatarUrl;
            var imgData='<img src="'+imgUrl+'">';
            var Username=result.CustomerProfile.Username;
            $(".allBuyersWrap").find(".allBuyers").eq(i).find(".portrait").attr("href",buyerLink).html(imgData);
            $(".allBuyersWrap").find(".allBuyers").eq(i).find(".buyerName").html(Username);
            $(".allBuyersWrap").find(".allBuyers").eq(i).find(".enterBuyerHome").attr("href",buyerLink);
        });
    }
    var buyerProId=["18648","18854","17225","16437","16988","16990","16980","17884","17899","17846","18186","17847","20189","18305","20192","17882","16326","16358","17937","17916","18475","18937","17618","17635","21096","19468","17250","17307","16321","16318","18797","18801"];
    for(var i=0;i<buyerProId.length;i++){
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "GetProduct",
                Id: buyerProId[i],
                customerId:7300407,
                customerAccessKey: "CC87C51A08C265664C0CCA5C6FED2B129CD8920B",
                customerEmail: "18301426710@cloudo.kids"
            }
        }).done(function(result){
            var imgUrl=result.Product.DefaultPictureModel.ImageUrl;
            var imgData='<img src="'+imgUrl+'">';
            var proLink="../detailPages.html#"+buyerProId[i];
            $(".proWrap").eq(i).find("a").attr("href",proLink).html(imgData);
            var designer=result.Product.CustomProperties.DesignerName;
            $(".proWrap").eq(i).find(".designerName").html(designer);
            var price=result.Product.ProductPrice.Price;
            $(".proWrap").eq(i).find(".productPrice").html(price);
        });
    }
});