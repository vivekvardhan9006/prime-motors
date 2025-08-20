import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Star, MapPin, Calendar, Users, Gauge, Fuel, Settings, Heart, Eye, Share2 } from 'lucide-react';
import { cars } from '../data/cars';

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCars, setSelectedCars] = useState([]);

  const tabs = [
    { id: 'all', label: 'All', count: cars.length },
    { id: 'booked', label: 'Booked', count: 3 },
    { id: 'available', label: 'Available Now', count: 12 }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Date Listed: Newest' },
    { value: 'oldest', label: 'Date Listed: Oldest' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'year-new', label: 'Year: Newest First' },
    { value: 'mileage-low', label: 'Mileage: Low to High' }
  ];

  const toggleCarSelection = (carId) => {
    setSelectedCars(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="mb-8">
            <nav className="text-sm text-gray-300 mb-4">
              <span className="hover:text-red-400 cursor-pointer">Homepage</span>
              <span className="mx-2">›</span>
              <span className="text-red-400">Inventory</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Vehicle Collection</h1>
            <p className="text-xl text-gray-300">Discover our curated selection of luxury pre-owned vehicles</p>
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Brand */}
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white">
                <option value="">All Brands</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="bmw">BMW</option>
                <option value="audi">Audi</option>
                <option value="lexus">Lexus</option>
                <option value="land-rover">Land Rover</option>
                <option value="mini">Mini</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
            </div>

            {/* Model */}
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white">
                <option value="">All Models</option>
                <option value="gle">GLE</option>
                <option value="c-class">C-Class</option>
                <option value="a-class">A-Class</option>
                <option value="es">ES</option>
                <option value="lx">LX</option>
                <option value="q5">Q5</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
            </div>

            {/* Price Range */}
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white">
                <option value="">Price Range</option>
                <option value="0-50">Under ₹50 Lakhs</option>
                <option value="50-100">₹50L - ₹1 Crore</option>
                <option value="100-200">₹1Cr - ₹2 Crore</option>
                <option value="200+">Above ₹2 Crore</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
            </div>

            {/* Year */}
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white">
                <option value="">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <button className="text-red-600 hover:text-red-700 font-medium transition-colors">
                Clear All Filters
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Advanced Filters</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">{cars.length} Premium Vehicles Found</h2>
            {selectedCars.length > 0 && (
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                Compare {selectedCars.length} Vehicles
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Car Grid */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* New Arrival Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold transform -rotate-12">
                  New Arrival
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg text-sm font-bold shadow-lg">
                  ₹{car.price}L
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col space-y-2">
                  <button 
                    onClick={() => toggleCarSelection(car.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      selectedCars.includes(car.id) 
                        ? 'bg-red-600 text-white' 
                        : 'bg-white/90 text-gray-600 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/90 text-gray-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/90 text-gray-600 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                  {car.name}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                    {car.year}
                  </span>
                  <span className="text-gray-600 text-sm">{car.kmDriven.toLocaleString()} kms</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Gauge className="h-3 w-3 text-green-500" />
                    <span>{car.mileage} kmpl</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-3 w-3 text-orange-500" />
                    <span>{car.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 text-blue-500" />
                    <span>{car.owners} Owner</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Settings className="h-3 w-3 text-purple-500" />
                    <span>{car.transmission}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
                  <MapPin className="h-3 w-3" />
                  <span>{car.location}</span>
                </div>
                
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
              Previous
            </button>
            {[1, 2, 3, 4, 5, 6, 7].map(page => (
              <button
                key={page}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  page === 1
                    ? 'bg-red-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory; 