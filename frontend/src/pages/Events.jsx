import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';
import { GsefMark } from '../components/common/GsefLogo';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'GSEF 2025',
      description: 'Global Somali Entrepreneurship Forum',
      date: 'July 19-20, 2025',
      venue: 'Radisson Blu, Nairobi',
      attendees: 500,
      image: null,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Somalia Investment Summit',
      description: 'Connecting investors with Somali entrepreneurs',
      date: 'August 15-16, 2025',
      venue: 'Mogadishu, Somalia',
      attendees: 300,
      image: null,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Women in Business Conference',
      description: 'Empowering female entrepreneurs',
      date: 'September 5-6, 2025',
      venue: 'Hargeisa, Somaliland',
      attendees: 250,
      image: null,
      status: 'upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <GsefMark size={52} className="mb-4 drop-shadow-sm" />
          <h1 className="text-4xl font-bold text-gsef-navy mb-3">Upcoming Events</h1>
          <p className="text-xl text-slate-600 max-w-2xl">Join the largest gatherings of Somali entrepreneurs</p>
          <Link to="/gallery" className="mt-4 text-sm font-semibold text-gsef-teal hover:text-gsef-purple transition">Browse event gallery →</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gsef-teal/15 text-gsef-teal text-xs font-semibold rounded-full mb-4">
                  <GsefMark size={18} />
                  {event.status === 'upcoming' ? 'UPCOMING' : 'PAST'}
                </div>
                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiCalendar className="mr-2" /> {event.date}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiMapPin className="mr-2" /> {event.venue}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiUsers className="mr-2" /> {event.attendees}+ Attendees
                  </div>
                </div>
                <Link
                  to={`/events/${event.id}`}
                  className="block w-full bg-gsef-teal text-white text-center px-4 py-2.5 rounded-xl hover:bg-gsef-tealBright transition font-semibold shadow"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
