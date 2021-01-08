import React from "react";
import usflag from "./pictures/usflag.jpg";
import { Link } from "react-router-dom";

const usflag1 = {
  width: 1920,
  height: 1080,
  overflow: "visible",
  backgroundImage: `url(${usflag})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  top: 0,
  left: 0,
  position: "absolute"
};

const headline = {
  width: 467,
  height: 126,
  fontWeight: 400,
  fontStyle: "bold",
  fontFamily: `"Bebas Neue", serif`,
  lineHeight: 1,
  fontSize: 126,
  letterSpacing: 9,
  color: "#212954",
  top: 585,
  left: 200,
  position: "absolute"
};

const Button1 = {
  font: true,
  fontSize: 40,
  text: "Menu",
  alignment: "center",
  disabled: false,
  padding: 10,
  radius: 8,
  top: 959,
  left: 350,
  position: "absolute"
};

class Home extends React.Component {
  render() {
    return (
      <div className="Home" style={usflag1}>
        <h1 style={headline}>Databank</h1>
        <Link to="/Menu">
          <button style={Button1}>Menu</button>
        </Link>
      </div>
    );
  }
}

export { Home };
