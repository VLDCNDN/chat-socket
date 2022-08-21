import { Routes, Route, Link} from "react-router-dom";
import SigninPage from "./pages/Signin";
import SignupPage from "./pages/Signup";
import ChatPage from "./pages/Chat";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;

