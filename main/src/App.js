// Imports globais
import "./App.css";

// Import de componentes
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Sobre from "./components/Sobre/Sobre";
import Habilidades from "./components/Habilidades/Habilidades";
import Trabalhos from "./components/Trabalhos/Trabalhos";

function App() {
  return (
    <div>
      <Navbar />

      <Header />

      <Sobre />

      <Habilidades />

      <Trabalhos />
    </div>
  );
}

export default App;
