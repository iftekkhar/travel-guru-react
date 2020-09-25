import React from "react";
import "../Home/Destinations.css";
import { Grid } from "@material-ui/core";
import {
  Link
} from "react-router-dom";

const Destinations = (props) => {
  console.log(props.place);
  return (
    <Grid item xs={12} sm={4} className="items">
      <Link to={`/destination/${props.place.id}`}>
        <div className="meta" href="#">
          <img src={props.place.fullImg}></img>
          <h2>{props.place.destination}</h2>
        </div>
      </Link>

    </Grid>
  );
};

export default Destinations;
