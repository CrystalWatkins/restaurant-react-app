import React, { Component } from 'react';
import { Route, Redirect, Switch} from "react-router-dom"
import Home from "./components/Home";
import Tables from "./components/Table";
import Reservations from "./components/Reservations"

class App extends Component {
  componentDidMount() {}

  render() {
  return (
  <>
 <div className = "container">
    <Switch>
        <Route path = "/home" component = {Home} />
        <Route path = "/tables" component = {Tables} />
        <Route path = "/reservation" component = {Reservations} />
        <Redirect from="/" to="/home " />
    </Switch>
    </div>
  </>
  );
}
}

export default App;
