/**
 * Created by 杰 on 2017/1/8.
 */
/**
 * Created by 24212 on 2017/1/7.
 */
$(function () {
    function refresh() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 1080) {
            document.documentElement.style.fontSize = 1080 / 10.8 + "px";
        } else {
            document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
        }
    }

    refresh();
    window.onresize = function () {
        refresh();
    };

    var mySwiper = new Swiper('.swiper-container_one', {
        direction: 'horizontal',
        loop: false,
        // 分页器
        pagination: '.swiper-pagination'
    });

//买手团队轮播部分
    var mySwiper_two = new Swiper('.swiper-container_two', {
        direction: 'horizontal',
        loop: false,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    $.ajax({
        url: "http://h5.cloudokids.cn/mweb/inter/getResult",
        async: false,
        dataType: "json",
        data: {
            interfaceName: "GetCollages",
            customerAccessKey: "guest"
        }
    }).done(function (myJSON) {
        //alert(1111);
        var result=$.parseJSON(myJSON);
        //console.log(result);
        //alert(result);
        var product=result.Collages;
        var length=product.length;
        //alert(product);
        var boxModel=$(".content").find(".largeMatch-wrap").eq(0);
        $(".content").empty();
        for(var i=0;i<product.length;i++){
            boxModel.clone(true).appendTo($(".content"));
            var userUrl =result.Collages[i].CustomerProfileOverview.AvatarUrl;
            var imgData = '<img src="' + userUrl + '" alt=""> ';
            $(".userMatch").eq(i).find("div").html(imgData);
            var userName=result.Collages[i].CustomerProfileOverview.Username;
            $(".userMatch").eq(i).find("span").html(userName);
            var imgUrl=result.Collages[i]. PictureUrl;
            var imgData2='<img src="' +imgUrl+ '" alt=""> ';
            $(".bigPicShow").eq(i).find("a").html(imgData2);
            var wordsDes=result.Collages[i].Description;
            $(".beauty-introduce").eq(i).html(wordsDes);
            var link="cloudokids://collage/"+result.Collages[i].Id;
            $(".bigPicShow").eq(i).find("a").attr("href",link);
            var link2="cloudokids://buyer/"+result.Collages[i].CustomerProfileOverview.Id;
            $(".userMatch").eq(i).find("a").attr("href",link2)

        }


    });
});
