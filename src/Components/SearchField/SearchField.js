import { Component } from "react";
import "./SearchField.css";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };
  render() {
    return (
      <div className="search__field">
        <div className="container">
          <input
            type="text"
            className="search__field-input"
            placeholder="Search"
            value={this.state.term}
            onChange={this.onUpdateSearch}
          />
        </div>
      </div>
    );
  }
}

export default SearchField;
