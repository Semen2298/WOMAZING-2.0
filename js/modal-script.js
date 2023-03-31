// Modal Window

$('.header__menu_contact_btn').on('click', function() {
    $('.header__modal-window_wrapper').fadeIn();
});

$('.header__modal-window_form_btn-close').on('click', function() {
    $('.header__modal-window_wrapper').fadeOut();
});

$('.header__overlay-modal').on('click', function() {
    $('.header__modal-window_wrapper').fadeOut();
});

$('.header__modal-window_wrapper').children().on('click', function(e) {
    e.stopPropagation();
});

// Validate

$.validator.addMethod("regex", function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
},"Please check your input.");


// Отправка форм

$(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod("regex", function(value, element, regexp) {
        var regExsp = new RegExp(regexp);
        return this.optional(element) || regExsp.test(value);
    },"Please check your input.");


    // Функция валидации

    function valEl(el) {
        el.validate({
                rules: {
                    phone: {
                        required: true,
                        regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                    },
                    name: {
                        required: true,
                        regex : "[А-Яа-я]{1,32}"
                    },
                    email: {
                        required: true,
                        email: true
                }
            },
            messages: {
                tel: {
                    required: 'Поле обезательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                name: {
                    required: 'Поле обезательно для заполнения'
                },
                email: {
                    required: 'Поле обезательно для заполнения',
                    email: 'Неверный формат E-mail'
                }
            },
            //Начинаем проверку id форм
            submitHandler: function (form) {
                $('#preloader-active').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    case'header__modal-window_form':
                    $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize() 
                    })
                    .always(function () {
                        console.log('Always')
                        setTimeout(function(){
                            $form.trigger('reset');
                            $('#preloader-active').fadeIn();
                        }, 1100);
                        setTimeout(function () {
                            $('#preloader-active').fadeOut();
                        }, 1300);
                    });
                    break;
                    case'header__modal-window_form':
                    $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize() 
                    })
                    .always(function () {
                        console.log('Always')
                        setTimeout(function(){
                            $form.trigger('reset');
                            $('#preloader-active').fadeIn();
                        }, 1100);
                        setTimeout(function () {
                            $('#preloader-active').fadeOut();
                            $('#header__modal-window_wrapper').fadeOut();
                        }, 1300);
                    });
                    break;
                }
                return false;
            }
        });
    }
    $('.header__modal-window_form').each(function () {
        valEl($(this));
    });
});