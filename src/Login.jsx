import { useState } from 'react';
import { supabase } from './supabaseClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (event) => {
    event.preventDefault(); 
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    // if (error) {
    //   alert(error.message);
    // } else {
    //   onLogin(data.user);
    // }

    
    if (error) {
      toast.error(error.message); // Using toast instead of alert
    } else {
      toast.success('Login successful!');
      onLogin(data.user);
    }


  };

  return (
    <div className='min-h-screen bg-[url("/office3.jpg")] bg-cover bg-center  flex item-center justify-center px-4'>
      <div className='w-full max-w-md bg-white/20 backdrop-blur bg-opacity-90 p-8 rounded-lg shadow-lg'>
          <img src='/rfr.png' alt='rfr' className='h-[200px] mx-auto mb-4' />
          <h1 className='text-2xl font-bold text-center text-blue-500 mb-6'>RFR PROFESSIONALS LEAVE MANAGEMENT</h1>
          <h2 className='text-2xl font-bold text-center text-blue-600 mb-6'>Login</h2>
          <form>
          <label className='block mb-2 text-sm font-medium text-gray-700'>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"    className='w-full px-4 py-2 border border-gray-300 rounded-md fous:outline-none focus:ring-blue-500 mb-6' />
          <label className='block mb-2 text-sm font-medium text-gray-700'>Password</label>
          <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required className='w-full px-4 py-2 border border-gray-300 rounded-md fous:outline-none focus:ring-blue-500 mb-6' />
          <button onClick={signIn} className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>Login</button>
          </form>
         
      </div>
    </div>
  );
}









