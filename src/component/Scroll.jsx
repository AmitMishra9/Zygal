import React from 'react';
import a1 from '../assets/a1.png';
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.jpg';
import a4 from '../assets/a4.jpg';
import a5 from '../assets/a5.png';
import a6 from '../assets/a6.png';
import a7 from '../assets/a7.jpg';

import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';
import m5 from '../assets/m5.jpg';
import m6 from '../assets/m6.jpg';
import m7 from '../assets/m7.jpg';

const Scroll = () => {
  const avatars = [a1, a2, a3, a4, a5, a6, a7];
  const images = [m1, m2, m3, m4, m5, m6, m7];

  return (
    <div className="w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* Horizontal scroll for avatars */}
      <div className="overflow-x-auto whitespace-nowrap mb-4 pb-2 scrollbar-hide">
        <div className="inline-flex space-x-2 py-2">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className="w-12 h-12 rounded-full bg-gray-300 mr-2 flex-shrink-0 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 shadow-md transform transition-transform hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* Vertical scroll for images */}
      <div className="overflow-y-auto h-64 scrollbar-hide md:h-80 lg:h-96 xl:h-112">
        <div className="space-y-2 p-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-32 bg-gray-200 rounded-md md:h-40 lg:h-48 xl:h-56 object-cover shadow-md transform transition-transform hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
