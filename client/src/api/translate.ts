import axios from 'axios';

export interface Language {
  name: string;
  nativeName: string;
  dir: string;
}

export const translateText = async (inputText: string, outputLang: string) => {
  const options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    params: {
      'to[0]': outputLang,
      'api-version': '3.0',
      profanityAction: 'NoAction',
      textType: 'plain'
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': import.meta.env.VITE_RapidAPI_KEY,
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    data: [
      {
        Text: inputText
      }
    ]
  };

  try {
    const response = await axios.request(options);
    return response.data[0]?.translations[0]?.text;
  } catch (error) {
    console.error('Error traduciendo el texto:', error);
    throw error;
  }
};

export const getAvailableLanguages = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://microsoft-translator-text.p.rapidapi.com/languages',
      params: {
        'api-version': '3.0'
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RapidAPI_KEY,
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    return response.data.translation;
  } catch (error) {
    console.error('Error obteniendo los idiomas disponibles:', error);
    throw error;
  }
};
