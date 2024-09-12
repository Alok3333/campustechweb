import { Routes, Route } from "react-router-dom";
import CampusWebsite1, { LoginPage } from "./pages/CampusWebsite";
import CampusWebsite from "./pages/CampusWebsite";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<CampusWebsite1 />} /> */}
        <Route path="/" element={<CampusWebsite />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
