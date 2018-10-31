$(document).ready(function () {
    // Plugin PagePiling
    $("#pagepiling").pagepiling({
        anchors: ['pag1', 'pag2', 'pag3'],
        menu: '#menu'
    });

    /**
     * Evento que añade la clase hover a un elemento de menú al pasar el ratón por encima del padre de dicho elemento
     */
    $('[data-menuanchor]').hover(function (evento) {
        let linkItem = $(this).find('a');
        linkItem.toggleClass("hover");
    })

    $('[data-menuanchor]').on('click', irAAncla);

})

/**
 * Función que recoge un evento de click en un li de menú y redirecciona con el href que contiene el elemento a hijo
 * @param evento
 */
function irAAncla(evento) {
    var aaa = $(this);
    window.location.replace(aaa.children().attr("href"));
}
