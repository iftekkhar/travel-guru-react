import React, { createContext, useState } from "react";
import "./App.css";
import { Container, Grid } from "@material-ui/core";
import Auth from "./Components/Auth/Auth";
import Booking from "./Components/Booking/Booking";
import HotelSearch from "./Components/Booking/HotelSearch";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from "./Components/Auth/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, SetLoggedInUser] = useState({
    name: '',
    email: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, SetLoggedInUser]} className="app">
      <Router>

        <Header displayUserName={loggedInUser.name} />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/destination/:id" component={Booking}></Route>
          <Route path="/authentication" component={Auth}></Route>
          <PrivateRoute path="/search/:id" component={HotelSearch}></PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
