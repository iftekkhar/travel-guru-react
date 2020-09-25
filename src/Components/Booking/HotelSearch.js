import React, { useEffect, useState } from 'react';
import '../Booking/HotelSearch.css';
import Hotels from '../Booking/Hotels';
import Data from '../Data/Data.json';

import { Container, Grid } from "@material-ui/core";

const HotelSearch = ({ match }) => {

    const placeId = match.params.id;
    const [hotelsList, setHotelsList] = useState([]);

    useEffect(() => {
        setHotelsList(Data[placeId].hotels);

    }, []);
    console.log(hotelsList);


    return (
        <div className="hotel-Search-Section">
            <Container maxWidth="lg">
                <Grid container spacing={0} className="hotel-Search" alignItems="center">
                    <Grid item xs={12} sm={6} className="pd-20">
                        {hotelsList.map(hotel => (
                            <Hotels hotel={hotel} key={hotel.hotelId}></Hotels>
                        ))}

                    </Grid>
                    <Grid item xs={12} sm={6} className="pd-20">
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default HotelSearch;