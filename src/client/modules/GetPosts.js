import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import "../app.css";

class GetPosts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("/api/posts").then((response) => {
      this.setState({ posts: response.data });
      console.log(this.state.posts);
    });
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post._id}
          author={post.author}
          title={post.title}
          text={post.text}
        />
      );
    });
    return <div className="displayPosts">{posts}</div>;
  }
}

export default GetPosts;
