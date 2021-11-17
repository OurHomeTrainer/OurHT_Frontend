import React, { Component } from "react";

class Result extends Component {
  state = {
    books: [],
  };

  loadMotions = () => {
    fetch("http://127.0.0.1:8000/apis/motions/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`,
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        //this.setState({ books: data });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <button onClick={this.loadMotions}>Load Motions</button>
      </div>
    );
  }
}

export default Result;
