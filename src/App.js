import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;
