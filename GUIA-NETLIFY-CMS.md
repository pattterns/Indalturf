# Guía: Configurar Netlify Identity para el CMS

## ✅ Cambios realizados

He configurado tu CMS de Decap para usar **Netlify Identity**, lo que te permitirá invitar a tu cliente con un email y que acceda fácilmente.

### Archivos modificados:
1. **`src/admin/config.yml`** - Cambiado backend de GitHub a `git-gateway`
2. **`src/admin/index.html`** - Agregado script de Netlify Identity Widget

---

## 📋 Pasos a seguir

### 1. Desplegar en Netlify

Si aún no has desplegado tu sitio en Netlify:

1. Ve a [https://netlify.com](https://netlify.com)
2. Haz clic en "Add new site" → "Import an existing project"
3. Conecta tu repositorio de GitHub
4. Configuración de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
5. Haz clic en "Deploy site"

### 2. Habilitar Netlify Identity

Una vez desplegado tu sitio:

1. En el dashboard de Netlify, ve a tu sitio
2. Ve a la pestaña **"Identity"** (en el menú lateral)
3. Haz clic en **"Enable Identity"**

### 3. Configurar Identity

Después de habilitar Identity:

1. Ve a **Identity → Settings and usage**
2. En **"Registration preferences"**, selecciona **"Invite only"**
   - Esto asegura que solo las personas que invites puedan acceder
3. En **"External providers"** (opcional):
   - Puedes habilitar Google, GitHub, GitLab si quieres que puedan iniciar sesión con esas cuentas
   - Recomiendo dejarlo solo con email/contraseña para mayor simplicidad

### 4. Habilitar Git Gateway

1. Ve a **Identity → Services**
2. Haz clic en **"Enable Git Gateway"**
3. Esto permite que los usuarios editen contenido sin necesitar acceso directo al repositorio de GitHub

### 5. Invitar a tu cliente

1. Ve a la pestaña **"Identity"**
2. Haz clic en **"Invite users"**
3. Ingresa el email de tu cliente (ej: cliente@example.com)
4. Haz clic en **"Send invite"**

**Tu cliente recibirá:**
- Un email de invitación de Netlify
- Un enlace para crear su contraseña
- Después podrá acceder a `https://tu-sitio.netlify.app/admin`

### 6. Cómo accede tu cliente

1. Recibe el email de invitación
2. Hace clic en el enlace y crea su contraseña
3. Va a: `https://tu-dominio.com/admin` (o `https://tu-sitio.netlify.app/admin`)
4. Inicia sesión con su email y contraseña
5. ¡Ya puede editar el contenido!

---

## 🎯 Lo que tu cliente podrá editar

Una vez dentro del CMS (`/admin`), verá estas secciones:

### 1. **Site Settings** (Configuración del sitio)
- Título del sitio
- Descripción
- URL
- Idioma
- Email de contacto
- Teléfono
- Dirección
- Redes sociales (Instagram, WhatsApp)
- SEO (meta title, description, keywords)

### 2. **Grass Models (JSON)** (Modelos de césped)
- Ver lista de todos los modelos
- Editar modelos existentes:
  - Nombre del modelo
  - Altura (ej: 40mm)
  - Precio (ej: €32/m²)
  - Imagen del producto
  - Descripción
  - Si está destacado (featured)
  - Estadísticas (densidad, grosor, memoria, durabilidad)

---

## 🔐 Gestión de usuarios

### Invitar más usuarios
Puedes invitar a más personas siguiendo los mismos pasos del punto 5.

### Eliminar acceso de un usuario
1. Ve a **Identity** en Netlify
2. Busca el usuario
3. Haz clic en los tres puntos → **Delete user**

### Ver actividad
En la pestaña Identity puedes ver:
- Quién ha iniciado sesión
- Cuándo se registraron
- Estado de las invitaciones

---

## 🧪 Probar antes de invitar

Antes de invitar a tu cliente, prueba tú mismo:

1. Ve a tu sitio: `https://tu-sitio.netlify.app/admin`
2. Deberías ver el login de Netlify Identity
3. Invítate a ti mismo con tu email
4. Prueba editar algo y verifica que funcione

---

## ⚠️ Importante

1. **Los cambios son automáticos**: Cuando tu cliente presiona "Publish" en el CMS, los cambios se guardan en GitHub y Netlify redespliega automáticamente (tarda 1-2 minutos).

2. **No necesita saber de GitHub**: Tu cliente nunca verá GitHub ni necesitará acceso al repositorio.

3. **Backup automático**: Todos los cambios quedan guardados en GitHub como commits, así que siempre puedes volver atrás si algo sale mal.

4. **Solo "Invite only"**: Asegúrate de tener la configuración en "Invite only" para que nadie más pueda registrarse.

---

## 📞 Instrucciones para tu cliente

Puedes enviarle esto a tu cliente:

---

**Hola,**

Ya tienes acceso al panel de administración de tu sitio web. Aquí están las instrucciones:

**1. Acceso inicial:**
- Recibirás un email de invitación de Netlify
- Haz clic en el enlace del email
- Crea tu contraseña (mínimo 8 caracteres)

**2. Cómo acceder después:**
- Ve a: `https://tu-dominio.com/admin`
- Ingresa tu email y contraseña
- Ya estás dentro del panel

**3. Cómo editar contenido:**
- En el menú lateral verás "Site Settings" y "Grass Models"
- Haz clic en lo que quieres editar
- Realiza tus cambios
- Presiona el botón **"Save"** (arriba a la derecha)
- Luego presiona **"Publish"** → **"Publish now"**
- Los cambios aparecerán en el sitio en 1-2 minutos

**4. ¿Problemas?**
- Contacta a: [tu email]

---

## 🚀 Próximos pasos

1. [ ] Desplegar en Netlify
2. [ ] Habilitar Identity
3. [ ] Configurar "Invite only"
4. [ ] Habilitar Git Gateway
5. [ ] Invitarte a ti mismo para probar
6. [ ] Verificar que puedes editar contenido
7. [ ] Invitar a tu cliente
8. [ ] Compartir las instrucciones de acceso

---

## ❓ Preguntas frecuentes

**¿Es gratis?**
Sí, Netlify Identity es gratuito hasta 1,000 usuarios activos (más que suficiente).

**¿Puedo usar mi propio dominio?**
Sí, en Netlify → Domain settings → Add custom domain

**¿Cómo cambio la contraseña de un usuario?**
El usuario puede hacer "Forgot password" en el login, o puedes reenviar la invitación desde el panel de Netlify.

**¿Puedo tener diferentes niveles de permisos?**
En el plan gratuito de Netlify todos los usuarios tienen los mismos permisos. Para roles diferentes necesitarías el plan de pago.

---

¿Necesitas ayuda con algún paso? ¡Adelante con el despliegue! 🚀
