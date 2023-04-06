import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import StarRatingComponent from "react-star-rating-component";
import "./movieCard.css";

const RestoCard = ({ el }) => {
  return (
    <div className="card">
      <Card style={{ width: "18rem", height: "26rem" }}>
        <Card.Img
          variant="top"
          src={el.img}
          style={{
            resizeMode: "cover",
            height: 200,
            width: 285,
          }}
        />
        <Card.Body>
          <Card.Title className="title" style={{ color: "white" }}>{el.title}</Card.Title>
          <Card.Text>{el.description}</Card.Text>
          <StarRatingComponent
            name={"star"} /* name of the radio input, it is required */
            value={
              el.rate
            } /* number of selected icon (`0` - none, `1` - first) */
            editing={
              false
            } /* is component available for editing, default `true` */
          />
        </Card.Body>
        
      </Card>
    </div>
  );
};

export default RestoCard;
