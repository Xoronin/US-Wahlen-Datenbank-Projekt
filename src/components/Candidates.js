import React from "react";
import { Link } from "react-router-dom";
import background from "./pictures/background.jpg";
import president from "./pictures/president1.png";

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

const presjpg = {
  width: 314,
  height: 314,
  top: 140,
  left: 66,
  position: "absolute"
};

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
  top: 0,
  left: 20,
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

const text = {
  width: 331,
  height: 64,
  overflow: "visible",
  fontWeight: 500,
  fontStyle: "normal",
  fontFamily: `"Sunflower", serif`,
  color: "#000000",
  fontSize: 40,
  lineHeight: 1.6,
  letterSpacing: -0.3,
  top: 450,
  left: 105,
  position: "absolute"
};

const SearchBar = ({ keyword, setKeyword }) => {
  const barstyle = {
    width: 1380,
    height: 30,
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    top: 130,
    left: 470,
    position: "absolute"
  };
  return (
    <input
      style={barstyle}
      font={true}
      fontFamily={"Sunflower"}
      keyboard={"search"}
      placeholder={"Search for candidates..."}
      backgroundColor={"#EBEBEB"}
      border={"rgba(0,0,0,0)"}
      borderWidth={1}
      focusColor={"#09F"}
      focused={false}
      fontSize={16}
      multiLine={false}
      padding={15}
      password={false}
      placeholderColor={"#aaa"}
      radius={8}
      textColor={"#333"}
      value={""}
    />
  );
};

class Candidates extends React.Component {
  render() {
    return (
      <div className="Candidates" style={backgroundimg}>
        <h1 style={Headline}>Candidates</h1>
        <h1 style={text}>Election year:</h1>
        <img src={president} style={presjpg} alt="president" />
        <SearchBar></SearchBar>
        <Link to="/Menu">
          <button style={MenuButton}>Menu</button>
        </Link>
      </div>
    );
  }
}

export default Candidates;
