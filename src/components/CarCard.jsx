import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Gauge, Users, MapPin, Fuel, Settings } from 'lucide-react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-700">
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold border-2 border-white shadow-lg">
          ₹{car.price}L
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
          {car.name}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-red-400" />
            <span className="font-medium">{car.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-green-400" />
            <span className="font-medium">{car.mileage} kmpl</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-blue-400" />
            <span className="font-medium">{car.owners} Owner{car.owners > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="h-4 w-4 text-orange-400" />
            <span className="font-medium">{car.fuelType}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-3 text-sm text-gray-400">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span>{car.location}</span>
        </div>

        <div className="flex items-center space-x-2 mb-6 text-sm text-gray-400">
          <Settings className="h-4 w-4 text-gray-500" />
          <span>{car.transmission}</span>
          <span>•</span>
          <span>{car.kmDriven.toLocaleString()} km</span>
        </div>
        
        <Link
          to={`/car/${car.id}`}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 text-center block shadow-md hover:shadow-lg uppercase tracking-wide"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;