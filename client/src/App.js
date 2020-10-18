import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "./containers/Home/Home";
import Tables from "./containers/Tables/Table";
import Waitlist from "./containers/Waitlist/Waitlist";

function App() {
  return (
  <Router>
    <Switch>
      <div className = "App">
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/tables" component = {Tables} />
        <Route exact path = "/waitlist" component = {Waitlist} />
      </div>
    </Switch>
  </Router>
  );
}

export default App;
