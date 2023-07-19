import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/Signin";
import Account from "./components/pages/Account";
import PrivateRoute from "./Routes/PrivateRoute";
import Preview from "./components/pages/previewPage/Preview";

function App() {
  //TODO:be able to save when click save.
  //TODO:go to previer page
  //TODO:create private route
  //TODO:make site responsive
  return (
    <Router>
      <Routes>
        <Route  path="/signup" element={<SignUp />} />
        <Route  path="/" element={<SignIn/>} />
        <Route element={<PrivateRoute/>}>
        <Route path="/account" element={<Account />} />
        <Route path="/preview" element={<Preview />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
