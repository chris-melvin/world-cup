import { Table } from "./components/table";
import { worldcup } from "./assets/teams.json";
import axios from "axios";
import { API_ENDPOINTS } from "./api";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teams" element={<Teams />} />
      </Routes>
    </main>
  );
}

export default App;
