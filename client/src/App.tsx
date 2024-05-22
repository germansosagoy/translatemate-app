import Nav from "@components/Nav";
import Translate from "@components/Translate"
import Footer from "@components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main className="flex-grow">
      <Translate />
      </main>
      <Footer/>
    </>
  );
};

export default App;
