import React from "react";

function Search({ searchedValue, setSearchedValue, onSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchedValue} onChange={(e) => onSearch(e)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
