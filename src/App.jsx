import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Admin from "./pages/Admin";
import AuthForm from "./pages/AuthForm";
import Profile from "./pages/Profile"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />      
          <Route path="/chat" element={<Chat />} />
          <Route path="/authform" element={<AuthForm />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
