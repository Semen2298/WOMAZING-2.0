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

$('#btnCloseModal').on('click', function() {
    $('.header__modal-window_wrapper').fadeOut();
});

$('#btnCloseModalSet').on('click', function() {
    $('.header__modal-window_wrapper').fadeOut();
});

$('.header__modal-window_wrapper').children().on('click', function(e) {
    e.stopPropagation();
});


//На JS

// const btnOpenModal = document.getElementById('btnOpenModal');
// const modalWindow = document.getElementById('modalWindow');
// const modalWindowSet = document.getElementById('modalWindowSet');
// const btnFormRequestCall = document.getElementById('btnFormRequestCall');
// const overlayModal = document.getElementById('header__overlay-modal');
// const btnCloseModal = document.getElementById('btnCloseModal');
// const btnCloseModalSet = document.getElementById('btnCloseModalSet');

// btnOpenModal.addEventListener('click', () => {
//     modalWindow.classList.add('active')
// })

// function closeModal() {
//     modalWindow.classList.remove('active');
// }

// overlayModal.addEventListener('click', closeModal);
// btnCloseModal.addEventListener('click', closeModal);
// btnCloseModalSet.addEventListener('click', closeModal);


// Validate

$.validator.addMethod("regex", function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
},"Please check your input.");


//Валидация и отправка формы

$(document).ready(function() {
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

// Функция валидации и вывода сообщений

    function valEl(el) {
        el.validate({
            rules: {
                name: {
                    required: true,
                    regex : "[А-Яа-яA-Za-z]{1,32}"
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
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
                $('.header__modal-window-set').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    case 'header__modal-window_form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                $('.header__modal-window_form_wrapper').fadeOut();
                                setTimeout(function() {
                                    $('#modalWindowSet').fadeIn();
                                    $form.trigger('reset');
                                }, 1100);
                                $('#modalWindowSet').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                        case 'formSendContacts':
                            $.ajax({
                                    type: 'POST',
                                    url: $form.attr('action'),
                                    data: $form.serialize()
                                })
                                .done(function() {
                                    console.log('Success');
                                })
                                .fail(function() {
                                    console.log('Fail');
                                })
                                .always(function() {
                                    setTimeout(function() {
                                        $('#formSendContactsSet').fadeIn();
                                        $form.trigger('reset');
                                        $(this).fadeOut();
                                    }, 1000);
                                    setTimeout(function() {
                                        $('#formSendContactsSet').fadeOut();
                                    }, 3000);
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
    $('.contacts__form-send').each(function () {
        valEl($(this));
    });
}); 