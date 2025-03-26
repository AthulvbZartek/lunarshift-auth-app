import "./App.css";
import LoginForm from "./Components/LoginComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/forgot-password";
import SignUpPage from "./pages/sign-up";
import IdVerification from "./pages/id-verification";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/id-verification" element={<IdVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
