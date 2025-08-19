const Footer = () => {
  return (
    <footer className="bg-black from-blue-800 to-blue-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: About */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <p className="text-sm text-blue-200 leading-relaxed">
            We connect freshers with 100+ top tech companies offering direct 
            placement opportunities across India. Launch your career today with zero placement fees.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Openings</a></li>
            <li><a href="#" className="hover:text-white">Companies</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm text-blue-200">Email: support@hiremi.com</p>
          <p className="text-sm text-blue-200">Phone: +91 98765 43210</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 mt-6">
        <p className="text-center text-sm text-blue-300 py-4">
          © {new Date().getFullYear()} Hiremi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
