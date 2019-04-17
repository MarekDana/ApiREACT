import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      hodnota: "",
      crypto: "",
      norm: ""
    };
  }

  handleSubmit(e) {
    this.setState({
      hodnota: this.input.value,
      crypto: this.input.value,
      norm: this.input.value
    });
    e.preventDefault();
  }

  getBeers() {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then(data => data.json())
      .then(beers => {
        this.setState([beers]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" ref={input => (this.input = input)} />
          <select
            multiple={false}
            value={this.props.value}
            onChange={e => this.setState({ value: e.target.value })}
          >
            <option value={1}>Bitcoin</option>
            <option value={2}>Litecoin</option>
            <option value={3}>Monero</option>
          </select>
          <select
            multiple={false}
            value={this.props.arrayOfOptionValues}
            onChange={this.handleChange}
          >
            <option value={1}>CZK</option>
            <option value={2}>EUR</option>
            <option value={3}>USD</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
