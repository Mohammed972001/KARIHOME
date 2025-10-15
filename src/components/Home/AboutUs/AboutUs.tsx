'use client';

import ChairmanMessage from './ChairmanMessage';
import CEOMessage from './CEOMessage';


export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="about-us-section w-full transition-colors duration-300 bg-white relative"
    >
      {/* Container */}
      <div className="container mx-auto px-4 py-10 md:py-14 lg:py-20 relative z-10">
        {/* Chairman Message Section */}
        <ChairmanMessage />

        {/* CEO Message Section */}
        <CEOMessage />

        {/* Our Company Section */}

      </div>
    </section>
  );
}