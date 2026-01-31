import { useEffect } from 'react';
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Clock, Bookmark } from 'lucide-react';

const DashboardPage = () => {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.email}</p>
        </div>
        <button 
          onClick={handleSignOut}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Profile Settings</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">Manage your account preferences and notifications.</p>
          <button className="text-secondary font-semibold text-sm hover:underline">Edit Profile &rarr;</button>
        </div>

        {/* Recent Searches */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-secondary/10 p-2 rounded-full">
              <Clock className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="text-xl font-bold">Recent Activity</h2>
          </div>
          <ul className="space-y-3">
            <li className="text-sm text-gray-600 border-b border-gray-100 pb-2">Searched for "GST Section 16"</li>
            <li className="text-sm text-gray-600 border-b border-gray-100 pb-2">Chatted about "Income Tax Slabs"</li>
            <li className="text-sm text-gray-600">Viewed "CGST Act 2017"</li>
          </ul>
        </div>

        {/* Saved Bookmarks */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-accent/10 p-2 rounded-full">
              <Bookmark className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-xl font-bold">Saved Items</h2>
          </div>
          <div className="text-center py-6 text-gray-400 text-sm">
            <p>No saved bookmarks yet.</p>
            <button 
              onClick={() => navigate('/search')}
              className="mt-2 text-primary font-medium hover:underline"
            >
              Browse Acts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
