import { useState, ChangeEvent } from "react";
import { BeatLoader } from "react-spinners";
import { translateText } from "@api/translate";
import { Volume1, Clipboard } from "lucide-react";

const Translate: React.FC = () => {
  const [formData, setFormData] = useState({
    language: "es",
    message: "",
  });
  const [error, setError] = useState("");
  const [translation, setTranslation] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showClipboard, setShowClipboard] = useState(false);
  const [showVoice, setShowVoice] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  // Función para traducir
  const translate = async () => {
    try {
      setIsLoading(true);
      const translatedText = await translateText(
        formData.message,
        formData.language
      );
      setShowClipboard(true)
      setShowVoice(true)
      setTranslation(translatedText);
    } catch (error) {
      setIsLoading(true);
      setError("Error traduciendo el texto.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message) {
      setError("Por favor, ingrese un texto para traducir.");
      return;
    }
    setIsLoading(true);
    translate();
  };

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError("");
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(translation)
      .then(() => displayNotification())
      .catch((err) => console.error("Error al copiar texto: ", err));
  };

  const displayNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    console.log(translation);
  };

  const handleVoice = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(translation);
    utterance.lang = formData.language;
    synth.speak(utterance);
  };

  return (
    <div className="max-w-6xl mx-auto my-8 bg-white px-8 py-8 shadow-xl border border-gray-100">
      <form className="flex flex-col" onSubmit={handleOnSubmit}>
        {/* label language */}
        <div className="flex text-sm font-medium">
          <input
            type="radio"
            name="language"
            value="es"
            checked={formData.language === "es"}
            onChange={handleInputChange}
            id="espanol"
            className="hidden"
          />
          <label
            htmlFor="espanol"
            className={`text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${
              formData.language === "es"
                ? "bg-[#023047bf] duration-300 text-white font-medium"
                : ""
            }`}
          >
            Español
          </label>
          <input
            type="radio"
            name="language"
            value="en"
            checked={formData.language === "en"}
            onChange={handleInputChange}
            id="ingles"
            className="hidden"
          />
          <label
            htmlFor="ingles"
            className={`text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${
              formData.language === "en"
                ? "bg-[#023047bf] duration-300 text-white font-medium"
                : ""
            }`}
          >
            Inglés
          </label>
          <input
            type="radio"
            name="language"
            value="pt"
            checked={formData.language === "pt"}
            onChange={handleInputChange}
            id="portugues"
            className="hidden"
          />
          <label
            htmlFor="portugues"
            className={`text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${
              formData.language === "pt"
                ? "bg-[#023047bf] duration-300 text-white font-medium"
                : ""
            }`}
          >
            Portugués
          </label>
          <input
            type="radio"
            name="language"
            value="zh-Hant"
            checked={formData.language === "zh-Hant"}
            onChange={handleInputChange}
            id="china"
            className="hidden"
          />
          <label
            htmlFor="china"
            className={`text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${
              formData.language === "zh-Hant"
                ? "bg-[#023047bf] duration-300 text-white font-medium"
                : ""
            }`}
          >
            China
          </label>
          <input
            type="radio"
            name="language"
            value="fr"
            checked={formData.language === "fr"}
            onChange={handleInputChange}
            id="frances"
            className="hidden"
          />
          <label
            htmlFor="frances"
            className={`text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${
              formData.language === "fr"
                ? "bg-[#023047bf] duration-300 text-white font-medium"
                : ""
            }`}
          >
            Francés
          </label>
          <input
            type="radio"
            name="language"
            value="ru"
            checked={formData.language === "ru"}
            onChange={handleInputChange}
            id="ruso"
            className="hidden"
          />
          <label
            htmlFor="ruso"
            className={`text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${
              formData.language === "ru"
                ? "bg-[#023047bf] duration-300 text-white font-medium"
                : ""
            }`}
          >
            Ruso
          </label>
          {/* <select name="language" id="">
            <option value="#">Idiomas</option>
            <option value="en">Inglés</option>
          </select> */}
        </div>
        {/* textarea form */}
        <div className="flex space-x-4 mt-2">
          <textarea
            name="message"
            placeholder="Ingrese el texto a traducir aquí..."
            className="flex-1 p-4 py-5 text-[16px] h-60 resize-none leading-5 border border-gray-300 focus:outline-none rounded-lg"
            onChange={handleInputChange}
          />
          <div className="flex-1 px-4 py-5 h-60 bg-[#f5f5f5] text-[16px] resize-none leading-5 border border-gray-100 focus:outline-none rounded-lg overflow-y-scroll relative">
            {showClipboard && (
              <button onClick={handleCopy} className="absolute w-5 top-4 right-3 opacity-90 cursor-pointer">
                <Clipboard size={18}  className="opacity-60 duration-150 hover:opacity-90" />
              </button>
            )}
            {showVoice && (  
              <button onClick={handleVoice} className="absolute w-5 top-4 right-10 opacity-90 cursor-pointer">
                <Volume1 size={18} className="opacity-60 duration-150 hover:opacity-90" />
              </button>
            )}
            {isLoading ? (
              <BeatLoader
                size={8}
                color={"darkblue"}
                className="max-h-screen justify-center items-center"
              />
            ) : (
              translation
            )}
          </div>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="flex justify-center items-center max-w-[540px] p-2 text-[16px] border-none bg-[#022f45] hover:bg-[#022f45d8] duration-300 rounded-lg text-white cursor-pointer mt-6"
        >
          Traducir
        </button>
      </form>
      {showNotification && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-transform ease-in-out duration-300 bg-[#022f45] text-white text-xs py-2 px-2 rounded">
          Copiado al portapapeles!
        </div>
      )}
    </div>
  );
};

export default Translate;
