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
        <button type="submit" className="btn serch-team">
          <span className="search-team" />
        </button>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button type="submit" className="btn serch-date">
          <span className="search-date" />
        </button>
      </div>
    );
  }
}


export default Search;
