import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";

function App() {
   const { user } = useAuthContext();

   return (
      <div className="App">
         <BrowserRouter>
            <Nav />
            <Home />
            <div className="pages">
               <Routes>
                  <Route
                     path="/"
                     element={user ? <Home /> : <Navigate to="/login" />}
                  />
                  <Route
                     path="/login"
                     element={!user ? <Login /> : <Navigate to="/" />}
                  />
                  <Route
                     path="/signup"
                     element={!user ? <Signup /> : <Navigate to="/login" />}
                  />
               </Routes>
            </div>
         </BrowserRouter>
      </div>
   );
}

export default App;
