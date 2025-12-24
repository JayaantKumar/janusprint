import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">CMS Login</h2>
        <input 
          type="email" 
          placeholder="Admin Email" 
          className="w-full p-2 mb-4 border rounded"
          value={email} onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 mb-6 border rounded"
          value={password} onChange={e => setPassword(e.target.value)} 
        />
        <button className="w-full bg-black text-white p-3 rounded font-bold hover:bg-gray-800">
          Enter Dashboard
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;