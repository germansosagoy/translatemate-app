import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="items-center font-sans text-xs p-2">
      <aside className="items-center grid-flow-col">
        <p>
          Source:
          <a
            href="https://learn.microsoft.com/en-us/azure/ai-services/translator/create-translator-resource"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-500 hover:text-blue-800 ml-1"
          >
            Microsoft Translator API
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
