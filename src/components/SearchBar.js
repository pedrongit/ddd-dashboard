// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <TextField
      label={placeholder}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      variant="outlined"
      size="small"
    />
  );
};

export default SearchBar;
