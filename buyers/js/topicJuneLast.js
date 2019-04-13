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
        slidesPerView: 3
    });


    var model = $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    var newArr = [
        '16461',
        '16438',
        '16456',
        '18937',
        '18931',
        '16437',
        '16421',
        '18946',
        '16974',
        '16972',
        '20183',
        '20175',
        '16922',
        '20181',
        '20182',
        '19686',
        '18845',
        '17850',
        '16459',
        '16981',
        '18943',
        '16444',
        '18936',
        '20167',
        '18947',
        '20788',
        '18944',
        '17772',
        '20169',
        '18010',
        '16420',
        '19685',
        '18927',

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
        $(this).find("span").addClass("boldSpan");
        $(this).siblings(".singleLi").find("span").removeClass("boldSpan");
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '16461',
            '16438',
            '16456',
            '18937',
            '18931',
            '16437',
            '16421',
            '18946',
            '16974',
            '16972',
            '20183',
            '20175',
            '16922',
            '20181',
            '20182',
            '19686',
            '18845',
            '17850',
            '16459',
            '16981',
            '18943',
            '16444',
            '18936',
            '20167',
            '18947',
            '20788',
            '18944',
            '17772',
            '20169',
            '18010',
            '16420',
            '19685',
            '18927',


        ];
        productLoad();
    });
    $(".liSeven").click(function () {
        $(this).find("span").addClass("boldSpan");
        $(this).siblings(".singleLi").find("span").removeClass("boldSpan");
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '16665',
            '18704',
            '16394',
            '20019',
            '16415',
            '18567',
            '16370',
            '18838',
            '16923',
            '16453',
            '17523',
            '20789',
            '18948',
            '16976',
            '16440',
            '16405',
            '17649',
            '16403',
            '16404',
            '21104',
            '17324',
            '16467',
            '17650',
            '16452',
            '17323',
            '16410',
            '17264',
            '16406',
            '20852',

        ];
        productLoad();
    });
    $(".liEight").click(function () {
        $(this).find("span").addClass("boldSpan");
        $(this).siblings(".singleLi").find("span").removeClass("boldSpan");
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '20029',
            '16976',
            '18846',
            '20789',
            '18948',
            '17523',
            '16921',
            '16923',
            '16453',
            '16370',
            '18838',
            '16920',
            '16394',
            '20019',
            '16415',
            '18567',
            '18704',
            '20911',
            '20901',
            '16975',
            '16665',

        ];
        productLoad();
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $(".topFixed").css({"position":"fixed","top":0})
        }else{
            $(".topFixed").css({"position":"relative"})
        }
    });
});