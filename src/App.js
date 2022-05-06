import React from "react";

import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Adddriver from "./components/pages/Adddriver";
import UpdateDriver from "./components/pages/UpdateDriver.jsx";
import RemoveDriver from "./components/pages/RemoveDriver";
import AddBus from "./components/pages/AddBus";
import AddRoute from "./components/pages/AddRoute";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/adddriver" element={<Adddriver />} />
          <Route path="/updatedriver" element={<UpdateDriver />} />
          <Route path="/removedriver" element={<RemoveDriver />} />
          <Route path="/addbus" element={<AddBus />} />
          <Route path="/addroute"element={<AddRoute/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
