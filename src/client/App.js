import React, { Component } from "react";
import PostForm from "./modules/AddPosts";
import GetPosts from "./modules/GetPosts";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      color: "black",
      backgroundColor: "lightgrey",
      opacity: "60%",
      margin: "0",
      padding: "0",
      marginBottom: "15px",
      width: "100%",
      width: "100vw",
      position: "absolute",
      left: 0,
    };

    return (
      <div>
        <h1 style={style}>
          {" "}
          <span style={{ marginLeft: "330px" }}>Scode Exercise 2020</span>{" "}
        </h1>
        <div className="wrapper">
          <GetPosts />
          <PostForm />
        </div>
      </div>
    );
  }
}

export default App;
