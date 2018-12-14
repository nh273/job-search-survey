import React, { Component } from "react";

class RocketButton extends Component {
  render() {
    return <select>{this.children}</select>;
  }
}
