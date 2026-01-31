import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">BharatTrack</h3>
          <p className="text-sm">
            The definitive source for verified Indian finance, GST, and legal information. 
            Zero hallucinations. 100% Authentic.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/search" className="hover:text-white">Search Acts</Link></li>
            <li><Link to="/chat" className="hover:text-white">AI Assistant</Link></li>
            <li><Link to="/gst" className="hover:text-white">GST Rules</Link></li>
            <li><Link to="/ipc" className="hover:text-white">IPC/BNS</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <p className="text-sm mb-2">Subscribe to updates</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="px-3 py-2 bg-gray-800 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <button className="bg-secondary text-primary px-4 py-2 rounded-r-md font-bold">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-xs">
        &copy; {new Date().getFullYear()} BharatTrack. All rights reserved. Not a government entity. Data sourced from official portals.
      </div>
    </footer>
  );
};

export default Footer;
