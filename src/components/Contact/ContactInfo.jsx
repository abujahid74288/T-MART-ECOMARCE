import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { TfiMobile } from 'react-icons/tfi';

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="py-[120px] grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column - Contact Info */}
        <div className="text-secondary">
          <h2 className="text-3xl font-semibold mb-6">Contact Info</h2>

          {/* Location Section */}
          <div className="pt-10 flex gap-6 items-start">
            <div className="py-4 px-4 rounded-full border border-gray-300 text-3xl text-primary">
              <IoLocationOutline />
            </div>
            <div className="text-lg">
              <p className="text-sm text-gray-500">Location:</p>
              <p>Your location goes here</p>
            </div>
          </div>

          {/* Phone and Email Section */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex gap-6 items-start">
              <div className="py-4 px-4 rounded-full border border-gray-300 text-3xl text-primary">
                <TfiMobile />
              </div>
              <div className="text-lg">
                <p className="text-sm text-gray-500">Phone:</p>
                <p>+00 111 222 333 44</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="py-4 px-4 rounded-full border border-gray-300 text-3xl text-primary">
                <TfiMobile />
              </div>
              <div className="text-lg">
                <p className="text-sm text-gray-500">Mail:</p>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          {/* Send Message Section */}
          <div className="pt-14">
            <h2 className="text-2xl font-semibold pb-7">Send a Message</h2>
            {/* Input Field for Message */}
            <input
              type="text"
              placeholder="Type your message here..."
              className="w-full py-3 px-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Submit Button */}
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Send Message
            </button>
          </div>
        </div>

        {/* Right Column - Links or other content */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold pb-4">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;