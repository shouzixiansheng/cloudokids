/**
 * Created by admin on 2017/4/17.
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
    var fashionArr=[
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece3.jpg","name":"'MOUJIK'S BOWL' PRINT T-SHIRT IVORY","designer":"TINY COTTONS","price":"245.70","ID":"19712","newPrice":"221.13"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece4.jpg","name":"BLUE SURFER PRINT T-SHIRT WHITE","designer":"IL GUFO","price":"400.40","ID":"10707","newPrice":"240.24"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece7.jpg","name":"PINEAPPLE PRINT T-SHIRT ORANGE MULTI","designer":"BILLYBANDIT","price":"227.50","ID":"18697","newPrice":"204.75"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece9.jpg","name":"SHORT SLEEVED SHARK & TEDDY PRINT T-SHIRT MULTI","designer":"MOSCHINO KID","price":"646.10","ID":"19337","newPrice":"581.49"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece11.jpg","name":"'LAS TORTOLAS' MONKEY PRINT TANK TOP BLACK","designer":"MARCELO BURLON","price":"764.40","ID":"20017","newPrice":"687.95"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece12.jpg","name":"LEOPOL STRIPE POLO SHIRT NAVY","designer":"PAUL SMITH JUNIOR","price":"509.60","ID":"13173","newPrice":"305.76"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece13.jpg","name":"SHORT SLEEVED SHIRT WHITE","designer":"BOSS","price":"455.90","ID":"18672","newPrice":"401.31"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece14.jpg","name":"STRIPE SLEEVE SHIRT WHITE","designer":"TRUSSARDI","price":"546.00","ID":"10571","newPrice":"327.60"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece16.jpg","name":"DENIM SHORTS WHITE","designer":"KARL LAGERFELD KIDS","price":"482.30","ID":"10723","newPrice":"289.38"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece17.jpg","name":"BABIES COTTON SHORTS TURQUOISE BLUE","designer":"BILLYBANDIT","price":"300.30","ID":"10466","newPrice":"180.18"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece18.jpg","name":"BLUE BERMUDA SHORTS","designer":"FENDI","price":"1019.20","ID":"12831","newPrice":"917.28"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece19.jpg","name":"PATCH WORK DENIM SHORTS BLUE","designer":"LITTLE MARC JACOBS","price":"627.90","ID":"18512","newPrice":"565.11"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece20.jpg","name":"'6' APPLIQUE ARROW DENIM JEANS CHARCOAL GREY","designer":"IMPS & ELFS","price":"364.00","ID":"18881","newPrice":"327.60"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece22.jpg","name":"POP' PRINTED SWEATSHIRT GREY","designer":"GARDNER AND THE GANG","price":"382.20","ID":"15839","newPrice":"229.32"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece23.jpg","name":"BAROQUE PRINT SHIRT WHITE","designer":"YOUNG VERSACE","price":"1110.20","ID":"18374","newPrice":"999.18"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece24.jpg","name":"CHECK SHIRT GREEN","designer":"PAADE MODE","price":"564.20","ID":"15076","newPrice":"338.52"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece25.jpg","name":"POLKA DOT POCKET SQUARE DETAIL CHECK SUIT JACKET GREY","designer":"ARCH & LINE","price":"1255.80","ID":"19725","newPrice":"1130.22"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece26.jpg","name":"CHECK PRINT SUIT TROUSERS GREY & WHITE","designer":"ARCH & LINE","price":"919.10","ID":"19724","newPrice":"827.19"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece29.jpg","name":"LOGO SLOGAN ZIP SWEATSHIRT GREY","designer":"DSQUARED2","price":"1055.60","ID":"11245","newPrice":"633.36"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece31.jpg","name":"FABRICE JACKET BLUE","designer":"MONCLER","price":"1501.50","ID":"10978","newPrice":"1351.35"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece33.jpg","name":"POCKET DETAIL BOMBER JACKET KHAKI GREEN","designer":"ARCH & LINE","price":"919.10","ID":"18135","newPrice":"827.19"},

    ];
    var gucciModel=$("#twoFour").find(".imModel").eq(0);
    $("#twoFour").empty();
    for(var i=0;i<fashionArr.length;i++){
        var designer=fashionArr[i].designer;
        var name=fashionArr[i].name;
        var price="¥"+fashionArr[i].price;
        var proId="window.location.href='../detailPages.html#"+fashionArr[i].ID+"'";
        var imgLink=fashionArr[i].link;
        var imgData='<img src="'+imgLink+'" data-original="'+imgLink+'" class="lazy">';
        var newPrice ="¥"+fashionArr[i].newPrice;
        gucciModel.clone(true).appendTo($("#twoFour"));
        $("#twoFour").children(".imModel").eq(i).find("a").attr("onclick",proId).html(imgData);
        $("#twoFour").children(".imModel").eq(i).find(".designer").html(designer);
        $("#twoFour").children(".imModel").eq(i).find(".proName").html(name);
        $("#twoFour").children(".imModel").eq(i).find(".price").html(price);
        $("#twoFour").children(".imModel").eq(i).find(".newPrice").html(newPrice);
    }


    var fourSixArr=[
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece34.jpg","name":"SUGAR SKULL T-SHIRT WHITE","designer":"HYDROGEN","price":"418.60","ID":"11945","newPrice":"251.16"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece35.jpg","name":"ARCADE GAME PRINT T-SHIRT GREY","designer":"LITTLE MARC JACOBS","price":"327.60","ID":"10164","newPrice":"196.56"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece37.jpg","name":"PANDA PRINT T-SHIRT BLUE","designer":"AU JOUR LE JOUR","price":"455.00","ID":"13346","newPrice":"318.50"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece39.jpg","name":"PIRATE BANDANA PRINT T-SHIRT NAVY","designer":"JUNIOR GAULTIER","price":"354.90","ID":"13217","newPrice":"212.94"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece40.jpg","name":"MOLO PRINTED T-SHIRT YELLOW","designer":"SIERRA JULIAN","price":"500.50","ID":"12635","newPrice":"300.30"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece42.jpg","name":"BLACK 'MADOC' T-SHIRT","designer":"LOUD APPAREL","price":"273.00","ID":"11830","newPrice":"191.10"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece45.jpg","name":"POLO T-SHIRT WHITE","designer":"STONE ISLAND","price":"482.30","ID":"12336","newPrice":"289.38"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece46.jpg","name":"MAGLIA POLO SHIRT OFF-WHITE","designer":"MONCLER","price":"546.00","ID":"11107","newPrice":"491.40"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece47.jpg","name":"MY STYLE' LOGO PATCH POLO SHIRT WHITE","designer":"PHILIPP PLEIN","price":"1001.00","ID":"12328","newPrice":"600.60"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece49.jpg","name":"LOGO PRINT POLO SHIRT BLUE & ORANGE","designer":"MOSCHINO KID","price":"564.20","ID":"19394","newPrice":"507.78"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece50.jpg","name":"SHORT SLEEVED EMBROIDERED TIGER HEAD SHIRT BLUE MULTI","designer":"GUCCI","price":"3321.50","ID":"18158","newPrice":"2989.35"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece51.jpg","name":"CHECK DETAIL CHINO SHORTS NAVY","designer":"BURBERRY","price":"728.00","ID":"20454","newPrice":"655.20"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece52.jpg","name":"STRIPED INITIAL T-SHIRT BEIGE","designer":"CARRÉMENT BEAU","price":"182.00","ID":"13071","newPrice":"109.20"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece55.jpg","name":"\'TAYLOR\' BRUSH STROKES PRINT SWIMWEAR","designer":"STELLA MCCARTNEY KIDS","price":"500.50","ID":"16791","newPrice":"450.45"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece56.jpg","name":"OFF WHITE GRANDAD COLLAR SHIRT","designer":" TREEHOUSE","price":"345.80","ID":"12015","newPrice":"242.06"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece57.jpg","name":"LONG SLEEVED CHEETAH & CACTUS PRINT SHIRT WITH MULTICOLOR BOW TIE WHITE & NAVY","designer":"BILLYBANDIT","price":"409.50","ID":"18683","newPrice":"368.55"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece59.jpg","name":"LAYERED SPORT SHORTS BLACK","designer":"YOUNG VERSACE","price":"1155.70","ID":"18376","newPrice":"1040.13"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece60.jpg","name":"CLASSIC STRIPE BLAZER BLUE & WHITE","designer":"CARRÉMENT BEAU","price":"682.50","ID":"18552","newPrice":"614.25"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece61.jpg","name":"STRIPED SHORTS BLUE & WHITE","designer":"CARRÉMENT BEAU","price":"354.90","ID":"18550","newPrice":"319.41"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece62.jpg","name":"LONG SLEEVED SEQUIN EMBELLISHED JACKET SILVER","designer":"DSQUARED2","price":"3549.00","ID":"16314","newPrice":"3194.10"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece63.jpg","name":"BOYS REGULAR FIT MONSTER FACE JEANS BLUE","designer":"FENDI","price":"1729.00","ID":"14572","newPrice":"1037.40"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece65.jpg","name":"CAR PATTERN JOGGER TROUSERS GREY","designer":"EMILE ET IDA","price":"455.00","ID":"12704","newPrice":"318.50"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece66.jpg","name":"WINGS PRINTED FLEECE ZIP HOODIE GREY","designer":"MARCELO BURLON","price":"1466.90","ID":"15617","newPrice":"868.14"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece68.jpg","name":"LEOPARD HOODED WATERPROOF JACKET WITH EYE MASK BLUE & NEON GREEN","designer":"BILLYBANDIT","price":"409.50","ID":"18606","newPrice":"368.55"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece69.jpg","name":"JOGGER TROUSERS BLUE","designer":"JOHN GALLIANO","price":"764.40","ID":"12456","newPrice":"458.64"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece70.jpg","name":"THUMBS UP 1984 HOODED ZIP SWEATSHIRT GREY, BLUE & RED","designer":"LITTLE MARC JACOBS","price":"591.50","ID":"18502","newPrice":"532.35"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece71.jpg","name":"SKULL AND STAR HOODIE GREY","designer":"PHILIPP PLEIN","price":"2575.30","ID":"16246","newPrice":"1545.18"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece72.jpg","name":"STRIPE DETAIL CARDIGAN NAVY, GREEN & RED","designer":"GUCCI","price":"1865.50","ID":"18225","newPrice":"1678.95"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece73.jpg","name":"TWO TONE DROP CROTCH TROUSERS BLACK","designer":"LOUD APPAREL","price":"409.50","ID":"15641","newPrice":"286.65"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece74.jpg","name":"\'LAGUNAS BRAVAS\' FEATHER PRINT LEGGINGS BLACK & WHITE","designer":"MARCELO BURLON","price":"955.50","ID":"20014","newPrice":"859.95"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece75.jpg","name":"DROP CROTCH FRINGE TROUSERS BLACK AND GREY","designer":"LOUD APPAREL","price":"345.80","ID":"16144","newPrice":"242.06"},

    ];

    var gucciModel_a=$("#fourSix").find(".imModel").eq(0);
    $("#fourSix").empty();
    for(var i=0;i<fourSixArr.length;i++){
        var designer=fourSixArr[i].designer;
        var name=fourSixArr[i].name;
        var price="¥"+fourSixArr[i].price;
        var proId="window.location.href='../detailPages.html#"+fourSixArr[i].ID+"'";
        var imgLink=fourSixArr[i].link;
        var imgData='<img src="'+imgLink+'" data-original="'+imgLink+'" class="lazy">';
        var newPrice ="¥"+fourSixArr[i].newPrice;
        gucciModel_a.clone(true).appendTo($("#fourSix"));
        $("#fourSix").children(".imModel").eq(i).find("a").attr("onclick",proId).html(imgData);
        $("#fourSix").children(".imModel").eq(i).find(".designer").html(designer);
        $("#fourSix").children(".imModel").eq(i).find(".proName").html(name);
        $("#fourSix").children(".imModel").eq(i).find(".price").html(price);
        $("#fourSix").children(".imModel").eq(i).find(".newPrice").html(newPrice);
    }

    var sixEightArr=[
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-1.jpg","name":"SICILLIAN WESTERN T-SHIRT RED","designer":"DOLCE & GABBANA","price":"1137.50","ID":"16092","newPrice":"796.25"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-2.jpg","name":"LOGO PRINT JERSEY SHORTS RED","designer":"DSQUARED2","price":"828.10","ID":"16354","newPrice":"745.29"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-3.jpg","name":"CLASSIC POLO SHIRT BLUE","designer":"MONCLER","price":"546.00","ID":"11100","newPrice":"491.40"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-4.jpg","name":"MOLLETON' SWEAT SHORTS WHITE","designer":"MONCLER","price":"682.50","ID":"11121","newPrice":"614.25"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-6.jpg","name":"DENIM PRINTED JOGGER SHORTS BLUE","designer":"JUNIOR GAULTIER","price":"518.70","ID":"13232","newPrice":"311.22"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-7.jpg","name":"RIPPED T- SHIRT GREY","designer":"NUNUNU","price":"336.70","ID":"19549","newPrice":"303.03"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-8.jpg","name":"SPECKLE PRINT BERMUDA SHORTS NAVY, RED & BLUE","designer":"LANVIN","price":"1556.10","ID":"19081","newPrice":"1400.49"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-9.jpg","name":"SICILIAN GARDENS' T-SHIRT GREEN","designer":"DOLCE & GABBANA","price":"1137.50","ID":"16035","newPrice":"796.25"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-10.jpg","name":"LUCAS CHINO SHORTS BEIGE","designer":"STELLA MCCARTNEY KIDS","price":"491.40","ID":"11487","newPrice":"343.98"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-11.jpg","name":"LOGO WRITING T-SHIRT GREEN","designer":"DIESEL","price":"209.30","ID":"12590","newPrice":"125.58"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-12.jpg","name":"BERMUDA COTTON SHORTS BLUE","designer":"BILLYBANDIT","price":"254.80","ID":"10372","newPrice":"152.88"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-13.jpg","name":"PATTERNED T-SHIRT NAVY","designer":"PAUL SMITH JUNIOR","price":"327.60","ID":"16049","newPrice":"229.32"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-14.jpg","name":"FROG PRINT SWIM SHORTS NAVY","designer":"MINI RODINI","price":"318.50","ID":"17582","newPrice":"286.65"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-15.jpg","name":"RIVERA NAUTICAL SWIM SHORTS WHITE","designer":"SUNUVA","price":"327.60","ID":"12024","newPrice":"196.56"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-16.jpg","name":"JEAN VINCENT CAR STRIPE SWIMMING TRUNKS NAVY","designer":"MC2 SAINT BARTH","price":"436.80","ID":"12475","newPrice":"262.08"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-17.jpg","name":"LOGO JACKET BLUE","designer":"FENDI","price":"1883.70","ID":"12805","newPrice":"1130.22"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-18.jpg","name":"ATHLETIC TEXT PRINT SHORTS MUSTARD YELLOW","designer":"BOBO CHOSES","price":"227.50","ID":"17695","newPrice":"204.75"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-19.jpg","name":"LINEN SHIRT WHITE","designer":" IL GUFO","price":"564.20","ID":"10711","newPrice":"338.50"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-20.jpg","name":"HOLGER BADMINTON POLKA SHIRT IVORY","designer":"SOFT GALLERY","price":"364.00","ID":"12204","newPrice":"218.40"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-21.jpg","name":"PINSTRIPE BLAZER AND SHORTS SUIT SET GREY AND WHITE","designer":"TRUSSARDI","price":"1383.20","ID":"10574","newPrice":"829.92"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-22.jpg","name":"CONTRAST SLEEVE JACKET IVORY AND NAVY","designer":"YOUNG VERSACE","price":"1965.60","ID":"10280","newPrice":"1179.36"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-23.jpg","name":"GREYSCALE SNAKE PRINT RAIN JACKET","designer":"MARCELO BURLON","price":"1310.40","ID":"10028","newPrice":"786.24"},

    ];
    var gucciModel_b=$("#sixEight").find(".imModel").eq(0);
    $("#sixEight").empty();
    for(var i=0;i<sixEightArr.length;i++){
        var designer=sixEightArr[i].designer;
        var name=sixEightArr[i].name;
        var price="¥"+sixEightArr[i].price;
        var proId="window.location.href='../detailPages.html#"+sixEightArr[i].ID+"'";
        var imgLink=sixEightArr[i].link;
        var imgData='<img src="'+imgLink+'" data-original="'+imgLink+'" class="lazy">';
        var newPrice = sixEightArr[i].newPrice;
        gucciModel_b.clone(true).appendTo($("#sixEight"));
        $("#sixEight").children(".imModel").eq(i).find("a").attr("onclick",proId).html(imgData);
        $("#sixEight").children(".imModel").eq(i).find(".designer").html(designer);
        $("#sixEight").children(".imModel").eq(i).find(".proName").html(name);
        $("#sixEight").children(".imModel").eq(i).find(".price").html(price);
        $("#sixEight").children(".imModel").eq(i).find(".newPrice").html(newPrice);
    }

    var eightArr=[
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-25.jpg","name":"RENAISSANCE' TIGER AND STAR PRINT T-SHIRT GREY & MULTI","designer":"GUCCI","price":"773.50","ID":"18235","newPrice":"696.15"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-27.jpg","name":"LISH SHARK FISH T-SHIRT WHITE","designer":"PAUL SMITH JUNIOR","price":"354.90","ID":"13165","newPrice":"212.94"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-28.jpg","name":"SUNGLASSES HAT PRINTED T-SHIRT WHITE","designer":"MONCLER","price":"546.00","ID":"11096","newPrice":"491.40"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-29.jpg","name":"3D DINOSAUR T-SHIRT WITH 3D GLASSES WHITE","designer":"PAUL SMITH JUNIOR","price":"354.90","ID":"13167","newPrice":"212.94"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-30.jpg","name":"PATTERNED STRIPED T-SHIRT BLUE","designer":"DOLCE & GABBANA","price":"1046.50","ID":"10948","newPrice":"732.55"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-31.jpg","name":"HOUSE ILLUSTRATION PRINTED T-SHIRT YELLOW","designer":"DOLCE & GABBANA","price":"1046.50","ID":"10949","newPrice":"732.55"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-32.jpg","name":"BOYS HOUSE ILLUSTRATION T-SHIRT MULTI","designer":"DOLCE & GABBANA","price":"1228.50","ID":"13316","newPrice":"737.10"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-33.jpg","name":"PRINTED PATTERN SWIM SHORTS MULTI","designer":"DOLCE & GABBANA","price":"1064.70","ID":"10952","newPrice":"796.25"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-34.jpg","name":"COTTON SHORTS NAVY","designer":"BILLYBANDIT","price":"191.10","ID":"10390","newPrice":"114.66"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-35.jpg","name":"CHINO COTTON SHORTS GREEN","designer":"BILLYBANDIT","price":"254.80","ID":"10363","newPrice":"152.88"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-36.jpg","name":"DENIM BADGE SHORTS BLUE","designer":"DOLCE & GABBANA","price":"1528.80","ID":"10878","newPrice":"1070.16"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-37.jpg","name":"DALTON CAR PRINTED T-SHIRT GREEN AND BLACK","designer":"FINGER IN THE NOSE","price":"282.80","ID":"12918","newPrice":"169.26"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-38.jpg","name":"COMIC PRINTED SHORT SLEEVED CHAMBRAY SHIRT BLUE","designer":"BILLYBANDIT","price":"327.60","ID":"10377","newPrice":"196.56"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-39.jpg","name":"CONTRAST SLEEVE MEDUSA LOGO T-SHIRT","designer":"YOUNG VERSACE","price":"773.50","ID":"10273","newPrice":"464.10"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-40.jpg","name":"COTTON BERMUDA SHORTS YELLOW","designer":"BOSS","price":"500.50","ID":"10230","newPrice":"300.30"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-41.jpg","name":"FRONT FOLD TANK TOP GREY","designer":"NUNUNU","price":"300.30","ID":"11484","newPrice":"210.21"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-42.jpg","name":"BLAKE DENIM SHORTS YELLOW","designer":"STELLA MCCARTNEY KIDS","price":"491.40","ID":"11489","newPrice":"343.98"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-43.jpg","name":"MONKEY BIRDS PATTERN T-SHIRT RED","designer":"DOLCE & GABBANA","price":"1228.50","ID":"10900","newPrice":"859.95"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-44.jpg","name":"BERMUDA SHORTS POPPY RED","designer":"LITTLE MARC JACOBS","price":"473.20","ID":"10165","newPrice":"331.24"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-45.jpg","name":"PATTERNED MONKEY T-SHIRT BLUE","designer":"DOLCE & GABBANA","price":"1228.50","ID":"10872","newPrice":"859.95"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-46.jpg","name":"CONTRAST SWEAT SHORTS GREY","designer":"BILLYBANDIT","price":"236.60","ID":"10370","newPrice":"141.96"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-47.jpg","name":"LOGO PATCH SWEATSHIRT GREY","designer":"KARL LAGERFELD KIDS","price":"482.30","ID":"10728","newPrice":"289.38"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-48.jpg","name":"TRACKSUIT TROUSERS GREY","designer":"DSQUARED2","price":"828.10","ID":"11223","newPrice":"496.86"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-49.jpg","name":"LINEN SHIRT BLUE","designer":"SUNUVA","price":"354.90","ID":"12057","newPrice":"212.94"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-50.jpg","name":"TILTED SHORT SLEEVE SHIRT WITH BUNNY EARS POCKET GREEN","designer":"NOCH MINI","price":"555.10","ID":"17336","newPrice":"499.59"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-51.jpg","name":"LONG SLEEVED SHIRT WHITE","designer":"DOLCE & GABBANA","price":"1437.80","ID":"10862","newPrice":"1294.02"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-52.jpg","name":"SHORT SLEEVED CHECK SHIRT BLUE, BLACK & WHITE","designer":"BURBERRY","price":"773.50","ID":"20462","newPrice":"696.15"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-53.jpg","name":"LOGO SHIRT WHITE","designer":"DSQUARED2","price":"982.80","ID":"11228","newPrice":"589.68"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-54.jpg","name":"PEACE POLO SHIRT BLUE","designer":" MOSCHINO KID","price":"473.20","ID":"13492","newPrice":"331.24"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-56.jpg","name":"DARRON DENIM SHORTS BLACK","designer":"DIESEL","price":"564.20","ID":"12507","newPrice":"338.52"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-57.jpg","name":"BOMBER JACKET BLUE","designer":"DSQUARED2","price":"1965.60","ID":"11209","newPrice":"1179.36"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-58.jpg","name":"ANTON' SWEATPANTS BLACK","designer":"SOMEDAY SOON","price":"409.50","ID":"15295","newPrice":"286.65"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-59.jpg","name":"PIQUE COTTON BLAZER NAVY","designer":"CARRÉMENT BEAU","price":"573.30","ID":"10410","newPrice":"343.98"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-60.jpg","name":"DISTRESSED DENIM JEANS DARK BLUE","designer":"DOLCE & GABBANA","price":"1592.30","ID":"10941","newPrice":"1114.75"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-61.jpg","name":"NAVY AND STRIPE CARDIGAN","designer":" IL GUFO","price":"609.70","ID":"10708","newPrice":"365.80"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-62.jpg","name":"BELLY' GRAPHIC MULTI LOGO PRINT HOODIE GREY","designer":"KENZO","price":"591.50","ID":"19141","newPrice":"532.35"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-63.jpg","name":"LEE JACKET GREY","designer":"PAUL SMITH JUNIOR","price":"937.30","ID":"13198","newPrice":"562.38"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-64.jpg","name":"GREY HOODED ZIPPED SWEATSHIRT","designer":"MONCLER","price":"1046.50","ID":"15449","newPrice":"941.85"},
{"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece-65.jpg","name":"FLEECE SWEATSHIRT BLACK","designer":"KARL LAGERFELD KIDS","price":"555.10","ID":"13134","newPrice":"333.06"},
];

    var gucciModel_c=$("#eight").find(".imModel").eq(0);
    $("#eight").empty();
    for(var i=0;i<eightArr.length;i++){
        var designer=eightArr[i].designer;
        var name=eightArr[i].name;
        var price="¥"+eightArr[i].price;
        var proId="window.location.href='../detailPages.html#"+eightArr[i].ID+"'";
        var imgLink=eightArr[i].link;
        var imgData='<img src="'+imgLink+'" data-original="'+imgLink+'" class="lazy">';
        var newPrice = eightArr[i].newPrice;
        gucciModel_c.clone(true).appendTo($("#eight"));
        $("#eight").children(".imModel").eq(i).find("a").attr("onclick",proId).html(imgData);
        $("#eight").children(".imModel").eq(i).find(".designer").html(designer);
        $("#eight").children(".imModel").eq(i).find(".proName").html(name);
        $("#eight").children(".imModel").eq(i).find(".price").html(price);
        $("#eight").children(".imModel").eq(i).find(".newPrice").html(newPrice);
    }

    var accessoriesArr=[
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_1.jpg","name":"CLASSIC BACKPACK GREY","designer":"DOLCE & GABBANA","price":"1501.50","ID":"12974","newPrice":"1351.35"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_2.jpg","name":"SUMMER TRILBY STYLE HAT NAVY BLUE","designer":"LANVIN","price":"700.70","ID":"19075","newPrice":"630.30"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_3.jpg","name":"BUCKLE & DRAWSTRING BACKPACK RED","designer":"ARCH & LINE","price":"600.60","ID":"18149","newPrice":"540.54"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_4.jpg","name":"LOGO APPLIQUE BASEBALL CAP WHITE","designer":"MONCLER","price":"455.00","ID":"16624","newPrice":"409.50"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_6.jpg","name":"COTTON CAP GREY AND NAVY","designer":"MONCLER","price":"591.50","ID":"10844","newPrice":"532.35"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_7.jpg","name":"PAISLEY OWL CAP RED","designer":"DOLCE & GABBANA","price":"1228.50","ID":"10935","newPrice":"859.95"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_8.jpg","name":"BAD' KENZO LOGO CAP DENIM BLUE","designer":"KENZO","price":"291.20","ID":"19179","newPrice":"262.08"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_9.jpg","name":"SMILING TENNIS RACKET PRINT CYCLING CAP YELLOW","designer":"BOBO CHOSES","price":"245.70","ID":"17549","newPrice":"221.13"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_10.jpg","name":"CAMOUFLAGE BUCKET HAT GREEN","designer":"DSQUARED2","price":"828.10","ID":"11200","newPrice":"496.86"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_11.jpg","name":"SHOULDER BAG BLACK","designer":"BOSS","price":"573.30","ID":"13016","newPrice":"343.98"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_12.jpg","name":"MEDUSA BUCKLE NAVY & WHITE STRIPE BELT","designer":"YOUNG VERSACE","price":"819.00","ID":"10317","newPrice":"491.40"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_13.jpg","name":"POLKA DOT BOW TIE BLACK","designer":"DOLCE & GABBANA","price":"655.20","ID":"10866","newPrice":"589.68"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_14.jpg","name":"BOW TIE IVORY","designer":"DOLCE & GABBANA","price":"682.50","ID":"10863","newPrice":"614.25"},

    ]
    var gucciModel_c=$("#accessories").find(".imModel").eq(0);
    $("#accessories").empty();
    for(var i=0;i<accessoriesArr.length;i++){
        var designer=accessoriesArr[i].designer;
        var name=accessoriesArr[i].name;
        var price="¥"+accessoriesArr[i].price;
        var proId="window.location.href='../detailPages.html#"+accessoriesArr[i].ID+"'";
        var imgLink=accessoriesArr[i].link;
        var imgData='<img src="'+imgLink+'" data-original="'+imgLink+'" class="lazy">';
        var newPrice = accessoriesArr[i].newPrice;
        gucciModel_c.clone(true).appendTo($("#accessories"));
        $("#accessories").children(".imModel").eq(i).find("a").attr("onclick",proId).html(imgData);
        $("#accessories").children(".imModel").eq(i).find(".designer").html(designer);
        $("#accessories").children(".imModel").eq(i).find(".proName").html(name);
        $("#accessories").children(".imModel").eq(i).find(".price").html(price);
        $("#accessories").children(".imModel").eq(i).find(".newPrice").html(newPrice);
    }

    var shoesArr=[
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_15.jpg","name":"ALIX SANDALS NAVY BLUE","designer":"MONCLER","price":"1319.50","ID":"10961","newPrice":"1187.55"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_16.jpg","name":"LEATHER SANDALS NAVY BLUE","designer":"FENDI","price":"1565.20","ID":"12861","newPrice":"939.12"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_17.jpg","name":"PATTERNED SANDALS RED","designer":"DALS RED","price":"1319.50","ID":"10808","newPrice":"923.65"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_19.jpg","name":"BLABLA LEATHER CROSS SANDALS PURPLE","designer":"EASY PEASY","price":"427.70","ID":"12583","newPrice":"299.39"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_20.jpg","name":"DUDU TARA LEATHER SANDALS YELLOW","designer":" EASY PEASY","price":"473.20","ID":"12581","newPrice":"331.24"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_21.jpg","name":"LEATHER BROGUES WHITE AND BEIGE","designer":"BABYWALKER","price":"546.00","ID":"11264","newPrice":"382.20"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_22.jpg","name":"OLIVE DERBY SHOES MARMALADE TAN","designer":"YOUNG SOLES","price":"637.00","ID":"13569","newPrice":"445.90"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_23.jpg","name":"LACED TENNIS SHOES WHITE","designer":"BENSIMON","price":"209.30","ID":"12611","newPrice":"188.37"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_24.jpg","name":"LACED TENNIS SHOES BLACK","designer":"BENSIMON","price":"209.30","ID":"12612","newPrice":"188.37"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_25.jpg","name":"LEATHER HIGH TOP CONTRAST TRAINERS WHITE","designer":"YOUNG VERSACE","price":"1938.30","ID":"10313","newPrice":"1744.47"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_27.jpg","name":"IVY DONNA PATTERNED TRAINERS WHITE","designer":"MICHAEL KORS","price":"518.70","ID":"12511","newPrice":"311.22"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_28.jpg","name":"IVY LEXI HIGH TOP TRAINERS BEIGE","designer":"MICHAEL KORS","price":"655.20","ID":"12512","newPrice":"393.12"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_29.jpg","name":"SUEDE LEATHER LOAFERS PURPLE","designer":"BABYWALKER","price":"518.70","ID":"11281","newPrice":"363.09"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_30.jpg","name":"BOYS LEATHER HIGH TOP TRAINERS NAVY","designer":"GUCCI","price":"2002.00","ID":"14709","newPrice":"1401.40"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_31.jpg","name":"LEO STAR SLIP ON TRAINERS BLUE","designer":"STELLA MCCARTNEY KIDS","price":"928.20","ID":"11560","newPrice":"649.74"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_32.jpg","name":"BEACH PRINTED ESPADRILLES BLUE","designer":"DOLCE & GABBANA","price":"773.50","ID":"10799","newPrice":"541.45"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_33.jpg","name":"SUEDE LOGO SLIP ON TRAINERS YELLOW","designer":"FENDI","price":"1774.50","ID":"12860","newPrice":"1064.70"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_34.jpg","name":"LEATHER LOGO TRAINERS GREY AND BROWN","designer":"FENDI","price":"1883.70","ID":"12859","newPrice":"1130.22"},
        {"link":"http://img1.cloudokids.cn/buyers/our2017/lastPiece_35.jpg","name":"LOGO LEATHER TRAINERS YELLOW","designer":"FENDI","price":"1883.70","ID":"12858","newPrice":"1130.22"},

    ];
    var gucciModel_d=$("#shoes").find(".imModel").eq(0);
    $("#shoes").empty();
    for(var i=0;i<shoesArr.length;i++){
        var designer=shoesArr[i].designer;
        var name=shoesArr[i].name;
        var price="¥"+shoesArr[i].price;
        var proId="window.location.href='../detailPages.html#"+shoesArr[i].ID+"'";
        var imgLink=shoesArr[i].link;
        var imgData='<img src="'+imgLink+'" data-original="'+imgLink+'" class="lazy">';
        var newPrice = shoesArr[i].newPrice;
        gucciModel_d.clone(true).appendTo($("#shoes"));
        $("#shoes").children(".imModel").eq(i).find("a").attr("onclick",proId).html(imgData);
        $("#shoes").children(".imModel").eq(i).find(".designer").html(designer);
        $("#shoes").children(".imModel").eq(i).find(".proName").html(name);
        $("#shoes").children(".imModel").eq(i).find(".price").html(price);
        $("#shoes").children(".imModel").eq(i).find(".newPrice").html(newPrice);
    }
    jQuery(function($) {
        $(".goLike a").click(function() {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, 1000);
            return false;
        });
    });
    $("img.lazy").lazyload(
        {threshold : 500})
})
