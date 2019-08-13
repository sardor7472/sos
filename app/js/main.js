$('document').ready(function () {
    $('.main-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
       // navText: ['1/', '3'],
        nav: true,
    });

        try {
            $('.timepicker').wickedpicker({
                now: '09:00',
                twentyFour: true,
                title: 'Выберите удобное время',
                minutesInterval: 30,
            });
        }catch (e) {
            console.log(e);
        }

    $('select').niceSelect();
    var i = 1;
    $('.header-forma-title').click(function () {
        if(i % 2 === 1){
            $('.header-forma').addClass('open-form'); i ++;
        }
        else if(i % 2 === 0){
            $('.header-forma').removeClass('open-form'); i ++;
        }
    })




    // rating
    function rateRender() {
        var rate = $('.course-rating').data('rate');
        var star = '<li><svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.73 32.23"><polygon class="cls-1" points="16.86 1.5 21.61 11.12 32.23 12.66 24.55 20.15 26.36 30.73 16.86 25.73 7.37 30.73 9.18 20.15 1.5 12.66 12.12 11.12 16.86 1.5"/></svg></li>'
        var starRate = '<li class="active"><svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.73 32.23"><polygon class="cls-1" points="16.86 1.5 21.61 11.12 32.23 12.66 24.55 20.15 26.36 30.73 16.86 25.73 7.37 30.73 9.18 20.15 1.5 12.66 12.12 11.12 16.86 1.5"/></svg></li>'
        var list = '';

        for(var i = 1; i < 11; i++) {
            if( i > rate) {
                list += star;
            } else {
                list += starRate;
                console.log(i)

            }
        };
        $('.course-rating').html(list)
    }
    rateRender()


})