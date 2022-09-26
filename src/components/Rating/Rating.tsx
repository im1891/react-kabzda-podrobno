import React from "react";
import { RatingValueType } from "../UncontrolledRating/UncontrolledRating";

export type RatingPropsType = {
  value: number;
  onClick: (value: RatingValueType) => void;
};

export function Rating(props: RatingPropsType) {
  return (
    <div>
      <Star selected={props.value > 0} onClick={props.onClick} rating={1} />
      <Star selected={props.value > 1} onClick={props.onClick} rating={2} />
      <Star selected={props.value > 2} onClick={props.onClick} rating={3} />
      <Star selected={props.value > 3} onClick={props.onClick} rating={4} />
      <Star selected={props.value > 4} onClick={props.onClick} rating={5} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  onClick: (value: RatingValueType) => void;
  rating: RatingValueType;
};

function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => props.onClick(props.rating)}
      style={
        props.selected
          ? {
              cursor: "pointer",
              color: "gold",
              fontWeight: "bold",
            }
          : { cursor: "pointer" }
      }
    >
      {" "}
      star
    </span>
  );
}
