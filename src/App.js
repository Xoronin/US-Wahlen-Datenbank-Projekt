import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hi</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Menu" component={Menu} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
