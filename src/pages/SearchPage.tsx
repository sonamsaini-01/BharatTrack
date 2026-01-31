import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ExternalLink, AlertCircle, Database } from 'lucide-react';
import { searchDatabase, SearchResult } from '../lib/mockData';
import { fetchGSTData, validateUrl, DataGovResponse } from '../services/dataGovApi';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [apiData, setApiData] = useState<DataGovResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      setApiData(null);

      // Simulate network request for local mock db
      const localResults = searchDatabase(query);
      setResults(localResults);

      // Fetch from real government API if query is relevant
      if (query.toLowerCase().includes('gst') || query.toLowerCase().includes('tax')) {
        fetchGSTData(5).then(data => {
          if (data && data.status === 'ok') {
            setApiData(data);
          }
        }).catch(err => console.error(err))
        .finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600">Showing results for "<span className="font-semibold">{query}</span>"</p>
      </div>

      {loading && results.length === 0 && !apiData ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse bg-white p-6 rounded-lg border border-gray-200">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {/* API Data Section */}
          {apiData && apiData.records && apiData.records.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-5 w-5 text-blue-700" />
                <h2 className="text-xl font-bold text-blue-900">Live Data from data.gov.in</h2>
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full">Official API</span>
              </div>
              <p className="text-sm text-blue-800 mb-4">{apiData.title}</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden text-sm">
                  <thead className="bg-blue-100">
                    <tr>
                      {apiData.field.map(field => (
                        <th key={field.id} className="px-4 py-2 text-left font-semibold text-blue-900">{field.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {apiData.records.map((record, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        {apiData.field.map(field => (
                          <td key={field.id} className="px-4 py-2 text-gray-700">{record[field.id]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">Source: {apiData.org.join(', ')}</p>
            </div>
          )}

          {/* Local/Mock Results */}
          {results.length > 0 ? (
            <div className="space-y-6">
              {results.map(result => (
                <div key={result.id} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          result.type === 'Act' ? 'bg-blue-100 text-blue-800' : 
                          result.type === 'Section' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {result.type.toUpperCase()}
                        </span>
                        <h2 className="text-xl font-bold text-primary hover:underline cursor-pointer">
                          {result.title}
                        </h2>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-3">{result.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2 text-sm">
                    {result.citations.map((citation, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <a 
                          href={validateUrl(citation.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-secondary hover:text-yellow-600 font-medium"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Source: {citation.source}
                        </a>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-500">Verified on {citation.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : !apiData && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
              <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">No verified results found</h3>
              <p className="text-gray-600">
                We couldn't find any official government data matching your query. 
                Try searching for "GST Act" or "Section 16".
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
