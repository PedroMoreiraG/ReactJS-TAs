import React from "react";
import classes from "./index.module.css";

const Card = ({title, description, person, dateStarted, dateFinished }) => {
  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{person}</p>
      <p>{dateStarted}</p>
      <p>{dateFinished}</p>
    </div>
  );
};

export default Card;
