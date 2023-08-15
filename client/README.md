# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh   



# GreenLand App
## ¡Bienvenido a GreenLand App, tu destino para compras ecológicas y conscientes!   

GreenLand es una emocionante iniciativa que busca revolucionar la experiencia de compra en línea al ofrecer una amplia variedad de productos, todos ellos alineados con valores ecológicos y respetuosos con el medio ambiente. Nuestro objetivo es proporcionar a los consumidores una plataforma integral donde puedan explorar y adquirir desde alimentos saludables hasta artículos de limpieza sostenibles, todo en un solo lugar.

### Tecnologías Utilizadas

#### Frontend:

**React y Vite:** Utilizamos React junto con Vite para crear una interfaz de usuario rápida y eficiente.   
**Redux:** Gestionaremos el estado de la aplicación de manera centralizada y predecible utilizando Redux.   
**Autenticación:** Implementaremos autenticación de usuarios utilizando Firebase para una experiencia de inicio de sesión segura y confiable.  
**Pagos:** Integraremos PayPal y MercadoPago como opciones para procesar pagos de manera segura.   

#### Backend:

**Node.js y Express:** Construiremos la estructura del servidor utilizando Node.js y Express para gestionar las solicitudes HTTP.  
**Sequelize:** Utilizaremos Sequelize como ORM (Object-Relational Mapping) para interactuar con la base de datos PostgreSQL de manera eficiente.   

**Base de Datos:** Configuramos una base de datos PostgreSQL llamada "greenland" para almacenar y gestionar los datos del sitio.   


## Instrucciones de Instalación
1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/edisonrmedina/GreenLand.git
```   
2. Navega al directorio del proyecto:
```bash
cd greenland
```  
3. Instala las dependencias del frontend y del backend:
```bash
cd frontend
npm install

cd ../backend
npm install
```
4. Crea un archivo .env en el directorio backend y agrega las siguientes variables de entorno:
```bash
PORT=3001
DATABASE_URL=postgres://usuario:contraseña@localhost:5432/greenland
```

Asegúrate de reemplazar usuario y contraseña con tus credenciales de PostgreSQL.

## Levantar el Proyecto

### Frontend  
![Frontend | 25](https://i.postimg.cc/c4B2f2ZG/desarrollo-web-ingenieria-programadores-sitio-web-codificacion-pantallas-interfaz-realidad-aumentada.jpg)

Desde el directorio frontend, ejecuta:
```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite y abrirá la aplicación en tu navegador.  

### Backend   
![Backend|25](https://i.postimg.cc/vZHYn5JX/ilustracion-concepto-codificar-114360-939.jpg)
 

Desde el directorio backend, ejecuta:
```bash
npm start
```   
Esto iniciará el servidor Node.js utilizando Express.  


## Buenas Prácticas
**Modularización:** Recuerda estructurar el proyecto en módulos separados para una mejor organización y mantenibilidad del código.  

**Variables de Entorno:** Utiliza variables de entorno para gestionar las configuraciones sensibles y específicas de cada entorno.  

**Documentación:** Comenta tu código de manera significativa y documenta las funciones y componentes importantes para que otros desarrolladores puedan entender fácilmente tu trabajo.  

**Control de Versiones:** Asegúrate de utilizar control de versiones (Git) y seguir las prácticas de ramificación (GitFlow) para un desarrollo colaborativo más efectivo.  

***¡Gracias por ser parte de GreenLand App y contribuir a un mundo más sostenible y consciente!***

Si tienes alguna pregunta o necesitas ayuda, no dudes en usar los canales de comunicación.








