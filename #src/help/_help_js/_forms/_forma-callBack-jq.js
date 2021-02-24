/*-Открытие и закрытие Popup ФОРМЫ запроса на БАНЕРЕ-*/
const openPopupForm = () => {
    const popupFormBtn = document.querySelector('.baner-btn'),
        popupFormContent = document.querySelector('.popupForm'),
        popupFormClouse = document.querySelector('.clouseForm'),
        paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

    popupFormBtn.addEventListener('click', () => {
        popupFormContent.style = 'display:block';
        popupFormContent.classList.add('fadeIn');
        document.body.style.paddingRight = paddScr;
        document.body.style.overflow = 'hidden';
    });
    popupFormClouse.addEventListener('click', () => {
        popupFormContent.style = "display:none";
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0px';
    });
};
openPopupForm();


/*--Для reqForm --*/

$(document).ready(function () {
    //функция позволяет отправлять формы без ввода полей E-mail и Textarea
    $('input[type=submit]').click(function () {
        $('input[name=email]').removeAttr('required'); //В поле запроса E-mail
        $('textarea[name=text]').removeAttr('required'); //В поле текст
    });

    $('#reqForm').submit(function (event) {
        const popupFormContent = document.querySelector('.popupForm'),
            thankYou = document.querySelector('#js-reqThankYou'),
            paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

        event.preventDefault();


        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (result) {
                popupFormContent.style = 'display:none';
                thankYou.style = 'display:block';
                thankYou.classList.add('fadeIn');
                document.body.style.paddingRight = paddScr;
                document.body.style.overflow = 'hidden';
                $(this).find('input').val('');
                $('#reqForm').trigger('reset'); //Перезагрузка всех окон в форме

            }
        });

        // Закрыть попап «спасибо»
        $('#js-reqCloseThankYou').click(function () { // по клику на крестик
            thankYou.style = 'display:none';
            document.body.style.overflow = '';
            document.body.style.paddingRight = '0px';
            $('input[name=email]').attr('required', ''); //В поле запроса E-mail
            $('textarea[name=text]').attr('required', ''); //В поле текст
        });

    });


    /*--Для Form --*/

    $('#form').submit(function (event) {
        const paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
        event.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (result) {
                $('#js-ThankYou').fadeIn().addClass('fadeIn'); //Вызов Popup: Спасибо за заявку!
                $('#js-ThankYou').addClass('fadeIn'); //Вызов Popup: Спасибо за заявку!
                document.body.style.paddingRight = paddScr;
                document.body.style.overflow = 'hidden';
                $(this).find('input').val('');
                $('#form').trigger('reset'); //Перезагрузка всех окон в форме
            }
        });

        // Закрыть попап «спасибо»
        $('#js-CloseThankYou').click(function () { // по клику на крестик
            $('#js-ThankYou').fadeOut();
            document.body.style.overflow = '';
            document.body.style.paddingRight = '0px';
            $('input[name=email]').attr('required', ''); //В поле запроса E-mail
            $('textarea[name=text]').attr('required', ''); //В поле текст

        });

    });

    // Маска ввода телефона. Плагин: js/jquery.maskedinput.js
    $(function($) {
        $('[name="phone"]').mask("+7(999)999-99-99");
    });

});