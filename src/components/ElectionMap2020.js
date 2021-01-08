import React from "react";
import { Link } from "react-router-dom";

const Headline = {
  width: 440,
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
  top: 18,
  left: 14,
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

class ElectionMap2020 extends React.Component {
  render() {
    return (
      <div className="ElectionMap2020">
        <h1 style={Headline}>Election Map 2020</h1>
        <Link to="/Menu">
          <button style={MenuButton}>Menu</button>
        </Link>
      </div>
    );
  }
}

export { ElectionMap2020 };
