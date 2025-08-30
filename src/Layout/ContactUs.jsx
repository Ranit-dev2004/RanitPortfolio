import React from "react";

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full bg-[#111] border border-gray-700 rounded-2xl shadow-xl p-10">
        {/* Title */}
        <h1 className="text-4xl font-serif text-white text-center mb-6 tracking-wide">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-10 font-light">
          We'd love to hear from you. Whether it’s a question, feedback, or an opportunity, 
          reach out and we’ll respond with care.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm uppercase text-gray-400 mb-2 tracking-wider">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm uppercase text-gray-400 mb-2 tracking-wider">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm uppercase text-gray-400 mb-2 tracking-wider">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold tracking-wide py-3 rounded-lg shadow hover:bg-gray-200 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-10 font-light">
          © {new Date().getFullYear()} Ranit Saha— All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
