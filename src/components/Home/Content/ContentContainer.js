import React, { Fragment } from "react";
import "./ContentContainer.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ContentImage from "../../../assets/images/abouthome.png";
import { motion } from "framer-motion";

const ContentContainer = () => {
  const animateFrom = { opacity: 0, y: 50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <Fragment>
      <div className="ContentContainer">
        <div className="Content">
          <h3>WHO WE ARE?</h3>
          <h1>WHY CHOOSE OUR SOLAR MAINTENANCE SERVICES?</h1>
          <p>
            There are many variations of passages available, but the majority
            have in some form, by injected humor or words that don't look even
            slightly believable. There are many variations of but the majority
            have suffered. We are committed to providing our customers with
            exceptional service while offering our employees the best training
          </p>
          <div className="ListContainer">
            <ul className="List1">
              <motion.li
                src={ContentImage}
                initial={animateFrom}
                animate={animateTo}
                className="li1"
              >
                <BsFillCheckCircleFill />
                <h4>Reliability</h4>
              </motion.li>
              <motion.li
                src={ContentImage}
                initial={animateFrom}
                animate={animateTo}
                className="li1"
              >
                <BsFillCheckCircleFill />
                <h4>Security</h4>
              </motion.li>
            </ul>
            <ul className="List2">
              <motion.li
                src={ContentImage}
                initial={animateFrom}
                animate={animateTo}
                className="li1"
              >
                <BsFillCheckCircleFill />
                <h4>Performance</h4>
              </motion.li>
              <motion.li
                src={ContentImage}
                initial={animateFrom}
                animate={animateTo}
                className="li1"
              >
                <BsFillCheckCircleFill />
                <h4>Quality</h4>
              </motion.li>
            </ul>
          </div>
          <div className="ButtonContainer">
            <Link className="Button" to="/about">
              READ MORE
            </Link>
          </div>
        </div>
        <div className="ContentImage">
          <motion.img
            src={ContentImage}
            initial={animateFrom}
            animate={animateTo}
            alt="Content image solarverse"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ContentContainer;
