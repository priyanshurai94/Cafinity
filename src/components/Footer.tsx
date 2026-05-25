function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold mb-3">
            <span className="text-orange-500">Cafe</span>
            <span className="text-blue-500">Nity</span>
          </h1>
          <p className="text-sm">
            Providing fast and reliable online services like form filling,
            tickets, and government services.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">
            Contact
          </h2>
          <p className="text-sm">📍 Kusumahi, Ara, Bihar</p>
          <p className="text-sm">📞 +91 9304257312</p>
          <p className="text-sm">✉️ raipriyanshu94@gmail.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © 2026 CafeNity. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;