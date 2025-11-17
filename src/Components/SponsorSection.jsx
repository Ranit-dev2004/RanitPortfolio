import React from 'react'
import DecoderText from './decoder-text';

export default function SponsorSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 bg-black text-white">
      
      <h2 className="text-3xl font-bold mb-4 text-center px-4">
        <DecoderText text="Fuel My Next Commit" />
      </h2>

      <p className="text-lg text-gray-300 mb-8 max-w-2xl text-center px-4">
        My dream is to create powerful, private, and free open-source tools. 
        Your support directly funds my work on projects like Rai, helping me build new features and move one step closer to that goal.
      </p>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="rounded-xl overflow-hidden shadow-lg shadow-purple-900/20">
          <iframe
            src="https://github.com/sponsors/Ranit-dev2004/card"
            title="Sponsor Ranit-dev2004"
            height="225"
            width="600"
            style={{ border: 0, maxWidth: '90vw' }} 
          ></iframe>
        </div>
      </div>
    </div>
  );
}