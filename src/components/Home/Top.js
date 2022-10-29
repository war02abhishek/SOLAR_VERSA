import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Home.css";

const Top = () => {
  const animateFrom = { opacity: 0, y: 50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <Fragment>
      <motion.div initial={animateFrom} animate={animateTo}>
        <Link to="top" spy={true} smooth={true} duration={1000}>
          <BsFillArrowUpCircleFill
            size={60}
            fill="#39b54a"
            className="ScrollTop"
          />
        </Link>
      </motion.div>
    </Fragment>
  );
};

export default Top;
