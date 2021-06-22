import React from "react";
import Image from 'next/image'

const Footer = () => {
  return (
    <div
      style={{ position: "fixed", bottom: 0, width: "100%" }}
      className="bg-black"
    >
      <div className="bg-navbarColor container mx-auto pt-4 pb-4">
        <div className="flex flex-row space-x-7 items-center">
            <div className="bg-gray-100 ml-4 md:mx-px shadow-xl px-4 py-3 pb-1 rounded-xl transform hover:bg-gray-800 hover:shadow-lg transition duration-500 hover:scale-100">
                <Image src="/images/message.png" height="25" width="25"/>
            </div>
            <div className="bg-gray-100 shadow-xl px-4 py-3 pb-1 rounded-xl transform hover:bg-gray-800 hover:shadow-lg transition duration-500 hover:scale-100">
                <Image src="/images/platforms.png" height="24" width="34"/>
            </div>
            <div className="bg-gray-100 shadow-xl px-4 py-3 pb-1 rounded-xl transform hover:bg-gray-800 hover:shadow-lg transition duration-500 hover:scale-100">
                <Image src="/images/photo.png" height="25" width="28"/>
            </div>
            <div className="bg-gray-100 shadow-xl px-4 py-3 pb-1 rounded-xl transform hover:bg-gray-800 hover:shadow-lg transition duration-500 hover:scale-100">
                <Image src="/images/calendar.png" height="25" width="25"/>
            </div>
            <div className="bg-gray-100 shadow-xl px-4 py-3 pb-1 rounded-xl transform hover:bg-gray-800 hover:shadow-lg transition duration-500 hover:scale-100">
                <Image src="/images/instagram.png" height="25" width="25"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;