import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Paper className="image" elevation={3}>
          <h1>Raavan</h1>

          <h4>A web tool to help find criminals using AI</h4>
          <br />
          <br />
          <br />
          <br />
        </Paper>
      </div>
    );
  }
}
