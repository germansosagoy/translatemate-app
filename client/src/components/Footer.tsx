import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ffffff] max-w-7xl mx-auto border shadow-sm border-gray-200 rounded-md p-4 mt-auto animate-fade-down animate-delay-300 animate-once">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <p className="text-xs text-gray-500 tracking-wide">
             <a href="https://github.com/germansosagoy/translatemate-app" target="_blank" rel="noreferrer" className="underline">
              Translate Mate
              </a>
              {" "}fue hecho por{" "}
             <a href="https://linkedin.com/in/german-sosa-goy-/" target="_blank" rel="noreferrer" className="underline">Germán</a>
             {" "}💭
          </p>
        </div>
        <div className="text-xs text-gray-500 tracking-wide">
          <p>
            Source:
            <a
              href="https://learn.microsoft.com/en-us/azure/ai-services/translator/create-translator-resource"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-400 hover:text-blue-900 duration-200 ml-1">
              Microsoft Translator API
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
