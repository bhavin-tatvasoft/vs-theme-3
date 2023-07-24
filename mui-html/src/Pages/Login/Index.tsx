import * as React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Hidden,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Avatar,
  OutlinedInput,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  checkboxDefaultIC,
  checkboxcheckedIC,
  hidePasswordIC,
  logo,
  showPasswordIC,
  userIC,
} from "../../assets/images";

function Login() {
  const [showPassword, setShowPassword] = React.useState(true);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="login-wrapper">
        <div className="login-container">
          <div className="login-content">
            <div className="inner-content">
              <Typography variant="h2">Welcome Back!</Typography>
              <Typography variant="body1">
                Please login to to your account to enjoy all the benefits
              </Typography>
            </div>
          </div>
          <div className="login-main">
            <form>
              <Link to="/" title="Logo" className="logo">
                <Avatar src={logo} alt="Logo" />
                <Typography variant="caption">MY THEME</Typography>
              </Link>
              <FormControl variant="outlined" fullWidth sx={{ pb: "20px" }}>
                <InputLabel htmlFor="username">Username</InputLabel>
                <OutlinedInput
                  id="username"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <Avatar src={userIC} title="User" />
                    </InputAdornment>
                  }
                  label="Username"
                />
              </FormControl>
              <FormControl variant="outlined" fullWidth sx={{ pb: "12px" }}>
                <InputLabel htmlFor="username">Password</InputLabel>
                <OutlinedInput
                  id="username"
                  type={showPassword ? "password" : "text"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Avatar
                          src={showPassword ? showPasswordIC : hidePasswordIC}
                          title={
                            showPassword ? "Show Password" : "Hide Password"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <div className="action-wrapper">
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <Avatar
                          variant="square"
                          src={checkboxDefaultIC}
                          alt="Unchecked"
                        />
                      }
                      checkedIcon={
                        <Avatar
                          variant="square"
                          src={checkboxcheckedIC}
                          alt="Checked"
                        />
                      }
                      defaultChecked
                    />
                  }
                  label="Remember Me"
                />
                <Link to="#" title="Forgot Password?" className="custom-link">
                  Forgot Password?
                </Link>
              </div>
              <Button
                variant="contained"
                component={Link}
                to="/dashboard"
                className="btn-dark"
                fullWidth
                title="Login"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
