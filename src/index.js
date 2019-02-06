import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  state = {
    beers: []
  };
  constructor() {
    super();
  }

  getBeers() {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then(data => data.json())
      .then(beers => {
        this.setState([ beers ]);
      })
      .catch(error => {
        console.log(error);
      });
  }



  render() {
    let beerNames = this.state.beers.map(beer => {
    <li>
    <strong>{beer.name}</strong> {beer.tagLine}
    </li>
    });
      return <ol>{beerNames}</ol>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
