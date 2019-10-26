import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./seasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: ""
    };
  }
  // Equivalent to above because of babel
  // state = { latitude: null, errorMessage: "" };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  };

  renderContent = () => {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
