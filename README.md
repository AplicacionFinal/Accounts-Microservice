# Accounts Microservice

Este microservicio va a realizar todas las tareas que impliquen consular la base de datos de las cuentas. 

## Pasos previos: 

1. Debemos crear la base de datos mongo en docker. 
2. Debemos instalar el paquete **'@nestjs/mongoose'**
3. Añadimos en las importaciones del **'app.module.ts'** ```MongooseModule.forRoot(envs.DB_URL)```
4. Definimos en el recurso con el que vayamos a intercatuar en la base de datos una importación de la siguiente manera: ```MongooseModule.forFeature([{name: Account.name,schema:AccountSchema}])```
5. Tenemos que definir la aplicación como microservicio por lo que: 
* Instalamos el paquete ```npm i --save @nestjs/microservices```
* Tenemos que editar el controlador con 'MessagePatter' y demas. 


## Aprendizajes Utiles: 

* Si tenemos varios servidores NATS podemos separarlos por comas en el archivo de variables de entorno. Tal que así: 
Archivo de Constantes: 
```
NATS_SERVERS: nats://localhost:4222,nats://...,...
```
Achivo **'config/envs.ts'**:
```
const envSchema = joi.object({
    NATS_SERVER: joi.array().items(joi.string()).required(),
})
```

* Los arreglos tenemos que construirlos en el archivo **'config/envs.ts'**, de la siguiente manera: 

```
// Esquema de Validación Anterior : 

const {error,value: enVars} = envScjema.validate({
    process.env
})

// Esquema de Validación Actual: 
const {error,value: enVars} = envScjema.validate({
    NATS_SERVERS: process.env.NATS_SERVERS.split(','); // Tambien podríamos poner una interrogación antes del split y no haría nada si no viene: ?.split(',')
    ,...process.env
})

```

* **OPERADOR '...'**

El operador se encagar de añadir al objeto nuevo los atributos del objeto que pasemos como parámetro y se **ejecuta de izquierda a derecha**. *Por ejemplo: para redefinir los atributos de un objeto account:* 

```
const account = {
    nombre: 'Juan Carlos Vargas',
    email: 'jcvcict@gmail.com',
    password: '******',
    username: jcvcict,
};

const newaccount = {...account,nombre: 'Juan Carlos Vargas Camacho'};

```




