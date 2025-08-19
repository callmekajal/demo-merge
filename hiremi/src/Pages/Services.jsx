import React from "react";

const Services = () => {
  const services = [
    { id: 1, title: "Web Development", desc: "Build modern and responsive websites." },
    { id: 2, title: "UI/UX Design", desc: "Design beautiful and user-friendly interfaces." },
    { id: 3, title: "Digital Marketing", desc: "Grow your brand with SEO and marketing." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
