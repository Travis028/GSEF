import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { FiMail, FiLock, FiUserPlus } from 'react-icons/fi';
import GsefLogo from '../../components/common/GsefLogo';

const Register = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await registerUser(formData);
    setLoading(false);
    if (result.success) navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),transparent_40%),linear-gradient(180deg,#f7f6f3_0%,#ffffff_50%,#f3f7fc_100%)] py-12 px-4">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-slate-200 p-8">
        <div className="flex flex-col items-center mb-8">
          <GsefLogo asLink className="mb-4" />
          <span className="rounded-full bg-gsef-purple/10 text-gsef-purple px-4 py-1 text-xs uppercase tracking-[0.25em] font-semibold mb-4">Organizer access</span>
          <h2 className="text-3xl font-bold text-gsef-navy">Create Account</h2>
          <p className="text-slate-500 mt-2 text-center">Register once to access member pricing and event dashboards.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
              <input
                type="text"
                value={formData.first_name}
                onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gsef-purple/30"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
              <input
                type="text"
                value={formData.last_name}
                onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gsef-purple/30"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gsef-purple/30"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gsef-purple/30"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gsef-purple/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gsef-purple/30"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-gsef-orange to-gsef-purple text-white py-3 rounded-2xl hover:opacity-95 transition flex items-center justify-center gap-2 font-semibold shadow-xl shadow-gsef-orange/20"
          >
            <FiUserPlus /> {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-gsef-teal hover:text-gsef-purple font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
