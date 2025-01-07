import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-white items-center h-[550px] py-56">
      <div className="container mx-auto px-4 text-center flex-col justify-center items-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-yellow-300">Crypto World</span>
        </h1>
        {/* Subtitle */}
        <p className="text-lg mb-8">
          Explore, invest, and thrive in the ever-evolving world of cryptocurrency. Empowering you
          to embrace the future of finance.
        </p>
        {/* Call-to-Actions */}
        <div className="flex justify-center space-x-4">
          {/* Get Started Button with Binance Link */}
          <a
            href="https://www.binance.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-lg shadow-lg"
          >
            Get Started
          </a>
          {/* Learn More Button */}
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-medium py-3 px-6 rounded-lg shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
