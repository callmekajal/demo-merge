import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">KajalLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">About</a>
            <a href="#" className="hover:text-gray-200">Services</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <a href="#" className="block px-4 py-2 hover:bg-blue-800">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-800">About</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-800">Services</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-800">Contact</a>
        </div>
      )}
    </nav>
  );
}
