import "./App.css";
import LoginForm from "./Components/LoginComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/forgot-password";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
