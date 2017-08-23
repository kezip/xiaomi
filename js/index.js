$(function () {
    // 导航栏
    $.ajax({
        url: 'http://127.0.0.1:9900/api/nav',
        success: function (data) {
            console.log(data);
            var list = JSON.parse(data);
            var lists = template('template', {
                list: list
            });
            $('.nav-center ul').append(lists);
        }
    })
    // 导航下拉列表栏
    var typeTest;
    $('.nav-center>ul').on('mouseover', 'li', function () {
        typeTest = $(this).attr('type');
        // console.log('test');
        $('.spinner').stop().slideDown();
        $.ajax({
            url: 'http://127.0.0.1:9900/api/nav',
            data: {
                type: typeTest
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
                // var lists = JSON.parse(data);
                var listsBottom = template('templates', data);

                if (typeTest != "") {
                    $('.spinner .typePage').html(listsBottom);
                } else {
                    // $('.spinner').stop().slideUp();
                    $('.spinner').hide();
                }
            }
        })
    });
    $('.nav-center>ul').on('mouseout', 'a', function () {
        if (typeTest != "") {
            $('.spinner').stop().slideUp();
        }
    })
    // 搜索框
    $('.search').focus(function () {
        $('.hot-product').hide();
        $('.hot-search').show();
        $('.search').css({ 'border': '1px solid #FF6700' });
        $('.icon-sousuo').css({ 'border': '1px solid #FF6700' });
    })
    $('.search').blur(function () {
        $('.hot-product').show();
        $('.hot-search').hide();
        $('.search').css({ 'border': '1px solid #ccc' });
        $('.icon-sousuo').css({ 'border': '1px solid #ccc' });
    })


})