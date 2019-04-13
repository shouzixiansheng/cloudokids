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
        {"designer":"DOLCE & GABBANA","name":"CARRETTO SICILIANO' PRINTED COLLAR DRESS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress1.jpg","price":"2,770.95","ID":"10960","oldPrice":"3958.50"},
        {"designer":"DOLCE & GABBANA","name":"GIRLS CARRETTO SICILIANO PRINT BROCADE DRESS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress2.jpg","price":"3,344.25","ID":"10959","oldPrice":"4777.50"},
        {"designer":"MARNI","name":"SLEEVELESS ILLUSTRATION DRESS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress3.jpg","price":"999.18","ID":"11160","oldPrice":"1665.30"},
        {"designer":"MARNI","name":"SILK POLKA A-LINE DRESS RED","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress4.jpg","price":"1,042.86","ID":"11165","oldPrice":"1738.10"},
        {"designer":"JESSIE AND JAMES","name":"ADONIA WRAP BOW HEART DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress5.jpg","price":"758.94","ID":"10742","oldPrice":"1264.90"},
        {"designer":"JESSIE AND JAMES","name":"ADONIA WRAP BOW STRIPE DRESS PINK AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress6.jpg","price":"573.30","ID":"10741","oldPrice":"955.50"},
        {"designer":" CARRÉMENT BEAU","name":"BEADED BOW DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress7.jpg","price":"316.68","ID":"10507","oldPrice":"527.80"},
        {"designer":" CARRÉMENT BEAU","name":"LACE EMBROIDERED DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress8.jpg","price":"343.98","ID":"10506","oldPrice":"573.30"},
        {"designer":"JUNIOR GAULTIER","name":"FLARED COTTON SUMMER DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress9.jpg","price":"671.58","ID":"13237","oldPrice":"1119.30"},
        {"designer":"LIU.JO","name":"IVORY CAP SLEEVE DRESS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress10.jpg","price":"338.52","ID":"12667","oldPrice":"564.20"},
        {"designer":"IL GUFO","name":"BIG DOT SLEEVELESS DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress11.jpg","price":"693.42","ID":"10636","oldPrice":"1155.70"},
        {"designer":"IL GUFO","name":"BIG DOT CAP SLEEVE DRESS IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress12.jpg","price":"720.72","ID":"10637","oldPrice":"1201.20"},
        {"designer":"MOSCHINO KID","name":"IVORY A-LINE PRINT DRESS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress13.jpg","price":"898.17","ID":"13476","oldPrice":"1283.10"},
        {"designer":"SIERRA JULIAN","name":"STRIPED COTTON DRESS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress14.jpg","price":"638.82","ID":"12623","oldPrice":"1064.70"},
        {"designer":"HUCKLEBONES LONDON","name":"FLORAL SWEETHEART DRESS ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress15.jpg","price":"687.96","ID":"11736","oldPrice":"1146.60"},
        {"designer":"I PINCO PALLINO","name":"SILK GINGHAM PUFFBALL DRESS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress16.jpg","price":"1,894.62","ID":"11149","oldPrice":"3157.70"},
        {"designer":"I PINCO PALLINO","name":"CHEVRON PATTERNED FLOATY DRESS ORANGE AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress17.jpg","price":"1,266.72","ID":"11114","oldPrice":"2111.20"},
        {"designer":"I PINCO PALLINO","name":"ORGANZA TIER DRESS IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress18.jpg","price":"1,474.20","ID":"11151","oldPrice":"2457.00"},
        {"designer":"IL GUFO","name":"RED AND WHITE STRIPE SLEEVELESS DRESS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress19.jpg","price":"720.72","ID":"10635","oldPrice":"1201.20"},
        {"designer":"IL GUFO","name":"SILK MIX LAYERED DRESS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress20.jpg","price":"709.80","ID":"10641","oldPrice":"1183.00"},
        {"designer":"I PINCO PALLINO","name":"FLORAL LACE DRESS IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress21.jpg","price":"1,539.72","ID":"12888","oldPrice":"2566.20"},
        {"designer":"LITTLE REMIX","name":"JR TITO FRILL DRESS IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress22.jpg","price":"627.90","ID":"11291","oldPrice":"1046.50"},
        {"designer":"HUCKLEBONES LONDON","name":"SCALLOPED SHIFT DRESS BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress23.jpg","price":"431.34","ID":"11730","oldPrice":"718.90"},
        {"designer":"HUCKLEBONES LONDON","name":"WHITE DAISY SWING DRESS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress24.jpg","price":"491.40","ID":"11715","oldPrice":"819.00"},
        {"designer":"I PINCO PALLINO","name":"WRITING JERSEY DRESS IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress25.jpg","price":"1,676.22","ID":"11152","oldPrice":"2793.70"},
        {"designer":"I PINCO PALLINO","name":"ORGANZA EMBROIDERED COTTON DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress26.jpg","price":"1,446.90","ID":"11111","oldPrice":"2411.50"},
        {"designer":"SIMONETTA","name":"ILLUSTRATED CAT PRINT DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress27.jpg","price":"1130.22","ID":"11222","oldPrice":"1883.70"},
        {"designer":"SIMONETTA","name":"EMBROIDERED CAT DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress28.jpg","price":"1288.56","ID":"11224","oldPrice":"2147.60"},
        {"designer":"SIMONETTA","name":"EMBROIDERED FRUIT TULLE DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress29.jpg","price":"2020.20","ID":"11227","oldPrice":"3367.00"},
        {"designer":"HUCKLEBONES LONDON","name":"NAVY DAISY SWING DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress30.jpg","price":"491.40","ID":"11716","oldPrice":"819.00"},
        {"designer":"IL GUFO","name":"BUTTERFLY DRESS IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress31.jpg","price":"709.80","ID":"10627","oldPrice":"1183.00"},
        {"designer":"IL GUFO","name":"TEXTURED SILK MIX DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress32.jpg","price":"709.80","ID":"10626","oldPrice":"1183.00"},
        {"designer":"TRUSSARDI","name":"EMBROIDERED SCALLOPED LAYER DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress33.jpg","price":"709.80","ID":"10589","oldPrice":"1183.00"},
        {"designer":"I PINCO PALLINO","name":"FLORAL DRESS & BELT IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress34.jpg","price":"1,310.40","ID":"11112","oldPrice":"2184.00"},
        {"designer":"HUCKLEBONES LONDON","name":"PANEL BOW SLEEVELESS DRESS GOLD","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress35.jpg","price":"627.90","ID":"11722","oldPrice":"1046.50"},
        {"designer":" CARRÉMENT BEAU","name":"SILK BOW SHIMMER DRESS GOLD","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress36.jpg","price":"434.98","ID":"10502","oldPrice":"573.30"},
        {"designer":"YOUNG VERSACE","name":"STRIPE PATTERNED DRESS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress37.jpg","price":"1,152.06","ID":"10293","oldPrice":"1920.10"},
        {"designer":"YOUNG VERSACE","name":"STRIPE PATTERN DRESS NAVY AND IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress38.jpg","price":"1,108.38","ID":"10292","oldPrice":"1847.30"},
        {"designer":"THE TINY UNIVERSE","name":"THE TINY FLOWER' DRESS OFF-WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress39.jpg","price":"235.69","ID":"12469","oldPrice":"336.70"},
        {"designer":"JUNIOR GAULTIER","name":"SELMA SILK BEADED DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress40.jpg","price":"1,124.76","ID":"13239","oldPrice":"1874.60"},
        {"designer":"LEOCA PARIS","name":"BROOCH COTTON DRESS NUDE PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress41.jpg","price":"382.20","ID":"11986","oldPrice":"637.00"},
        {"designer":"LEOCA PARIS","name":"BROOCH COTTON DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!dress42.jpg","price":"338.52","ID":"11985","oldPrice":"564.20"},
        {"designer":"FENDI","name":"T-BAR PATENT LEATHER SANDALS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal1.jpg","price":"966.42","ID":"12853","oldPrice":"1610.70"},
        {"designer":"FENDI","name":"PATENT LEATHER LOGO BOW SANDALS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal2.jpg","price":"966.42","ID":"12852","oldPrice":"1610.70"},
        {"designer":"DOLCE & GABBANA","name":"BABIES LEMON SANDALS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal3.jpg","price":"955.50","ID":"10824","oldPrice":"1592.50"},
        {"designer":"DOLCE & GABBANA","name":"PATENT LEATHER DAISY SANDALS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal4.jpg","price":"1,168.44","ID":"12940","oldPrice":"1947.40"},
        {"designer":"I PINCO PALLINO","name":"JEWELLED SANDALS IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal5.jpg","price":"737.10","ID":"12890","oldPrice":"1228.50"},
        {"designer":"I PINCO PALLINO","name":"JEWELLED SANDALS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal6.jpg","price":"791.70","ID":"11155","oldPrice":"1319.50"},
        {"designer":"PEPE CHILDREN SHOES","name":"VEGETALE' SANDALS BROWN AND SILVER","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal7.jpg","price":"431.34","ID":"11881","oldPrice":"718.90"},
        {"designer":"MICHAEL KORS","name":"MARSHA KIERA BOW SANDAL PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal8.jpg","price":"327.60","ID":"12508","oldPrice":"546.00"},
        {"designer":"MICHAEL KORS","name":"BABY JOY KIERA SANDAL GOLD","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal9.jpg","price":"256.62","ID":"12504","oldPrice":"427.70"},
        {"designer":"MICHAEL KORS","name":"BABY JOY LACEY SANDAL GOLD","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal10.jpg","price":"256.62","ID":"12505","oldPrice":"427.70"},
        {"designer":"PEPE CHILDREN SHOES","name":"STELLINE' GLITTER STARS SANDALS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal11.jpg","price":"431.34","ID":"11888","oldPrice":"718.90"},
        {"designer":"PEPE CHILDREN SHOES","name":"STELLINO' GLITTER STARS SANDALS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal12.jpg","price":"480.48","ID":"11883","oldPrice":"800.80"},
        {"designer":"PEPE CHILDREN SHOES","name":"HERITAGE' SANDALS IVORY, GREEN AND SILVER","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal13.jpg","price":"480.48","ID":"11886","oldPrice":"800.80"},
        {"designer":"PEPE CHILDREN SHOES","name":"VERNICE' PATENT LEATHER SANDALS GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal14.jpg","price":"343.98","ID":"11898","oldPrice":"573.30"},
        {"designer":"CHLOE","name":"GLADIATOR SANDALS ELECTRIC BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal15.jpg","price":"524.16","ID":"10391","oldPrice":"873.60"},
        {"designer":"EASY PEASY","name":"LARA' LEATHER DOUBLE STRAP SANDALS ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal16.jpg","price":"299.39","ID":"12579","oldPrice":"427.70"},
        {"designer":"CHLOE","name":"GLADIATOR SANDALS BROWN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal17.jpg","price":"524.16","ID":"10389","oldPrice":"873.60"},
        {"designer":"EASY PEASY","name":"DUDU TARA LEATHER SANDALS BROWN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sandal18.jpg","price":"331.24","ID":"13354","oldPrice":"473.20"},
        {"designer":"CAROLINE BOSMANS","name":"FAST FOOD DOLL T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern1.jpg","price":"409.50 ","ID":"12429","oldPrice":"682.50"},
        {"designer":"CAROLINE BOSMANS","name":"FAST FOOD DOLL PRINT MESH T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern2.jpg","price":"365.82 ","ID":"12431","oldPrice":"609.70"},
        {"designer":"CAROLINE BOSMANS","name":"FAST FOOD DOLL PRINT TANK TOP WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern3.jpg","price":"207.48 ","ID":"12424","oldPrice":"345.80"},
        {"designer":"CAROLINE BOSMANS","name":"TEA CUP DRESS IVORY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern4.jpg","price":"458.64 ","ID":"12442","oldPrice":"764.40"},
        {"designer":"CAROLINE BOSMANS","name":"POPSICLE DOLL PRINT DRESS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern5.jpg","price":"458.64 ","ID":"12439","oldPrice":"764.40"},
        {"designer":"CAROLINE BOSMANS","name":"POPSICLE DOLL PRINT SHORTS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern6.jpg","price":"240.24 ","ID":"12432","oldPrice":"400.40"},
        {"designer":"CAROLINE BOSMANS","name":"POODLE PRINT T-SHIRT BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern7.jpg","price":"409.50 ","ID":"12430","oldPrice":"682.50"},
        {"designer":"CAROLINE BOSMANS","name":"POODLE PRINT SHORTS BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern8.jpg","price":"322.14 ","ID":"12433","oldPrice":"536.90"},
        {"designer":"LOUD APPAREL","name":"WHITE 'MERRICK' TANK TOP","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern9.jpg","price":"203.84 ","ID":"11819","oldPrice":"291.20"},
        {"designer":"CAROLINE BOSMANS","name":"POODLE DOGGY BAG PRINT LEGGINGS WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern10.jpg","price":"262.08 ","ID":"12434","oldPrice":"436.80"},
        {"designer":"GARDNER AND THE GANG","name":"'GERTRUDE THE GIRAFFE' JERSEY SKIRT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern11.jpg","price":"136.50 ","ID":"12089","oldPrice":"227.50"},
        {"designer":"GARDNER AND THE GANG","name":"'GERTRUDE THE GIRAFFE' LEGGINGS GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern12.jpg","price":"136.50 ","ID":"12116","oldPrice":"227.50"},
        {"designer":"NUNUNU","name":"PLUS PATCH TANK TOP DARK GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern13.jpg","price":"165.62 ","ID":"11495","oldPrice":"236.60"},
        {"designer":"NUNUNU","name":"PLUS PATCH TANK TOP LIGHT GREY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern14.jpg","price":"165.62 ","ID":"11497","oldPrice":"236.60"},
        {"designer":"LOUD APPAREL","name":"BLACK 'MARA' BOXY T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern15.jpg","price":"191.10 ","ID":"11806","oldPrice":"273.00"},
        {"designer":"LOUD APPAREL","name":"WHITE 'MARA' BOXY T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern16.jpg","price":"191.10 ","ID":"11807","oldPrice":"273.00"},
        {"designer":"LOUD APPAREL","name":"BLACK 'MAEMI' T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern17.jpg","price":"191.10 ","ID":"11822","oldPrice":"273.00"},
        {"designer":"LOUD APPAREL","name":"WHITE 'MAEMI' T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern18.jpg","price":"191.10 ","ID":"11823","oldPrice":"273.00"},
        {"designer":"BEAU LOVES","name":"LOVE VEST BLACK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern19.jpg","price":"159.25 ","ID":"11757","oldPrice":"227.50"},
        {"designer":"LOUD APPAREL","name":"BLACK 'MERIS' SLEEVELESS HOODY","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern20.jpg","price":"235.69 ","ID":"11815","oldPrice":"336.70"},
        {"designer":"LOUD APPAREL","name":"GREY 'MANDEL' T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern21.jpg","price":"159.25 ","ID":"11838","oldPrice":"227.50"},
        {"designer":"LOUD APPAREL","name":"GREY 'MOREY' LEGGINGS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern22.jpg","price":"140.14 ","ID":"11840","oldPrice":"200.20"},
        {"designer":"PHILIPP PLEIN","name":"'SUMMER TIME' SKULL LOGO T-SHIRT WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern23.jpg","price":"458.64 ","ID":"12317","oldPrice":"764.40"},
        {"designer":"IL GUFO","name":"WAVE PRINT TEXTURED TROUSERS","link":"http://img1.cloudokids.cn/buyers/newCollage/300!CharacterPattern24.jpg","price":"425.88 ","ID":"10652","oldPrice":"709.80"},
        {"designer":"MOSCHINO KID","name":"BABIES EMBROIDERED LOGO T-SHIRT PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats1.jpg","price":"338.52 ","ID":"11602","oldPrice":"564.20"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"EMMA DENIM SHORTS NEON PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats2.jpg","price":"343.98 ","ID":"11376","oldPrice":"491.40"},
        //{"designer":"I PINCO PALLINO","name":"SILK GINGHAM PUFFBALL DRESS MULTI","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats3.jpg","price":"1894.62 ","ID":"11149","oldPrice":"3157.70"},
        //{"designer":"I PINCO PALLINO","name":"CHEVRON PATTERNED FLOATY DRESS ORANGE AND WHITE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats4.jpg","price":"1266.72 ","ID":"11114","oldPrice":"2111.20"},
        {"designer":"NOE & ZOE","name":"PEACH PINK T-SHIRT","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats5.jpg","price":"114.66 ","ID":"12750","oldPrice":"163.80"},
        {"designer":"CAROLINE BOSMANS","name":"CRUSHED VELVET TANK TOP ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats6.jpg","price":"196.56 ","ID":"12425","oldPrice":"327.60"},
        {"designer":"EMILE ET IDA","name":"TULLE FLARED SKIRT ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats7.jpg","price":"286.65 ","ID":"12653","oldPrice":"409.50"},
        {"designer":"LIU.JO","name":"LAYERED TULLE MINI SKIRT ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats8.jpg","price":"218.40 ","ID":"12654","oldPrice":"364.00"},
        {"designer":"BEAU LOVES","name":"PRINTED B HEART VEST PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats9.jpg","price":"159.25 ","ID":"11756","oldPrice":"227.50"},
        {"designer":"EMILE ET IDA","name":"FLUTTER SLEEVE T-SHIRT PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats10.jpg","price":"159.25 ","ID":"12648","oldPrice":"227.50"},
        //{"designer":"CARRÉMENT BEAU","name":"BEADED BOW DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats11.jpg","price":"316.68 ","ID":"10507","oldPrice":"527.80"},
        //{"designer":"CARRÉMENT BEAU","name":"LACE EMBROIDERED DRESS PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats12.jpg","price":"343.98 ","ID":"10506","oldPrice":"573.30"},
        {"designer":"KIDSCASE","name":"'SPIRIT' STRIPED DRESS ORANGE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats13.jpg","price":"152.88 ","ID":"12091","oldPrice":"254.80"},
        {"designer":"EMILE ET IDA","name":"CAT PRINT T-SHIRT YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats1414.jpg","price":"127.40 ","ID":"12726","oldPrice":"182.00"},
        {"designer":"LEOCA PARIS","name":"VINTAGE COTTON TOP YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats15.jpg","price":"251.16 ","ID":"12000","oldPrice":"418.60"},
        {"designer":"MILK ON THE ROCKS","name":"LISE-R COTTON LEGGINGS YELLOW","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats16.jpg","price":"127.40 ","ID":"11440","oldPrice":"182.00"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"CECILE PLEATED SLEEVE TOP GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats17.jpg","price":"171.99 ","ID":"11361","oldPrice":"245.70"},
        {"designer":"STELLA MCCARTNEY KIDS","name":"KENNEDY DISTRESSED DENIM SHORTS GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats18.jpg","price":"343.98 ","ID":"11380","oldPrice":"491.40"},
        {"designer":"LIU.JO","name":"TEXTURED ZIP JACKET TURQUOISE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats19.jpg","price":"365.82 ","ID":"12673","oldPrice":"609.70"},
        {"designer":"LIU.JO","name":"TEXTURED TROUSERS TURQUOISE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats20.jpg","price":"338.52 ","ID":"12666","oldPrice":"564.20"},
        {"designer":"LIU.JO","name":"TRES JOLIE HEART T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats21.jpg","price":"174.72 ","ID":"12929","oldPrice":"291.20"},
        {"designer":"LIU.JO","name":"LAYERED TULLE MINI SKIRT GREEN","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats22.jpg","price":"218.40 ","ID":"12656","oldPrice":"364.00"},
        {"designer":"IMPS & ELFS","name":"PEACE AND LOVE T-SHIRT BLUE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats23.jpg","price":"98.28 ","ID":"12384","oldPrice":"163.80"},
        {"designer":"IMPS & ELFS","name":"PEACE AND LOVE T-SHIRT PURPLE","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats24.jpg","price":"98.28 ","ID":"12383","oldPrice":"163.80"},
        {"designer":"IMPS & ELFS","name":"KNITTED CARDIGAN PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats25.jpg","price":"191.10 ","ID":"12960","oldPrice":"318.50"},
        {"designer":"FENDI","name":"'ORCHID' LOGO T-SHIRT LILAC","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats26.jpg","price":"573.30 ","ID":"12843","oldPrice":"955.50"},
        {"designer":"IL GUFO","name":"HOODED SWEATER PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats27.jpg","price":"267.54 ","ID":"10631","oldPrice":"445.90"},
        {"designer":"FENDI","name":"SILK CHIFFON MONSTER TOP PINK","link":"http://img1.cloudokids.cn/buyers/newCollage/300!sweetMeats28.jpg","price":"939.12 ","ID":"12842","oldPrice":"1565.20"},

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

