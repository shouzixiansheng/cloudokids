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
    var fashionArr=[
        {"designer":"DOLCE & GABBANA","name":"HOUSE ILLUSTRATION PRINTED T-SHIRT YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt1.jpg","price":"723.55 ","ID":"10949","oldPrice":"1046.50 "},
        {"designer":"DOLCE & GABBANA","name":"DOG EMBROIDERED T-SHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt2.jpg","price":"1392.30 ","ID":"10887","oldPrice":"2320.50 "},
        {"designer":"LITTLE ELEVEN PARIS","name":"JUNGLEBOOK PRINTED T-SHIRT MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt3.jpg","price":"174.72 ","ID":"12528","oldPrice":"291.20 "},
        {"designer":"DOLCE & GABBANA","name":"MONKEY BIRDS PATTERN T-SHIRT RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt4.jpg","price":"859.95 ","ID":"10900","oldPrice":"1228.50 "},
        {"designer":"LITTLE ELEVEN PARIS","name":"KUNG FU PANDA 'SAVAGE' T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt5.jpg","price":"136.50 ","ID":"12526","oldPrice":"227.50 "},
        {"designer":"LITTLE ELEVEN PARIS","name":"BUGS BUNNY & DAFFY DUCK PRINTED T-SHIRT MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt6.jpg","price":"163.80 ","ID":"12538","oldPrice":"273.00 "},
        {"designer":"LITTLE ELEVEN PARIS","name":"TWEETY BIRD PRINT T-SHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt7.jpg","price":"136.50 ","ID":"12535","oldPrice":"227.50 "},
        {"designer":"LITTLE ELEVEN PARIS","name":"MADAGASCAR MARTI T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt8.jpg","price":"136.50 ","ID":"12523","oldPrice":"227.50 "},
        {"designer":"JOHN GALLIANO","name":"GAZETTE KOI FISH T-SHIRT BROWN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt9.jpg","price":"300.30 ","ID":"12447","oldPrice":"500.50 "},
        {"designer":"LITTLE ELEVEN PARIS","name":"JUNGLE BOOK PRINTED T-SHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt10.jpg","price":"174.72 ","ID":"12529","oldPrice":"291.20 "},
        {"designer":"SIERRA JULIAN","name":"MARTINO BEACH PRINTED T-SHIRT MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt11.jpg","price":"229.32 ","ID":"12640","oldPrice":"382.20 "},
        {"designer":"MILK ON THE ROCKS","name":"WEST COAST T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt12.jpg","price":"210.21 ","ID":"11436","oldPrice":"300.30 "},
        {"designer":"AU JOUR LE JOUR","name":"PANDA PRINT T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt13.jpg","price":"318.50 ","ID":"13346","oldPrice":"455.00 "},
        {"designer":"MILK ON THE ROCKS","name":"BABIES ICE CREAM TRUCK T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt14.jpg","price":"184.73 ","ID":"11422","oldPrice":"263.90 "},
        {"designer":"MILK ON THE ROCKS","name":"BEAR SUITCASE T-SHIRT YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt15.jpg","price":"210.21 ","ID":"11434","oldPrice":"300.30 "},
        {"designer":"SOFT GALLERY","name":"BASS TIGER T-SHIRT YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt16.jpg","price":"191.10 ","ID":"12244","oldPrice":"318.50 "},
        {"designer":"SIERRA JULIAN","name":"MOLO PRINTED T-SHIRT YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt17.jpg","price":"300.30 ","ID":"12635","oldPrice":"500.50 "},
        {"designer":"SIERRA JULIAN","name":"MILANO PRINTED T-SHIRT GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt18.jpg","price":"300.30 ","ID":"12632","oldPrice":"500.50 "},
        {"designer":"SIERRA JULIAN","name":"MAPRIO PRINTED T-SHIRT ORANGE AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt19.jpg","price":"300.30 ","ID":"12634","oldPrice":"500.50 "},
        {"designer":"SIERRA JULIAN","name":"MOLINO PRINTED T-SHIRT GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt20.jpg","price":"234.78 ","ID":"12619","oldPrice":"391.30 "},
        {"designer":"SIERRA JULIAN","name":"MASSIMO PRINTED T-SHIRT BLUE AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt21.jpg","price":"327.60 ","ID":"12626","oldPrice":"546.00 "},
        {"designer":"SIERRA JULIAN","name":"MILANO PRINTED T-SHIRT BLACK AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt22.jpg","price":"300.30 ","ID":"12628","oldPrice":"500.50 "},
        {"designer":"PAUL SMITH JUNIOR","name":"LISH SHARK FISH T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt23.jpg","price":"212.94 ","ID":"13165","oldPrice":"354.90 "},
        {"designer":"PAUL SMITH JUNIOR","name":"3D DINOSAUR T-SHIRT WITH 3D GLASSES WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!T-shirt24.jpg","price":"212.94 ","ID":"13167","oldPrice":"354.90 "},
        {"designer":"FENDI","name":"BAD BUGS STRIPE POLO SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt1.jpg","price":"573.30 ","ID":"12813","oldPrice":"955.50 "},
        {"designer":"BOSS","name":"MULTI STRIPE POLO SHIRT GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt2.jpg","price":"316.68 ","ID":"10226","oldPrice":"527.80 "},
        {"designer":"PAUL SMITH JUNIOR","name":"LEOPOL STRIPE POLO SHIRT NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt3.jpg","price":"305.76 ","ID":"13173","oldPrice":"509.60 "},
        {"designer":"BOSS","name":"COLOUR BLOCK POLO SHIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt4.jpg","price":"267.54 ","ID":"10224","oldPrice":"445.90 "},
        {"designer":"TRUSSARDI","name":"STRIPE SLEEVE SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt5.jpg","price":"327.60 ","ID":"10571","oldPrice":"546.00 "},
        {"designer":"TRUSSARDI","name":"WHITE AND NAVY LOGO CREST POLO SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt6.jpg","price":"300.30 ","ID":"10582","oldPrice":"500.50 "},
        {"designer":"TRUSSARDI","name":"WHITE AND RED POLO SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt7.jpg","price":"218.40 ","ID":"10557","oldPrice":"364.00 "},
        {"designer":"TRUSSARDI","name":"JERSEY COTTON POLO SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt8.jpg","price":"311.22 ","ID":"10576","oldPrice":"518.70 "},
        {"designer":"TRUSSARDI","name":"POLKA SHIRT WHITE AND NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt9.jpg","price":"365.82 ","ID":"10583","oldPrice":"609.70 "},
        {"designer":"TRUSSARDI","name":"POLO SHIRT PALE BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt10.jpg","price":"256.62 ","ID":"10565","oldPrice":"427.70 "},
        {"designer":"BOSS","name":"HAWAII PRINTED POLO SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt11.jpg","price":"316.68 ","ID":"10236","oldPrice":"527.80 "},
        {"designer":"PHILIPP PLEIN","name":"'MY STYLE' LOGO PATCH POLO SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt12.jpg","price":"600.60 ","ID":"12328","oldPrice":"1001.00 "},
        {"designer":"STONE ISLAND","name":"POLO T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt13.jpg","price":"289.38 ","ID":"12336","oldPrice":"482.30 "},
        {"designer":"IL GUFO","name":"COTTON POLO SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt14.jpg","price":"251.16 ","ID":"10689","oldPrice":"418.60 "},
        {"designer":"TRUSSARDI","name":"BABIES CLASSIC POLO SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt15.jpg","price":"256.62 ","ID":"13693","oldPrice":"427.70 "},
        {"designer":"IL GUFO","name":"LINEN POLO SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!poloT-shirt16.jpg","price":"311.22 ","ID":"10699","oldPrice":"518.70 "},
        {"designer":"STELLA MCCARTNEY KIDS","name":"LUCAS ZIG ZAG SHORTS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts1.jpg","price":"369.46 ","ID":"11486","oldPrice":"527.80 "},
        {"designer":"STELLA MCCARTNEY KIDS","name":"SPLATTER SHORTS GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts2.jpg","price":"484.12 ","ID":"11483","oldPrice":"691.60 "},
        {"designer":"JUNIOR GAULTIER","name":"BANDANA PRINT BERMUDA SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts3.jpg","price":"382.20 ","ID":"13230","oldPrice":"637.00 "},
        {"designer":"BILLYBANDIT","name":"BEACH PATTERNED SWIM SHORTS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts4.jpg","price":"163.80 ","ID":"10388","oldPrice":"273.00 "},
        {"designer":"DSQUARED3","name":"CAMOUFLAGE SWIM SHORTS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts5.jpg","price":"589.68 ","ID":"11205","oldPrice":"982.80 "},
        {"designer":"SUNUVA","name":"ZEBRA SWIM SHORTS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts6.jpg","price":"196.56 ","ID":"12041","oldPrice":"327.60 "},
        {"designer":"MC2 SAINT BARTH","name":"JEAN VINCENT CAR STRIPE SWIMMING TRUNKS NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts7.jpg","price":"262.08 ","ID":"12475","oldPrice":"436.80 "},
        {"designer":"SUNUVA","name":"TOUCAN PATTERNED SWIM SHORTS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts8.jpg","price":"196.56","ID":"12039","oldPrice":"327.60 "},
        {"designer":"MC2 SAINT BARTH","name":"SHARK PRINTED SWIM SHORTS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts9.jpg","price":"262.08 ","ID":"12472","oldPrice":"436.80 "},
        {"designer":"SUNUVA","name":"RIVERA NAUTICAL SWIM SHORTS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts10.jpg","price":"196.56 ","ID":"12024","oldPrice":"327.60 "},
        {"designer":"YOUNG VERSACE","name":"BERMUDA COLOUR BLOCK SHORTS BLACK AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts11.jpg","price":"551.46 ","ID":"10283","oldPrice":"919.10 "},
        {"designer":"YOUNG VERSACE","name":"BERMUDA COLOUR BLOCK SHORTS RED AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts12.jpg","price":"551.46 ","ID":"10281","oldPrice":"919.10 "},
        {"designer":"YOUNG VERSACE","name":"BERMUDA SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts13.jpg","price":"546.00 ","ID":"10262","oldPrice":"910.00 "},
        {"designer":"STONE ISLAND","name":"BERMUDA JOGGER SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts14.jpg","price":"382.20 ","ID":"12351","oldPrice":"637.00 "},
        {"designer":"YOUNG VERSACE","name":"BERMUDA SHORTS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts15.jpg","price":"518.70 ","ID":"10264","oldPrice":"864.50 "},
        {"designer":"STONE ISLAND","name":"GREY JERSEY BERMUDA SHORTS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts16.jpg","price":"382.20 ","ID":"12352","oldPrice":"637.00 "},
        {"designer":"MILK ON THE ROCKS","name":"SATURNE-S TOWEL SHORTS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts17.jpg","price":"171.99 ","ID":"11455","oldPrice":"245.70 "},
        {"designer":"MILK ON THE ROCKS","name":"SATURNE-S TOWEL SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts18.jpg","price":"171.99 ","ID":"11453","oldPrice":"245.70 "},
        {"designer":"DSQUARED2","name":"DISTRESSED DENIM SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts19.jpg","price":"999.18 ","ID":"11235","oldPrice":"1665.30 "},
        {"designer":"JUNIOR GAULTIER","name":"DENIM PRINTED JOGGER SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts20.jpg","price":"360.36 ","ID":"13232","oldPrice":"518.70 "},
        {"designer":"DOLCE & GABBANA","name":"DENIM BADGE SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts21.jpg","price":"1070.16 ","ID":"10878","oldPrice":"1528.80 "},
        {"designer":"FENDI","name":"BERMUDA SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts22.jpg","price":"737.10 ","ID":"12810","oldPrice":"1228.50 "},
        {"designer":"DOLCE & GABBANA","name":"DENIM SHORTS PAISLEY MONKEY LINING BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts23.jpg","price":"846.30 ","ID":"10947","oldPrice":"1410.50 "},
        {"designer":"HYDROGEN","name":"CAMOUFLAGE CARGO SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts24.jpg","price":"464.10 ","ID":"11950","oldPrice":"773.50 "},
        {"designer":"STELLA MCCARTNEY KIDS","name":"JOE COLOUR BLOCK SHORTS BLACK AND GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts25.jpg","price":"316.68 ","ID":"11479","oldPrice":"527.80 "},
        {"designer":"SOFT GALLERY","name":"CARY PALM TREE PATTERN DENIM SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts26.jpg","price":"218.40 ","ID":"12211","oldPrice":"364.00 "},
        {"designer":"PAUL SMITH JUNIOR","name":"LAURENT BICYCLE PATTERN SHORTS NAVY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts27.jpg","price":"365.82 ","ID":"13190","oldPrice":"609.70 "},
        {"designer":"JUNIOR GAULTIER","name":"BERMUDA JOGGER SHORTS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts28.jpg","price":"311.22 ","ID":"13444","oldPrice":"518.70 "},
        {"designer":"TRUSSARDI","name":"STRIPE BERMUDA SHORTS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts29.jpg","price":"382.20 ","ID":"10563","oldPrice":"637.00 "},
        {"designer":"BILLYBANDIT","name":"BABIES COTTON SHORTS TURQUOISE BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts30.jpg","price":"180.18 ","ID":"10466","oldPrice":"300.30 "},
        {"designer":"SIERRA JULIAN","name":"MANOLO PATTERNED SHORTS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts31.jpg","price":"365.82 ","ID":"12637","oldPrice":"609.70 "},
        {"designer":"DOUUOD","name":"HOUNDSTOOTH SHORTS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts32.jpg","price":"327.60 ","ID":"12485","oldPrice":"546.00 "},
        {"designer":"MINI RODINI","name":"CHINO SHORTS BEIGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts33.jpg","price":"261.17 ","ID":"11905","oldPrice":"373.10 "},
        {"designer":"PAUL SMITH JUNIOR","name":"CHINO SHORTS ELECTRIC BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts34.jpg","price":"327.60 ","ID":"13371","oldPrice":"546.00 "},
        {"designer":"IL GUFO","name":"BEIGE AND RED STRIPE BERMUDA SHORT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts35.jpg","price":"322.14 ","ID":"10721","oldPrice":"536.90 "},
        {"designer":"LITTLE MARC JACOBS","name":"BERMUDA SHORTS POPPY RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts36.jpg","price":"331.24 ","ID":"10165","oldPrice":"473.20 "},
        {"designer":"KARL LAGERFELD KIDS","name":"DENIM SHORTS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts999.jpg","price":"289.38 ","ID":"10723","oldPrice":"482.30 "},
        {"designer":"TRUSSARDI","name":"BERMUDA SHORTS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts38.jpg","price":"338.52 ","ID":"10560","oldPrice":"564.20 "},
        {"designer":"BOSS","name":"COTTON BERMUDA SHORTS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts39.jpg","price":"300.30 ","ID":"10229","oldPrice":"500.50 "},
        {"designer":"JOHN GALLIANO","name":"DENIM SHORTS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!shorts40.jpg","price":"786.24 ","ID":"12457","oldPrice":"1310.40 "},

    ];
    var gucciModel=$(".gucciContent").find(".imModel").eq(0);
    $(".gucciContent").empty();
    for(var i=0;i<fashionArr.length;i++){
        var designer=fashionArr[i].designer;
        var name=fashionArr[i].name;
        var price="¥"+fashionArr[i].price;
        var oldPrice="¥"+fashionArr[i].oldPrice;
        var proId="cloudokids://product/"+fashionArr[i].ID;
        var imgLink=fashionArr[i].link;
        var imgData='<img src="" data-original="'+imgLink+'" class="lazy">';
        gucciModel.clone(true).appendTo($(".gucciContent"));
        $(".gucciContent").find(".imModel").eq(i).find("a").attr("href",proId).html(imgData);
        $(".gucciContent").find(".imModel").eq(i).find(".designer").html(designer);
        $(".gucciContent").find(".imModel").eq(i).find(".proName").html(name);
        $(".gucciContent").find(".imModel").eq(i).find(".newPrice").html(price);
        $(".gucciContent").find(".imModel").eq(i).find(".oldPrice").html(oldPrice);
    }
    $("img.lazy").lazyload(
        {threshold : 500})
});
