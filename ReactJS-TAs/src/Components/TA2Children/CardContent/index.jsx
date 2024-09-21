// eslint-disable-next-line no-unused-vars
import React from "react";


// eslint-disable-next-line react/prop-types
const CardContent = ({title, description, person, dateStarted, dateFinished }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{person}</p>
      <p>{dateStarted}</p>
      <p>{dateFinished}</p>
    </>
  );
};

export default CardContent;




