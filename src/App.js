import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import MyTeam from "./Components/MyTeam";
import Pokemon from "./Components/Pokemon";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Pokedex</Link>
        <Link to="/myTeam">My Team</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/myteam" element={<MyTeam />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
