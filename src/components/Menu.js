import React from "react";
import { Link } from "react-router-dom";
import background from "./pictures/background.jpg";

const backgroundimg = {
  width: 1920,
  height: 1080,
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  top: 0,
  left: 0,
  position: "absolute"
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
  top: 102,
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
  top: 230,
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
  top: 230,
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
  top: 230,
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
  top: 385,
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
  top: 520,
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
  top: 520,
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
  top: 674,
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
  top: 810,
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
  top: 810,
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
  top: 102,
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
  top: 240,
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
  top: 360,
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
  top: 480,
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
  top: 600,
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
  top: 720,
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
  top: 840,
  left: 1333,
  position: "absolute"
};

const impressum = {
  width: 195,
  height: 39,
  overflow: "visible",
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: `"Bebas Neue", serif`,
  lineHeight: 1.4,
  letterSpacing: 10,
  color: "#212954",
  fontSize: 28,
  top: 1020,
  left: 1714,
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
        <Link to="/Impressum">
          <button style={impressum}>Impressum</button>
        </Link>
      </div>
    );
  }
}

export { Menu };
