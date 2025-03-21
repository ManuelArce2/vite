// components/SearchComponent.jsx
import React from 'react';
import '../index.css';

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
    
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 w-100  bg-wite mb-4"

    />
  );
};

export default SearchComponent;
