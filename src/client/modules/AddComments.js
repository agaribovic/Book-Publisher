import React from "react";
import moment from "moment";

class AddComments extends React.Component {
  constructor(props) {
    super(props);

    this.displayData = [];

    this.state = {
      showdata: this.displayData,
      author: "",
      title: "",
      text: "",
    };

    this.appendData = this.appendData.bind(this);
  }

  appendData() {
    if (this.state.author && this.state.title && this.state.text) {
      this.displayData.push(
        <div id="display-data">
          <h5 style={{ color: "grey" }}>
            <span>{moment(new Date()).format("DD.MM.YYYY")} | </span>
            {this.state.author}
          </h5>
          <h5>{this.state.title}</h5>
          <p>{this.state.text}</p>
        </div>
      );
      this.setState({
        showdata: this.displayData,
        author: "",
        title: "",
        text: "",
      });
    } else alert("Please fill in all the required fields!");
  }

  render() {
    const buttonStyle = {
      color: "white",
      backgroundColor: "#8b0000",
      marginLeft: "79px",
      padding: "3px",
      width: "70px",
    };

    return (
      <div style={{ marginBottom: "25px" }}>
        <label>Author:</label>
        <input
          type="text"
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
          style={{ width: "800px", marginLeft: "30px" }}
        />
        <br />
        <br />
        <label>Title:</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
          style={{ width: "800px", marginLeft: "46px" }}
        />
        <br />
        <br />
        <label>Text:</label>
        <textarea
          rows="4"
          cols="50"
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
          style={{ width: "800px", marginLeft: "47px" }}
        ></textarea>
        <div>
          <input
            type="submit"
            className="button"
            onClick={this.appendData}
            value="Comment"
            style={buttonStyle}
          />
        </div>
        <div style={{ marginLeft: "100px" }}>{this.displayData}</div>
      </div>
    );
  }
}

export default AddComments;
