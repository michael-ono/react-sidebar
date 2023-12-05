import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import Training from "./pages/Training";
import PageNotFound from "./components/PageNotFound";
import Settings from "./pages/Settings";

function App() {

  const USER_TYPES = {
    PUBLIC: 'Public User',
    ADMIN_USER: "mentee",
    NORMAL_USER: "mentor"
  }

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/training" element={<Training />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes> 
    </div>
  )
}

export default App;
