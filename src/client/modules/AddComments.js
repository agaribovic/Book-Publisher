import React from "react";

class AddComments extends React.Component {
  constructor() {
    super();

    this.displayData = [];

    this.state = {
      showdata: this.displayData,
      author: "",
      title: "",
      text: "",
    };

    this.appendData = this.appendData.bind(this);
    this.handleChangeFirst = this.handleChangeFirst.bind(this);
    this.handleChangeSecond = this.handleChangeSecond.bind(this);
    this.handleChangeThird = this.handleChangeThird.bind(this);
  }

  appendData() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    today = dd + "." + mm + "." + yyyy;

    this.displayData.push(
      <div id="display-data">
        <h5 style={{ color: "grey" }}>
          <span>{today} | </span>
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
  }

  handleChangeFirst(e) {
    let getAuthor = e.target.value;
    this.setState({
      author: getAuthor,
    });
  }

  handleChangeSecond(e) {
    let getTitle = e.target.value;
    this.setState({
      title: getTitle,
    });
  }

  handleChangeThird(e) {
    let getText = e.target.value;
    this.setState({
      text: getText,
    });
  }

  render() {
    const buttonStyle = {
      color: "white",
      backgroundColor: "#8b0000",
      marginLeft: "50px",
    };

    const inputStyle = {
      width: "800px",
      marginLeft: "50px",
    };

    return (
      <div>
        <input
          type="text"
          value={this.state.author}
          onChange={this.handleChangeFirst}
          style={inputStyle}
        />
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChangeSecond}
          style={inputStyle}
        />
        <textarea
          rows="4"
          cols="50"
          value={this.state.text}
          onChange={this.handleChangeThird}
          style={inputStyle}
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
