function refresh() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 1080) {
        document.documentElement.style.fontSize = 1080 / 10.8 + "px";
    } else {
        document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
    }
}
refresh();
$(function(){
    var matchArr = [{"id": 601}, {"id": 535}];
    var model = $(".recommendContent").find(".recommend-wrap");
    $(".recommendContent").empty();
    for(var i=0;i<matchArr.length;i++){
        model.clone(true).appendTo($(".recommendContent"));
        var matchId=matchArr[i].id;
        $.ajax({
            url: H5_AJAX_HTTP_URL,
            dataType: "json",
            async: false,
            data: {
                interfaceName: "GetCollage",
                customerAccessKey: "guest",
                collageId: matchId
            }
        }).done(function (data) {
            var result = data;
            var imgUrl=result.Collage.PictureUrl;
            var imgPic='<img data-original="'+imgUrl+'" class="lazy">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img data-original="'+buyerUrl+'" class="lazy">';
            var imgLink="cloudokids://collage/"+result.Collage.Id;
            var buyerId="cloudokids://buyer/"+result.Collage.CustomerProfileOverview.Id;
            var buyerName=result.Collage.CustomerProfileOverview.Username;
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendPic").find("a").attr("href",imgLink).html(imgPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".recommendWords").html(picDescription);
            $(".recommend-wrap").eq(i).find(".recommend").find(".headPortrait").find("a").attr("href",buyerId);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userProtrait").html(buyerPic);
            $(".recommend-wrap").eq(i).find(".recommend").find(".userName").html(buyerName);
            $(".recommend-wrap").eq(i).find(".clickCheck").find("a").attr("href",imgLink);
        })
    }

    var classArr=[
        {"designer":"SIERRA JULIAN","name":"MILANO PRINTED T-SHIRT GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner1.jpg","price":"300.30","ID":"12632"},
        {"designer":"SIERRA JULIAN","name":"MOLINO PRINTED T-SHIRT GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner2.jpg","price":"234.78","ID":"12619"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"ARLOW\" STELLA TOURS PRINT T-SHIRT PALE BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner3.jpg","price":"427.70","ID":"16799"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"ARROW\" STELLA TOURS BACKPACK PRINT WHITE T-SHIRT MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner4.jpg","price":"427.70","ID":"16895"},
        {"designer":"JUNIOR GAULTIER","name":"LONG SLEEVED JACKET PRINT T-SHIRT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner5.jpg","price":"234.78","ID":"13984"},
        {"designer":"KARL LAGERFELD KIDS","name":"SUIT PRINTED T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner6.jpg","price":"174.72","ID":"13130"},
        {"designer":"SIERRA JULIAN","name":"MOLO PRINTED T-SHIRT YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner7.jpg","price":"300.30","ID":"12635"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"VALENTINE FLORAL NECKLACE VEST YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner8.jpg","price":"229.32","ID":"11359"},
        {"designer":"SIERRA JULIAN","name":"MAPRIO PRINTED T-SHIRT ORANGE AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner9.jpg","price":"300.30","ID":"12634"},
        {"designer":"LITTLE MARC JACOBS","name":"BADGE PRINT T-SHIRT DRESS RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner10.jpg","price":"536.90","ID":"18465"},
        {"designer":"SIERRA JULIAN","name":"MASSIMO PRINTED T-SHIRT BLUE AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner11.jpg","price":"327.60","ID":"12626"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"SPLASH\" STRIPE PIRATE PRINT SWIM T-SHIRT BLUE, WHITE & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner12.jpg","price":"536.90","ID":"16794"},
        {"designer":"SIERRA JULIAN","name":"MILANO PRINTED T-SHIRT BLACK AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner13.jpg","price":"300.30","ID":"12628"},
        {"designer":"SIERRA JULIAN","name":"MIKER PRINTED T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner14.jpg","price":"300.30","ID":"12630"},
        {"designer":"LITTLE MARC JACOBS","name":"HEART BAG PRINT DRESS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner15.jpg","price":"536.90","ID":"18466"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"COWGIRL DRESS IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner16.jpg","price":"363.09","ID":"14705"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"VALENTINE STRIPE ALOHA VEST BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner17.jpg","price":"229.32","ID":"11357"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"BABIES CASSIDY STRIPE FLORAL BODYSUIT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner18.jpg","price":"254.80","ID":"11530"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"KIT\" SHORT SLEEVED EXPLORER PRINT ROMPER SUIT IVORY MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner19.jpg","price":"391.30","ID":"16860"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"LOUIE PAJAMA SET GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner20.jpg","price":"394.94","ID":"11500"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"BONGO\" SHORT SLEEVED BAND PRINT DRESS WHITE, BLACK & MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner21.jpg","price":"500.50","ID":"16869"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"ARLO\" ONE MAN BAND PRINT T-SHIRT WITH BADGES WHITE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!interestDesigner22.jpg","price":"427.70","ID":"16876"},
    ];

    var cowModel=$(".cowContent").find(".imModel").eq(0);
    $(".cowContent").empty();
    for(var j=0;j<classArr.length;j++){
        var designer=classArr[j].designer;
        var name=classArr[j].name;
        var price="¥"+classArr[j].price;
        var proId="cloudokids://product/"+classArr[j].ID;
        var imgLink=classArr[j].link;
        var imgData='<img data-original="'+imgLink+'" class="lazy">';
        cowModel.clone(true).appendTo($(".cowContent"));
        $(".imModel").eq(j).find("a").attr("href",proId).html(imgData);
        $(".imModel").eq(j).find(".designer").html(designer);
        $(".imModel").eq(j).find(".proName").html(name);
        $(".imModel").eq(j).find(".price").html(price);
    }
    $("img.lazy").lazyload(
        {threshold : 500}
    );



});
