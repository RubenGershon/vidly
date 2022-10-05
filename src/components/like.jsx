import React, { Component } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

class Like extends Component {
  render() {
    return this.props.isLiked ? (
      <FaHeart onClick={this.props.onToggle} style={{ cursor: "pointer" }} />
    ) : (
      <FaRegHeart onClick={this.props.onToggle} style={{ cursor: "pointer" }} />
    );
  }
}

export default Like;
