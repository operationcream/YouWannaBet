import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div className="search-team form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button type="submit" size="lg" className="btn search-team">
          <span className="search-team" /> By Team
        </button>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button type="submit" size="lg" className="btn search-date">
          <span className="search-date" /> By Date
        </button>
      </div>
    );
  }
}


export default Search;
