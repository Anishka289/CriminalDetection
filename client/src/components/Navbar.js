import React, { Component } from "react";
import Link from "react-router-dom/Link";

//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { withFirebase } from "./Firebase";
import { withauthprov } from "./Session";

const notsignedin = () => {
  return (
    <div>
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
      <Button color="inherit" component={Link} to="/signup">
        Signup
      </Button>
    </div>
  );
};

const signedin = (firebase) => {
  console.log("check");
  return (
    <div>
      <Button color="inherit" component={Link} to="/landing">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/findMissing">
        Find the criminal
      </Button>
      <Button color="inherit" component={Link} to="/register">
        Add criminal
      </Button>
      {/* <Button color="inherit" component={Link} to="/cart">
        cart
      </Button> */}
      <Button
        color="inherit"
        component={Link}
        to="/"
        onClick={firebase.doSignOut}
      >
        Signout
      </Button>
    </div>
  );
};

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {this.props.authUser ? signedin(this.props.firebase) : notsignedin()}
        </Toolbar>
        {/* <Toolbar className="nav-container">
          <Button color="inherit" component={Link} to="/findMissing">
            Find person
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register new case
          </Button>
        </Toolbar> */}
      </AppBar>
    );
  }
}

export default withFirebase(withauthprov(Navbar));
