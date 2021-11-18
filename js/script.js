$('.spaces__mosaic-item-button-arrow').on('click', function() {
    $(this).parent('div').parent('div').children('.spaces__mosaic-item-text').toggle("slide");
    $(this).children('img').toggleClass('active-arrow'); 
    $(this).parent('div').next('.spaces__mosaic-item-inner').toggleClass('visibility'); 
    $(this).parent("div").children('.spaces__mosaic-item-button-link').toggle("slide");
})

$('.carousel').slick({
    infinite: true,
	dots: true,
    draggable: true,
});
// https://api.telegram.org/botTOKEN/getUpdates

$('#send_btn').on('click', function(e){
    //отмена перезагрузки сайта при нажатии на кнопку
    e.preventDefault();
    //пишем переменные и берем из input значения, которые прописали + обрезаем боковые отступы
    let name = $('#name').val().trim();
    let phone = $('#phone').val().trim();
    let email = $('#email').val().trim();

    //делаем валидацию по отправке пустой строки на сервер 
    if(email == ""){
        alert('Enter your email');
                //если у нас какая-то ошибка, то код перестает работать дальше (отправка на сервер не осуществляется)
        return false
    } else if (phone == ""){
        alert('Enter your phone number');
        return false
    }
    //отправка запроса на сервер - php
    $.ajax({
        // куда отправляем
        url: 'ajax/telegram.php',
        //какой метод используем ( у нас просто отправка материала)
        type: 'POST',
        //отменяем кеширование
        cache: false,
        // какие данные отправляем
        data: {'name': name, 'phone': phone, 'email': email}, 
        // что именно отправляем
        dataType: 'html',
        // перед тем как отправить мы делаем кнопку неактивной, чтобы пользователь не смог сделать миллион отправок
        beforeSend: function(){
            $('#send_btn').prop('disabled', true)
        },
        // при успешной отправке делаем такие действия
        success: function(){
            alert('Success!');
            $('#email').val('');
            $('#name').val('');
            $('#phone').val('');
            $('#send_btn').prop('disabled', false);
        }
    })
});
$(document).ready(function(){
    $("#parking").click(function(){
        $(".facilities__content-image-img").attr("src", "../img/facilities/parking.png");
    });
    $("#spaces").click(function(){
        $(".facilities__content-image-img").attr("src", "../img/facilities/spaces.png");
    });
    $("#cafe").click(function(){
        $(".facilities__content-image-img").attr("src", "../img/facilities/cafe.png");
    
    });
    $("#playground").click(function(){
        $(".facilities__content-image-img").attr("src", "../img/facilities/playground.png");
    
    }); 
    $("#outdoor").click(function(){
        $(".facilities__content-image-img").attr("src", "../img/facilities/outdoor.png");
    
    }); 
});


const list = document.querySelectorAll('.facilities__content-ul-item')
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active')
    })
});
$('.gallery__carousel').slick({
    infinite: true,
	dots: true,
    draggable: true,
    arrows: false,
});;
$('.review__carousel').slick({
    infinite: true,
	dots: true,
    draggable: true,
    arrows: false,
});
$(".help__block-item-question-arrow").hover(function(){
    $(this).parent().css('background-color', '#FF5722').css('color', '#ffffff');
 }, function() {
     $(this).parent().css('background-color', '#ffffff').css('color', '#000000');
    });


$(".help__block-item-question-arrow").click(function(){
    $(this).parent().next("div").slideToggle(500);
    $(this).children('img').toggleClass('switch-arrow');
});;
$('.member__btn').on('click', function(){
    $('.modal').fadeIn();
    $('body').addClass('no-scroll');
})

$('.modal__close').on('click', function(){
    $('.modal').fadeOut();
    $('body').removeClass('no-scroll');
})

$('.modal__btn').on('click', function(){
    $('.modal').fadeOut();
    $('body').removeClass('no-scroll');
})

$('.modal').on('click', function(e) {
    if($(e.target).closest('.modal__window').length == 0){
        $(this).fadeOut();
        $('body').removeClass('no-scroll');
    }
});
const menu_btn = document.querySelector(".header__hamburger");
const menu_mobile = document.querySelector(".mobile-nav");
const body = document.querySelector('body');

menu_btn.addEventListener("click", function() {
    menu_btn.classList.toggle("is-active");
    menu_mobile.classList.toggle("is-active");
    body.classList.toggle("no-scroll");
});
$(".footer__info-block-title").click(function(){
    $(this).next("div").slideToggle(500);
    $(this).parent("div").children('.footer__info-block-arrow').toggleClass('rotate-arrow');
});;
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn();
    } else {
        $('#up').fadeOut();
    }
 })

 $('#up').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 500);
 });
const mainMenuLinks = document.querySelectorAll(
    ".header__nav-li-item[data-togo]"
);
if (mainMenuLinks.length > 0) {
    mainMenuLinks.forEach((mainMenuLink) => {
        mainMenuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const mainMenuLink = e.target;
        if (
            mainMenuLink.dataset.togo &&
            document.querySelector(mainMenuLink.dataset.togo)
        ) {
            const togoBlock = document.querySelector(mainMenuLink.dataset.togo);
            const goToBlockValue =
                togoBlock.getBoundingClientRect().top +
                pageYOffset -
                document.querySelector(".header").offsetHeight;

            window.scrollTo({
                top: goToBlockValue,
                behavior: "smooth",
            });
            e.preventDefault();
        }
    }
}

$(".header__nav-button-login").on("click", function () {
    $(".modal").fadeIn();
    $(".mobile-nav").removeClass("is-active");
});

const hamMenuLinks = document.querySelectorAll(".mobile-nav__link[data-togo]");
if (hamMenuLinks.length > 0) {
    hamMenuLinks.forEach((hamMenuLink) => {
        hamMenuLink.addEventListener("click", onHamLinkClick);
    });

    function onHamLinkClick(e) {
        const hamMenuLink = e.target;
        if (
            hamMenuLink.dataset.togo &&
            document.querySelector(hamMenuLink.dataset.togo)
        ) {
            const togoBlock = document.querySelector(hamMenuLink.dataset.togo);
            const goToBlockValue =
                togoBlock.getBoundingClientRect().top +
                pageYOffset -
                document.querySelector(".header").offsetHeight;

            const menu_btn = document.querySelector(".header__hamburger");
            const menu_mobile = document.querySelector(".mobile-nav");
            const body = document.querySelector("body");
            menu_btn.classList.remove("is-active");
            menu_mobile.classList.remove("is-active");
            body.classList.remove("no-scroll");

            window.scrollTo({
                top: goToBlockValue,
                behavior: "smooth",
            });
            e.preventDefault();
        }
    }
}
;

