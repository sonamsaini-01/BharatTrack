import React, { useState } from 'react';
import { Search, MessageSquare, CheckCircle, Shield, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${new URL('/grid-pattern.svg', import.meta.url).href})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-900/50 px-4 py-1.5 rounded-full mb-6 border border-blue-700">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-100">Zero-Hallucination AI Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Verified Indian <span className="text-secondary">Finance & Legal</span> Intelligence
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Access authentic, government-verified data from GST, CBIC, and India Budget. 
            Designed for CAs, legal professionals, and businesses.
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-2 flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <form onSubmit={handleSearch} className="w-full">
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 text-gray-900 placeholder-gray-500 focus:outline-none text-lg"
                  placeholder="Search for Acts, Sections, or GST Rules..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>
            </div>
            <button 
              onClick={handleSearch}
              className="bg-secondary text-primary font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
            >
              Search
            </button>
            <button 
              onClick={() => navigate('/chat')}
              className="bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              Ask AI
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-sm text-blue-200">
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Government Verified</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Real-time Updates</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Proper Citations</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust BharatTrack?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We solve the critical problem of misinformation in legal-tech by ensuring every response is backed by official sources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Hallucinations</h3>
              <p className="text-gray-600">
                Our AI explicitly refuses to answer if official data is unavailable, preventing false information spread.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Citations</h3>
              <p className="text-gray-600">
                Every piece of information comes with direct links to official government notifications and circulars.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Up-to-Date</h3>
              <p className="text-gray-600">
                Real-time synchronization with gst.gov.in, cbic.gov.in, and other portals ensures you never miss an amendment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
