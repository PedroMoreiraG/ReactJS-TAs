// eslint-disable-next-line no-unused-vars
import React from "react";

import classes from "./index.module.css";

// eslint-disable-next-line react/prop-types
const CardChildren = ({ children }) => {
  return <div className={classes.cont}>{children}</div>;
};

export default CardChildren;