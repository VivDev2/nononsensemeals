import { useState, useEffect } from 'react';

const Zomato = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-orange-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-400 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-orange-400 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-700">
          <div className="w-8 h-8 bg-red-200 rounded-lg rotate-45 opacity-30"></div>
        </div>
        <div className="absolute top-3/4 right-1/4 animate-bounce delay-1000">
          <div className="w-6 h-6 bg-orange-300 rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Order From Anywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Can't visit us? No problem! Get your favorite No Nonsense Meals delivered right to your doorstep
          </p>
        </div>

        {/* Main Zomato Card */}
        <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
            
            {/* Red Ribbon */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            
            {/* Zomato Badge Ribbon */}
            <div className="absolute -top-4 -right-4 z-10">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <span className="text-sm font-bold">AVAILABLE NOW!</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Zomato Logo Area */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="bg-red-500 text-white p-4 rounded-2xl shadow-lg">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-red-600">Zomato</h3>
                      <p className="text-gray-500">Food Delivery Partner</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Quick 30-45 min delivery</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Safe & contactless delivery</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Full menu available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Live order tracking</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Order on Zomato
                    </button>
                    <button className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                      View Menu
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative bg-gradient-to-br from-red-50 to-orange-50 p-12 flex items-center justify-center">
                {/* Phone Mockup */}
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl h-96 w-48 relative overflow-hidden">
                      {/* Phone Screen Content */}
                      <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-600 p-1">
                        <div className="bg-white rounded-xl h-full p-4">
                          <div className="text-center mb-4">
                            <div className="text-red-600 font-bold text-lg">Zomato</div>
                            <div className="text-xs text-gray-500">Food Delivery</div>
                          </div>
                          
                          {/* Restaurant Card in Phone */}
                          <div className="bg-orange-50 rounded-lg p-3 mb-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-8 h-8 bg-orange-200 rounded-full"></div>
                              <div>
                                <div className="text-xs font-bold">No Nonsense Meals</div>
                                <div className="text-xs text-gray-500">⭐ 4.5 • 30 mins</div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">Right Eating, No Nonsense</div>
                          </div>

                          {/* Menu Items */}
                          <div className="space-y-2">
                            <div className="bg-gray-50 rounded p-2">
                              <div className="text-xs font-medium">Healthy Bowl</div>
                              <div className="text-xs text-gray-500">₹299</div>
                            </div>
                            <div className="bg-gray-50 rounded p-2">
                              <div className="text-xs font-medium">Fresh Salad</div>
                              <div className="text-xs text-gray-500">₹249</div>
                            </div>
                            <div className="bg-gray-50 rounded p-2">
                              <div className="text-xs font-medium">Protein Wrap</div>
                              <div className="text-xs text-gray-500">₹199</div>
                            </div>
                          </div>

                          {/* Order Button */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-red-500 text-white text-xs py-2 px-4 rounded-lg text-center font-bold">
                              Add to Cart
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-4 -left-4 bg-green-500 text-white p-2 rounded-full animate-pulse">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-2 rounded-full animate-bounce">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">4.5⭐</div>
              <div className="text-gray-600">Zomato Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">30 min</div>
              <div className="text-gray-600">Avg Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Orders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">Free</div>
              <div className="text-gray-600">Delivery above ₹299</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Available now on</span>
            </div>
            <div className="text-2xl font-bold text-red-600">Zomato</div>
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zomato;