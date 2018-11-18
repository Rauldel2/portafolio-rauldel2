$(document).ready(function () {
    // Plugin PagePiling
    $("#pagepiling").pagepiling({
        anchors: ['pag1', 'pag2', 'pag3'],//        Las anclas
        menu: '#menu'//                             El elemento contenedor de las anclas
    });

    let conocIcons = $(".conocIcons");
    let idOscurecer = $("#oscurecer");
    let botonEnviar = $('#mailEnviar');

    /**
     * Evento que añade la clase hover a un elemento de menú al pasar el ratón por encima del padre de dicho elemento
     */
    $('[data-menuanchor]').hover(function (evento) {
        let linkItem = $(this).find('a');
        linkItem.toggleClass("hover");
    });

    /**
     * Evento de click en conocimientos
     */
    conocIcons.on('click', function (ev) {
        idOscurecer.addClass('oscurecer');//                Propiedad para oscurecer la pantalla mediante un div
        $(this).after('<div class="popup"></div>');//       Inserción de popup
        let popup = $(".popup");//                          Captura de popup
        let etiqueta = $(this).html();//                    Captura del html (el texto) del elemento clickado
        popup.css({"top": ev.pageY, "left": ev.pageX, "width": "20vw"});//      Coordenadas iniciales del popup

        if (etiqueta.toUpperCase() === "JS") popup.html("<p>" + textos.conocimJs + "</p>");
        if (etiqueta.toUpperCase() === "HTML") popup.html("<p>" + textos.conocimHtml + "</p>");
        if (etiqueta.toUpperCase() === "CSS") popup.html("<p>" + textos.conocimCss + "</p>");
        if (etiqueta.toUpperCase() === "PHP") popup.html("<p>" + textos.conocimPhp + "</p>");
        if (etiqueta.toUpperCase() === "MYSQL") popup.html("<p>" + textos.conocimMysql + "</p>");
        if (etiqueta.toUpperCase() === "JAVA") popup.html("<p>" + textos.conocimJava + "</p>");

        setTimeout(function () {
            popup.css({"top": "10vh", "left": "25vw", "width": "45vw"});//      Coordenadas finales del popup.
        }, 200);//                                                              El timeout es para que haga la animación


        $('.oscurecer').on('click', function () {//         Evento de click en la parte oscurecida de la pantalla

            if(popup != 'undefined') popup.remove();//      Destruye el popup si lo encuentra

            idOscurecer.removeClass('oscurecer');//         El div que oscurece deja de hacerlo
        })
    });

    botonEnviar.on('click', enviaMail);//   Evento de click para enviar E-Mail

    /**
     * Evento de enlace directo a ancla
     */
    $('[data-menuanchor]').on('click', irAAncla);//     data-menuanchor son los li que contienen los enlaces

});

/**
 * Función que recoge un evento de click en un li de menú y redirecciona con el href que contiene el elemento a hijo
 */
function irAAncla(){
    var linkContainer = $(this);
    window.location.replace(linkContainer.children().attr("href"));
}

/**
 * Función que abre un cliente de E-Mail recogiendo la información escrita en un formulario y pegándola en dicho cliente
 */
function enviaMail(){
    let asunto = $('#mailAsunto').val();
    let mensaje = $('#mailMensaje').val();

    window.open("mailto:" + textos.contactoDirMail + "?subject=" + asunto + "?body=" + mensaje);
}