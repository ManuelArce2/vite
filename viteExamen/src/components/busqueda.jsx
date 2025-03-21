// components/SearchComponent.jsx
import React from 'react';

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
    
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 mb-4 w-full"
    />
  );
};

export default SearchComponent;
