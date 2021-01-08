import React from "react";
import { Link } from "react-router-dom";
import background from "./pictures/background.jpg";
import impressum from "./pictures/impressum.png";

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

const imp = {
  width: 1760,
  height: 920,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  top: 150,
  left: 70,
  position: "absolute"
};

const Headline = {
  width: 424,
  height: 82,
  overflow: "visible",
  color: "#000000",
  lineHeight: 1.2,
  textTransform: "uppercase",
  textDecoration: "underline",
  fontSize: 68,
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: `"Bebas Neue", serif`,
  letterSpacing: 20,
  top: 0,
  left: 740,
  position: "absolute"
};

const text = {
  width: 1000,
  height: 894,
  overflow: "visible",
  color: "#000000",
  lineHeight: 1.4,
  letterSpacing: 0,
  textAlign: "center",
  fontWeight: 300,
  fontStyle: "normal",
  fontFamily: `"Sunflower", serif`,
  fontSize: 48,
  top: 176,
  left: 436,
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

class Impressum extends React.Component {
  render() {
    return (
      <div className="Impressum" style={backgroundimg}>
        <h1 style={Headline}>Impressum</h1>
        <img src={impressum} style={imp} alt="impressum" />
        <Link to="/Menu">
          <button style={MenuButton}>Menu</button>
        </Link>
      </div>
    );
  }
}

export default Impressum;
