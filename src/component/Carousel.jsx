import React, { useState } from 'react';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [pic1, pic2, pic3];

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="relative text-center">
            {/* Slider Container */}
            <div className="overflow-hidden w-full  h-84 md:h-80 lg:h-96 flex">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`w-full flex-shrink-0 transition-transform duration-500 ${index === activeIndex ? 'block' : 'hidden'}`}
                    >
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto object-cover md:h-full lg:h-full xl:h-full"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-2">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${index === activeIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>

            {/* Optional Button */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>
        </div>
    );
};

export default Carousel;
