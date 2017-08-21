$(function () {
    $.ajax({
        url: 'http://192.168.70.22:9900/api/nav',
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
    $.ajax({
        url: 'http://192.168.70.22:9900/api/nav',
        success: function (data) {
            console.log(data);
            var datas = JSON.parse(data);
            var listsBottom = template('templates', {
                datas: datas
            });
            // $('.nav-center ul:first-of-type li').on('hover', fucntion(){

            // })

        }
    })
})