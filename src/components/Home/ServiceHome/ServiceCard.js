import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";
import { motion } from "framer-motion";

const ServiceCard = ({ name, id, description, image }) => {
  const animateFrom = { opacity: 0, y: 50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <Fragment>
      <div initial={animateFrom} animate={animateTo} className="ServiceCard">
        <div className="ImageContainer">
          <img className="ServiceImages" src={image} alt={name} />
        </div>
        <h1 className="ServiceName">{name}</h1>
        <p className="ServiceDescription">{description}</p>
        <Link to={`/services/${id}`} className="ServiceButton">
          Learn More
        </Link>
      </div>
    </Fragment>
  );
};

export default ServiceCard;
