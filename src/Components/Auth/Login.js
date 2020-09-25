import React from 'react';
import { Button, Paper, TextField, FormControlLabel, Checkbox } from "@material-ui/core";

const Login = (props) => {



    return (
        <Paper elevation={0} className="login-section">
            <h3>Login</h3>
            <form onSubmit={() => props.handleSignInForm()}>
                <TextField name="Email" id="standard-basic" label="Username or Email" fullWidth />
                <TextField name="Password" id="standard-password-input" type="password" label="Password" fullWidth margin="normal" />
                <div className="form-utility">
                    <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="Remember Me" />
                    <label>
                        <a href="#">Forgot Password</a>
                    </label>
                </div>

                <Button variant="contained" type="submit" className="button-orange-small " fullWidth>
                    Login
                  </Button>
            </form>
            <div className="create-account">
                Don't Have an Account ? <a href="#signup" onClick={() => props.handleNewUser()}>Create an Account </a>
            </div>
        </Paper>
    );
};

export default Login;