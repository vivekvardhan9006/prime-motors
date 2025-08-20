import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Gauge, Users, MapPin, Fuel, Settings, Shield, Heart } from 'lucide-react';
import ChatBox from '../components/ChatBox';
import { cars } from '../data/cars';

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Car not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Cars</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Details - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image and Title */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">{car.name}</h1>
                  <div className="text-3xl font-bold text-blue-600">₹{car.price}L</div>
                </div>
                <p className="text-gray-600 text-lg">{car.description}</p>
              </div>
            </div>

            {/* Key Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{car.year}</div>
                  <div className="text-sm text-gray-600">Year</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Gauge className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{car.mileage}</div>
                  <div className="text-sm text-gray-600">kmpl</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{car.owners}</div>
                  <div className="text-sm text-gray-600">Owner{car.owners > 1 ? 's' : ''}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Settings className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-800">{car.kmDriven.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">km driven</div>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Vehicle Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Fuel className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-600">Fuel Type:</span>
                    <span className="font-semibold">{car.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-600">Transmission:</span>
                    <span className="font-semibold">{car.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-red-500" />
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{car.location}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Brand:</span>
                    <span className="font-semibold">{car.brand}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-pink-500" />
                    <span className="text-gray-600">Model:</span>
                    <span className="font-semibold">{car.model}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/test-drive"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors"
                >
                  Book Test Drive
                </Link>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Contact Dealer
                </button>
              </div>
            </div>
          </div>

          {/* ChatBox - Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ChatBox car={car} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;