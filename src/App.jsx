import "./App.css";
import "@fontsource/montserrat/500.css";
import { UsersPage } from "./pages/UsersPage/UsersPage";
import { NavLink, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tweets" element={<UsersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
