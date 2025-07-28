# ☕ Cafetería Sayayin - App Móvil

Aplicación móvil desarrollada con **React Native + Expo** para gestionar pedidos, productos y usuarios de la cafetería *Sayayin*. Este proyecto forma parte de una solución completa que incluirá un backend con **NestJS** (en desarrollo).

---

## 📱 Tecnologías utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Expo Router](https://expo.github.io/router/)
- [Axios](https://axios-http.com/) para consumo de API REST
- [TypeScript](https://www.typescriptlang.org/)
- [Fake Store API](https://fakestoreapi.com/) (por ahora, hasta que se conecte con el backend real)

---

## 📁 Estructura del proyecto
```bash

COFFE_MOVIL/
│
├── app/ # Rutas y pantallas principales
│ ├── API/ # Servicios de comunicación con APIs
│ ├── Components/ # Componentes reutilizables (ej. alertas)
│ ├── index.tsx # Pantalla de inicio de sesión
│ ├── register.tsx # Pantalla de registro
│ └── productList.tsx # Pantalla de productos
│
├── assets/ # Imágenes y recursos estáticos
├── .expo/ # Configuración interna de Expo
├── app.json # Configuración principal del proyecto
├── tsconfig.json # Configuración de TypeScript
└── README.md # Este archivo
```

---

## 🚀 Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/coffe-movil.git
cd coffe-movil
```

### Instala dependencias
```bash
npm install
```
###  Recomendado: Usa expo install para mantener versiones compatibles con Expo.

```bash
npx expo install

```
### Ejecutar la APP
```bash
npx expo start

```
### Limpia la caché si hay errores raros
```bash
npx expo start --clear

```
### Limpia la caché si hay errores raros
```bash
npx expo start --clear

```
### 🛠 Funcionalidades
✅ Inicio de sesión
✅ Registro de usuario
✅ Alerta personalizada con botones de acción
✅ Visualización de productos con Fake Store API
🔜 Conexión al backend NestJS (en desarrollo)
🔒 Protección de rutas para usuarios autenticados (en proceso)

### 🔗 Backend NestJS

- **Aplicación Backend - Nest:**  
    [Repositorio Backend](https://github.com/Ezequiel-2023/Backend_Coffee_Sayajin)
  
NestJS

MySQL

JWT Auth

Roles de usuario (admin, empleado, cliente)

API REST modular

### 📌 Cuando esté listo, se conectará con esta app móvil usando Axios.

📦 Comandos útiles
```bash
Copiar
Editar
npx expo install           # Instala paquetes compatibles
npx expo start             # Ejecuta la app
npx expo start --clear     # Ejecuta limpiando caché
```
### 🙋‍♂️ Autor
Ezequiel Larios
Desarrollador full stack en formación.
🚀 Proyecto personal para aprendizaje y práctica profesional.

### 📌 Notas
Si tienes errores de versión, actualiza con:

```bash
Copiar
Editar
npx expo install expo@latest expo-router expo-image expo-blur expo-splash-screen react-native
```

El diseño aún está en mejora. Si tienes sugerencias, ¡bienvenidas!

✅ Licencia
MIT - Libre para usar, estudiar y modificar con fines educativos .

