import React,{Suspense} from 'react';
import { ClipLoader } from 'react-spinners';
import Nav from "@components/Nav";
import Translate from "@components/Translate"
import Footer from "@components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<ClipLoader color='#023047' size={50} />}>
      <main className="flex-grow">
      <Translate />
      </main>
      </Suspense>
      <Footer/>
    </>
  );
};

export default App;
