$(function () {
    $.ajax({
        url: 'http://127.0.0.1:9900/api/nav',
        // dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            var list = JSON.parse(data);
            var lists = template('template', {
                list: list
            });
            $('.nav-center').append(lists);
        }
    })

    // $('.nav-center ul:first-of-type li').append(listsBottom);
    $('.nav-center ul:first-of-type li').on('hover', function () {
        console.log(111);
        $.ajax({
            url: 'http://127.0.0.1:9900/api/nav',
            data: 'type=' + $(this).attr(type),
            success: function (data) {
                console.log(data);
                var lists = JSON.parse(data);
                var listsBottom = template('templates', {
                    lists: lists
                });

            }
        })
        // $('.navCenterBottom').style.dispaly = blcok;
    })

})