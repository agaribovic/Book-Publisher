import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      title: "",
      text: "",
    };
  }

  postDataHandler = () => {
    const post = {
      author: this.state.author,
      title: this.state.title,
      text: this.state.text,
    };

    if (post.author !== "" || post.title !== "" || post.text !== "") {
      axios
        .post("/api/posts ", post)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const buttonStyle = {
      color: "white",
      backgroundColor: "#8b0000",
      marginLeft: "85px",
    };

    return (
      <div className="addPost">
        <label>Author:</label>
        <input
          type="text"
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
          style={{ width: "800px", marginLeft: "39px" }}
        />{" "}
        <br />
        <br />
        <label>Title:</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
          style={{ width: "800px", marginLeft: "55px" }}
        />{" "}
        <br />
        <br />
        <label>Text:</label>
        <textarea
          rows="4"
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
          style={{ width: "800px", marginLeft: "55px" }}
        />{" "}
        <br />
        <br />
        <button onClick={this.postDataHandler} style={buttonStyle}>
          Send
        </button>
      </div>
    );
  }
}

export default PostForm;
