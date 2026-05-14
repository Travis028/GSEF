import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { 
  FiUsers, FiMic, FiGlobe, FiCheckCircle, 
  FiTrendingUp, FiDownload, FiCalendar, FiMapPin,
  FiAward
} from 'react-icons/fi';

const Home = () => {
  const partners = [
    { name: 'SIMAD Lab', logo: null },
    { name: 'KICC Nairobi', logo: null },
    { name: 'Ministry of Trade', logo: null },
  ];

  const reports = [
    { title: 'GSEF 2024 Impact Report', date: 'Oct 2024', type: 'PDF' },
    { title: 'East Africa Innovation & Investment Trends', date: 'Jul 2025', type: 'PDF' },
    { title: 'Women in Somali Entrepreneurship', date: 'Jul 2025', type: 'PDF' },
  ];

  const founders = [
    { name: 'Abhinav Sharma', role: 'Co-founder & CEO', country: 'India', flag: '🇮🇳' },
    { name: 'Nejma Ahmed', role: 'Co-founder & COO', country: 'India', flag: '🇮🇳' },
    { name: 'Mohamed Ali', role: 'Co-founder & CTO', country: 'India', flag: '🇮🇳' },
    { name: 'Hasan Nasif', role: 'Co-founder & Founder', country: 'India', flag: '🇮🇳' },
  ];

  const trainings = [
    { title: 'Digital Marketing for Entrepreneurs', date: 'June 10, 2025', price: '£15,000' },
    { title: 'Founder Mentoring Workshop', date: 'July 1, 2025', price: '£25,000' },
    { title: 'Business Planning Bootcamp', date: 'August 1, 2025', price: '£25,000' },
    { title: 'Leadership & Team Building', date: 'September 1, 2025', price: '£25,000' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                Empowering Somali Entrepreneurs.
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-semibold mb-6 text-blue-200"
              >
                Connecting a Global Community.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg mb-8 text-gray-200"
              >
                Join innovators, investors & leaders shaping the future of the Somali entrepreneurship ecosystem.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/events" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                  Explore GSEF 2025 →
                </Link>
                <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
                  Watch Highlights
                </button>
              </motion.div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">
                    <CountUp end={500} duration={2.5} />+
                  </div>
                  <div className="text-sm">Expected Attendees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">
                    <CountUp end={30} duration={2.5} />+
                  </div>
                  <div className="text-sm">Speakers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">
                    <CountUp end={20} duration={2.5} />+
                  </div>
                  <div className="text-sm">Countries</div>
                </div>
                <div className="col-span-2 bg-yellow-500/20 rounded-lg p-3 mt-2">
                  <div className="flex items-center justify-center gap-2">
                    <FiCheckCircle className="text-yellow-400" />
                    <span className="font-mono text-sm">VIP Access GSEF2025-VIP-001234</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Countdown Banner */}
        <div className="bg-black/50 backdrop-blur-sm py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center gap-8 text-center">
              <div><span className="text-2xl font-bold">45</span><br /><span className="text-xs">Days</span></div>
              <div><span className="text-2xl font-bold">12</span><br /><span className="text-xs">Hours</span></div>
              <div><span className="text-2xl font-bold">30</span><br /><span className="text-xs">Minutes</span></div>
              <div><span className="text-2xl font-bold">22</span><br /><span className="text-xs">Seconds</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
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
                  <div className="font-mono text-2xl tracking-wider break-all">GSEF2025-VIP-001234</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Pass</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Regular Pass */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Regular</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">KES 3,000</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">✓ General Session Access</li>
                <li className="flex items-center gap-2">✓ Panel Discussions</li>
                <li className="flex items-center gap-2">✓ Networking Lunch</li>
                <li className="flex items-center gap-2">✓ Digital Certificate</li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition">
                Select Pass
              </button>
            </div>
            
            {/* VIP Pass */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-yellow-400 hover:shadow-xl transition relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">VIP</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">KES 10,000</div>
              <ul className="space-y-3 mb-6">
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
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Premium VIP</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">KES 25,000</div>
              <ul className="space-y-3 mb-6">
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

      {/* Latest Reports Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Reports</h2>
            <Link to="/reports" className="text-blue-600 hover:underline">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
                <FiDownload className="text-blue-600 text-2xl mb-3" />
                <h3 className="font-semibold mb-1">{report.title}</h3>
                <div className="text-sm text-gray-500 mb-3">{report.date} - {report.type}</div>
                <button className="text-blue-600 hover:underline">Download →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join GSEF?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Network</h3>
              <p>Connect with 500+ entrepreneurs & investors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMic className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn</h3>
              <p>Access high-level panels & expert workshops</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Invest</h3>
              <p>Discover funding & partnership opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow</h3>
              <p>Scale your business across East Africa & beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-gray-400 text-sm">Logo</span>
                </div>
                <span className="text-gray-600">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Founders</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  {founder.flag}
                </div>
                <h3 className="font-semibold text-lg">{founder.name}</h3>
                <p className="text-gray-500 text-sm">{founder.role}</p>
                <p className="text-gray-400 text-xs mt-2">{founder.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Training & Workshops</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {trainings.map((training, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="font-bold text-lg mb-2">{training.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <FiCalendar /> {training.date}
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">{training.price}</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
