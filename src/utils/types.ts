export interface Doctor {
    name: string;
    title: string;
    location: string;
    rating: number;
    reviewCount: number;
    review: string;
    availability: string;
    image: string;
  }
  
  export interface Procedure {
    name: string;
    doctor: string;
    location: string;
    price: number;
    rating: number;
    image: string;
  }

  export interface SearchFiltersType {
    procedureType: string;
    location: string;
    priceRange: string;
    doctorType: string;
  }
  
  
  // ... any other shared types