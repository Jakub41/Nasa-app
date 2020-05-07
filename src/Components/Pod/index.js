import React from "react";
import history from "../../Util/History";
import { Button } from "react-bootstrap";

const PodCard = (props) => {
  const { title, url, hdurl, explanation, date, copyright } = props.data;

  return (
    <>
      <img src={url} alt={title} />
      <Button>Enter</Button>
    </>
  );
};

export default PodCard;
