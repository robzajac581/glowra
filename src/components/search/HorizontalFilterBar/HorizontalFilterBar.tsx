import React from 'react';
import { SearchFiltersType } from '../../../utils/types';
import './HorizontalFilterBar.css';

interface HorizontalFilterBarProps {
  filters: SearchFiltersType;
  onFilterChange: (newFilters: Partial<SearchFiltersType>) => void;
}

const HorizontalFilterBar: React.FC<HorizontalFilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="horizontal-filter-bar-container">
      <div className="horizontal-filter-bar">
        <div className="filter-container">
          <div className="filter-item">
            <select
              id="procedureType"
              value={filters.procedureType}
              onChange={(e) => onFilterChange({ procedureType: e.target.value })}
            >
              <option value="" disabled hidden>Procedure Type</option>
              <option value="Botox">Botox</option>
              {/* Add more options */}
            </select>
          </div>
          <div className="filter-item">
            <select
              id="location"
              value={filters.location}
              onChange={(e) => onFilterChange({ location: e.target.value })}
            >
              <option value="" disabled hidden>Locations</option>
              <option value="Australia">Australia</option>
              {/* Add more options */}
            </select>
          </div>
          <div className="filter-item">
            <select
              id="priceRange"
              value={filters.priceRange}
              onChange={(e) => onFilterChange({ priceRange: e.target.value })}
            >
              <option value="" disabled hidden>Price Range</option>
              <option value="$3500">$3500</option>
              {/* Add more options */}
            </select>
          </div>
          <div className="filter-item">
            <select
              id="doctorType"
              value={filters.doctorType}
              onChange={(e) => onFilterChange({ doctorType: e.target.value })}
            >
              <option value="" disabled hidden>Doctor</option>
              <option value="Surgeon">Surgeon</option>
              {/* Add more options */}
            </select>
          </div>
        </div>
        <button className="apply-filters" onClick={() => onFilterChange({})}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default HorizontalFilterBar;