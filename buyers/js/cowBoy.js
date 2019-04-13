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
    var matchArr = [{"id": 451}, {"id": 509}, {"id": 515}, {"id": 330}];
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
            var imgPic='<img src="'+imgUrl+'">';
            var picDescription=result.Collage.Description;
            var buyerUrl=result.Collage.CustomerProfileOverview.AvatarUrl;
            var buyerPic='<img src="'+buyerUrl+'">';
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
    var cowImg=[
        {"designer":"GUCCI","name":"APPLIQUE BADGES ACID WASH DENIM JACKET BLUE MULTI","link":"img/453310-xr383-4211.png","price":"5096.00","ID":"18226"},
        {"designer":"GUCCI","name":"TIGER APPLIQUE ACID WASH JEANS BLUE","link":"img/453303-xr508-4232.png","price":"1638.00","ID":"18234"},
        {"designer":"DOLCE & GABBANA","name":"BABY BOYS DG FAMILY BLUE JACKET","link":"img/baby-boys-dg-family-blue-jacket.png","price":"2411.50","ID":"16149"},
        {"designer":"DOLCE & GABBANA","name":"BABIES DENIM LOOK JOGGERS BLUE","link":"img/babies-denim-look-joggers-blue.png","price":"859.95","ID":"16160"},
        {"designer":"LITTLE MARC JACOBS","name":"CHARMS AND APPLIQUE DENIM JACKET BLUE","link":"img/w16071-z10.png","price":"1,137.50","ID":"18474"},
        {"designer":"LITTLE MARC JACOBS","name":"EMBELLISHED DENIM SKIRT BLUE","link":"img/w13064-z10.png","price":"718.90","ID":"18468"},
        {"designer":"MSGM","name":"EMBELLISHED COLLAR DENIM WAISTCOAT BLUE","link":"img/009028.png","price":"1,337.70","ID":"19935"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"HULA DENIM SHORTS BLUE","link":"img/hula-denim-shorts-blue.png","price":"394.94","ID":"11370"},
        {"designer":"SOMEDAY SOON","name":"\"EMPIRE\" CHANGE THE WORLD TEXT PRINT DENIM JACKET BLUE","link":"img/72130156.png","price":"591.50","ID":"17913"},
        {"designer":"DOLCE & GABBANA","name":"\"BEST OF THE DAY\" APPLIQUE BADGE DENIM BERMUDA SHORTS DARK BLUE","link":"img/l41q71-ld594-b0339.png","price":"2,138.50","ID":"17122"},
        {"designer":"SONIA RYKIEL","name":"EMBROIDERED PATCH DENIM JACKET","link":"img/ss17-47302104401.png","price":"1,010.10","ID":"20546"},
        {"designer":"GUCCI","name":"BUTTERFLY APPLIQUE JEANS BLUE","link":"img/457173-xr430-4325.png","price":"1,865.50","ID":"18255"},
        {"designer":"BOBO CHOSES","name":"SMILING TENNIS RACKET PRINT SHORT DUNGAREES GREY","link":"img/117153.png","price":"609.70","ID":"17538"},
        {"designer":"FINGER IN THE NOSE","name":"DENIM DUNGAREE SKIRT GREY","link":"img/denim-dungaree-skirt-grey.png","price":"393.12","ID":"14604"},
        {"designer":"MSGM","name":"DENIM LOGO PATCH DUNGAREES BLUE","link":"img/denim-logo-patch-dungarees-blue.png","price":"786.24","ID":"15218"},
        {"designer":"LITTLE MARC JACOBS","name":"PATCH DUNGAREES DENIM BLUE","link":"img/patch-dungarees-denim-blue.png","price":"436.80","ID":"13037"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"KIRI\" NAVY CAMO PRINT VEST","link":"img/stella-mccartney-kids-kiri-girls-camo-print-vest-navy-blue.png","price":"445.90","ID":"16846"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"VOILETTE\" DENIM FLORAL EMBROIDERED BLOUSE","link":"img/stella-mccartney-kids-girls-denim-floral-embroidered-voiletta-blouse.png","price":"527.80","ID":"16828"},
        {"designer":"DOLCE & GABBANA","name":"BABIES APPLIQUE BADGES DARK DENIM BERMUDA SHORTS BLUE","link":"img/dolce-gabbana-babies-badges-denim-shorts-blue.png","price":"1,683.50","ID":"17043"},
        {"designer":"DOLCE & GABBANA","name":"APPLIQUE BADGES DENIM BERMUDA SHORTS BLUE","link":"img/dolce-gabbana-boys-badges-denim-bermuda-shorts.png","price":"1,956.50","ID":"17126"},
        {"designer":"CHLOE","name":"DISTRESSED DENIM SHORTS BLUE","link":"img/c14492-z10.png","price":"536.90","ID":"18405"},
        {"designer":"MSGM","name":"EMBROIDERED BIRD MOTIF DENIM SHORTS","link":"img/embroidered-bird-motif-denim-shorts.png","price":"578.76","ID":"12191"},
        {"designer":"LITTLE MARC JACOBS","name":"PATCH WORK DENIM SHORTS BLUE","link":"img/w24134-z10.png","price":"627.90","ID":"18512"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"\"MOSES\" DENIM DISTRESSED SHORTS BLUE","link":"img/stella-mccartney-kids-boys-moses-denim-shorts-blue.png","price":"482.30","ID":"16891"},
        {"designer":"GUCCI","name":"EMBROIDERED FLORAL DENIM SHORTS DARK BLUE MULTI","link":"img/457164-xr434-4289.png","price":"2,593.50","ID":"18254"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"GIRLS PATCH JEANS BLUE","link":"img/girls-patch-jeans-blue.png","price":"471.38","ID":"14776"},
        {"designer":"DIESEL","name":"DARRON DENIM SHORTS BLACK","link":"img/darron-denim-shorts-black.png","price":"338.52","ID":"12507"},
        {"designer":"IMPS & ELFS","name":"DENIM JEGGINGS NAVY","link":"img/denim-jeggings-navy.png","price":"218.40","ID":"12421"},
        {"designer":"DOLCE & GABBANA","name":"BABIES \"MAMBO\" APPLIQUE BADGE DENIM JEANS BLUE","link":"img/dolce-gabbana-babies-mambo-jeans-blue.png","price":"1,956.50","ID":"17038"},
        {"designer":"DOLCE & GABBANA","name":"DISTRESSED APPLIQUE DENIM JEANS BLUE","link":"img/distressed-applique-denim-jeans-blue.png","price":"1,879.15","ID":"13768"},
        {"designer":"DOLCE & GABBANA","name":"BABY GIRLS MOUSE PATCH JEANS BLUE","link":"img/baby-girls-mouse-patch-jeans-blue.png","price":"1,242.15","ID":"16094"},
        {"designer":"DOLCE & GABBANA","name":"GIRLS MOUSE PATCH JEANS BLUE","link":"img/girls-mouse-patch-jeans-blue.png","price":"1,879.15","ID":"16091"},
        {"designer":"DOLCE & GABBANA","name":"EMBROIDERED JAZZ MUSICIAN DENIM JEANS BLUE","link":"img/embroidered-jazz-musician-denim-jeans-blue.png","price":"1,683.50","ID":"20785"},
        {"designer":"LITTLE MARC JACOBS","name":"GIRLS TWO TONE DENIM TROUSERS BLUE","link":"img/girls-two-tone-denim-trousers-blue.png","price":"371.28","ID":"10212"},
        {"designer":"FENDI","name":"BOYS REGULAR FIT MONSTER FACE JEANS BLUE","link":"img/boys-regular-fit-monster-face-jeans-blue.png","price":"1,037.40","ID":"14572"},
        {"designer":"DIESEL","name":"FADED 'SLEENKER' DENIM JOG JEANS BLUE","link":"img/faded-sleenker-denim-jog-jeans-blue.png","price":"349.44","ID":"14310"},
        {"designer":"DIESEL","name":"SLEENKER' JOG JEANS NAVY","link":"img/sleenker-jog-jeans-navy.png","price":"464.10","ID":"14311"},
        {"designer":"KARL LAGERFELD KIDS","name":"SLIM LEG DENIM JEANS NAVY","link":"img/slim-leg-denim-jeans-navy.png","price":"338.52","ID":"13141"},
        {"designer":"RALPH LAUREN","name":"SLIM LEG DENIM JEANS LIGHT GREY","link":"img/slim-leg-denim-jeans-light-grey.png","price":"327.60","ID":"14036"},
        {"designer":"MSGM","name":"DISTRESSED FADED DENIM PATCH JEANS GREY","link":"img/distressed-faded-denim-patch-jeans-grey.png","price":"660.66","ID":"15248"},
        {"designer":"IMPS & ELFS","name":"BABIES SLIM JEAN STYLE TROUSERS GREY","link":"img/babies-slim-jean-style-trousers-grey.png","price":"229.32","ID":"14919"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"GIRLS LOGO JEANS GREY","link":"img/girls-logo-jeans-grey.png","price":"471.38","ID":"14764"},
        {"designer":"DOLCE & GABBANA","name":"DENIM JEANS GREY","link":"img/denim-jeans-grey.png","price":"923.65","ID":"13840"},
        {"designer":"DOLCE & GABBANA","name":"WASHED BLACK DENIM JEANS","link":"img/washed-black-denim-jeans.png","price":"1,228.50","ID":"13860"},
        {"designer":"JUNIOR GAULTIER","name":"SLIMAN REGULAR FIT JEANS BLACK","link":"img/sliman-regular-fit-jeans-black.png","price":"382.20","ID":"13225"},
        {"designer":"I DIG DENIM","name":"GIRLS 'RUBY' JEANS BLACK","link":"img/girls-ruby-jeans-black.png","price":"354.90","ID":"14855"},
        {"designer":"BILLYBANDIT","name":"DENIM JEANS BLACK","link":"img/denim-jeans-black.png","price":"248.43","ID":"14192"},
        {"designer":"JUNIOR GAULTIER","name":"DENIM JOGGER COMBO TROUSERS BLACK","link":"img/denim-jogger-combo-trousers-black.png","price":"404.04","ID":"14097"},
        {"designer":"BURBERRY","name":"SKINNY JEANS BLACK","link":"img/burberry-boys-skinny-jeans-black.png","price":"864.50","ID":"20734"},
        {"designer":"BILLYBANDIT","name":"SLIM LEG DENIM JEANS BLACK","link":"img/slim-leg-denim-jeans-black.png","price":"174.72","ID":"14190"},
        {"designer":"SONIA RYKIEL","name":"EMBROIDERED PATCH DENIM SATCHEL","link":"img/embroidered-patch-denim-satchel.png","price":"664.30","ID":"20825"},
        {"designer":"KENZO","name":"BAD' KENZO LOGO CAP DENIM BLUE","link":"img/kenzo-kids-bad-logo-cap-denim-blue.png","price":"291.20","ID":"19179"}
    ];
    var cowModel=$(".cowContent").find(".imModel").eq(0);
    $(".cowContent").empty();
    for(var j=0;j<cowImg.length;j++){
        var designer=cowImg[j].designer;
        var name=cowImg[j].name;
        var price="¥"+cowImg[j].price;
        var proId="cloudokids://product/"+cowImg[j].ID;
        var imgLink=cowImg[j].link;
        var imgData='<img src="'+imgLink+'">';
        cowModel.clone(true).appendTo($(".cowContent"));
        $(".imModel").eq(j).find("a").attr("href",proId).html(imgData);
        $(".imModel").eq(j).find(".designer").html(designer);
        $(".imModel").eq(j).find(".proName").html(name);
        $(".imModel").eq(j).find(".price").html(price);
    }
});
