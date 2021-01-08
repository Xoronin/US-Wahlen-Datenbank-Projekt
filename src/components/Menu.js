import React from "react";
import { Link } from "react-router-dom";
import background from "./pictures/background.jpg";

const backgroundimg = {
  width: 1920,
  height: 1080,
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
};

const Headline1 = {
  width: 648,
  height: 60,
  overflow: "visible",
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: `"Bebas Neue", serif`,
  fontSize: 43,
  lineHeight: 1.4,
  letterSpacing: 10,
  color: "var(--wei_, #ffffff)",
  top: 122,
  left: 120,
  position: "absolute"
};

const Button1 = {
  width: 260,
  height: 120,
  font: true,
  fontSize: 40,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 250,
  left: 120,
  position: "absolute"
};

const Button2 = {
  width: 260,
  height: 120,
  font: true,
  fontSize: 40,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 250,
  left: 423,
  position: "absolute"
};

const Button3 = {
  width: 260,
  height: 120,
  font: true,
  fontSize: 40,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 250,
  left: 726,
  position: "absolute"
};

const Headline2 = {
  width: 800,
  height: 60,
  overflow: "visible",
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: `"Bebas Neue", serif`,
  fontSize: 43,
  lineHeight: 1.4,
  letterSpacing: 10,
  color: "var(--wei_, #ffffff)",
  top: 405,
  left: 120,
  position: "absolute"
};

const Button4 = {
  width: 260,
  height: 120,
  font: true,
  fontSize: 40,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 540,
  left: 120,
  position: "absolute"
};

const Button5 = {
  width: 260,
  height: 120,
  font: true,
  fontSize: 40,
  text: "Menu",
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 540,
  left: 423,
  position: "absolute"
};

const Headline3 = {
  width: 800,
  height: 60,
  overflow: "visible",
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: `"Bebas Neue", serif`,
  fontSize: 43,
  lineHeight: 1.4,
  letterSpacing: 10,
  color: "var(--wei_, #ffffff)",
  top: 694,
  left: 120,
  position: "absolute"
};

const Button6 = {
  width: 260,
  height: 120,
  font: true,
  fontSize: 40,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 830,
  left: 120,
  position: "absolute"
};

const Button7 = {
  width: 260,
  height: 120,
  font: true,
  fontSize: 40,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 830,
  left: 423,
  position: "absolute"
};

const Headline4 = {
  width: 800,
  height: 60,
  overflow: "visible",
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: `"Bebas Neue", serif`,
  fontSize: 43,
  lineHeight: 1.4,
  letterSpacing: 10,
  color: "var(--wei_, #ffffff)",
  top: 122,
  left: 1165,
  position: "absolute"
};

const Button8 = {
  width: 260,
  height: 87,
  font: true,
  fontSize: 34,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 260,
  left: 1333,
  position: "absolute"
};

const Button9 = {
  width: 260,
  height: 87,
  font: true,
  fontSize: 34,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 380,
  left: 1333,
  position: "absolute"
};

const Button10 = {
  width: 260,
  height: 87,
  font: true,
  fontSize: 34,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 500,
  left: 1333,
  position: "absolute"
};

const Button11 = {
  width: 260,
  height: 87,
  font: true,
  fontSize: 34,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 620,
  left: 1333,
  position: "absolute"
};

const Button12 = {
  width: 260,
  height: 87,
  font: true,
  fontSize: 34,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 740,
  left: 1333,
  position: "absolute"
};

const Button13 = {
  width: 260,
  height: 87,
  font: true,
  fontSize: 34,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 860,
  left: 1333,
  position: "absolute"
};

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu" style={backgroundimg}>
        <h1 style={Headline1}>Click here to see the data:</h1>
        <Link to="/Candidates">
          <button style={Button1}>Candidates</button>
        </Link>
        <Link to="/States">
          <button style={Button2}>States</button>
        </Link>
        <Link to="/Elections">
          <button style={Button3}>Elections</button>
        </Link>
        <h1 style={Headline2}>Click here to compare the data:</h1>
        <Link to="/CompareCandidates">
          <button style={Button4}>Compare candidates</button>
        </Link>
        <Link to="/CompareElections">
          <button style={Button5}>Compare Elections</button>
        </Link>
        <h1 style={Headline3}>Click here to evaluate the data:</h1>
        <Link to="/VotesPercentage">
          <button style={Button6}>Votes percentage</button>
        </Link>
        <Link to="/VotesMargin">
          <button style={Button7}>Votes margin</button>
        </Link>
        <h1 style={Headline4}>The election result maps:</h1>
        <Link to="/ElectionMap2020">
          <button style={Button8}>Election 2020</button>
        </Link>
        <Link to="/ElectionMap2016">
          <button style={Button9}>Election 2016</button>
        </Link>
        <Link to="/ElectionMap2012">
          <button style={Button10}>Election 2012</button>
        </Link>
        <Link to="/ElectionMap2008">
          <button style={Button11}>Election 2010</button>
        </Link>
        <Link to="/ElectionMap2004">
          <button style={Button12}>Election 2004</button>
        </Link>
        <Link to="/ElectionMap2000">
          <button style={Button13}>Election 2000</button>
        </Link>
      </div>
    );
  }
}

export { Menu };
