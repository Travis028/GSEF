import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col lg:flex-row items-center">
            <div className="text-center lg:text-left lg:w-2/3 mb-12 lg:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                Empowering Somali Entrepreneurs.
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-200">
                Connecting a Global Community.
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join innovators, investors & leaders shaping the future of the Somali entrepreneurship ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/events" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  Explore GSEF 2025 →
                </Link>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition">
                  Watch Highlights
                </button>
              </div>
            </div>
            
            {/* VIP Card in Hero */}
            <div className="hidden lg:block lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-md border border-yellow-400/50 rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition duration-500 shadow-2xl">
                <div className="text-yellow-400 font-bold mb-2">★ PREMIUM</div>
                <div className="text-3xl font-bold mb-2">VIP Access</div>
                <div className="text-blue-200 mb-6">Exclusive networking & lounge access</div>
                <div className="bg-black/30 px-4 py-3 rounded-lg font-mono text-lg tracking-widest text-center border border-white/20">
                  GSEF2025-VIP-001234
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Banner */}
          <div className="bg-black/50 backdrop-blur-sm py-4">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-center gap-8 text-center">
                <div><span className="text-2xl font-bold">500+</span><br /><span className="text-xs">Expected Attendees</span></div>
                <div><span className="text-2xl font-bold">30+</span><br /><span className="text-xs">Speakers</span></div>
                <div><span className="text-2xl font-bold">20+</span><br /><span className="text-xs">Countries</span></div>
                <div className="border-l border-white/20 pl-8 ml-4">
                  <div className="flex gap-4">
                    <div><span className="text-2xl font-bold text-yellow-400">45</span><br /><span className="text-xs text-gray-300">Days</span></div>
                    <div><span className="text-2xl font-bold text-yellow-400">12</span><br /><span className="text-xs text-gray-300">Hours</span></div>
                    <div><span className="text-2xl font-bold text-yellow-400">30</span><br /><span className="text-xs text-gray-300">Minutes</span></div>
                    <div><span className="text-2xl font-bold text-yellow-400">22</span><br /><span className="text-xs text-gray-300">Seconds</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <div className="inline-block px-4 py-1 bg-red-500 text-white text-sm rounded-full mb-4">
                    UPCOMING
                  </div>
                  <h2 className="text-3xl font-bold mb-2">GSEF 2025</h2>
                  <h3 className="text-xl text-gray-600 mb-4">Global Somali Entrepreneurship Forum</h3>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span>📅 July 19–20, 2025</span>
                    <span>📍 Radisson Blu, Nairobi</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Two days of networking, insights, and opportunities with global Somali entrepreneurs & investors.
                  </p>
                  <Link to="/events/1" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition inline-block">
                    View Event Details →
                  </Link>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white text-center">
                  <div className="border-2 border-white rounded-xl p-6">
                    <div className="text-2xl font-bold mb-2">Your Ticket</div>
                    <div className="text-lg mb-4">VIP Access</div>
                    <div className="font-mono text-xl tracking-wider break-all">GSEF2025-VIP-001234</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Pricing */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title">Choose Your Pass</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              
              {/* Regular */}
              <div className="card text-center">
                <h3 className="text-2xl font-bold mb-2">Regular</h3>
                <div className="text-4xl font-bold text-blue-600 my-4">KES 3,000</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">✓ General Session Access</li>
                  <li className="flex items-center gap-2">✓ Panel Discussions</li>
                  <li className="flex items-center gap-2">✓ Networking Lunch</li>
                  <li className="flex items-center gap-2">✓ Digital Certificate</li>
                </ul>
                <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition">
                  Select Pass
                </button>
              </div>
              
              {/* VIP */}
              <div className="card text-center border-2 border-yellow-400 relative transform scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">VIP</h3>
                <div className="text-4xl font-bold text-blue-600 my-4">KES 10,000</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">✓ All Regular Benefits</li>
                  <li className="flex items-center gap-2">✓ VIP Lounge Access</li>
                  <li className="flex items-center gap-2">✓ Meet-the-Speakers</li>
                  <li className="flex items-center gap-2">✓ Priority Seating</li>
                  <li className="flex items-center gap-2">✓ Exclusive Roundtable</li>
                </ul>
                <button className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 transition">
                  Select VIP
                </button>
              </div>
              
              {/* Premium VIP */}
              <div className="card text-center">
                <h3 className="text-2xl font-bold mb-2">Premium VIP</h3>
                <div className="text-4xl font-bold text-blue-600 my-4">KES 25,000</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">✓ All VIP Benefits</li>
                  <li className="flex items-center gap-2">✓ Investor Presentations</li>
                  <li className="flex items-center gap-2">✓ 1-on-1 Meetings</li>
                  <li className="flex items-center gap-2">✓ Event Merchandise Pack</li>
                  <li className="flex items-center gap-2">✓ Post-Event Directory</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Select Pass
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Reports */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Latest Reports</h2>
              <Link to="/reports" className="text-blue-600 hover:underline">View all →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
                <div className="text-blue-600 text-3xl mb-3">📄</div>
                <h3 className="font-semibold mb-1">GSEF 2024 Impact Report</h3>
                <div className="text-sm text-gray-500 mb-3">Oct 2024 - PDF</div>
                <button className="text-blue-600 hover:underline">Download →</button>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
                <div className="text-blue-600 text-3xl mb-3">📊</div>
                <h3 className="font-semibold mb-1">East Africa Innovation Trends</h3>
                <div className="text-sm text-gray-500 mb-3">Jul 2025 - PDF</div>
                <button className="text-blue-600 hover:underline">Download →</button>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
                <div className="text-blue-600 text-3xl mb-3">👩</div>
                <h3 className="font-semibold mb-1">Women in Somali Entrepreneurship</h3>
                <div className="text-sm text-gray-500 mb-3">Jul 2025 - PDF</div>
                <button className="text-blue-600 hover:underline">Download →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Join GSEF?</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-xl hover:bg-blue-800 transition">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Network</h3>
                <p>Connect with 500+ entrepreneurs & investors</p>
              </div>
              <div className="p-6 rounded-xl hover:bg-blue-800 transition">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2">Learn</h3>
                <p>Access high-level panels & expert workshops</p>
              </div>
              <div className="p-6 rounded-xl hover:bg-blue-800 transition">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Invest</h3>
                <p>Discover funding & partnership opportunities</p>
              </div>
              <div className="p-6 rounded-xl hover:bg-blue-800 transition">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-2">Grow</h3>
                <p>Scale your business across East Africa & beyond</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              <div className="text-center"><div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 text-2xl">🏢</div><span className="font-semibold">SIMAD Lab</span></div>
              <div className="text-center"><div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 text-2xl">🏛️</div><span className="font-semibold">KICC Nairobi</span></div>
              <div className="text-center"><div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 text-2xl">📋</div><span className="font-semibold">Ministry of Trade</span></div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet The Founders</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Abhinav Sharma', role: 'Co-founder & CEO', country: 'India 🇮🇳' },
                { name: 'Nejma Ahmed', role: 'Co-founder & COO', country: 'India 🇮🇳' },
                { name: 'Mohamed Ali', role: 'Co-founder & CTO', country: 'Egypt 🇪🇬' },
                { name: 'Hassan Naif', role: 'Co-founder & Founder', country: 'UAE 🇦🇪' }
              ].map((founder, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center transform hover:-translate-y-1">
                  <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-4 text-blue-600 font-bold border-4 border-white shadow-lg">
                    {founder.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{founder.role}</p>
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">{founder.country}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training & Workshops Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Training & Workshops</h2>
              <Link to="/training" className="text-blue-600 hover:text-blue-800 font-semibold hidden md:block">View All Programs →</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Digital Marketing for Entrepreneurs', date: 'June 10, 2025', price: '£15,000' },
                { title: 'Founder Mentoring Workshop', date: 'July 1, 2025', price: '£25,000' },
                { title: 'Business Planning Bootcamp', date: 'August 1, 2025', price: '£25,000' },
                { title: 'Leadership & Team Building', date: 'September 1, 2025', price: '£25,000' }
              ].map((training, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[56px]">{training.title}</h3>
                  <div className="flex items-center text-gray-500 mb-2 text-sm">
                    <span className="mr-2">📅</span> {training.date}
                  </div>
                  <div className="text-blue-600 font-bold text-xl mb-6 mt-auto">
                    {training.price}
                  </div>
                  <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GSEF Membership</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Join our exclusive network to access resources, mentoring, and community support year-round.</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:border-blue-300 transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <p className="text-gray-500 mb-6 min-h-[48px]">Perfect for individuals just starting out in the ecosystem.</p>
                <div className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-lg text-gray-500 font-normal">/yr</span></div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-center">✓ Access to community forum</li>
                  <li className="flex items-center">✓ Monthly newsletter</li>
                  <li className="flex items-center">✓ Basic networking events</li>
                </ul>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50 transition">Join for Free</button>
              </div>
              
              <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-8 transform md:-translate-y-4 relative">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold shadow-sm">RECOMMENDED</div>
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-blue-100 mb-6 min-h-[48px]">For founders and active professionals scaling their business.</p>
                <div className="text-4xl font-bold mb-6">$299<span className="text-lg text-blue-200 font-normal">/yr</span></div>
                <ul className="space-y-3 mb-8 text-blue-50">
                  <li className="flex items-center">✓ Premium workshop access</li>
                  <li className="flex items-center">✓ 1-on-1 mentoring sessions</li>
                  <li className="flex items-center">✓ VIP ticket discounts</li>
                  <li className="flex items-center">✓ Exclusive directory access</li>
                </ul>
                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition shadow-sm">Become a Pro Member</button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:border-blue-300 transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Corporate</h3>
                <p className="text-gray-500 mb-6 min-h-[48px]">Customized solutions for companies and organizations.</p>
                <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-center">✓ Multiple user accounts</li>
                  <li className="flex items-center">✓ Brand visibility packages</li>
                  <li className="flex items-center">✓ Dedicated account manager</li>
                  <li className="flex items-center">✓ Private roundtable access</li>
                </ul>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50 transition">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
