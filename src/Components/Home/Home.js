import React, { useState, useEffect } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import "../Home/Home.css";
import Destinations from "./Destinations";
import Data from '../Data/Data.json';
import {
  Link
} from "react-router-dom";
const Home = () => {


  const [places, setPlaces] = useState([]);
  useEffect(() => {
    setPlaces(Data);
  }, []);

  return (

    <div className="home">
      <Container maxWidth="lg">
        <Grid container className="home-section" spacing={0} alignItems="center">
          <Grid item xs={12} sm={5} className="pd-20">

            <h1>Cox's bazar</h1>
            <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            <Button variant="contained" color="primary" href="#contained-buttons" className="button-orange-small">
              Booking
            </Button>
          </Grid>
          <Grid item xs={12} sm={7} className="homepage-image-card pd-20 ">
            <div className="home-card-section">
              <Grid container spacing={3} className="home-card">
                {places.map((place) => (
                  <Destinations place={place} key={place.id}></Destinations>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
