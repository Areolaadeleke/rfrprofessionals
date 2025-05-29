import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { getUserRole } from './getUserRole';
import Login from './Login';
import LeaveForm from './LeaveForm';
import HrDashboard from './HrDashboard';
import Loader from './Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSessionAndRole = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const currentUser = session?.user;
      console.log('Current user object:', currentUser);
      console.log('Passing user ID to getUserRole:', currentUser?.id);

      if (currentUser) {
        setUser(currentUser);
        const role = await getUserRole(currentUser.id);
        setRole(role);
      }
      setLoading(false);
    };

    getSessionAndRole();
  }, []);



  useEffect(() => {
  const testConnection = async () => {
    const { data, error } = await supabase.from('profiles').select('*').limit(1);
    if (error) {
      console.error('Fetch failed:', error.message);
    } else {
      console.log('Fetch succeeded:', data);
    }
  };

  testConnection();
}, []);


  
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setRole('');
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-100 to-blue-200  p-2">
      <div className="w-full mx-auto bg-white shadow-md rounded-md p-5">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Leave Management System
          </h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </header>

       <div className="mb-6 mx-auto max-w-xs px-4 py-3 bg-blue-50 border border-blue-200 rounded-md flex items-center gap-2 text-blue-800 shadow-sm">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 15c2.192 0 4.243.526 6.121 1.453M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm">
                Logged in as: <span className="font-semibold">{role}</span>
              </p>
      </div>


        {role === 'staff' && (
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Staff Leave Request Form
            </h2>
            <LeaveForm user={user} />
          </section>
        )}

        {role === 'hr' && (
          <section>
            <HrDashboard />
          </section>
        )}


        
      </div>
      <ToastContainer position='top-right' autoClose={3000} />
    </div>
  );
}

export default App;