import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const storedUser = window.localStorage.getItem('gsef_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser({
          name: 'Faduma Yusuf',
          email: 'faduma@gsef.global',
          tickets: 2,
          membership: 'Professional',
          eventsAttended: 6
        });
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 p-8">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gsef-green font-bold">My Profile</p>
              <h1 className="mt-4 text-4xl font-bold text-slate-900">{user?.name ?? 'Profile'}</h1>
              <p className="mt-3 text-slate-600 max-w-2xl">Manage your registration, membership, and event preferences from a single dashboard.</p>
            </div>
            <div className="mt-6 sm:mt-0 inline-flex items-center gap-3 rounded-full bg-gsef-green/10 px-5 py-3 text-sm font-semibold text-slate-900">
              Membership: <span className="text-gsef-green">{user?.membership ?? 'Free'}</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mt-12">
            <div className="rounded-[2rem] bg-slate-50 p-8 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact details</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Membership</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{user?.membership}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-50 p-8 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Participation stats</h2>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
                  <p className="text-sm text-slate-500">Events attended</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">{user?.eventsAttended ?? 0}</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
                  <p className="text-sm text-slate-500">Tickets purchased</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">{user?.tickets ?? 0}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-gsef-navy text-white p-8">
            <h2 className="text-2xl font-bold">Keep your profile up to date</h2>
            <p className="mt-3 text-slate-200 max-w-2xl">Update your preferences, save your ticket details, and stay connected with important event announcements.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-gsef-gold px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-yellow-300 transition">Edit profile</button>
              <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">Download tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
