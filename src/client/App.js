import React, { Component } from "react";
import PostForm from "./modules/AddPosts";
import GetPosts from "./modules/GetPosts";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      textAlign: "center",
      color: "black",
      backgroundColor: "grey",
      opacity: "80%",
    };

    return (
      <div>
        <h1 style={style}> Scode Exercise 2020 </h1>
        <div className="wrapper">
          <GetPosts />
          <PostForm />
        </div>
      </div>
    );
  }
}

export default App;
