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
          document.getElementById("postForm").reset();
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
      padding: "3px",
      width: "70px",
    };

    return (
      <div style={{ marginTop: "70px", marginLeft: "60px" }}>
        <form id="postForm">
          <label>Author:</label>
          <input
            type="text"
            value={this.state.author}
            onChange={(event) => this.setState({ author: event.target.value })}
            style={{
              width: "968px",
              marginLeft: "39px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgrey",
            }}
            required
          />{" "}
          <br />
          <br />
          <label>Title:</label>
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.setState({ title: event.target.value })}
            style={{
              width: "968px",
              marginLeft: "55px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgrey",
            }}
            required
          />{" "}
          <br />
          <br />
          <label>Text:</label>
          <textarea
            rows="4"
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
            style={{
              width: "950px",
              marginLeft: "55px",
              padding: "20px",
              borderRadius: "5px",
              border: "1px solid lightgrey",
            }}
            required
          />{" "}
          <br />
          <br />
          <button onClick={this.postDataHandler} style={buttonStyle}>
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
