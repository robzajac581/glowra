import React from 'react';
import './SearchResults.css';
import ProcedureCard from '../../shared/ProcedureCard/ProcedureCard';
import { Procedure } from '../../../utils/types';

interface SearchResultsProps {
  results: Procedure[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((procedure, index) => (
        <ProcedureCard key={index} {...procedure} />
      ))}
    </div>
  );
};

export default SearchResults;