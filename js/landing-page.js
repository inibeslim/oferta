/*
 * Contagem regressiva
 * https://codepen.io/jmikey/pen/tFHrp
 */
/*
var secondsRemaining;
var intervalHandle;

function tick() {
    var timeDisplay = document.getElementById("contagem-regressiva");
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    if (sec < 10) {
        sec = "0" + sec;
    }
    var message = min.toString() + ":" + sec;
    timeDisplay.innerHTML = message;

    if (secondsRemaining === 0) {
        clearInterval(intervalHandle);
        timeDisplay.innerHTML = '1 min';
    }
    secondsRemaining--;
}

function startCountdown() {
    var minutes = '27'; // minutos
    if (isNaN(minutes)) {
        console.log("Número inválido");
        return;
    }
    secondsRemaining = minutes * 60;
    intervalHandle = setInterval(tick, 1000);
}
*/
$(document).ready(function () {
    console.log('Website carregado: ' + new Date());


    /*
     * SLIDER
     */
    $('#simulador-input').rangeslider({
        // Feature detection the default is `true`.
        // Set this to `false` if you want to use
        // the polyfill also in Browsers which support
        // the native <input type="range"> element.
        polyfill: false,

        // Default CSS classes
        rangeClass: 'rangeslider',
        disabledClass: 'rangeslider--disabled',
        horizontalClass: 'rangeslider--horizontal',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle',

        // Callback function
        onInit: function () {
        },

        // Callback function
        onSlide: function (position, value) {
            $('.indicador').remove();
            if (this.value === 1) {
                $('.slider-element').removeClass('active');
                $('#m-1').addClass('active');
                $('#i-1').addClass('active');
                $('#m-n').text('1');
                $('.simulador .peso .numero').text('-6 KG');
                $('.simulador .gordura-corporal .numero').text('-7%');
                $('.simulador .busto .numero').text('-6 CM');
                $('.simulador .cintura .numero').text('-11 CM');
                $('.simulador .coxa .numero').text('-7 CM');
            }
            if (this.value === 2) {
                $('.slider-element').removeClass('active');
                $('#m-2').addClass('active');
                $('#i-2').addClass('active');
                $('#m-n').text('2');
                $('.simulador .peso .numero').text('-11 KG');
                $('.simulador .gordura-corporal .numero').text('-15%');
                $('.simulador .busto .numero').text('-11 CM');
                $('.simulador .cintura .numero').text('-20 CM');
                $('.simulador .coxa .numero').text('-14 CM');
            }
            if (this.value === 3) {
                $('.slider-element').removeClass('active');
                $('#m-3').addClass('active');
                $('#i-3').addClass('active');
                $('#m-n').text('4');
                $('.simulador .peso .numero').text('-15 KG');
                $('.simulador .gordura-corporal .numero').text('-22%');
                $('.simulador .busto .numero').text('-15 CM');
                $('.simulador .cintura .numero').text('-28 CM');
                $('.simulador .coxa .numero').text('-20 CM');
            }
            if (this.value === 4) {
                $('.slider-element').removeClass('active');
                $('#m-4').addClass('active');
                $('#i-4').addClass('active');
                $('#m-n').text('6');
                $('.simulador .peso .numero').text('-20 KG');
                $('.simulador .gordura-corporal .numero').text('-28%');
                $('.simulador .busto .numero').text('-19 CM');
                $('.simulador .cintura .numero').text('-35 CM');
                $('.simulador .coxa .numero').text('-25 CM');
            }
            if (this.value === 5) {
                $('.slider-element').removeClass('active');
                $('#m-5').addClass('active');
                $('#i-5').addClass('active');
                $('#m-n').text('8');
                $('.simulador .peso .numero').text('-26 KG');
                $('.simulador .gordura-corporal .numero').text('-32%');
                $('.simulador .busto .numero').text('-22 CM');
                $('.simulador .cintura .numero').text('-41 CM');
                $('.simulador .coxa .numero').text('-29 CM');
            }
            if (this.value === 6) {
                $('.slider-element').removeClass('active');
                $('#m-6').addClass('active');
                $('#i-6').addClass('active');
                $('#m-n').text('10');
                $('.simulador .peso .numero').text('-32 KG');
                $('.simulador .gordura-corporal .numero').text('-36%');
                $('.simulador .busto .numero').text('-25 CM');
                $('.simulador .cintura .numero').text('-46 CM');
                $('.simulador .coxa .numero').text('-32 CM');
            }
        },

        // Callback function
        onSlideEnd: function (position, value) {
        }
    });

    $('#m-1').click(function () {
        $('#simulador-input').val(1).change();
    });
    $('#m-2').click(function () {
        $('#simulador-input').val(2).change();
    });
    $('#m-3').click(function () {
        $('#simulador-input').val(3).change();
    });
    $('#m-4').click(function () {
        $('#simulador-input').val(4).change();
    });
    $('#m-5').click(function () {
        $('#simulador-input').val(5).change();
    });
    $('#m-6').click(function () {
        $('#simulador-input').val(6).change();
    });


    /*
    * Inicia contagem regressiva
    */
    //startCountdown();

    /*
     * Navegacao suave na página
     */
    var htmlBody = $('html, body');
    $('.ir-para').on('click', function (e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    /*
     * Cookies
     */
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }

    /*
     * Estoque restante
     */
    var d = new Date();
    var hora = d.getHours();

    var kit1restantes = getCookie('kit1restantes'),
        kit3restantes = getCookie('kit3restantes'),
        kit5restantes = getCookie('kit5restantes'),
        visitN = getCookie('visitN');

    if (kit1restantes === null || kit3restantes === null || kit5restantes === null) {
        if (hora >= 0 && hora < 7) {
            kit1restantes = Math.floor((Math.random() * 20) + 10);
            kit3restantes = Math.floor((Math.random() * 20) + 10);
            kit5restantes = Math.floor((Math.random() * 20) + 10);
        } else if (hora >= 7 && hora < 10) {
            kit1restantes = Math.floor((Math.random() * 20) + 15);
            kit3restantes = Math.floor((Math.random() * 20) + 15);
            kit5restantes = Math.floor((Math.random() * 20) + 15);
        } else if (hora >= 10 && hora < 14) {
            kit1restantes = Math.floor((Math.random() * 15) + 10);
            kit3restantes = Math.floor((Math.random() * 15) + 10);
            kit5restantes = Math.floor((Math.random() * 15) + 10);
        } else if (hora >= 14 && hora < 18) {
            kit1restantes = Math.floor((Math.random() * 10) + 5);
            kit3restantes = Math.floor((Math.random() * 10) + 5);
            kit5restantes = Math.floor((Math.random() * 10) + 5);
        } else {
            kit1restantes = Math.floor((Math.random() * 8) + 2);
            kit3restantes = Math.floor((Math.random() * 8) + 2);
            kit5restantes = Math.floor((Math.random() * 8) + 2);
        }
    } else {
        if (visitN === 1) {
            kit1restantes = parseInt(kit1restantes) - parseInt(Math.round(Math.random()));
            kit3restantes = parseInt(kit3restantes) - parseInt(Math.round(Math.random()));
            kit5restantes = parseInt(kit5restantes) - parseInt(Math.round(Math.random()));
        }
    }

    if (visitN === null) {
        setCookie('visitN', 1, 4);
    } else {
        visitN = parseInt(visitN) + 1;
        setCookie('visitN', visitN, 4);
    }

    $('#kit1-restante').html('RESTAM <strong>' + kit1restantes + ' KITS</strong> EM ESTOQUE!');
    $('#kit3-restante').html('RESTAM <strong>' + kit3restantes + ' KITS</strong> EM ESTOQUE!');
    $('#kit5-restante').html('RESTAM <strong>' + kit5restantes + ' KITS</strong> EM ESTOQUE!');

    setTimeout(function () {
        setCookie('kit1restantes', kit1restantes, 4);
        setCookie('kit3restantes', kit3restantes, 4);
        setCookie('kit5restantes', kit5restantes, 4);
    }, 5000);

    setInterval(toggle, 2350);

    function toggle() {
        $('.toggleKit1').toggleClass('visible');
        $('.toggleKit3').toggleClass('visible');
        $('.toggleKit5').toggleClass('visible');
    }


    /*
     * Perguntas e respostas
     */
    $('.pergunta .resposta').hide();
    $('.pergunta .titulo').click(function () {
        $(this).parent().toggleClass('ativo');
        $(this).parent().find('.resposta').slideToggle("fast");
    });

    /*
     * Lobibox
     */
    function termoRandom(string) {
        if (string.indexOf("|") != -1) {
            var nomeString = string.split("|");
            var nomes = nomeString[1];
            var nome = nomes.split(",");
            var number = Math.floor(Math.random() * nome.length);
            var nomeFinal = nome[number];
            return (nomeString[0] + nomeFinal + nomeString[2]);
        } else {
            return string;
        }
    }

    Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
        pauseDelayOnHover: false,
        continueDelayOnInactiveTab: false,
        showAfterPrevious: false,
        rounded: false,
        delayIndicator: true,
        sound: false,
        icon: true,
        img: "images/check-branco.svg",
        showClass: 'fadeIn',
        hideClass: '',
        size: 'mini',
        closable: false,
        position: 'bottom right',
        delay: 7000, // 7000
        //onClickUrl: '#comprar',
        width: 'auto'
    });

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|11,12,13,14,15| pessoas compraram nos últimos 30 minutos'),
            msg: 'Clique e Garanta Seu Corpo Perfeito',
            onClick: function (e) {
                e.preventDefault();
                htmlBody.animate({
                    scrollTop: $('#comprar').offset().top
                }, 500);
                return false;
            }
        });
    }, 7000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Beatrice,Mariana,Gabriela,Giovana,Nicole,Aline,Laura,Fernanda,Fabiana| acabou de comprar InibeSlim!'),
            msg: 'Clique e Aproveite a Oferta!',
            onClick: function (e) {
                e.preventDefault();
                htmlBody.animate({
                    scrollTop: $('#comprar').offset().top
                }, 500);
                return false;
            }
        });
    }, 27000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Anna,Carolina,Gabrielly,Juliana,Matilde,Bianca,Evelyn| comprou o InibeSlim!'),
            msg: 'Aproveite, a Promoção está Terminando!',
            onClick: function (e) {
                e.preventDefault();
                htmlBody.animate({
                    scrollTop: $('#comprar').offset().top
                }, 500);
                return false;
            }
        });
    }, 57000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Regina,Elvira,Ariana,Bia,Marcela,Manuela,Letícia,Débora| de Cuiabá acaba de comprar!'),
            msg: 'Clique e Compre Agora Mesmo!',
            onClick: function (e) {
                e.preventDefault();
                htmlBody.animate({
                    scrollTop: $('#comprar').offset().top
                }, 500);
                return false;
            }
        });
    }, 77000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Marta,Marilza,Duda,Ana Paula,Luciana,Lívia,Eduarda,Emília,Renata| comprou agora na Promoção!'),
            msg: 'Clique e Garanta seu Desconto Especial',
            onClick: function (e) {
                e.preventDefault();
                htmlBody.animate({
                    scrollTop: $('#comprar').offset().top
                }, 500);
                return false;
            }
        });
    }, 97000);

    /*
     * STICKY HEADER
     */
    var cabecalho = $('header.cabecalho'),
        body = $('body'),
        alturaCabecalho = cabecalho.outerHeight();

    body.css("padding-top", alturaCabecalho);
    cabecalho.css({'position': 'absolute', 'top': 0, 'left': 0});

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll < 300) {
            cabecalho.removeClass('fixed').css({'position': 'absolute', 'transform': 'translateY(0)'});
        }
        if (scroll >= 300 && scroll < 600) {
            cabecalho.addClass('fixed').css({'transform': 'translateY(-120%)'});
        }
        if (scroll >= 600) {
            cabecalho.addClass('fixed').css({'position': 'fixed', 'transform': 'translateY(0)'});
        }
    });

    /*
     * ANIMACOES
     */
    setTimeout(function () {
        $('#cabecalho-botao-comprar').addClass('com-badge');
        setTimeout(function () {
            $('#cabecalho-botao-comprar .badge').addClass('animado');
        }, 1000);
    }, 10000);
    setTimeout(function () {
        $('#lista-caracteristicas').removeClass('intro').addClass('jumping');
    }, 3000);

    /* SVG */
    inlineSVG.init({svgSelector: 'img.svg'});

});
