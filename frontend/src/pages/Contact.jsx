import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white shadow-xl rounded-[2rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gsef-green font-bold">Contact Us</p>
              <h1 className="text-4xl font-bold text-slate-900">Let's build the next generation of Somali entrepreneurship together.</h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Reach out for partnerships, speaker opportunities, sponsorships, or media requests. Our team is ready to support your journey.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p>hello@gsef.global</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p>347 Summit Avenue, Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-slate-700">Name</label>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-200 px-5 py-4 text-sm text-slate-900 shadow-sm focus:border-gsef-green focus:outline-none" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input type="email" className="mt-2 w-full rounded-3xl border border-slate-200 px-5 py-4 text-sm text-slate-900 shadow-sm focus:border-gsef-green focus:outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea rows="5" className="mt-2 w-full rounded-3xl border border-slate-200 px-5 py-4 text-sm text-slate-900 shadow-sm focus:border-gsef-green focus:outline-none" placeholder="Tell us how we can help"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gsef-green px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gsef-green/20 transition hover:bg-gsef-green-dark">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
