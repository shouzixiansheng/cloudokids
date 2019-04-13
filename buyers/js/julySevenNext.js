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
        '24620',
        '24619',
        '24601',
        '24626',
        '24605',
        '24627',
        '26563',
        '24621',
        '24623',

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
            '24620',
            '24619',
            '24601',
            '24626',
            '24605',
            '24627',
            '26563',
            '24621',
            '24623',
        ];
        productLoad();
    });
    $(".liSeven").click(function () {
        $(this).find("span").addClass("boldSpan");
        $(this).siblings(".singleLi").find("span").removeClass("boldSpan");
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '24587',
            '24569',
            '24590',
            '24566',
            '24573',
            '24584',
            '24570',
            '24580',



        ];
        productLoad();
    });
    $(".liEight").click(function () {
        $(this).find("span").addClass("boldSpan");
        $(this).siblings(".singleLi").find("span").removeClass("boldSpan");
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '24615',
            '24618',
            '24595',
            '24596',
            '24598',
            '24633',
            '26562',





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