import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { CreateCountry } from "./components/CreateCountry";
import { Home } from "./components/Home";
import { CreateCity } from "./components/CreateCity";
import { Edit } from "./components/Edit";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-country" element={<CreateCountry />} />
        <Route path="/add-city" element={<CreateCity/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
