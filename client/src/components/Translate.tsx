import { useState, ChangeEvent } from "react";
import { BeatLoader } from "react-spinners";
import { translateText } from "@api/translate";
import Footer from "./Footer";

const Translate: React.FC = () => {
  const [formData, setFormData] = useState({
    language: "es",
    message: "",
  });
  const [error, setError] = useState("");
  const [translation, setTranslation] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const translate = async () => {
    try {
      const translatedText = await translateText(
        formData.message,
        formData.language
      );
      console.log(translatedText);
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
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
  };

  return (
    <div className="max-w-3xl mx-auto my-8 bg-white px-8 py-8 shadow-xl">
      <a href="/">
      <h1 className="text-[#023047] font-semibold font-sans text-3xl mb-8">Translate Mate</h1>
      </a>
      <form className="flex flex-col gap-2" onSubmit={handleOnSubmit}>
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
          <label htmlFor="espanol" className={`text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${formData.language === "es" ? "bg-[#023047bf] duration-300 text-white font-medium" : ""}`}>
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
          <label htmlFor="ingles" className={`text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${formData.language === "en" ? "bg-[#023047bf] duration-300 text-white font-medium" : ""}`}>
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
          <label htmlFor="portugues" className={`text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${formData.language === "pt" ? "bg-[#023047bf] duration-300 text-white font-medium" : ""}`}>
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
          <label htmlFor="china" className={` text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${formData.language === "zh-Hant" ? "bg-[#023047bf] duration-300 text-white font-medium" : ""}`}>
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
          <label htmlFor="frances" className={` text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${formData.language === "fr" ? "bg-[#023047bf] duration-300 text-white font-medium" : ""}`}>
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
          <label htmlFor="ruso" className={` text-[#023047] h-8 w-20 flex items-center justify-center rounded-md cursor-pointer ${formData.language === "ru" ? "bg-[#023047bf] duration-300 text-white font-medium" : ""}`}>
            Ruso
          </label>
      </div>
        <textarea
          name="message"
          placeholder="Ingrese el texto a traducir aquí..."
          className="p-4 text-[16px] h-40 resize-none leading-5 border border-gray-300 focus:outline-none rounded-xl"
          onChange={handleInputChange}
        />
        {error && <div className="text-red-500">{error}</div>}

        <button
          type="submit"
          className="p-2 text-[16px] border-none bg-[#022f45] hover:bg-[#022f45d8] duration-300 rounded-lg text-white cursor-pointer"
        >
          Traducir
        </button>
      </form>

      <div className="px-4 py-4 bg-[#f5f5f5] mt-5 text-[16px] leading-5 h-40 overflow-y-scroll relative">
        <div
          className="absolute w-5 top-3 right-3 opacity-70 cursor-pointer"
          onClick={handleCopy}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />
          </svg>
        </div>
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
      <div
        className={`fixed bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[100px] bg-[#023047] py-3 px-6 rounded-full transition-all duration-400 ease-in-out ${
          showNotification ? "translate-y-[-30px]" : ""
        }`}
      >
        Copiado al portapapeles!
      </div>
      <Footer/>
    </div>
  );
};

export default Translate;
