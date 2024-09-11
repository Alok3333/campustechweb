import { Routes, Route } from "react-router-dom";
import CampusWebsite, { LoginPage } from "./pages/CampusWebsite";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CampusWebsite />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
