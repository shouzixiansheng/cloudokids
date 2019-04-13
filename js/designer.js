$(function () {

    var storage = window.localStorage;
    var cusId=storage.cusId;
    var cusKey=storage.cusKey;
    var cusEmail=storage.cusEmail;
    $.ajax({
        url: H5_AJAX_HTTP_URL,
        dataType: "json",
        async: false,
        data: {
            interfaceName: "GetDesigners",
            customerAccessKey: cusKey,
            customerId:cusId,
            customerEmail:cusEmail
        }
    }).done(function (data) {
        var logoModel = $(".logoWrap").find(".logo").eq(0);
        $(".logoWrap").empty();
        var letterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var designerArr = [];
        var model = $(".content").find(".imModel").eq(0);
        var modelContent = $(".content").find(".imModelContent").eq(0);
        $(".content").empty();
        for (var i = 0; i < letterArr.length; i++) {
            var arr = [];
            for (var j = 0; j < data.Designers.length; j++) {
                var name = data.Designers[j].Name;
                if (name.substring(0, 1).toUpperCase() == letterArr[i]) {
                    arr.push(data.Designers[j]);
                }
            }
            designerArr.push(arr);
        }
        for (var i = 0; i < letterArr.length; i++) {
            if (designerArr[i].length > 0) {
                model.clone(true).appendTo($(".content"));
                modelContent.clone(true).appendTo($(".content"));
                var length = $(".imModel").length;
                var length_2 = $(".imModelContent").length;
                $(".imModel").eq(length - 1).html(letterArr[i]);
                var dataDesigner = '';
                for (var j = 0; j < designerArr[i].length; j++) {
                    var designerName = designerArr[i][j].Name;
                    var designerId = designerArr[i][j].Id;
                    var designerFeatured = designerArr[i][j].Featured;
                    var designerLogo = designerArr[i][j].Logo;
                    //顶部品牌轮播
                    if (designerFeatured == true) {
                        logoModel.clone(true).appendTo($(".logoWrap"));
                        var length_3 = $(".logo").length;
                        var dataLogo = '<img src="' + designerLogo + '" myid="' + designerId + '" myTitle="' + designerName + '">';
                        $(".logo").eq(length_3 - 1).html(dataLogo);
                    }
                    dataDesigner += '<div class="smallModel imColl" myid="' + designerId + '" myTitle="' + designerName + '">' + designerName + '<div class="clickMe"><img src="img/arrows2.png" alt=""></div></div>';
                }
                $(".imModelContent").eq(length_2 - 1).html(dataDesigner);

            }
        }
    });
    new Swiper('.swiper-container', {
        direction: 'horizontal',
        scrollbar: '.swiper-scrollbar',
        slidesPerView: 4,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        lazyLoadingInPrevNextAmount: 3
    });
    $(".designerWrap").delegate("img", "click", function () {
        var myTitle = $(this).attr("myTitle");
        var myId = $(this).attr("myid");
        window.location.href = "singItem.html?myTitle=" + myTitle + "!myId=" + myId + "!ifDesigner=" + 1;
    });
    $(".content").delegate(".imColl", "click", function () {
        var myTitle = $(this).attr("myTitle");
        var myId = $(this).attr("myid");
        window.location.href = "singItem.html?myTitle=" + myTitle + "!myId=" + myId + "!ifDesigner=" + 1;
    });
});
