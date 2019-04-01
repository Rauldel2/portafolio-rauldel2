# Página personal

Se trata de un proyecto de página personal mía, de tipo *single page*, para cuya realización se ha utilizado Javascript (JQuery), el plugin [PagePiling](https://alvarotrigo.com/pagePiling/) de Álvaro Trigo, y CSS precompilado (SASS).

Se compone de las siguientes secciones.

### Info

Consta de una pequeña descripción sobre mí a modo de resúmen, y un hipervínculo a la sección de contacto (menú aparte)

### Conocimientos

Sección en la que muestro las tecnologías y lenguajes de programación conocidos. El usuario ha de clicar en cada círculo, los cuales representan en su mayor parte lenguajes de programación, para abrir una descripción más detallada. Una vez abierta la descripción, haciendo click fuera de ella desaparece.

Los textos de las descripciones detalladas están almacenados en el archivo textos.js. Para modificarlos sólo hay que modificar ese archivo.

### Contacto

Un pequeño formulario de contacto que, tras rellenarlo y hacer click en el botón enviar, mediante Javascript abre el cliente de correo electrónico predeterminado del usuario con el asunto y el mensaje especificados.

#
### Secciones comunes

**Barra de menú**: El plugin *PagePiling* ya otorga un modo de pasar de una sección a otra, pero ví adecuado también crear un menú para que la persona que entre en la página sepa qué secciones va a visitar. Es un menú simple, al que sólo se le ha añadido una pequeña funcionalidad mediante Javascript para que al posar el ratón sobre cada elemento del menú desencadene un efecto de *hover* sobre el texto que contiene.

**Footer**: Una lista de redes sociales de las cuales hago uso, y de las cuales sólo se muestra el icono. Para las imagenes he utilizado un *sprite* que contiene todos los iconos, para que se carguen todos desde la primera carga de la página y evitar el ligero parpadeo que puede ocurrir cuando se cargan uno por uno.

#
### Errores conocidos

- En la versión para móvil, es muy fácil que al hacer click para mostrar la descripción detallada de cada conocimiento, al mismo tiempo se cambie la página. Sospecho que se trata de un problema con el plugin PagePiling, que quizá sea demasiado sensible.
