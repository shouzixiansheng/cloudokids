/**
 * Created by 24212 on 2017/1/11.
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
window.onresize = function () {
    refresh();
};


function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
GetQueryString('id');
$(function () {

    var imgID=GetQueryString('id');

    $.ajax({
        url: H5_AJAX_HTTP_URL,
        dataType: "json",
        async: false,
        type: "get",
        data: {
            interfaceName: "GetCollage",
            customerAccessKey: "guest",
            collageId: imgID
        },
        error: function (error) {

        }
    }).done(function (result) {
        var src = result.Collage.PictureUrl;
        var imgData = '<img src="' + src + '" alt=""> ';
        $(".lgImg").html(imgData);
        var userUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
        var imgData0='<img src="'+userUrl+'">';
        $(".profit").html(imgData0);
        var address=result.Collage.CustomerProfileOverview.Username;
        $(".addressEmail").html(address);
        var describle=result.Collage.Description;
        $(".introduce").html(describle);
        var imgProduct = result.Collage.Products;
        var imgLength = imgProduct.length;
        var boxModel = $(".beautyContent").find(".model").eq(0);
        $(".beautyContent").empty();
        for (var i = 0; i < imgLength; i++) {
            boxModel.clone(true).appendTo($(".beautyContent"));
            var ImgUrl = imgProduct[i].DefaultPictureModel.ImageUrl;
            var ImgDesigner=imgProduct[i].CustomProperties.DesignerName;
            var ImgName=imgProduct[i].Name;
            var ImgPrice=imgProduct[i].ProductPrice.Price;
            var ImgId="window.location.href='../detailPages.html#"+imgProduct[i].Id+"'";
            var imgData2 = '<img src="' + ImgUrl + '" alt=""> ';
            $(".model").eq(i).find("a").attr("onclick",ImgId).html(imgData2);
            $(".model").eq(i).find(".designer").html(ImgDesigner);
            $(".model").eq(i).find(".name").html(ImgName);
            $(".model").eq(i).find(".price").html(ImgPrice);
        }
    });


});