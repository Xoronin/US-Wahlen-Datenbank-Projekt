import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Candidates from "./components/Candidates";
import States from "./components/States";
import Elections from "./components/Elections";
import CompareCandidates from "./components/CompareCandidates";
import CompareElections from "./components/CompareElections";
import VotesPercentage from "./components/VotesPercentage";
import VotesMargin from "./components/VotesMargin";
import ElectionMap2020 from "./components/ElectionMap2020";
import ElectionMap2016 from "./components/ElectionMap2016";
import ElectionMap2012 from "./components/ElectionMap2012";
import ElectionMap2008 from "./components/ElectionMap2008";
import ElectionMap2004 from "./components/ElectionMap2004";
import ElectionMap2000 from "./components/ElectionMap2000";
import StatesMap from "./components/StatesMap";
import Impressum from "./components/Impressum";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Candidates" component={Candidates} />
        <Route exact path="/States" component={States} />
        <Route exact path="/Elections" component={Elections} />
        <Route exact path="/CompareCandidates" component={CompareCandidates} />
        <Route exact path="/CompareElections" component={CompareElections} />
        <Route exact path="/VotesPercentage" component={VotesPercentage} />
        <Route exact path="/VotesMargin" component={VotesMargin} />
        <Route exact path="/ElectionMap2020" component={ElectionMap2020} />
        <Route exact path="/ElectionMap2016" component={ElectionMap2016} />
        <Route exact path="/ElectionMap2012" component={ElectionMap2012} />
        <Route exact path="/ElectionMap2008" component={ElectionMap2008} />
        <Route exact path="/ElectionMap2004" component={ElectionMap2004} />
        <Route exact path="/ElectionMap2000" component={ElectionMap2000} />
        <Route exact path="/StatesMap" component={StatesMap} />
        <Route exact path="/Impressum" component={Impressum} />
      </Switch>
    </Router>
  );
}

export default App;
