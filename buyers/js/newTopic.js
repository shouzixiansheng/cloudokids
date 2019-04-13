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
    new Swiper('.swiper-container_two', {
        slidesPerView: 4
    });


    var model = $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    var newArr = [
        '18034',
        '18025',
        '18318',
        '19964',
        '18727',
        '18865',
        '18636',
        '17488',
        '20926',
        '18740',
        '18886',
        '18888',
        '18742',
        '18887',
        '18871',
        '18872',
        '21014',
        '13427',
        '21061',
        '21074',
        '21067',
        '18969',
        '17487',
        '20929',
        '20866',
        '18078',
        '21044',
        '21045',
        '19631',
        '20105',
        '18689',
        '20922',
        '20921',
        '18449',
        '21015',
        '21049',
        '20890',
        '19799',
        '18744',
        '18324',
        '18327',
        '18807',
        '18802',
        '18804',
        '17999',
        '17578',
        '18072',
        '18070',
        '19625',
        '18099',
        '18808',
        '17844',
        '18653',
        '18820',
        '18305',
        '18785',
        '19322',
        '18845',
        '18652',
        '18724',
        '18723',
        '18754',
        '17752',
        '18741',

    ];

    function productLoad() {
        for (var j = 0, i = 0; j < newArr.length; j++) {
            model.clone(true).appendTo($(".recommendPro"));
            $.ajax({
                url: "http://h5.cloudokids.cn/mweb/inter/getResult",
                dataType: "json",
                data: {
                    interfaceName: "GetProduct",
                    customerAccessKey: "guest",
                    id: newArr[j]
                }
            }).done(function (data) {
                var imgData = data.Product.DefaultPictureModel.ImageUrl;
                var designer = data.Product.CustomProperties.DesignerName;
                var name = data.Product.Name;
                var price = data.Product.ProductPrice.Price;

                var imgLink = '<img  data-original="' + imgData + '" class="lazy">';
                var singleLink = "../detailPages.html#" + data.Product.Id;
                $(".recommendPro").find(".imModel").eq(i).find("a").attr("href", singleLink).html(imgLink);
                $(".recommendPro").find(".imModel").eq(i).find(".designer").html(designer);
                $(".recommendPro").find(".imModel").eq(i).find(".proName").html(name);
                $(".recommendPro").find(".imModel").eq(i).find(".price").html(price);
                i++;
                $("img.lazy").lazyload(
                    {
                        threshold: 500,
                    }
                )
            });
        }

    }

    productLoad();
    $(".liSix").click(function () {
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '18034',
            '18025',
            '18318',
            '19964',
            '18727',
            '18865',
            '18636',
            '17488',
            '20926',
            '18740',
            '18886',
            '18888',
            '18742',
            '18887',
            '18871',
            '18872',
            '21014',
            '13427',
            '21061',
            '21074',
            '21067',
            '18969',
            '17487',
            '20929',
            '20866',
            '18078',
            '21044',
            '21045',
            '19631',
            '20105',
            '18689',
            '20922',
            '20921',
            '18449',
            '21015',
            '21049',
            '20890',
            '19799',
            '18744',
            '18324',
            '18327',
            '18807',
            '18802',
            '18804',
            '17999',
            '17578',
            '18072',
            '18070',
            '19625',
            '18099',
            '18808',
            '17844',
            '18653',
            '18820',
            '18305',
            '18785',
            '19322',
            '18845',
            '18652',
            '18724',
            '18723',
            '18754',
            '17752',
            '18741',

        ];
        productLoad();
    });
    $(".liSeven").click(function () {
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '18712',
            '18705',
            '19215',
            '19213',
            '19212',
            '17456',
            '17435',
            '20125',
            '20126',
            '20977',
            '17790',
            '17919',
            '17923',
            '20809',
            '17922',
            '17921',
            '20995',
            '18617',
            '18694',
            '17442',
            '18561',
            '18691',
            '17797',
            '17798',
            '18300',
            '21132',
            '17909',
            '17896',
            '19695',
            '20089',
            '20091',
            '18840',

        ];
        productLoad();
    });
    $(".liEight").click(function(){
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '18966',
            '18681',
            '18524',
            '17864',
            '18294',
            '17810',
            '18525',
            '18854',
            '18828',
            '17331',
            '18779',
            '13394',
            '18310',
            '18775',
            '18857',
            '18527',
            '17851',
            '17853',
            '17253',
            '18302',
            '17809',
            '19994',
            '19608',
            '18835',
            '18298',
            '16523',
            '18662',
            '18659',
            '20729',

        ];
        productLoad();
    });
    $(".liTen").click(function(){
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '18688',
            '18869',
            '18771',
            '18317',
            '18890',
            '20930',
            '18868',
            '19471',
            '16484',
            '16488',
            '17464',
            '17447',
            '17753',
            '17762',
            '17561',
            '17556',
            '20981',
            '19626',
            '18102',
            '19628',
            '20087',
            '18105',
            '18812',
            '18113',
            '17719',
            '17715',
            '17717',
            '17721',
            '17492',
            '18055',
            '18057',
            '18056',
            '20920',
            '20919',
            '17499',
            '17503',
            '18130',
            '17524',
            '17523',
            '18129',
            '20918',
            '17525',
            '18132',
            '18708',
            '17757',
            '19996',
            '20140',
            '20143',
            '17548',
            '18800',
            '18115',
            '20993',
            '18326',
            '18330',
            '17242',
            '17241',
            '20093',
            '18100',


        ];
        productLoad();
    });
});