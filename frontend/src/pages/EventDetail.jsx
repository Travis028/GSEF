import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCalendar, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import { GsefMark } from '../components/common/GsefLogo';

const EventDetail = () => {
  const { id } = useParams();
  
  // Placeholder data
  const event = {
    id: id,
    title: 'GSEF 2026 Summit',
    description: 'The premier gathering of Somali entrepreneurs, investors, and innovators from across the globe. Join us for two days of insightful panels, workshops, and unparalleled networking opportunities designed to catalyze growth in the Somali entrepreneurial ecosystem.',
    date: 'July 19-20, 2026',
    time: '09:00 AM - 05:00 PM',
    venue: 'Radisson Blu Hotel',
    city: 'Nairobi, Kenya',
    attendees: 500,
    price: 'KES 3,000',
    speakers: [
      { name: 'Amina Ali', role: 'CEO, TechVentures', company: 'TechVentures' },
      { name: 'Hassan Mohamed', role: 'Managing Partner', company: 'Somali Growth Fund' }
    ],
    agenda: [
      { time: '09:00 AM', title: 'Opening Keynote', speaker: 'Amina Ali' },
      { time: '10:30 AM', title: 'Panel: The Future of Fintech in East Africa', speaker: 'Various' },
      { time: '12:00 PM', title: 'Networking Lunch', speaker: '-' }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Event Header Banner */}
      <div className="relative bg-gsef-navy text-white py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gsef-purple/30 via-transparent to-gsef-teal/25" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="shrink-0 rounded-2xl bg-white/10 p-4 border border-white/15 backdrop-blur-sm">
              <GsefMark size={56} />
            </div>
            <div className="md:w-2/3">
              <span className="bg-white/15 text-gsef-orange px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Summit</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
              <p className="text-xl text-slate-200 mb-8">{event.description.substring(0, 100)}...</p>

              <div className="flex flex-wrap gap-6 text-sm text-slate-100">
                <div className="flex items-center"><FiCalendar className="mr-2 text-gsef-teal" size={20} /> {event.date}</div>
                <div className="flex items-center"><FiClock className="mr-2 text-gsef-orange" size={20} /> {event.time}</div>
                <div className="flex items-center"><FiMapPin className="mr-2 text-gsef-teal" size={20} /> {event.venue}, {event.city}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About This Event</h2>
            <p className="text-gray-600 leading-relaxed">{event.description}</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Speakers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {event.speakers.map((speaker, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                    {speaker.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{speaker.name}</h3>
                    <p className="text-sm text-gray-500">{speaker.role}</p>
                    <p className="text-sm text-gsef-teal font-medium">{speaker.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar / Ticket Card */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
            <div className="flex items-center gap-2 mb-3 text-gsef-navy">
              <GsefMark size={32} />
              <h3 className="text-xl font-bold">Registration</h3>
            </div>
            <div className="text-3xl font-bold text-gsef-teal mb-6">From {event.price}</div>

            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-start"><FiCheckCircle className="mt-1 mr-2 text-gsef-teal flex-shrink-0" /> Full access to all sessions</li>
              <li className="flex items-start"><FiCheckCircle className="mt-1 mr-2 text-gsef-teal flex-shrink-0" /> Networking events and lunch</li>
              <li className="flex items-start"><FiCheckCircle className="mt-1 mr-2 text-gsef-teal flex-shrink-0" /> Digital certificate of attendance</li>
            </ul>

            <Link to={`/register/${event.id}`} className="block w-full bg-gradient-to-r from-gsef-orange to-gsef-purple hover:opacity-95 text-white text-center font-bold py-3 rounded-xl transition shadow-md">
              Register Now
            </Link>
            <p className="text-center text-xs text-gray-500 mt-4">Secure checkout powered by Stripe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
