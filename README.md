<div align="center">

# 🚚 Logística JIL

### Soluciones Logísticas Integrales con Cobertura Global

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Demo en Vivo](#) • [Reportar Bug](https://github.com/tuusuario/JLI/issues) • [Solicitar Feature](https://github.com/tuusuario/JLI/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Variables de Entorno](#-variables-de-entorno)
- [Scripts Disponibles](#-scripts-disponibles)
- [Guía de Contribución](#-guía-de-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Acerca del Proyecto

**Logística JIL** es una plataforma web moderna diseñada para ofrecer soluciones logísticas integrales con cobertura internacional. La aplicación proporciona servicios de transporte aéreo, marítimo, terrestre y multimodal, con un enfoque en la excelencia operativa y la satisfacción del cliente.

### ¿Por qué Logística JIL?

- 🌍 **Cobertura Global**: Presencia en América, Europa y Asia
- 📦 **Servicios Integrales**: Transporte aéreo, marítimo, terrestre y multimodal
- 🔒 **Seguridad**: Rastreo en tiempo real y entregas garantizadas
- 💼 **Portal de Clientes**: Acceso exclusivo para seguimiento de envíos
- 🎨 **Experiencia Premium**: Interfaz moderna con animaciones fluidas

---

## ✨ Características Principales

### 🏠 Página Principal
- ✅ Hero section con animaciones de Framer Motion
- ✅ Sección "Sobre Nosotros" con misión, visión y valores
- ✅ Catálogo de servicios logísticos
- ✅ Mapa interactivo de cobertura global
- ✅ Formulario de contacto integrado
- ✅ Navegación con scroll spy automático

### 🔐 Sistema de Autenticación Dual
- ✅ Portal de administración para gestión interna
- ✅ Portal de clientes para rastreo de envíos
- ✅ Modales de login con validación

### 🗺️ Mapa Interactivo
- ✅ Visualización de cobertura geográfica con react-simple-maps
- ✅ Proyecciones geográficas con d3-geo
- ✅ Datos personalizables en formato JSON

### 💬 Comunicación
- ✅ Widget de chat flotante
- ✅ Sistema de notificaciones toast con Sonner
- ✅ Formulario de contacto con validación

### 🎨 Diseño y UX
- ✅ Diseño responsive para todos los dispositivos
- ✅ Animaciones fluidas con Framer Motion
- ✅ Componentes UI accesibles con Radix UI
- ✅ Paleta de colores corporativa consistente
- ✅ Soporte para modo oscuro/claro (next-themes)

---

## 📸 Capturas de Pantalla

### Página Principal
<!-- TODO: Agregar captura de pantalla del Hero Section -->
![Hero Section](./screenshots/hero-section.png)

### Servicios
<!-- TODO: Agregar captura de pantalla de la sección de servicios -->
![Servicios](./screenshots/services.png)

### Mapa Interactivo
<!-- TODO: Agregar captura de pantalla del mapa de cobertura -->
![Mapa de Cobertura](./screenshots/map-section.png)

### Portal de Clientes
<!-- TODO: Agregar captura de pantalla del portal de clientes -->
![Portal de Clientes](./screenshots/clients-portal.png)

### Panel de Administración
<!-- TODO: Agregar captura de pantalla del panel de administración -->
![Panel Admin](./screenshots/admin-panel.png)

> **Nota**: Crea una carpeta `screenshots` en la raíz del proyecto y agrega las capturas de pantalla correspondientes.

---

## 🛠️ Tecnologías Utilizadas

### Core
- **[React](https://reactjs.org/)** `18.3.1` - Librería de UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Vite](https://vitejs.dev/)** `6.3.5` - Build tool y dev server

### UI & Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes accesibles
  - Alert Dialog, Dialog, Label, Select, Slot
- **[Lucide React](https://lucide.dev/)** `0.487.0` - Iconos SVG
- **[class-variance-authority](https://cva.style/)** `0.7.1` - Variantes de componentes
- **[clsx](https://github.com/lukeed/clsx)** `2.1.1` - Utilidad para clases CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** `3.3.1` - Merge de clases Tailwind

### Animaciones
- **[Framer Motion](https://www.framer.com/motion/)** `12.23.24` - Animaciones fluidas

### Mapas
- **[react-simple-maps](https://www.react-simple-maps.io/)** `3.0.0` - Mapas SVG
- **[d3-geo](https://github.com/d3/d3-geo)** `3.1.1` - Proyecciones geográficas

### Notificaciones & Temas
- **[Sonner](https://sonner.emilkowal.ski/)** `2.0.3` - Sistema de toast
- **[next-themes](https://github.com/pacocoursey/next-themes)** `0.4.6` - Gestión de temas

### DevTools
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)** `3.10.2` - Compilador SWC
- **[@types/node](https://www.npmjs.com/package/@types/node)** `20.10.0` - Tipos de Node.js

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** `20.x` o superior ([Descargar](https://nodejs.org/))
- **npm** `9.x` o superior (incluido con Node.js)
- **Git** ([Descargar](https://git-scm.com/))

Verifica las instalaciones:

```bash
node --version  # Debe mostrar v20.x.x
npm --version   # Debe mostrar 9.x.x o superior
git --version   # Debe mostrar 2.x.x o superior
```

---

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tuusuario/JLI.git
cd JLI
```

### 2. Usar la Versión Correcta de Node.js

Este proyecto utiliza Node.js v20. Si tienes [nvm](https://github.com/nvm-sh/nvm) instalado:

```bash
nvm use
```

Esto leerá automáticamente el archivo `.nvmrc` y cambiará a Node.js v20.

### 3. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias listadas en `package.json`.

### 4. Verificar la Instalación

```bash
npm run dev
```

Si todo está correcto, deberías ver un mensaje indicando que el servidor de desarrollo está corriendo en `http://localhost:3000`.

---

## 💻 Uso

### Modo Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

### Build de Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Vista Previa del Build

Para previsualizar el build de producción localmente:

```bash
npm run preview
```

---

## 📁 Estructura del Proyecto

```
JLI/
├── public/                      # Archivos estáticos públicos
│   └── data/
│       └── map.json            # Datos del mapa geográfico
│
├── src/                        # Código fuente
│   ├── components/             # Componentes de React
│   │   ├── ui/                # Componentes UI reutilizables
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── animations.ts  # Configuración de animaciones
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── table.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── utils.ts       # Utilidades CSS
│   │   │
│   │   ├── ymbr/              # Componentes personalizados
│   │   │   └── ImageWithFallback.tsx
│   │   │
│   │   ├── AboutUs.tsx        # Sección "Sobre Nosotros"
│   │   ├── AdminPanel.tsx     # Panel de administración
│   │   ├── ChatWidget.tsx     # Widget de chat
│   │   ├── ClientLogin.tsx    # Login de clientes
│   │   ├── ClientsPortal.tsx  # Portal de clientes
│   │   ├── Contact.tsx        # Formulario de contacto
│   │   ├── Footer.tsx         # Pie de página
│   │   ├── Hero.tsx           # Hero section
│   │   ├── InitialData.ts     # Datos iniciales
│   │   ├── LoginModal.tsx     # Modal de login admin
│   │   ├── MapSection.tsx     # Mapa interactivo
│   │   ├── Navbar.tsx         # Barra de navegación
│   │   └── Services.tsx       # Sección de servicios
│   │
│   ├── styles/                # Estilos adicionales
│   │   └── globals.css        # Estilos globales
│   │
│   ├── types/                 # Definiciones de tipos TypeScript
│   │   └── react-simple-maps.d.ts
│   │
│   ├── App.tsx                # Componente raíz
│   ├── main.tsx               # Punto de entrada
│   ├── index.css              # Estilos principales (Tailwind)
│   └── Attributions.md        # Atribuciones de recursos
│
├── .gitignore                 # Archivos ignorados por Git
├── .nvmrc                     # Versión de Node.js (v20)
├── index.html                 # HTML principal
├── package.json               # Dependencias y scripts
├── package-lock.json          # Lockfile de dependencias
├── vite.config.ts             # Configuración de Vite
└── README.md                  # Este archivo
```

### Descripción de Carpetas Principales

| Carpeta | Descripción |
|---------|-------------|
| `src/components/` | Todos los componentes de React de la aplicación |
| `src/components/ui/` | Componentes UI reutilizables (botones, cards, dialogs, etc.) |
| `src/styles/` | Archivos CSS globales y configuración de estilos |
| `src/types/` | Definiciones de tipos TypeScript personalizados |
| `public/` | Archivos estáticos que se sirven directamente |

---

## 🔐 Variables de Entorno

Actualmente, este proyecto **no requiere variables de entorno** para funcionar en modo desarrollo. Sin embargo, si necesitas configurar variables para producción o servicios externos, crea un archivo `.env` en la raíz del proyecto:

```env
# Ejemplo de variables de entorno (si se necesitan en el futuro)

# API Backend (si aplica)
VITE_API_URL=https://api.logisticajil.com

# Configuración de Chat
VITE_CHAT_API_KEY=tu_api_key_aqui

# Google Maps API (si se implementa)
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
```

> **Nota**: Las variables de entorno en Vite deben tener el prefijo `VITE_` para ser accesibles en el código del cliente.

### Acceder a Variables de Entorno

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **dev** | `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:3000` |
| **build** | `npm run build` | Crea el build de producción en la carpeta `dist/` |
| **preview** | `npm run preview` | Previsualiza el build de producción localmente |
| **lint** | `npm run lint` | Ejecuta el linter para verificar el código (si está configurado) |

### Scripts Adicionales Recomendados

Puedes agregar estos scripts a tu `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 🤝 Guía de Contribución

¡Las contribuciones son bienvenidas! Sigue estos pasos para contribuir al proyecto:

### 1. Fork del Proyecto

Haz clic en el botón "Fork" en la parte superior derecha de la página del repositorio.

### 2. Clonar tu Fork

```bash
git clone https://github.com/tu-usuario/JLI.git
cd JLI
```

### 3. Crear una Rama

```bash
git checkout -b feature/nueva-funcionalidad
```

Convenciones de nombres de ramas:
- `feature/` - Para nuevas funcionalidades
- `fix/` - Para correcciones de bugs
- `docs/` - Para cambios en documentación
- `refactor/` - Para refactorización de código

### 4. Realizar Cambios

Haz tus cambios y asegúrate de seguir las convenciones del proyecto:

- ✅ Usa TypeScript para todos los archivos
- ✅ Sigue las convenciones de nombres de componentes (PascalCase)
- ✅ Escribe código limpio y comentado
- ✅ Mantén la consistencia con el estilo existente

### 5. Commit de Cambios

```bash
git add .
git commit -m "feat: descripción breve de los cambios"
```

Convenciones de commits (Conventional Commits):
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato (no afectan la lógica)
- `refactor:` - Refactorización de código
- `test:` - Agregar o modificar tests
- `chore:` - Tareas de mantenimiento

### 6. Push a tu Fork

```bash
git push origin feature/nueva-funcionalidad
```

### 7. Crear Pull Request

Ve a tu fork en GitHub y haz clic en "New Pull Request". Describe tus cambios detalladamente.

### Código de Conducta

- 🤝 Sé respetuoso con otros contribuidores
- 💬 Proporciona feedback constructivo
- 📝 Documenta tus cambios adecuadamente
- 🧪 Prueba tu código antes de hacer PR

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 Logística JIL

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contacto

### Equipo de Desarrollo

- **Sitio Web**: [www.logisticajil.com](https://www.logisticajil.com)
- **Email**: info@logisticajil.com
- **GitHub**: [@logisticajil](https://github.com/logisticajil)

### Soporte

Si tienes preguntas o necesitas ayuda:

- 📧 **Email de Soporte**: soporte@logisticajil.com
- 💬 **Discusiones**: [GitHub Discussions](https://github.com/tuusuario/JLI/discussions)
- 🐛 **Reportar Bugs**: [GitHub Issues](https://github.com/tuusuario/JLI/issues)

---

<div align="center">

### ⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub

**Hecho con ❤️ por el equipo de Logística JIL**

[⬆ Volver arriba](#-logística-jil)

</div>