import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import MyTeam from "./Components/MyTeam";

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
          <Route path="/myteam" element={<MyTeam />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
