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
        var matchArr = [{"id": 221}, {"id": 517}, {"id": 680}, {"id": 155}];
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
            }).done(function (result) {
                var imgUrl=result.Collage.PictureUrl;
                var imgPic='<img src="" data-original="'+imgUrl+'" class="lazy">';
                var picDescription=result.Collage.Description;
                var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
                var buyerPic='<img src="" data-original="'+buyerUrl+'" class="lazy">';
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

        var relaxSpringArr=[
            {"designer":"STELLA MCCARTNEY KIDS","name":"\"MUNSTER\" DENIM PIANO PRINT CREEPER SHOES BLUE, WHITE & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring1.jpg","price":"919.10","ID":"16755"},
            {"designer":"STELLA MCCARTNEY KIDS","name":"\"RAE\" BABIES EMBROIDERED DENIM ESPADRILLES BLUE MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring2.jpg","price":"791.70","ID":"16751"},
            {"designer":"SOPHIA WEBSTER","name":"\"CHIARA\" BUTTERFLY MINI ROSE GOLD SHOES","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring3.jpg","price":"1774.50","ID":"16361"},
            {"designer":"CHLOE","name":"SCALLOPED BALLERINA PUMPS ROSE GOLD","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring4.jpg","price":"1228.50","ID":"18567"},
            {"designer":"MINI MELISSA","name":"GIRLS \"QUEEN\" BLUSH HEART PEEP TOE SHOES PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring5.jpg","price":"728.00","ID":"18948"},
            {"designer":"MINI MELISSA","name":"GIRLS \"QUEEN\" BLACK HEART PEEP TOE SHOES BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring6.jpg","price":"728.00","ID":"18950"},
            {"designer":"MINI MELISSA","name":"MINNIE ULTRAGIRL MINNIE & MICKEY MOUSE 'EARS' PUMPS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring7.jpg","price":"491.40","ID":"18932"},
            {"designer":"MINI MELISSA","name":"MINI ULTRAGIRL MINNIE & MICKEY MOUSE 'EARS' PUMPS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring8.jpg","price":"491.40","ID":"18929"},
            {"designer":"MINI MELISSA","name":"MINI ULTRAGIRL MINNIE & MICKEY MOUSE PUMPS RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring9.jpg","price":"473.20","ID":"18936"},
            {"designer":"MINI MELISSA","name":"MINI ULTRAGIRL MINNIE & MICKEY MOUSE 'EARS' PUMPS RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring10.jpg","price":"491.40","ID":"18931"},
            {"designer":"MINI MELISSA","name":"MINI ULTRAGIRL MINNIE & MICKEY PUMPS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring11.jpg","price":"473.20","ID":"18940"},
            {"designer":"SOPHIA WEBSTER","name":"\"CHIARA\" BUTTERFLY MINI BLACK & TEAL SHOES","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring12.jpg","price":"1365.00","ID":"16364"},
            {"designer":"SOPHIA WEBSTER","name":"\"CHIARA\" MINI PINK GLITTER SHOES","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring13.jpg","price":"1365.00","ID":"16363"},
            {"designer":"GUCCI","name":"GIRLS \"RABBIT\" GLITTER VECLRO STRAP SNEAKERS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring14.jpg","price":"1956.50","ID":"18179"},
            {"designer":"FENDI","name":"SLIP-ON SHOES WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring15.jpg","price":"2184.00","ID":"20722"},
            {"designer":"VEJA","name":"\"ESPLAR\" WHITE VELCRO LEATHER BISOU TRAINERS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring16.jpg","price":"691.60","ID":"17264"},
            {"designer":"VEJA","name":"\"ESPLAR\" SMALL LEATHER VELCRO TRAINERS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring17.jpg","price":"646.10","ID":"17321"},
            {"designer":"VEJA","name":"\"ESPLAR\" SMALL VELCRO BLEND TRAINERS BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring18.jpg","price":"655.20","ID":"17323"},
            {"designer":"VEJA","name":"\"ESPLAR\" SMALL VELCRO LEATHER TRAINERS SILVER","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring19.jpg","price":"737.10","ID":"17324"},
            {"designer":"VEJA","name":"\"ESPLAR\" SMALL VELCRO LEATHER GOLD TRAINERS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring20.jpg","price":"737.10","ID":"17263"},
            {"designer":"DOLCE & GABBANA","name":"BOYS \"SMILE\" EMBROIDERED APPLIQUE SLIP ON SHOES BLACK & WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring21.jpg","price":"2129.40","ID":"16945"},
            {"designer":"GIUSEPPE ZANOTTI","name":"'COBY' HIGH TOP VELVET CLASP TRAINERS NAVY & GOLD","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring22.jpg","price":"3094.00","ID":"16452"},
            {"designer":"DOLCE & GABBANA","name":"GIRLS PINEAPPLE PRINT ESPADRILLES PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring23.jpg","price":"964.60","ID":"16980"},
            {"designer":"DOLCE & GABBANA","name":"GIRLS ROSE PRINT ESPADRILLES PINK & BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring24.jpg","price":"964.60","ID":"20789"},
            {"designer":"DOLCE & GABBANA","name":"GIRLS \"CARRETTO CON ROSE\" PRINT ESPADRILLES MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring25.jpg","price":"964.60","ID":"16976"},
            {"designer":"DOLCE & GABBANA","name":"BABIES APPLIQUE CAT LEOPARD PRINT BALLERINA PUMPS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!relaxSpring26.jpg","price":"1355.90","ID":"17081"},

        ];

        var newModel=$(".recommendPro").find(".imModel").eq(0);
        $(".recommendPro").empty();
        for(var j=0;j<relaxSpringArr.length;j++){
            var designer=relaxSpringArr[j].designer;
            var name=relaxSpringArr[j].name;
            var price="¥"+relaxSpringArr[j].price;
            var proId="cloudokids://product/"+relaxSpringArr[j].ID;
            var imgLink=relaxSpringArr[j].link;
            var imgData='<img data-original="'+imgLink+'" class="lazy">';
            newModel.clone(true).appendTo($(".recommendPro"));
            $(".imModel").eq(j).find("a").attr("href",proId).html(imgData);
            $(".imModel").eq(j).find(".designer").html(designer);
            $(".imModel").eq(j).find(".proName").html(name);
            $(".imModel").eq(j).find(".price").html(price);
        }
        $("img.lazy").lazyload(
            {threshold : 500}
        );

    });
