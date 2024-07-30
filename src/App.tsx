import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import HomePage from './pages/home/HomePage';
import SearchPage from './pages/search/SearchPage';
import ClinicPage from './pages/clinic/ClinicPage';
import TryItOnPage from './pages/tryItOn/TryItOnPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/clinic" element={<ClinicPage />} />
          <Route path="/try-it-on" element={<TryItOnPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;