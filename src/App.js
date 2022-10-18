import "./App.css";
import "./css/style.css";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import Expert from "./components/Expert";

function App() {
  return (
    <div className="App">
      <Header />
      <Expert />
      <Highlight />
    </div>
  );
}

export default App;
