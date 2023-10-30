import React, { Component } from "react";

class Capstone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      apis: [],
    };
  }
  componentDidMount() {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            apis: data.entries,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, apis } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {apis.map((s) => (
            <li>
              API: {s.API} Description:{s.Description}: Link:{s.Link} 
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default Capstone;
