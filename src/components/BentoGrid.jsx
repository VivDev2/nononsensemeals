import React from 'react';

const FoodGrid = () => {
  // Grid items matching your exact layout
  const gridItems = [
    // Row 1
    {
      id: 1,
      image: "src/assets/2024-11-03.webp",
      gridArea: "1 / 1 / 3 / 2", // spans 2 rows, 1 column (tall)
    },
    {
      id: 2,
      image: "src/assets/2024-11-15.webp",
      gridArea: "1 / 2 / 2 / 4", // spans 1 row, 2 columns (wide)
    },
    {
      id: 3,
      image: "src/assets/pizaa.webp",
      gridArea: "1 / 4 / 2 / 5", // single cell
    },
    
    // Row 2
    {
      id: 4,
      image: "src/assets/toast.webp",
      gridArea: "2 / 2 / 3 / 5", // spans 1 row, 3 columns (very wide)
    },
    
    // Row 3
    {
      id: 5,
      image: "src/assets/pink.webp",
      gridArea: "3 / 1 / 5 / 3", // spans 2 rows, 2 columns (large square)
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
      gridArea: "3 / 3 / 4 / 4", // single cell
    },
    {
      id: 7,
      image: "src/assets/2023-09-06.webp",
      gridArea: "3 / 4 / 4 / 5", // single cell
    },
    
    // Row 4
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop",
      gridArea: "4 / 3 / 5 / 4", // single cell
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
      gridArea: "4 / 4 / 5 / 4", // single cell
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
            Our Delicious Menu
          </h1>
          <p className="text-amber-700 text-lg">
            Freshly prepared with love and care
          </p>
        </div>

        {/* Mobile Grid - Scaled Bento Structure */}
        <div className="block sm:hidden">
          <div className="grid grid-cols-3 grid-rows-5 gap-2 h-[600px]">
            {/* Row 1 */}
            <div
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300"
              style={{
                backgroundImage: `url(${gridItems[0].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                gridArea: '1 / 1 / 3 / 2'
              }}
            />
            
            <div
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300"
              style={{
                backgroundImage: `url(${gridItems[1].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                gridArea: '1 / 2 / 2 / 4'
              }}
            />

            {/* Row 2 */}
            <div
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300"
              style={{
                backgroundImage: `url(${gridItems[2].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                gridArea: '2 / 2 / 3 / 3'
              }}
            />
            
            <div
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300"
              style={{
                backgroundImage: `url(${gridItems[3].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                gridArea: '2 / 3 / 3 / 4'
              }}
            />

            {/* Row 3-4 */}
            <div
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300"
              style={{
                backgroundImage: `url(${gridItems[4].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                gridArea: '3 / 1 / 5 / 3'
              }}
            />
            
            <div
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300"
              style={{
                backgroundImage: `url(${gridItems[5].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                gridArea: '3 / 3 / 4 / 4'
              }}
            />

            {/* Row 5 */}
            <div
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300"
              style={{
                backgroundImage: `url(${gridItems[6].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                gridArea: '4 / 3 / 5 / 4'
              }}
            />
          </div>
        </div>

        {/* Tablet Grid - 2x4 Simplified Bento */}
        <div className="hidden sm:block md:hidden">
          <div className="grid grid-cols-2 grid-rows-4 gap-3 h-[700px]">
            {gridItems.slice(0, 8).map((item, index) => {
              const spanClasses = [
                "row-span-2 col-span-1", // Delicious Bowl - tall
                "row-span-1 col-span-2", // Fresh Sandwich - wide
                "row-span-1 col-span-1", // Gourmet Pasta
                "row-span-1 col-span-1", // Sourdough Pizza
                "row-span-2 col-span-1", // Artisan Sandwich - tall
                "row-span-1 col-span-1", // Healthy Bowl
                "row-span-1 col-span-1", // Berry Smoothie
                "row-span-1 col-span-1"  // Fresh Drink
              ];
              
              return (
                <div
                  key={item.id}
                  className={`relative overflow-hidden rounded-xl ${spanClasses[index]}`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop Grid - Exact layout matching your image */}
        <div className="hidden md:grid grid-cols-4 grid-rows-4 gap-4 h-[800px]">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                gridArea: item.gridArea
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodGrid;