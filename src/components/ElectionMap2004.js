import React from "react";
import { Link } from "react-router-dom";
import map2004 from "./pictures/map2004.png";

const map = {
  width: 1304,
  height: 800,
  overflow: "visible",
  backgroundImage: "url(/* 2000_large.png */)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  top: 194,
  left: 308,
  position: "absolute"
};

const Headline = {
  width: 1000,
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
  left: 550,
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

class ElectionMap2004 extends React.Component {
  render() {
    return (
      <div className="ElectionMap2004">
        <h1 style={Headline}>Election Map 2004</h1>
        <img src={map2004} style={map} alt="map2004" />
        <Link to="/Menu">
          <button style={MenuButton}>Menu</button>
        </Link>
      </div>
    );
  }
}

export default ElectionMap2004;
