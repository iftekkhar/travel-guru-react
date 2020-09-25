import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Grid } from "@material-ui/core";
import './Hotels.css';
const Hotels = (props) => {
    const { name, guest, bed, bedroom, bath, cancellation, price, reviews, rating, img } = props.hotel;
    return (


        <Grid container spacing={0} className="hotels" alignItems="center">
            <Grid item xs={12} sm={4} className="hotel-img">
                <img src={img}></img>
            </Grid>
            <Grid item xs={12} sm={8} className="hotel-details">
                <h4 className="hotel-name">{name}</h4>
                <p className="hotel-room"><span> {guest} Guests </span>|<span> {bedroom} Bedrooms </span>|<span> {bed} Bed </span>|<span> {bath} Bath </span> </p>
                <p className="hotel-utility"><span>WiFi</span> | <span>Air Conditioning</span> | <span>Kitchen</span></p>
                <p className="hotel-cancellation"><span>Cancellation Fexibility {cancellation}</span></p>
                <div className="hotel-price-review">
                    <Rating name="read-only" value={rating} readOnly />
                    <span><strong>${price}</strong>/per night</span>
                    <span><strong>167$</strong> Total</span>
                </div>
            </Grid>
        </Grid>


    );
};

export default Hotels;