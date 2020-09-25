import React from 'react';
import FacebookIcon from "../../icon/fb.png";
import GoogleIcon from "../../icon/google.png";
import { Button } from "@material-ui/core";

const SocialLogin = (props) => {
    return (
        <div className="social-login-section">
            <Button
                variant="outlined"
                className="button-orange-outlined social-login"
                onClick={() => { props.handleFbSignIn() }}
                startIcon={
                    // <SvgIcon>
                    <img src={FacebookIcon} alt="" width="36" height="36" />
                    /* </SvgIcon> */
                }
            >
                Continue with Facebook
              </Button>
            <Button
                variant="outlined"
                className="button-orange-outlined social-login"
                onClick={() => { props.handleGoogleSignIn() }}
                startIcon={
                    // <SvgIcon>
                    <img src={GoogleIcon} alt="" width="36" height="36" />
                    /* </SvgIcon> */
                }
            >
                Continue with Google
              </Button>
        </div>
    );
};

export default SocialLogin;