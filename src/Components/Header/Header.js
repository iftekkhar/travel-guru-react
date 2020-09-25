import React from "react";
import { Container, Grid } from "@material-ui/core";
import "../Header/Header.css";
import Logo from '../../img/Logo.png';
import {
  Link
} from "react-router-dom";



const header = (props) => {

  return (
    <Container maxWidth="lg" >
      <div className="header">
        <Grid container spacing={0} className="header-section pl-20 pr-20">
          <Grid item sm={3} xs={12} className="">
            <Link to="/">
              <img src={Logo} alt="Travel Guru"></img>
            </Link>
          </Grid>
          <Grid item sm={3} xs={12} className="">

          </Grid>
          <Grid item sm={6} xs={12} className="">
            <nav className="nav-links">
              <ul>
                <Link to="/">
                  <li>Home</li></Link>
                <Link to="/">
                  <li>Blog</li></Link>
                <Link to="/">
                  <li>Contact</li></Link>

                {props.displayUserName === '' ? <Link to="/authentication"> <li>Login </li> </Link> : <li>{props.displayUserName}</li>}

              </ul>
            </nav>
          </Grid>
        </Grid>

      </div>
    </Container>




  );
};

export default header;
