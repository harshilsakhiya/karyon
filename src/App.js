import "./App.css";
import Login from "./auth/login/Login";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/common/Layout";
import LiveTracking from "./components/dashboard/LiveTracking";
import Trips from "./components/dashboard/Trips";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />

          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/live-tracking" element={<LiveTracking />} />
            <Route path="/trip" element={<Trips />} />
          </Route>
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
