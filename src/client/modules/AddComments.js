import React from "react";

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

  render() {
    const buttonStyle = {
      color: "white",
      backgroundColor: "#8b0000",
      marginLeft: "77px",
    };

    return (
      <div style={{marginBottom: '25px'}}>
        <label>Author:</label>
        <input
          type="text"
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
          style={{width: '800px', marginLeft: '30px'}}
        />
        <br/>
        <label>Title:</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
          style={{width: '800px', marginLeft: '46px'}}
        />
        <br/>
        <label>Text:</label>
        <textarea
          rows="4"
          cols="50"
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
          style={{width: '800px', marginLeft: '47px'}}
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
