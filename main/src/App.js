// Imports globais
import "./App.css";

// Import de componentes
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Sobre from "./components/Sobre/Sobre";


function App() {
  return (
    <div className="container">
      <Navbar />

      <Header />

      <Sobre />
    </div>
  );
}

export default App;
