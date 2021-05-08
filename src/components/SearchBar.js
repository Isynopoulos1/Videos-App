import React from "react";

class SearchBar extends React.Component {
  state = { term: "ksdjsjd" };

  OnInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    //to do: make sure we call
    // callback from parent component
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.OnInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
