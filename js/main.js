$(document).ready(function () {
    // Plugin PagePiling
    $("#pagepiling").pagepiling({
        anchors: ['pag1', 'pag2', 'pag3'],
        menu: '#menu'
    });

    let conocIcons = $(".conocIcons");
    let idOscurecer = $("#oscurecer");

    /**
     * Evento que añade la clase hover a un elemento de menú al pasar el ratón por encima del padre de dicho elemento
     */
    $('[data-menuanchor]').hover(function (evento) {
        let linkItem = $(this).find('a');
        linkItem.toggleClass("hover");
    })

    /**
     * Evento de click en conocimientos
     */
    conocIcons.on('click', function (ev) {
        idOscurecer.addClass('oscurecer');
        $(this).after('<div class="popup"></div>');
        let popup = $(".popup");
        let etiqueta = $(this).html();
        popup.css({"top": ev.pageY, "left": ev.pageX, "width": "20vw"});
        if (etiqueta.toUpperCase() === "JS") popup.html("<p>Ola ke ase</p>");
        setTimeout(function () {
            popup.css({"top": "10vh", "left": "20vw", "width": "60vw"});
        }, 200);


        $('.oscurecer').on('click', function () {

            if(popup != 'undefined') popup.remove();

            idOscurecer.removeClass('oscurecer');
        })
    })

    /**
     * Evento de enlace directo a ancla
     */
    $('[data-menuanchor]').on('click', irAAncla);

})

/**
 * Función que recoge un evento de click en un li de menú y redirecciona con el href que contiene el elemento a hijo
 */
function irAAncla() {
    var linkContainer = $(this);
    window.location.replace(linkContainer.children().attr("href"));
}
