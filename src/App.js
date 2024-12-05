import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import LiteratureSurvey from './components/LiteratureSurvey';
import Methodology from './components/Methodology';
import ResultsApplications from './components/ResultsApplications';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Enhanced Black and White Navigation Bar */}
        <nav className="bg-black text-white fixed w-full top-0 left-0 z-50 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link
                to="/"
                className="text-2xl font-bold tracking-wider 
                           transition-transform duration-300 
                           hover:scale-105 hover:text-gray-300"
              >
                aes-des
              </Link>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/literature-survey">Literature Survey</NavLink>
                <NavLink to="/methodology">Methodology</NavLink>
                <NavLink to="/results-applications">Results</NavLink>
              </ul>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="md:hidden mt-4">
                <div className="flex flex-col space-y-3 bg-gray-900 rounded-lg p-4">
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink to="/literature-survey" onClick={() => setIsMenuOpen(false)}>Literature Survey</MobileNavLink>
                  <MobileNavLink to="/methodology" onClick={() => setIsMenuOpen(false)}>Methodology</MobileNavLink>
                  <MobileNavLink to="/results-applications" onClick={() => setIsMenuOpen(false)}>Results</MobileNavLink>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/literature-survey" element={<LiteratureSurvey />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/results-applications" element={<ResultsApplications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-gray-300 
               transition-all duration-300 
               hover:scale-105 
               text-sm font-semibold 
               px-3 py-2 
               rounded-md 
               hover:bg-gray-800"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white hover:text-gray-300 
               transition-colors duration-300 
               text-base font-medium 
               px-3 py-2 
               rounded-md 
               hover:bg-gray-800"
  >
    {children}
  </Link>
);

export default App;