# Ecotierra Datos de intalacion

 Para la instalacion correcta de esta app se debe descargar node en su version 12 o superior[ Node.js](https://nodejs.org/es/) luego con este comando `git clone https://github.com/andresp406/Ecotierra-front.git` clonamos el repositorio desde la consola. luego nos situamos en la raiz de la carpeta clonada colocando el comando `cd ../nombre directorio` luego ya estando en la raiz de la carpeta clonada ejecutamos `npm install` para instalar todas las dependencias de node y asi tener el servidor listo para la ejecucion de los script, tambien se debe instalar el cli de angular por medio del comando `npm install -g @angular/cli` el software consta de la libreria de sweetalert y para ello se debe ejecutar el comando `npm install sweetalert2`,  luego levantamos el servidor con el comando `ng serve -o`.

# Ecotierra Datos del desarrollo

Para la realizacion de este front se consta de 5 componentes principales que son el:
- formularioCliente
- formularioCompra
- listaCompra
- listaCliente
- Home

Estos componentes son los que tienen toda la logica del negocio, ademas tambien consta de componentes hijos como lo son:
- filterDateClient
- selectAllClient
 en estos componentes se renderiza la vista dinamica de los filtros de busqueda

tambien consta de una carpeta compartida llamada shared la cual contiene el header y los errorsValidations

La App se maneja con el principio de servicios los cuales son:
- clientServices: Este se encarga de recibir y enviar por medio de http los endpoint desde el back, con los metodos `getAllClient()` y `storeClient` que como su nombre lo indican guardan y muestran los datos del clientes ademas de inyectarlo al componente listaCliente y formularioCliente.
- saleServices: Este se encarga de recibir y enviar por medio de http las solicitudes del back y consta de tres metodos `storeSale` para guardar la venta `getSalesByClientId` para obtener el filtro por id de cliente y el `getSalesByDates` para obtener las ventas por fecha.

Se usa routing Module basandonos en el principio de Spa. 


