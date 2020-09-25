import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";
import "../Booking/Booking.css";
import Data from '../Data/Data.json';
import { Link } from "react-router-dom";



const Booking = ({ match }) => {
  const placeId = match.params.id;
  const [place, setPlace] = useState({});


  useEffect(() => {
    setPlace(Data[placeId]);

  }, []);
  const { destination, description, id } = place;
  return (

    <div className="booking">
      <Container maxWidth="lg">
        <Grid container spacing={0} className="booking-section" alignItems="center">
          <Grid item xs={12} sm={6} className="pd-20">
            <h1>{destination}</h1>
            <p>{description}</p>
          </Grid>
          <Grid item xs={12} sm={6} className="pd-20">
            <Paper className="booking-form-container">
              <form noValidate autoComplete="off">
                <TextField id="outlined-basic-origin" label="Origin" variant="outlined" fullWidth margin="normal" />
                <TextField id="outlined-basic-destination" label="Destination" variant="outlined" fullWidth margin="normal" value={destination} />
                <div className="booking-form-date">
                  <TextField
                    id="outlined-basic"
                    label="From"
                    type="date"
                    defaultValue="2020-05-24"
                    margin="normal"
                    autoFocus
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="To"
                    type="date"
                    defaultValue="2020-05-24"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <Link to={`/search/${id}`}>
                  <Button variant="contained" color="primary" className="button-orange" fullWidth>
                    Start Booking
                </Button>
                </Link>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Booking;
