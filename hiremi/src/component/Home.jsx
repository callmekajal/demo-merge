import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      
         

        
     

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">Kajal's Website</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Build modern and responsive websites with <span className="font-semibold">React + TailwindCSS</span>.
        </p>
        <div className="space-x-4">
          <a
            href="#services"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-300"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
}
