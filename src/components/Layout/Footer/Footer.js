import React, { Fragment } from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail, GrTwitter } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = (props) => {
  const navigate = useNavigate();
  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "My Bookings", url: "/bookings" },
    {
      name: props.data.Login.login ? `Hello ${props.data.User.user}` : "Login",
      url: props.data.Login.login ? "/profile" : "/login",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <Fragment>
      <div className="FooterContainer">
        <div className="Footer">
          <div className="LeftFooter">
            <div className="LeftContainer">
              <img
                className="FooterLogo Logo"
                src={logo}
                alt="SolarVerse Logo"
                onClick={() => {
                  navigate("/");
                }}
              />
              <h1 className="LogoTextTitle">SolarVerse</h1>
            </div>
            <hr className="FooterHr" />
            <p className="FooterDescription">
              Our goal to help our companies maintains achieve best position
              their respective industries best team work that work have hand to
              be repudiated research business around the world.
            </p>
            <div className="SocialMedia">
              <a target="_blank" href="https://www.facebook.com/">
                <BsFacebook className="FacebookLogo" />
              </a>
              <a target="_blank" href="https://www.instagram.com/">
                <BsInstagram className="InstagramLogo" />
              </a>
              <a target="_blank" href="https://www.twitter.com/">
                <GrTwitter className="TwitterLogo" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/">
                <BsLinkedin className="LinkedinLogo" />
              </a>
            </div>
          </div>
          <div className="CenterFooter">
            <h1 className="CenterFooterTitle">Useful Links</h1>
            <hr className="CenterHr" />
            <ul className="CenterFooterList">
              {links.map(({ name, url }) => {
                return (
                  <li className="UsefulLinks" key={name}>
                    <Link to={url}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="RightFooter">
            <h1 className="RightFooterTitle">Get In Touch</h1>
            <hr className="RightHr" />
            <ul className="RightFooterList">
              <li className="RightFooterItem">
                <div className="RightFooterElement">
                  <BsFillTelephoneFill className="RightFooterIcon" />
                  <a
                    target="_blank"
                    href="Tel:9999988888"
                    className="RightFooterDescription Telephone"
                  >
                    99999988888
                  </a>
                </div>
              </li>
              <li className="RightFooterItem">
                <div className="RightFooterElement">
                  <GrMail className="RightFooterIcon" />
                  <a
                    target="_blank"
                    href="mailto:solarverse@gmail.com"
                    className="RightFooterDescription"
                  >
                    solarverse@gmail.com
                  </a>
                </div>
              </li>
              <li className="RightFooterItem">
                <div className="RightFooterElement">
                  <IoLocationSharp className="RightFooterIcon LocationIcon" />
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/Rba3DEYBUYEatUYo7"
                    className="RightFooterDescription Location"
                  >
                    Solarverse Technologies Pvt. Ltd. Plot No. 150, Sector 19
                    Rohini, Delhi - 110042
                  </a>
                </div>
              </li>
            </ul>
            <div className="SocialMedia MobileSocial">
              <a target="_blank" href="https://www.facebook.com/">
                <BsFacebook className="FacebookLogo" />
              </a>
              <a target="_blank" href="https://www.instagram.com/">
                <BsInstagram className="InstagramLogo" />
              </a>
              <a target="_blank" href="https://www.twitter.com/">
                <GrTwitter className="TwitterLogo" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/">
                <BsLinkedin className="LinkedinLogo" />
              </a>
            </div>
          </div>
        </div>
        <div className="FooterBottom">
          <hr className="FooterBottomHr" />
          <p className="FooterBottomText">
            CopyRight © {year} SolarVerse. All Rights Reserved.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
