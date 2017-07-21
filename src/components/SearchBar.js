import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
          <p>Search Los Angeles Attractions: </p>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
    {/*ex. Downtown LA tourist or specific destination???*/}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
