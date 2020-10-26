import React, { Component } from 'react';
import { Route, Redirect, Switch} from "react-router-dom"
import Home from "./containers/Home/Home";
import Tables from "./containers/Tables/Table";
import Waitlist from "./containers/Waitlist/Waitlist";

class App extends Component {
  componentDidMount() {}
  render() {
  return (
  <>
 <div className = "container">
    <Switch>
        <Route path = "/" component = {Home} />
        <Route path = "/tables" component = {Tables} />
        <Route path = "/waitlist" component = {Waitlist} />
        <Redirect from="/" to="/home " />
    </Switch>
    </div>
  </>
  );
}
}

export default App;
