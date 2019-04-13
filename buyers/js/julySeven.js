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
        '21082',
        '21165',
        '21087',
        '21089',
        '21176',
        '21178',
        '22028',
        '21166',
        '21935',
        '21092',
        '21093',
        '21184',
        '21158',
        '21167',
        '21949',
        '21180',
        '21171',
        '21185',
        '21179',
        '21187',
        '21159',

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
            '21082',
            '21165',
            '21087',
            '21089',
            '21176',
            '21178',
            '22028',
            '21166',
            '21935',
            '21092',
            '21093',
            '21184',
            '21158',
            '21167',
            '21949',
            '21180',
            '21171',
            '21185',
            '21179',
            '21187',
            '21159',


        ];
        productLoad();
    });
    $(".liSeven").click(function () {
        $(this).find("span").addClass("boldSpan");
        $(this).siblings(".singleLi").find("span").removeClass("boldSpan");
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '22102',
            '21097',
            '21095',
            '21099',
            '21175',
            '21098',
            '22101',
            '21094',


        ];
        productLoad();
    });
    $(".liEight").click(function () {
        $(this).find("span").addClass("boldSpan");
        $(this).siblings(".singleLi").find("span").removeClass("boldSpan");
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '21083',
            '22046',
            '21096',
            '22076',
            '21160',
            '22041',
            '22045',
            '21186',
            '22047',
            '21177',
            '21191',
            '22044',



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