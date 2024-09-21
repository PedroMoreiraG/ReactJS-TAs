import classes from "./index.module.css";

// eslint-disable-next-line react/prop-types
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
