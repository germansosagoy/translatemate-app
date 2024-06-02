import Logo from '@assets/logo-translatemate.webp';
import { Github, Linkedin, Mail } from "lucide-react";

const Nav: React.FC = () => {
  return (
    <nav className="bg-[#ffffff] border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="logo-translatemate" className="w-9 h-auto" />
          <h1 className="text-[#023047] font-semibold font-sans text-xl ml-2">
            Translate Mate
          </h1>
        </a>
        <div className="flex space-x-4 opacity-90">
          <a
            href="https://github.com/germansosagoy"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 duration-200 hover:text-black"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/german-sosa-goy-/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 duration-200 hover:text-blue-800"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:germanesosagoy@gmail.com"
            className="text-gray-500 duration-200 hover:text-red-600"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};


export default Nav;
