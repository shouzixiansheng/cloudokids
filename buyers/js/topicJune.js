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
        slidesPerView: 2
    });


    var model = $(".recommendPro").find(".imModel").eq(0);
    $(".recommendPro").empty();
    var newArr = [
        '21073',
        '21065',
        '21059',
        '18727',
        '16555',
        '16552',
        '17056',
        '20367',
        '20365',
        '16998',
        '17091',
        '16944',
        '17175',
        '17004',
        '17003',
        '17142',
        '17498',
        '17594',
        '17941',
        '16512',
        '18740',
        '18319',
        '18888',
        '18742',
        '18871',
        '18872',
        '18386',
        '19164',
        '19123',
        '19447',
        '19026',
        '20797',
        '17994',
        '17991',
        '17218',
        '20127',
        '21014',
        '19362',
        '19366',
        '19256',
        '20558',
        '13389',
        '13427',
        '17783',
        '20530',
        '20543',
        '16801',
        '16799',
        '17729',
        '17543',
        '20508',
        '18032',
        '18033',
        '18771',
        '20930',
        '19472',
        '18829',
        '19427',
        '17464',
        '16621',
        '19396',
        '17561',
        '17556',
        '19626',
        '18102',

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
            '21073',
            '21065',
            '21059',
            '18727',
            '16555',
            '16552',
            '17056',
            '20367',
            '20365',
            '16998',
            '17091',
            '16944',
            '17175',
            '17004',
            '17003',
            '17142',
            '17498',
            '17594',
            '17941',
            '16512',
            '18740',
            '18319',
            '18888',
            '18742',
            '18871',
            '18872',
            '18386',
            '19164',
            '19123',
            '19447',
            '19026',
            '20797',
            '17994',
            '17991',
            '17218',
            '20127',
            '21014',
            '19362',
            '19366',
            '19256',
            '20558',
            '13389',
            '13427',
            '17783',
            '20530',
            '20543',
            '16801',
            '16799',
            '17729',
            '17543',
            '20508',
            '18032',
            '18033',
            '18771',
            '20930',
            '19472',
            '18829',
            '19427',
            '17464',
            '16621',
            '19396',
            '17561',
            '17556',
            '19626',
            '18102',

        ];
        productLoad();
    });
    $(".liSeven").click(function () {
        $(this).find("span").addClass("boldSpan");
        $(this).siblings(".singleLi").find("span").removeClass("boldSpan");
        $(".recommendPro").empty();
        $(window).scrollTop(0);
        newArr = [
            '19913',
            '18705',
            '18635',
            '19210',
            '19211',
            '19213',
            '19212',
            '17123',
            '17121',
            '20779',
            '17119',
            '20778',
            '17108',
            '17117',
            '17120',
            '17456',
            '17435',
            '20565',
            '18035',
            '20552',
            '18038',
            '18006',
            '18018',
            '16326',
            '16321',
            '16328',
            '18837',
            '18624',
            '18817',
            '18827',
            '19429',
            '19439',
            '19428',
            '19437',
            '20125',
            '20126',
            '19857',
            '19859',
            '19861',
            '19858',
            '19618',
            '19421',
            '19544',
            '20977',
            '19050',
            '19054',
            '20957',
            '20961',
            '21060',
            '13414',
            '13413',
            '17790',
            '17776',
            '17803',
            '17919',
            '17617',
            '17618',
            '19183',
            '20995',
            '18371',
            '18368',
            '18277',
            '18797',
            '18617',
            '18694',
            '16292',
            '18042',
            '19469',
            '18487',
            '18656',
            '17447',
            '18085',
            '17227',
            '19856',
            '19854',
            '19855',
            '17753',
            '19612',
            '19555',
            '19628',
            '16895',
            '16876',
            '20087',
            '19990',

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