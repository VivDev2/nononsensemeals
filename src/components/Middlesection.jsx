import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';

const Middlesection = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 lg:py-20">
        {/* Left Content */}
        <div className="flex-1 lg:pr-16 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-amber-900 mb-6">
            Nourishing your
            <br />
            <span className="text-amber-900">good times </span>
            <br />
            <span className="font-medium text-amber-700">one bite,</span>
            <br />
            <span className="text-amber-900"> at a time.</span>
          </h1>
          
          <p className="text-lg text-amber-700 mb-8 max-w-lg leading-relaxed">
            Beyond food, it's nourishing for the soul.
                Where every dish tells a delicious story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            
            
          </div>

          </div>

        {/* Right Image */}
        <div className="flex-1 lg:pl-8">
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="src/assets/bowel.webp"
                alt="Luxury hotel suite with modern amenities"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-200/30 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl" />
            
            {/* Location Badge */}
            <div className="absolute -bottom-4 left-8 bg-white rounded-2xl p-4 shadow-xl border border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-stone-800 text-sm">Location</p>
                  <p className="text-stone-600 text-xs">Connaught place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      
    </div>
  );
};

export default Middlesection;