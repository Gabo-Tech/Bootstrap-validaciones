¿Qué es Bootstrap? 

Bootstrap es el marco HTML, CSS y JavaScript más popular.


¿Para qué sirve? 

Para desarrollar sitios web responsivos y móviles.


¿Por qué usar Bootstrap? 

Para desarrollar sitios web responsivos y móviles.


Características de Bootstrap 

Bootstrap incluye plantillas de diseño basadas en HTML y CSS para tipografía, formularios, botones, tablas, navegación, modales, carruseles de imágenes y muchos otros, así como complementos de JavaScript opcionales.


Ventajas y desventajas de usar bootstrap 

Ventajas básicamente te prmite maquetar webs en un tiempo record. y la desventaja es que luego puede ser más complicdo personalizar cosas según cuan diferente quiras tener el código. 


Como instalar o implementar bootstrap en mi proyecto 

Lo mejor es usar la CDN pero también puedes descargar el archivo. En cualquiera de las dos lo incluyes en el html y ya.


¿Se puede implementar responsive con Bootstrap? Por supuesto, Si es asi podrías explicar como funciona y poner un ejemplo pues hay clases predefinidas para estilizar según el tamaño. 
¿Que es un componente de bootstrap?Pon un ejemplo elementos de la página web ya programados como el carousel 

¿Hay muchos tipos de diseños en Bootstrap? Si los hay, explícalos    

Pues depende de a lo que te refiereas con diseños, está pensado para ser mobile first pero también pudes diseñar para escritorio.


¿Cuáles son los diferentes tipos de botones en bootstrap? Pon ejemplos. 

.btn-primario La clase "principal" se puede usar para proporcionar más peso visual a un botón mientras representa una acción principal para que los visitantes realicen en la página. Por ejemplo, en la página de inicio de un sitio comercial, el botón principal podría invitar a los visitantes a comprar su producto. .btn-secundario La clase "secundaria" se puede usar para proporcionar más peso visual a un botón mientras representa una acción secundaria para que los visitantes realicen en la página. Mientras que un botón principal podría invitar a los visitantes a comprar un producto en la página de inicio de un sitio comercial, el botón secundario podría invitar a los visitantes a probarlo. Botones de arranque con clases .btn-primary y .btn-secondary que invitan a los visitantes a obtener y probar un producto, respectivamente .btn-exit La clase "éxito" se puede utilizar para indicar una acción exitosa o positiva. Por ejemplo, al final de un formulario, el botón de éxito puede animar a los visitantes a enviarlo..btn-peligro La clase de "peligro" se puede utilizar para indicar una acción potencialmente peligrosa o negativa. Si bien el botón de éxito puede alentar a los visitantes a enviar un formulario, es posible que desee utilizar un botón de peligro en su lugar para asegurarse de que los visitantes revisen su información antes de enviarla. Esto es especialmente importante si no pueden regresar y cambiar su información una vez que la envían. Botones de arranque con las clases .btn-success y .btn-danger que invitan a los visitantes a enviar o revisar el formulario antes de enviarlo, respectivamente .btn-advertencia De manera similar, la clase "advertencia" puede representar una advertencia. Por ejemplo, si un usuario está creando una cuenta, el botón de advertencia puede indicar que se omitieron algunos campos obligatorios y deben completarse antes de continuar con el registro. .btn-info La clase "info" puede representar una alerta informativa. En un formulario de registro de cuenta, un botón de información puede indicar que un usuario puede hacer clic para editar su perfil. Botones de arranque con las clases .btn-warning y .btn-info que indican a los visitantes que completen su registro o editen su perfil, respectivamente .btn-luz La clase "ligera" se agregó cuando Bootstrap amplió sus opciones de color predeterminadas. Es una excelente opción para páginas web con colores de fondo oscuros. El botón Bootstrap con clase de luz se destaca sobre un fondo oscuro .btn-oscuro La clase "oscura" también se agregó cuando Bootstrap amplió sus opciones de color predeterminadas. Es una excelente opción para páginas web con colores de fondo claros. El botón Bootstrap con clase oscura se destaca sobre un fondo claro .btn-enlace Puede usar la clase "enlace" si desea restar énfasis a la apariencia de un botón. Esta última clase de modificador predeterminado hará que un botón se vea como un enlace, pero aún así se comportará como un botón. Por ejemplo, puede enviar un boletín informativo por correo electrónico con publicaciones de blog recientes. Debajo del título de la publicación, puede incluir una breve descripción, así como un botón con la clase de enlace que invite a los lectores a leer más. A continuación se muestra cómo aparecería el botón al hacer clic.Botón Bootstrap con clase de modificador de enlace que invita a los suscriptores de correo electrónico a leer más Para obtener más opciones de personalización, puede reemplazar estas clases de modificadores predeterminadas o combinarlas con otras clases de CSS para obtener opciones adicionales de color, tamaño y estado. Antes de analizar más de cerca estas opciones de estilo, es importante tener en cuenta que las clases .btn se pueden usar con otros elementos en Bootstrap.


¿Que es un Carousel de bootstrap? Pon un ejemplo.
 
Una serie de elementos, generalmente imágenes van pasando para que el usuario pueda verlas.


¿Que es un spinner de bootstrap? Pon un ejemplo 

Indica el estado de carga de un componente o una página con los indicadores giratorios de Bootstrap, creados completamente con HTML, CSS y sin JavaScript. 


¿Que es un navBar de bootstrap? Pon un ejemplo. 

Es una barra de navegación, como por ejemplo la barra de navegación de twitter


¿Que es un modal de bootstrap? Pon un ejemplo 

Es como un cuadro de dialogo o pop up de boostrap.


Existen inputs para subir archivos en Bootstrap? Pon un ejemplo 

Sí


¿Qué es un plugin scrollspy en Bootstrap?Pon un ejemplo 

Scrollspy es un plugin que actualiza automáticamente los enlaces en una lista de navegación en función de la posición de desplazamiento actual.


*Extra
Implementa nuevos puntos sobre bootstrap que hayas descubierto durante tu investigación y creas que son importantes

hay que saber usarlo pero con cuidado sin pasarse si no se queda un web standar sin personalidad y sin personalizar


 
 
 
1.Parte 2. Práctica Bootstrap & Validaciones
Crea la siguiente página utilizando bootstrap que cumpla los siguientes requisitos:
Implementa un NavBar con el que puedas moverte por las 2 vistas de la página HECHO
Crea la vista Crear Usuario que contenga lo siguiente HECHO
Formulario con los siguientes campos HECHO
Nombre HECHO
Correo HECHO
Contraseña 1 HECHO
Contraseña 2 HECHO
Guarda la información recogida de cada uno de los usuarios en localStorage HECHO
Implementa validación que obligue a rellenar todos los campos HECHO
Implementa una validación para el correo HECHO
Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2 HECHO
Implementa una validación de contraseña HECHO

Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca  
Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.
Muestra los mensajes utilizando los alerts de bootstrap
Crea la vista Usuarios la cual debe mostrar en cards de bootstrap los usuarios guardados en localStorage con los siguientes campos:
Nombre
Correo


Entregables

Subir el ejercicio a un repositorio en github e implementar un buen readme.
El readme debe contener el enlace de la presentación de bootstrap
Dejar el enlace del repositorio adjuntado en Classroom.
