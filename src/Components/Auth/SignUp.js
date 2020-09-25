import React from 'react';
import { Button, Paper, TextField } from "@material-ui/core";

const SignUp = (props) => {

    return (
        <Paper elevation={0} className="login-section">
            <h3>Create an Account</h3>
            <form onSubmit={() => props.handleSignUpForm()}>
                <TextField id="standard-basic-firstName" name="name" label="First Name" fullWidth className="mb-20" />
                <TextField id="standard-basic-LastName" label="Last Name" fullWidth className="mb-20" />
                <TextField id="standard-basic-userName" name="email" label="Username or Email" fullWidth className="mb-20" />
                <TextField id="standard-password-input" name="password" label="Password" fullWidth className="mb-20" />
                <TextField id="confirm-password-input" type="password-confirm" label="Confirm Password" fullWidth className="mb-20" />


                <Button variant="contained" type="submit" className="button-orange-small mt-20" fullWidth>
                    Signup
                  </Button>
            </form>
            <div className="create-account">
                Already have an account ? <a href="#login" onClick={() => props.handleNewUser()}>Login </a>
            </div>
        </Paper>

    );
};

export default SignUp;