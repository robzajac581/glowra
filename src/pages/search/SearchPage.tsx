import React, { useState } from 'react';
import SearchHeader from '../../components/search/SearchHeader/SearchHeader';
import HorizontalFilterBar from '../../components/search/HorizontalFilterBar/HorizontalFilterBar';
import RatingSection from '../../components/search/RatingSection/RatingSection';
import SearchResults from '../../components/search/SearchResults/SearchResults';
import './SearchPage.css';
import { Procedure, SearchFiltersType } from '../../utils/types';

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Procedure[]>([]);
  const [totalDoctors, setTotalDoctors] = useState(269);
  const [filters, setFilters] = useState<SearchFiltersType>({
    procedureType: 'Botox',
    location: 'Australia',
    priceRange: '$3500',
    doctorType: 'Surgeon',
  });
  const [rating, setRating] = useState(4);

  const handleSearch = async (searchTerm: string) => {
    // Construct query parameters
    const queryParams = new URLSearchParams({
      term: searchTerm,
      procedureType: filters.procedureType,
      location: filters.location,
      priceRange: filters.priceRange,
      doctorType: filters.doctorType,
    }).toString();

    // Construct mock URL
    const mockUrl = `https://api.example.com/search?${queryParams}`;

    // Mock API call
    const mockApiCall = async (): Promise<Procedure[]> => {
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log(`Mocked API call to: ${mockUrl}`);

      // Here, you would typically use the searchTerm and filters
      // to determine what results to return. For this example,
      // we'll just return the same mock data.
      // TODO: make an ACTUAL API call
      return [
        {
          image: '/images/search/SearchPageCardImage.png',
          rating: 4.8,
          name: 'Botox Cosmetic RTASCX (Wrinkle Reduction)',
          doctor: 'Dr. Jane Smith',
          location: 'Midtown Manhattan',
          price: 800
        },
        {
          image: '/images/search/SearchPageCardImage.png',
          rating: 4.8,
          name: 'Botox Cosmetic RTASCX (Wrinkle Reduction)',
          doctor: 'Dr. Jane Smith',
          location: 'Midtown Manhattan',
          price: 800
        },
        {
          image: '/images/search/SearchPageCardImage.png',
          rating: 4.8,
          name: 'Botox Cosmetic RTASCX (Wrinkle Reduction)',
          doctor: 'Dr. Jane Smith',
          location: 'Midtown Manhattan',
          price: 800
        },
        {
          image: '/images/search/SearchPageCardImage.png',
          rating: 4.8,
          name: 'Botox Cosmetic RTASCX (Wrinkle Reduction)',
          doctor: 'Dr. Jane Smith',
          location: 'Midtown Manhattan',
          price: 800
        },
        {
          image: '/images/search/SearchPageCardImage.png',
          rating: 4.8,
          name: 'Botox Cosmetic RTASCX (Wrinkle Reduction)',
          doctor: 'Dr. Jane Smith',
          location: 'Midtown Manhattan',
          price: 800
        },
        {
          image: '/images/search/SearchPageCardImage.png',
          rating: 4.8,
          name: 'Botox Cosmetic RTASCX (Wrinkle Reduction)',
          doctor: 'Dr. Jane Smith',
          location: 'Midtown Manhattan',
          price: 800
        },
        // Add more mock procedures as needed
      ];
    };

    const results = await mockApiCall();
    setSearchResults(results);
    setTotalDoctors(results.length);
  };

  const handleFilterChange = (newFilters: Partial<SearchFiltersType>) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="search-page">
      <SearchHeader onSearch={handleSearch} totalDoctors={totalDoctors} />
      <HorizontalFilterBar filters={filters} onFilterChange={handleFilterChange} />
      <div className="search-content">
        <div className="sidebar">
          <RatingSection rating={rating} onRatingChange={handleRatingChange} />
          <div className="map-section">
            {/* Add map component here */}
            <img src="/path-to-map-image.png" alt="Map" />
          </div>
        </div>
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
};

export default SearchPage;