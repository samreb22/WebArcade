# Aplicación WebArcade

![image](https://user-images.githubusercontent.com/127318967/226592958-9f326712-3110-4fb6-bf15-0df33ee0393f.png) ![image](https://user-images.githubusercontent.com/127318967/224808126-3ce3cb9b-9c92-4001-adc6-9c5aa526ea3a.png)

Repositorio para guardar la aplicación con React de una máquina arcade de la formación de juniors de DXC Technology.

![image](https://user-images.githubusercontent.com/127318967/224808377-7ef5b2d4-646e-48a2-a088-4d9428b4bae5.png)

# Información importante sobre directorios en React

_**Directorios de que debemos crear en una aplicación de React:**_

- **components:** Metemos cada componente que metemos en react con una subcarpeta individual para cada componente.

- **pages:** Tendrá componentes que directamente estén configurados en el router, los componentes y las páginas son prácticamente lo mismo, lo único que las páginas hacen referencia a lo que es una página (una pantalla), pantallas de la aplicación que se configuran en el router para dirigirse a ellas a través de URLs.

- **config:** Carpeta de configuración donde vamos a poder poner parámetros para nuestra aplicación. p.e: Si tenemos dos botones en la aplicación, podemos configurar que se muestre uno u otro en un archivo de configuración. Sirve para guardar la configuración de la aplicación.

- **utils:** Aquí guardaremos funciones y librerías propias que nosotros construyamos.

- **hooks:** Para guardar hooks (son utilidades especiales de react).

- **services:** Directorio que se encargará de guardar las configuraciones que vamos a hacer para luego hacer llamadas a los servicios.

- **context:** Son estados de las aplicaciones que funcionan a nivel global de la aplicación. p.e: Si entramos a la pantalla de jugar, los estados de puntuación tienen que manetenerse entre una panrtalla y otra (en las diferentes pantallas), tienen que estar hechos a nivel global de la aplicación.
