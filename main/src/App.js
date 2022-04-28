// Imports globais
import "./App.css";

// Import de componentes
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Sobre from "./components/Sobre/Sobre";
import Habilidades from "./components/Habilidades/Habilidades";

function App() {
  return (
    <div className="container">
      <Navbar />

      <Header />

      <Sobre />

      <Habilidades />
    </div>
  );
}

export default App;
