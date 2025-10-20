# SIGISWO - Página de Estado de Servicio

Una página de estado de servicio moderna y responsiva desarrollada con React y Node.js para informar sobre interrupciones del servicio SIGISWO.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **API REST**: Endpoint para obtener información del estado del servicio
- **Despliegue en Vercel**: Configurado para despliegue automático
- **Mensaje Personalizado**: Información específica sobre la interrupción de AWS

## 📋 Requisitos Previos

- Node.js 18.0.0 o superior
- npm o yarn
- Cuenta de Vercel (gratuita)

## 🛠️ Instalación Local

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd sig-web-problems
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador**
   Navega a [http://localhost:3000](http://localhost:3000)

## 🌐 Despliegue en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Sube tu código a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: SIGISWO status page"
   git push origin main
   ```

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configuración automática**
   - Vercel configurará automáticamente el build y deploy
   - Tu aplicación estará disponible en una URL como: `https://tu-proyecto.vercel.app`

### Opción 2: Despliegue desde CLI

1. **Instala Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Despliega el proyecto**
   ```bash
   vercel
   ```

3. **Sigue las instrucciones**
   - Selecciona tu cuenta de Vercel
   - Elige el proyecto (o crea uno nuevo)
   - Vercel construirá y desplegará automáticamente

## 📁 Estructura del Proyecto

```
sig-web-problems/
├── pages/
│   ├── api/
│   │   └── status.js          # API endpoint para estado del servicio
│   ├── _app.js                # Configuración de Next.js
│   └── index.js               # Página principal
├── styles/
│   ├── globals.css            # Estilos globales
│   └── StatusPage.module.css  # Estilos del componente principal
├── package.json               # Dependencias y scripts
├── next.config.js             # Configuración de Next.js
├── vercel.json                # Configuración de Vercel
└── README.md                  # Este archivo
```

## 🔧 Personalización

### Cambiar el Mensaje de Estado

Edita el archivo `pages/index.js` para modificar:
- El mensaje principal
- Los detalles del problema
- La información de contacto

### Modificar la API

Edita `pages/api/status.js` para:
- Cambiar la información del estado
- Agregar más detalles técnicos
- Modificar los servicios afectados

### Personalizar Estilos

Edita `styles/StatusPage.module.css` para:
- Cambiar colores y tipografías
- Modificar el diseño
- Agregar nuevas animaciones

## 🌍 Variables de Entorno (Opcional)

Puedes crear un archivo `.env.local` para configurar variables:

```env
NEXT_PUBLIC_SERVICE_NAME=SIGISWO
NEXT_PUBLIC_CONTACT_EMAIL=soporte@sigiswo.com
NEXT_PUBLIC_CONTACT_PHONE=+1-800-SIGISWO
```

## 📱 Características Responsivas

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: 
  - Móvil: < 480px
  - Tablet: 480px - 768px
  - Desktop: > 768px
- **Touch Friendly**: Botones y elementos táctiles optimizados

## 🎨 Características de Diseño

- **Gradientes Modernos**: Fondo con gradiente atractivo
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Tipografía Clara**: Fuentes del sistema para mejor legibilidad
- **Iconografía**: Emojis y símbolos para mejor comunicación visual

## 🔄 Actualización del Estado

Para actualizar el estado del servicio:

1. **Modifica la API** (`pages/api/status.js`)
2. **Cambia el estado** en el objeto `statusInfo`
3. **Redeploy** en Vercel (automático si usas GitHub)

## 📞 Soporte

Si tienes problemas con el despliegue:

1. Revisa los logs de Vercel en el dashboard
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de que el Node.js version sea compatible

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para SIGISWO**
