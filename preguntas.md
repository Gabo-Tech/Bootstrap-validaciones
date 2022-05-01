# Investigación Bootstrap
<center><img src="https://anthoncode.com/wp-content/uploads/2019/01/bootstrap-logo-png.png" alt="Kitten"  margin =auto width=auto height="200" /> </center>

### ¿Qué es Bootstrap y para qué sirve?

Bootstrap es un framework <i>front-end</i> utilizado para desarrollar aplicaciones web y sitios mobile first
El framework combina CSS y JavaScript para estilizar los elementos de una página HTML. Permite mucho más que, simplemente, cambiar el color de los botones y los enlaces.

Esta es una herramienta que proporciona interactividad en la página, por lo que ofrece una serie de componentes que facilitan la comunicación con el usuario, como menús de navegación, controles de página, barras de progreso y más.
Además de todas las características que ofrece el framework, su principal objetivo es permitir la <b>construcción de sitios web responsive para dispositivos móviles.</b>

### ¿Por qué usar Bootstrap?

Bootstrap facilita herramientas para crear aplicaciones de forma rápida y sencilla, ya que se apoya en una librería de componentes ya creados y optimizados para el entorno web con la ventaja de estar pensados para ser responsive. 

### Características de Bootstrap

Bootstrap está constituido por una serie de archivos CSS y JavaScript responsables de asignar características específicas a los elementos de la página.

Hay un archivo principal llamado bootstrap.css, que contiene una definición para todos los estilos utilizados. Básicamente, la estructura del framework se compone de dos directorios:
* Css: contiene los archivos necesarios para la estilización de los elementos y una alternativa al tema original;
* Js: contiene la parte posterior del archivo bootstrap.js (original y minificado), responsable de la ejecución de aplicaciones de estilo que requieren manipulación interactiva.

Para asignarle una característica a un elemento, simplemente debemos informar la clase correspondiente en la propiedad “class” del elemento que será estilizado

### Ventajas y desventajas de usar bootstrap
Ventajas: 

* Puedes diseñar una web jugando con sus elementos compuestos por diferentes combinaciones de HTML, CSS y Javascript.
* Utiliza HTML5, CSS3, jQuery o GitHub, entre otros.
* Incluye Grid system: muy útil para maquetar por columnas.
* Sus plantillas son de sencilla adaptación responsive.
* Se integra con librerías JavaScript.
* Usa Less: un lenguaje de las hojas de estilo CSS preparado para enriquecer los estilos de la web.
* Cuenta con una documentación completa que te puede sacar de apuros rápidamente.
* Facilita enormemente el diseño de interfaces y además incluye por defecto una plantilla bastante optimizada.

Desventajas:

* Se recomienda trabajar con Bootstrap desde el inicio de un proyecto, ya que si quieres incluir el framework en un trabajo ya iniciado algunos estilos podrían “romperse” y se tendría que ajustar a como se tenia en un principio.
* Es complicado, cambiar de versión si has realizado modificaciones profundas, pues se pueden perder estilos.
* No es ligero, y además, para algunas funcionalidades, será necesario tener que usar Javascript y jQuery.
* Debes adaptar tu diseño a un grid de 12 columnas, que se modifican según el dispositivo. Aquí empiezan los problemas, Bootstrap por defecto te trae anchos, márgenes y altos de línea, y realizar cambios específicos.

### Como instalar o implementar bootstrap en un proyecto

Hay diferentes formas de configurarlo o estructurarlo para usarlo en una aplicación web. Sin embargo, para que funcione correctamente, es necesario agregar las bibliotecas JQuery y Popper.js, necesarias para la ejecución de algunos componentes de Bootstrap.

Para comenzar a usar Bootstrap en una página, es necesario agregar las referencias de los principales archivos del framework en la página principal de la aplicación. Es importante seguir las referencias en el orden que toca. Por lo tanto, la primera referencia debe ser el archivo bootstrap.css ubicado en la etiqueta <head>.
Las referencias a los archivos JavaScript deben colocarse en la parte inferior de la página, antes de cerrar la etiqueta </body>. El valor predeterminado para los scripts debe ser: JQuery, Popper.js y Bootstrap.js.

A continuación, puedes ver el código de una página HTML con todas las referencias necesarias para que la estructura funcione:

```

<!doctype html> 
<html lang="en"> 
<head>   
<!-- Required meta tags -->  
<meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
<!-- Bootstrap CSS --> 
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> 
<title>Hello, world!</title> </head> 
<body> <h1>Hello, world!</h1> 
<!-- Optional JavaScript --> 
<!-- jQuery first, then Popper.js, then Bootstrap JS --> 
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script> 
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>


```
<Fuente: Getbootstrap.com>


### ¿Se puede implementar responsive con Bootstrap? 

Para implementar diseños responses el framework funciona con:
* la estilización del elemento < div >;
* el uso del class container.

En la práctica, el elemento < div >, funciona para crear una serie de notas, similar a una tabla, capaz de estructurar la página de forma adaptable. El elemento < div > es más flexible, ya que permite definir y cambiar el tamaño de la longitud fácilmente.
Bootstrap le ha asignado al elemento < div > una característica de class container, que funciona para determinar las dimensiones apropiadas para los elementos insertados en ese espacio.
Básicamente, o framework funciona con tres tipos de containers:
* Container: como un conjunto con una propiedad de ancho máximo, que determina qué tamaño de tela es ideal para crear el diseño de página.
* Container-fluid: considera la longitud total de la tela del dispositivo para definir el diseño. Para esto, se considera la propiedad width —100% en todos los límites de tamaño de tela—.
* Container-{ breakpoint}: considera width —100% hasta alcanzar un cierto tamaño—.



<center><img src="https://i.imgur.com/8xofjtA.gif" height="200" /></center>

### ¿Que es un componente de bootstrap?

Un componente de bootstrap se trata de un código estilizado y reutilizable  para proporcionar una buena experiencia de usuario e interacciones de usuario en una página web como barras de navegación, ventanas emergentes, menús desplegables, iconos, botones, formularios prediseñados y también opciones de tamaño para diferentes elementos DOM.


Por ejemplo las tarjetas:


```
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
```


<center><img src="https://i.imgur.com/JY5Lp77.png" height="200" /></center>


### ¿Hay muchos tipos de diseños en Bootstrap? 


### ¿Cuáles son los diferentes tipos de botones en bootstrap?

<center><img src="https://i.imgur.com/qI5aCxm.png" /></center>

#### .btn-primario 
La clase "principal" se puede usar para proporcionar más peso visual a un botón mientras representa una acción principal para que los visitantes realicen en la página. Por ejemplo, en la página de inicio de un sitio comercial, el botón principal podría invitar a los visitantes a comprar su producto. 

#### .btn-secundario 
La clase "secundaria" se puede usar para proporcionar más peso visual a un botón mientras representa una acción secundaria para que los visitantes realicen en la página. Mientras que un botón principal podría invitar a los visitantes a comprar un producto en la página de inicio de un sitio comercial, el botón secundario podría invitar a los visitantes a probarlo. Botones de arranque con clases 

.btn-primary y .btn-secondary que invitan a los visitantes a obtener y probar un producto, respectivamente .btn-exit La clase "éxito" se puede utilizar para indicar una acción exitosa o positiva. Por ejemplo, al final de un formulario, el botón de éxito puede animar a los visitantes a enviarlo.

#### .btn-peligro 
La clase de "peligro" se puede utilizar para indicar una acción potencialmente peligrosa o negativa. Si bien el botón de éxito puede alentar a los visitantes a enviar un formulario, es posible que desee utilizar un botón de peligro en su lugar para asegurarse de que los visitantes revisen su información antes de enviarla. Esto es especialmente importante si no pueden regresar y cambiar su información una vez que la envían. Botones de arranque con las clases .btn-success y .btn-danger que invitan a los visitantes a enviar o revisar el formulario antes de enviarlo, respectivamente 

#### .btn-advertencia
De manera similar, la clase "advertencia" puede representar una advertencia. Por ejemplo, si un usuario está creando una cuenta, el botón de advertencia puede indicar que se omitieron algunos campos obligatorios y deben completarse antes de continuar con el registro. 

#### .btn-info 
La clase "info" puede representar una alerta informativa. En un formulario de registro de cuenta, un botón de información puede indicar que un usuario puede hacer clic para editar su perfil. Botones de arranque con las clases .btn-warning y .btn-info que indican a los visitantes que completen su registro o editen su perfil, respectivamente 

#### .btn-light 
La clase "ligera" se agregó cuando Bootstrap amplió sus opciones de color predeterminadas. Es una excelente opción para páginas web con colores de fondo oscuros. El botón Bootstrap con clase de luz se destaca sobre un fondo oscuro 

#### .btn-dark 
La clase "oscura" también se agregó cuando Bootstrap amplió sus opciones de color predeterminadas. Es una excelente opción para páginas web con colores de fondo claros. El botón Bootstrap con clase oscura se destaca sobre un fondo claro 

#### .btn-enlace 
Puede usar la clase "enlace" si desea restar énfasis a la apariencia de un botón. Esta última clase de modificador predeterminado hará que un botón se vea como un enlace, pero aún así se comportará como un botón. Por ejemplo, puede enviar un boletín informativo por correo electrónico con publicaciones de blog recientes. 

```
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```
### ¿Que es un Carousel de bootstrap?

Un componente ampliamente utilizado en Bootstrap es el Carrusel, una presentación de diapositivas, es decir, una herramienta que permite la visualización de imágenes de manera receptiva.

También permite la inclusión de efectos especiales para la transición de imágenes y controles de visualización, como por ejemplo los indicadores de “siguiente” y “anterior”.


<center><img src="https://i.imgur.com/ntfo1ta.gif" height ="200"/></center>


### ¿Que es un spinner de bootstrap? 
El Spinner o indicador de carga es un feedback visual para el usuario de que un proceso está cargando. En muchas ocasiones hay procesos que pueden tardar algo de tiempo en llevarse a cabo: la carga de una parte de la página o incluso de la página entera. En estos casos, para que el usuario tenga la sensación de que algo está funcionando y que debe esperar, lo normal es proporcionar algún tipo de feedback visual con una animación. 

Existen dos tipos de spinners que generan dos tipos de animaciones diferentes:
* El borde giratorio: que muestra un círculo dando vueltas.
<center><img src="https://i.imgur.com/8FTAO8H.gif"></center>

* El  punto creciente: que utiliza un punto que aparece poco a poco creciendo desde la nada
<center><img src="https://i.imgur.com/mLMAgqW.gif"></center>

### ¿Que es un navBar de bootstrap?
La NavBar (barra de navegación), que permite la construcción de un sistema de navegación sensible.

Es posible configurar diferentes formas de presentar el menú, elegir entre posicionamiento lateral o superior y, también, definir una forma de visualización que se pueda extender o contraer.

También es posible determinar cómo mostrar los enlaces del menú para facilitar la implementación de la navegación del sitio.


<center><img src="https://i.imgur.com/W8VE7Ht.png"></center>


### ¿Que es un modal de bootstrap?

Los modales, también llamados lightboxs o cuadros de dialogo son usados para mostrar información adicional a la que hay en la pantalla principal de la web.
En muchas ocasiones tienen mensajes de confirmación como cuando se va a eliminar un registro, abren imágenes en mayor tamaño, pueden tener formularios de contacto y muchos más usos.

Los modales necesitan tener una llamada a la acción que los invoque, generalmente desde el cuerpo principal de la página, para lo que vamos a introducir un botón, aunque en realidad puede ser cualquier tipo de elemento.


<center><img src="https://i.imgur.com/5Qt5hcZ.png" height="200"></center>

### ¿Existen inputs para subir archivos en Bootstrap?


<center><img src="https://i.imgur.com/5Qt5hcZ.png" height="200"></center>

### ¿Qué es un plugin scrollspy en Bootstrap?
El plug-in Scrollspy se utiliza para actualizar automáticamente los enlaces en una lista de navegación basada en la posición de desplazamiento.

Valores de los atributos:

* data-spy: se utiliza para espiar la posición actual en la que se está desplazando el usuario.
* data-target: este atributo se utiliza para conectar la barra de navegación con el área desplazable.
* data-offset: este atributo especifica el número de píxeles a compensar desde la parte superior al calcular la posición de desplazamiento.


<center><img src="https://i.imgur.com/469WPdX.gif" height="200"></center>