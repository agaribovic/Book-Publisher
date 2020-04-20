import React, { Component } from "react";
import AddComments from "./AddComments";
import "../app.css";
import moment from "moment";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formHidden: false,
    };
  }

  showCommentForm = () => {
    if (this.state.formHidden === false) this.setState({ formHidden: true });
    else this.setState({ formHidden: false });
  };

  render() {
    const style = {
      color: "white",
      backgroundColor: "#8b0000",
      float: "right",
      marginRight: "100px",
    };

    return (
      <div>
        <h5 style={{ color: "grey" }}>
          <span>{moment(new Date()).format("DD.MM.YYYY")} | </span>
          {this.props.author}
        </h5>
        <h5>{this.props.title}</h5>
        <p>{this.props.text}</p>
        <button style={style} onClick={this.showCommentForm}>
          Answer
        </button>

        {this.state.formHidden ? <AddComments /> : null}
      </div>
    );
  }
}

export default Post;
