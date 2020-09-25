import React, { useContext, useState } from "react";
import "../Auth/Auth.css";
import { Container, Grid } from "@material-ui/core";
import * as firebase from "firebase/app";
import "firebase/auth";
import Login from "./Login";
import SignUp from "./SignUp";
import SocialLogin from "./SocialLogin";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App'
import { useHistory, useLocation } from "react-router-dom";

const Auth = () => {
  const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    password: '',
    email: ''
  })
  //onClick Handler for toggling the Login - SignUp Form
  const handleNewUser = () => {
    setNewUser(!newUser);
  }
  //Submit Button Handler for Login & Signup From
  const handleSignUpForm = (e) => {
    initFireBase();
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        setUser({
          isSignedIn: true,
          name: user.name,
          password: user.password,
          email: user.email
        })
        console.log(res);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

  }
  const handleSignInForm = () => {
    initFireBase();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        setUser({
          isSignedIn: true,
          name: user.name,
          password: user.password,
          email: user.email
        })
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  //Initialize Firebase
  const initFireBase = () => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  //Google Login
  const handleGoogleSignIn = () => {
    initFireBase();

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        SetLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

      });
  }

  //Facebook Login
  const handleFbSignIn = () => {
    initFireBase();

    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        SetLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  }
  return (
    <div>
      <div className="auth">
        <Container maxWidth="sm">
          <Grid container className="auth-section" spacing={0} alignItems="center">
            <Grid item xs={12} className="">

              {newUser ? <SignUp handleNewUser={handleNewUser} handleSignUpForm={handleSignUpForm} /> : <Login handleNewUser={handleNewUser} handleSignInForm={handleSignInForm} />}
              <div className="section-break">Or</div>
              <SocialLogin handleGoogleSignIn={handleGoogleSignIn} handleFbSignIn={handleFbSignIn}></SocialLogin>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div >
  );
};

export default Auth;
