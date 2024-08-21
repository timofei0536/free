if (document.querySelector('[data-toogles]')) {
    $(document).ready(function () {

        window.allow = true;

        $('.toogles__item-title').on('click', function () {
            if (window.allow) {

                window.allow = false;
                var needNumber = $(this).attr('data-toogles');

                var need_t = $(this);
                var need_w = need_t.closest('.toogles');
                var need_i = need_w.find('.toogles__item[data-toogles="' + needNumber + '"]');
                var need_c = need_i.find('.toogles__item-content');

                // console.log(need_i);

                var lastNumber = need_w.find('.toogles__item--active').attr('data-toogles');
                var last_t = need_w.find('.toogles__item-title--active');
                var last_i = need_w.find('.toogles__item--active');
                var last_c = last_i.find('.toogles__item-content');

                if ( true ) {
                    var need_w2 = $('.form.toogles');
                    var need_i2 = need_w2.find('.toogles__item[data-toogles="' + needNumber + '"]');
                    var need_c2 = need_i2.find('.toogles__item-content');
                    var last_i2 = need_w2.find('.toogles__item--active');
                    console.log(last_i2);
                    var last_c2 = last_i2.find('.toogles__item-content');
                    // console.log(need_i2);
                }

                var type = 'slide';
                if (need_w.hasClass('toogles--fade')) {
                    var type = 'fade';
                }

                if (need_w.hasClass('toogles--mobile') && window.its_desktop) {
                    window.allow = true;
                    return;
                }

                if (need_i.hasClass('toogles__item--active')) {


                    if (type == 'slide') {

                        $(last_t).removeClass('toogles__item-title--active');

                        $(last_c).slideToggle(500, toogle(type, last_i, need_c, need_i, true));

                    } else {
                        window.allow = true;
                    }

                } else {

                    $(last_t).removeClass('toogles__item-title--active');
                    $(need_t).addClass('toogles__item-title--active');

                    if (type == 'slide') {

                        $(last_c).slideToggle(500, toogle(type, last_i, need_c, need_i));

                    } else {

                        $(last_c).fadeToggle(500, toogle(type, last_i, need_c, need_i));

                        if ( true) {
                            $(last_c2).fadeToggle(500, toogle(type, last_i2, need_c2, need_i2));
                        }


                    }

                }

            }

        });
    });


    function toogle(type, last_i, need_c, need_i, current) {
        $(last_i).removeClass('toogles__item--active');

        if (current) {
            window.allow = true;
        } else {

            if (type == 'slide') {

                $(need_c).slideToggle(500, toogles_after(need_i));

            } else {
                setTimeout(function () {
                    $(need_c).fadeToggle(500, toogles_after(need_i));
                }, 500);

            }

        }
    }

    function toogles_after(need_i) {
        $(need_i).addClass('toogles__item--active');
        window.allow = true;
    }
    document.querySelectorAll('.toogles__item-title:not(.mobile-menu .toogles__item-title)').forEach(function (element) {
        element.addEventListener('click', function () {
            let itemThis = this;
            setTimeout(function () {
                if (window.scrollbar && window.its_desktop && itemThis.classList.contains('toogles__item-title--active')) {
                    scrollbar.update();
                }
                ScrollTrigger.refresh()
            }, 500);
        });
    });

}