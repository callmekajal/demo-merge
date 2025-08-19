import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h1>

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-6 text-gray-700">
        <p>📍 Address: Patna, Bihar, India</p>
        <p>📧 Email: support@hiremi.com</p>
        <p>📞 Phone: +91 9876543210</p>
      </div>
    </div>
  );
};

export default Contact;
