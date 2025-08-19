import React from "react";

const Careers = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 min-h-screen text-white px-6 py-12">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto">
        <p className="bg-white/20 px-4 py-1 rounded-full inline-block text-sm mb-4">
          #1 Fresher Hiring Platform
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Launch Your Tech Career
        </h1>
        <p className="text-blue-200 text-3xl font-bold mt-2">
          3000+ Immediate Openings
        </p>
        <p className="text-blue-200 mt-3 text-lg">
          Direct placement opportunities with top tech companies. No experience needed!
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
          <span className="bg-white/10 px-4 py-2 rounded-full">
            100+ Client Companies
          </span>
          <span className="bg-white/10 px-4 py-2 rounded-full">
            Pan India Opportunities
          </span>
          <span className="bg-white/10 px-4 py-2 rounded-full">
            Immediate Joining
          </span>
          <span className="bg-white/10 px-4 py-2 rounded-full">
            Zero Placement Fee
          </span>
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {[
          {
            title: "Frontend Developer",
            type: "Frontend Development",
            location: "Bangalore, India",
            salary: "3.5 - 5.5 LPA",
          },
          {
            title: "Backend Developer",
            type: "Backend Development",
            location: "Hyderabad, India",
            salary: "4 - 6 LPA",
          },
          {
            title: "Mobile App Developer",
            type: "App Development",
            location: "Pune, India",
            salary: "3 - 5 LPA",
          },
          {
            title: "Full Stack Developer",
            type: "Web Development",
            location: "Delhi, India",
            salary: "4.5 - 7 LPA",
          },
        ].map((job, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{job.type}</p>
              <p className="text-sm mb-1">
                <span className="font-semibold">Location: </span>
                {job.location}
              </p>
              <p className="text-sm mb-1">
                <span className="font-semibold">Salary: </span>
                {job.salary}
              </p>
            </div>
            <button className="mt-4 bg-blue-600 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-700">
              Apply Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
