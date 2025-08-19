import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>

      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">Hiremi</span>!  
          We are passionate about helping students and professionals achieve their career goals.  
          Our platform provides opportunities, resources, and guidance to land your dream job.  
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-500">🌟 Our Mission</h3>
            <p className="text-gray-600 mt-2">
              Empower freshers and professionals by connecting them to the right opportunities.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-500">🚀 Our Vision</h3>
            <p className="text-gray-600 mt-2">
              To be India’s #1 career platform where every talent finds the perfect job.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-500">🤝 Our Values</h3>
            <p className="text-gray-600 mt-2">
              Transparency, Innovation, and Dedication towards student success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
