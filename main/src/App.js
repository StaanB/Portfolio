// Imports globais
import "./App.css";


// Import de componentes
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Sobre from "./components/Sobre/Sobre";
import Habilidades from "./components/Habilidades/Habilidades";
import Trabalhos from "./components/Trabalhos/Trabalhos";
import Contato from "./components/Contato/Contato";

function App() {
  return (
    <main>
      <Navbar />

      <Header />

      <Sobre />

      <Habilidades />

      <Trabalhos />

      <Contato />
    </main>
  );
}

export default App;
