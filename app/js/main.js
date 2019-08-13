
$('document').ready(function () {
setTimeout(function () {
    $('.loading').fadeOut();
    try {
        new WOW().init();
    }catch (e) {
    }
}, 500)



    var mainSlider = $('.main-slider')
    mainSlider.owlCarousel({
        loop: false,
        items: 1,
        dots: true,
        nav: false,
        onInitialized: function f() {
            var t = this;
                setTimeout(function () {
                var  currSlide = t._current + 1,
                    length = t._items.length;
                $('.main-slider-count').html('<span style="margin-right:5px; color: #ffb500; font-size: 60px">' + currSlide + '</span>' + '/' + '<span style="font-size: 36px; margin-left: 5px;">' + 3 + '</span>');

            },10)
        }
    });

    mainSlider.on('initialize.owl.carousel initialized.owl.carousel changed.owl.carousel resized.owl.carousel', function (e) {
        owl_carousel_page_numbers(e);
    });


    function owl_carousel_page_numbers(e) {
        var display_text = (e.item.index + 1);
        $('.main-slider-count').html('<span style="margin-right:5px; color: #ffb500; font-size: 60px">' + display_text + '</span>' + '/' + '<span style="font-size: 36px; margin-left: 5px;">' + e.item.count + '</span>')
    }


    try {
        $('.timepicker').wickedpicker({
            now: '09:00',
            twentyFour: true,
            title: 'Выберите удобное время',
            minutesInterval: 30,
        });
    } catch (e) {
        console.log(e);
    }


    $('select').niceSelect();
    $('.header-forma-title').click(function () {
        $('.header-forma').slideToggle(400)
    })


    // rating
    function rateRender() {
        var rate = $('.course-rating').data('rate');
        var star = '<li><svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.73 32.23"><polygon class="cls-1" points="16.86 1.5 21.61 11.12 32.23 12.66 24.55 20.15 26.36 30.73 16.86 25.73 7.37 30.73 9.18 20.15 1.5 12.66 12.12 11.12 16.86 1.5"/></svg></li>'
        var starRate = '<li class="active"><svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.73 32.23"><polygon class="cls-1" points="16.86 1.5 21.61 11.12 32.23 12.66 24.55 20.15 26.36 30.73 16.86 25.73 7.37 30.73 9.18 20.15 1.5 12.66 12.12 11.12 16.86 1.5"/></svg></li>'
        var list = '';

        for (var i = 1; i < 11; i++) {
            if (i > rate) {
                list += star;
            } else {
                list += starRate;

            }
        }
        $('.course-rating').html(list)
    }

    rateRender();
    // rating

})