import React from "react";
import { Link } from "react-router-dom";
import statesmap from "./pictures/statesmap.png";

const Headline = {
  width: 1500,
  height: 78,
  overflow: "visible",
  color: "#000000",
  lineHeight: 1.2,
  textTransform: "uppercase",
  textDecoration: "underline",
  fontSize: 65,
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: `"Bebas Neue", serif`,
  letterSpacing: 20,
  top: 0,
  left: 212,
  position: "absolute"
};

const map = {
  width: 1346,
  height: 866,
  overflow: "visible",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  top: 157,
  left: 287,
  position: "absolute"
};

const MenuButton = {
  width: 75,
  height: 50,
  font: true,
  fontSize: 20,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 58,
  left: 1793,
  position: "absolute"
};

const BackButton = {
  width: 75,
  height: 50,
  font: true,
  fontSize: 20,
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 58,
  left: 59,
  position: "absolute"
};

class StatesMap extends React.Component {
  render() {
    return (
      <div className="StatesMap">
        <img src={statesmap} style={map} alt="map" />
        <h1 style={Headline}>United states electoral college map</h1>
        <Link to="/Menu">
          <button style={MenuButton}>Menu</button>
        </Link>
        <Link to="/States">
          <button style={BackButton}>Back</button>
        </Link>
      </div>
    );
  }
}

export default StatesMap;
