### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW


### Santiago Forero Yate, Juan Sebastian Cepeda Saray

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/es-es/free/students/). Al hacerlo usted contará con $100 USD para gastar durante 12 meses.
Antes de iniciar con el laboratorio, revise la siguiente documentación sobre las [Azure Functions](https://www.c-sharpcorner.com/article/an-overview-of-azure-functions/)

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

**Preguntas**

* ¿Qué es un Azure Function?
  - Es una plataforma de proceso, que por medio de eventos, permite la ejecución de ciertas funcionalidades de nuestro sistema sin necesidad que exista un servidor de por medio, simplificando asi el montaje de una infraestrucutra en la nube.
* ¿Qué es serverless?
  - serverless significa "sin servidor". En la nube existen servidores para administracion de estas funciones, pero ya es el administrador de la nube quien se preocupa de eso. solo el desarrollador tiene que preocuparse por la codificación del software.
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
  - Esla version de entorno en la cual se va a ejectuar la Function App, donde dicho entorno contiene bibliotecas, servicios y otras configuraciones necesarias para correr las funciones montadas en el azure function. Esto tiene implicaciones en cuanto a rendimiento y compatibilidad, ya que hay runtimes que pueden admitir cualquier version de algun lenguaje de programación, como tambien hay otros runtime que solo admiten las versiones más recientes de los lenguajes de programación.
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
  - 
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
  - Existen cuatro tipos de planes para las Function App, los cuales son Plan de consumo, Plan Premium, Plan de azure App service y Azure Container Apps
    >
    > **Plan de Consumo**
    >
    > Este plan solo realiza cobros por los recursos de procesos cuando estos se esten utilizando 
    >
    > **Plan Premium**
    > Ejecución de las funciones inactivas por algun tiempo sin generar alguna demora
    > Ejecución de instancias de manera mucho más eficaz.
    > Permite la conexión a redes virtuales
    >
    > **PLan de Azure App Service**
    > Ejecución de las Function App con tarifas de App service 
    > Uso de este plan dependiendo de la duración y cuando se requieran mayores costes y un escalado predictivo
    > 
    > **Azure Container Apps**
    > Plan para arquitecturas de Microservicios, red coherente, observabilidad y configuraciones de facturación
    >
* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?
  - De acuerdo al plan seleccionado, de los cuales ya se menciono anteriormente, se realiza el correspondiente cobro a la empresa benificiaria del servicio.
* Informe
