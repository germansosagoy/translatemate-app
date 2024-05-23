# Translate Mate 

Translate Mate es una aplicación web que permite traducir texto entre varios idiomas y ofrece la funcionalidad de copiar el texto traducido al portapapeles y escucharlo mediante síntesis de voz.

## Características

- Traducción de texto entre múltiples idiomas.
- Copiar el texto traducido al portapapeles.
- Reproducir el texto traducido con síntesis de voz.
- Interfaz de usuario limpia y receptiva.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **TypeScript**: Lenguaje utilizado para una escritura tipada segura.
- **Tailwind CSS**: Framework de utilidades CSS para el diseño.
- **Axios**: Cliente HTTP para realizar solicitudes a la API de traducción.
- **Vite**: Herramienta de desarrollo rápida y ligera.
- **Vercel**: Plataforma de despliegue para aplicaciones web.


## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/translate-mate.git
   cd translate-mate


2. Instala las dependencias:
  ```bash
    npm install
  ```

3. Crea una variable '.env' en la raíz del proyecto con tus claves de API. El contenido del archivo debería ser similar a esto:
  VITE_RapidAPI_KEY=your-api-key
  VITE_BASE_URL=your-api-url
  VITE_QUERY_PARAMS=?api-version=3.0&profanityAction=NoAction&textType=plain

4. Inicia la aplicación
 ```bash
    npm run dev
  ```
La aplicación estará disponible en http://localhost:5173.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:
1. Haz un fork de este repositorio.
2. Crea una rama con tu característica o corrección de errores:
   ```bash
   git checkout -b mi-rama
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -am 'Agrega nueva característica'
4. Envía tu rama a tu repositorio:
   ```bash
   git push origin mi-rama
5. Abre un Pull Request en este repositorio.
Este formato proporciona una lista numerada de los pasos a seguir, con los comandos relevantes formateados como bloques de código para mayor claridad.



