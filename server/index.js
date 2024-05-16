// Importa las dependencias necesarias
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para habilitar CORS
app.use(cors());
// Middleware para procesar solicitudes JSON
app.use(express.json());

app.post('/translate', async (req, res) => {
  const { text } = req.body;

  const options = {
    method: 'POST',
    url: process.env.TRANSLATE_APP_API_URL,
    params: {
      'api-version': '3.0'
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.TRANSLATE_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    data: [
      {
        Text: text
      }
    ]
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al traducir el texto' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
