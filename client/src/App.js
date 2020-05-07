import React from "react";
import Admin from "./Pages/Admin";
import More from "./Pages/More";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/more" component={More} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
