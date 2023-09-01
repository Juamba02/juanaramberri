import logo from "./logo.svg";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Inicio />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
