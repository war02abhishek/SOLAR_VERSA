import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import "./Header.css";
import NavLinks from "./NavLinks";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="NavContainer">
        <div className="LeftContainer">
          <img
            className="Logo"
            src={logo}
            alt="SolarVerse Logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <h1 className="LogoText">SolarVerse</h1>
        </div>
        <div className="RightContainer">
          <NavLinks data={props.data}/>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
