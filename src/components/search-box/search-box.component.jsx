import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({ placeholder, hanldeOnChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={hanldeOnChange}
  />
);

export default SearchBox;
