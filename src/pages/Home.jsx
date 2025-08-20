import React from 'react';
import { Search, ChevronDown, Phone, MapPin, Calendar, Users, Gauge, Fuel, Settings, Car } from 'lucide-react';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';
import carPhoto from '../assets/image1.avif';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Dark Theme */}
      <div className="relative h-screen pt-20">
        {/* Background Image with Car Photo and Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${carPhoto})`,
            backgroundSize: 'cover'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 uppercase tracking-wider">
              <span className="block">DOMINATE</span>
              <span className="block text-red-500">THE ROAD</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300 font-light">
              Attract, Engage, & Convert
            </p>
            <div className="flex items-center space-x-4 text-lg">
              <span className="italic font-semibold text-2xl">more</span>
              <span className="text-gray-300">qualified vehicle shoppers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-lg mb-4 md:mb-0">
              Discover a website for car dealers that converts visitors to customers
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-none font-semibold transition-colors duration-300 uppercase tracking-wide">
              Schedule a Test Drive
            </button>
          </div>
        </div>
      </div>

      {/* Popular Makes Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Makes</h2>
            <p className="text-gray-600 text-lg">Explore our premium vehicle collections</p>
          </div>

          {/* Brand Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold border-2 border-red-600">
              Mercedes-Benz (179 Listings)
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition-colors">
              Audi (43 Listings)
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition-colors">
              Land Rover (57 Listings)
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition-colors">
              BMW (111 Listings)
            </button>
          </div>

          {/* Car Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Car 1 - Black Mercedes GLE 53 AMG */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">Mercedes GLE 53 AMG</h3>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                  New Arrival
                </div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-white mb-2">₹ 1,05,00,000</div>
                <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>2020</span>
                  <span>43,100 kms</span>
                </div>
                <div className="text-sm text-gray-300">Automatic</div>
              </div>
            </div>

            {/* Car 2 - White Mercedes GLE 53 AMG */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">Mercedes GLE 53 AMG</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-white mb-2">₹ 90,00,000</div>
                <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>2020</span>
                  <span>6,500 kms</span>
                </div>
                <div className="text-sm text-gray-300">Automatic</div>
              </div>
            </div>

            {/* Car 3 - Red Mercedes C220d */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">Mercedes C220d</h3>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                  New Arrival
                </div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-white mb-2">₹ 35,00,000</div>
                <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>2020</span>
                  <span>35,400 kms</span>
                </div>
                <div className="text-sm text-gray-300">Automatic</div>
              </div>
            </div>

            {/* Car 4 - Black Mercedes A200 Limousine */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">Mercedes A200 Limousine</h3>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                  New Arrival
                </div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-white mb-2">₹ 37,00,000</div>
                <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>2023</span>
                  <span>20,000 kms</span>
                </div>
                <div className="text-sm text-gray-300">Automatic</div>
              </div>
            </div>
          </div>

          {/* Navigation and CTA */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors">
                ←
              </button>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors">
                →
              </button>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              View 179 Mercedes-Benz
            </button>
          </div>
        </div>
      </div>

      {/* Available Cars Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wide">Available Cars</h2>
            <p className="text-gray-400 text-lg">Browse our collection of premium pre-owned vehicles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wide">Why Choose Prime Motors?</h2>
            <p className="text-gray-400 text-lg">Experience luxury and reliability with every purchase</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Quality Assured</h3>
              <p className="text-gray-400">Every car undergoes rigorous quality checks and inspection</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Gauge className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Transparent Pricing</h3>
              <p className="text-gray-400">No hidden costs, fair pricing with complete transparency</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Easy Financing</h3>
              <p className="text-gray-400">Flexible financing options to suit your budget</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-6">Contact our Sales Department</p>
              
              <div className="mb-8">
                <div className="text-4xl font-bold text-red-600 mb-2">9542000014</div>
                <p className="text-gray-600">Call us anytime for assistance</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Visit Our Showroom</p>
                    <p className="text-gray-600">Opposite Cyberabad Commissioner Office</p>
                    <p className="text-gray-600">Prof. CR Rd, Telecom Nagar, Gachibowli</p>
                    <p className="text-gray-600">Hyderabad, Telangana - 500032</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91-9542000014</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Showroom Image */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Showroom</h3>
                  <p className="text-gray-600">Experience luxury in our state-of-the-art facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Car className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-xl font-bold">PRIME MOTORS</div>
                  <div className="text-sm text-green-500">Luxury Begins Here...</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Award-winning, family-owned dealership of new and pre-owned vehicles with several locations across the city. The lowest prices and the best customer service guaranteed.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Listings</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">More</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our team</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact us</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+91-9542000014</p>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">contact@primemotors.in</p>
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">Opposite Cyberabad Commissioner Office</p>
                  <p className="text-white">Prof. CR Rd, Telecom Nagar, Gachibowli</p>
                  <p className="text-white">Hyderabad, Telangana - 500032</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © Copyright 2025 - All Rights Reserved - Prime Motors Pvt. Ltd. Designed & Developed by Prime Motors Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;