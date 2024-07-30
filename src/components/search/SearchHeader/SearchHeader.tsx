import React, { useState } from 'react';
import './SearchHeader.css';

interface SearchHeaderProps {
  onSearch: (searchTerm: string) => void;
  totalDoctors: number;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ onSearch, totalDoctors }) => {
  const [searchTerm, setSearchTerm] = useState('Botox');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-header">
      <h1>Search Results For "Botox":</h1>
      <p>{totalDoctors} Doctors</p>
      <form onSubmit={handleSubmit} className="search-input-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Botox"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchHeader;