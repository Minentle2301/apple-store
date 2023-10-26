import React, { useState } from 'react';

const SearchBar = ({ products, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className='search-item' onSubmit={handleSearchSubmit}>
      <label className='search-item-label'> search for product</label>
      <br />
      <input
        className='search-bar'
        type='text'
        placeholder='Search for a product...'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      
    </form>
  );
};

export default SearchBar;
