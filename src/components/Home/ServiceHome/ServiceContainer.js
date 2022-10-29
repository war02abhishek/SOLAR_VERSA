import React, { Fragment } from "react";
import { CommercialServices } from "../../../assets/data/CommercialServices";
import { DomesticServices } from "../../../assets/data/DomesticServices";
import ServiceCard from "./ServiceCard";
import "./ServiceContainer.css";
const ServiceContainer = () => {
  return (
    <Fragment>
      <div className="ServiceContainer">
        <div className="DomesticService">
          <h1 className="ServiceTitle">DOMESTIC SERVICES</h1>
          <hr className="Underline" />
          <div className="ServiceCardContainer">
            {DomesticServices.map(({ name, id, description, image }) => {
              return (
                <ServiceCard
                  name={name}
                  id={id}
                  description={description}
                  image={image}
                />
              );
            })}
          </div>
        </div>
        <div className="CommercialService">
          <h1 className="ServiceTitle">COMMERCIAL SERVICES</h1>
          <hr className="Underline" />
          <div className="ServiceCardContainer">
            {CommercialServices.map(({ name, id, description, image }) => {
              return (
                <ServiceCard
                  name={name}
                  id={id}
                  description={description}
                  image={image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServiceContainer;
