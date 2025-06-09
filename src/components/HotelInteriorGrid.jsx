import React from 'react';

const HotelInteriorGrid = () => {
  // Grid items with new alignment pattern
  const gridItems = [
    // New grid pattern - more balanced and unique
    {
      id: 1,
      image: "src/assets/inte1.webp",
      gridArea: "1 / 1 / 2 / 3", // spans 1 row, 2 columns (wide)
    },
    {
      id: 2,
      image: "src/assets/inte2.webp",
      gridArea: "1 / 3 / 3 / 4", // spans 2 rows, 1 column (tall)
    },
    {
      id: 3,
      image: "src/assets/inte3.webp",
      gridArea: "1 / 4 / 2 / 5", // single cell
    },
    
    // Row 2
    {
      id: 4,
      image: "src/assets/inte5.webp",
      gridArea: "2 / 1 / 3 / 2", // single cell
    },
    {
      id: 5,
      image: "src/assets/interiro2.webp",
      gridArea: "2 / 2 / 3 / 3", // single cell
    },
    {
      id: 6,
      image: "src/assets/inte6.webp",
      gridArea: "2 / 4 / 4 / 5", // spans 2 rows, 1 column (tall)
    },
    
    // Row 3
    {
      id: 7,
      image: "src/assets/inte7.webp",
      gridArea: "3 / 1 / 4 / 3", // spans 1 row, 2 columns (wide)
    },
    {
      id: 8,
      image: "src/assets/inte8.webp",
      gridArea: "3 / 3 / 4 / 4", // single cell
    },
    
    // Row 4
    {
      id: 9,
      image: "src/assets/inte5.webp",
      gridArea: "4 / 1 / 5 / 2", // single cell
    },
    {
      id: 10,
      image: "src/assets/inte2.webp",
      gridArea: "4 / 2 / 5 / 4", // spans 1 row, 2 columns (wide)
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">
            Where Stories Brew & Moments Unfold
          </h1>
          <p className="text-amber-900 text-xl max-w-2xl mx-auto leading-relaxed">
            Every corner tells a story, every space invites connection
          </p>
        </div>
        {/* Mobile Bento Grid - 2 columns with varied heights */}
        <div className="block sm:hidden">
          <div className="grid grid-cols-2 gap-3 auto-rows-[120px]">
            {/* First row - tall left, short right */}
            <div 
              className="col-span-1 row-span-2 rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${gridItems[0].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div 
              className="col-span-1 row-span-1 rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${gridItems[1].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Second row - short left, tall right */}
            <div 
              className="col-span-1 row-span-1 rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${gridItems[2].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div 
              className="col-span-1 row-span-2 rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${gridItems[3].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Third row - both wide */}
            <div 
              className="col-span-2 row-span-1 rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${gridItems[4].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Fourth row - mosaic */}
            <div 
              className="col-span-1 row-span-1 rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${gridItems[5].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div 
              className="col-span-1 row-span-1 rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${gridItems[6].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>

        {/* Tablet Grid - 3-column with better balance */}
        <div className="hidden sm:block md:hidden">
          <div className="grid grid-cols-3 gap-4 auto-rows-fr">
            {gridItems.map((item, index) => {
              const getTabletSpan = (index) => {
                const patterns = [
                  "col-span-2 row-span-1 h-40", // Wide
                  "col-span-1 row-span-2 h-80", // Tall
                  "col-span-1 row-span-1 h-40", // Square
                  "col-span-1 row-span-1 h-40", // Square
                  "col-span-2 row-span-1 h-40", // Wide
                  "col-span-1 row-span-1 h-40", // Square
                  "col-span-2 row-span-1 h-40", // Wide
                  "col-span-1 row-span-1 h-40", // Square
                  "col-span-1 row-span-1 h-40", // Square
                  "col-span-2 row-span-1 h-40", // Wide
                ];
                return patterns[index] || "col-span-1 row-span-1 h-40";
              };
              
              return (
                <div
                  key={item.id}
                  className={`relative overflow-hidden rounded-xl ${getTabletSpan(index)}`}
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

        {/* Desktop Grid - New 4x5 layout with unique pattern */}
        <div className="hidden md:grid grid-cols-4 grid-rows-4 gap-6 h-[900px]">
          {gridItems.slice(0, 10).map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl group"
              style={{
                gridArea: item.gridArea
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelInteriorGrid;
    

       