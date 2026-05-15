import React from 'react';
import { Link } from 'react-router-dom';
import { GsefMark } from '../components/common/GsefLogo';

const Home = () => {
  return (
    <div className="flex flex-col">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0f1f3d] to-gsef-navy opacity-95" />
          <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-teal/25 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple/20 blur-3xl" aria-hidden />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col lg:flex-row lg:items-stretch lg:gap-10">
            <div className="text-center lg:text-left lg:flex-1 lg:min-w-0 mb-12 lg:mb-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal mb-6">
                <GsefMark size={28} className="drop-shadow" />
                GSEF Forums
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in tracking-tight">
                Empowering Somali Entrepreneurs.
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-100">
                Connecting a <span className="text-orange">Global Community.</span>
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto lg:mx-0 text-slate-200">
                Join innovators, investors & leaders shaping the future of the Somali entrepreneurship ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/events" className="btn-gsef-primary inline-flex items-center justify-center">
                  Explore GSEF 2025 â†’
                </Link>
                <button type="button" className="border-2 border-white/80 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition inline-flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">â–¶</span>
                  Watch Highlights
                </button>
              </div>
            </div>
            
            {/* VIP â€” live photo with left fade into hero navy */}
            <div className="w-full max-w-lg mx-auto lg:max-w-none lg:w-[36%] lg:shrink-0 mt-14 lg:mt-0">
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15 aspect-[5/4] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[min(100%,28rem)] lg:h-[min(32rem,calc(100vh-12rem))]">
                <img
                  src="/images/gsef-vip-hero.png"
                  alt="GSEF speaker at the podium"
                  className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[70%_center] lg:object-[65%_28%] transition duration-700 group-hover:scale-[1.03]"
                />
                {/* Fade into hero background â€” heavy on the left, open on the right */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-navy via-gsef-navy/90 via-[42%] to-transparent"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-gsef-navy/30 sm:to-transparent"
                  aria-hidden
                />
                <div className="relative flex h-full min-h-[16rem] flex-col justify-end p-6 sm:p-8 text-white">
                  <div className="flex items-center gap-2 text-orange font-bold tracking-[0.2em] text-xs sm:text-sm mb-2">
                    <GsefMark size={28} className="drop-shadow" />
                    PREMIUM
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold leading-tight drop-shadow-lg">VIP Access</div>
                  <p className="mt-2 max-w-[18ch] text-sm sm:text-base text-slate-100/95 leading-snug drop-shadow-md">
                    Exclusive networking & lounge access
                  </p>
                  <div className="mt-5 inline-flex w-full max-w-xs rounded-xl border border-white/25 bg-black/35 px-4 py-3 font-mono text-sm sm:text-base tracking-widest text-center text-white/95 backdrop-blur-md shadow-inner">
                    GSEF2025-VIP-001234
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Banner */}
          <div className="relative bg-white text-navy rounded-t-3xl -mb-px mx-2 md:mx-6 lg:mx-10 shadow-[0_-12px_40px_rgba(0,0,0,0.25)]">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-center">
                <div><span className="text-2xl font-bold text-teal">500+</span><br /><span className="text-xs font-medium text-slate-600">Expected Attendees</span></div>
                <div><span className="text-2xl font-bold text-purple">30+</span><br /><span className="text-xs font-medium text-slate-600">Speakers</span></div>
                <div><span className="text-2xl font-bold text-blue">20+</span><br /><span className="text-xs font-medium text-slate-600">Countries</span></div>
                <div className="hidden sm:block border-l border-slate-200 pl-8">
                  <div className="flex gap-4">
                    <div><span className="text-2xl font-bold text-orange">45</span><br /><span className="text-xs text-slate-500">Days</span></div>
                    <div><span className="text-2xl font-bold text-orange">12</span><br /><span className="text-xs text-slate-500">Hours</span></div>
                    <div><span className="text-2xl font-bold text-orange">30</span><br /><span className="text-xs text-slate-500">Minutes</span></div>
                    <div><span className="text-2xl font-bold text-orange">22</span><br /><span className="text-xs text-slate-500">Seconds</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-gsef-orange to-navy text-white text-sm rounded-full mb-4 font-semibold">
                    <GsefMark size={22} />
                    UPCOMING
                  </div>
                  <h2 className="text-3xl font-bold mb-2">GSEF 2025</h2>
                  <h3 className="text-xl text-gray-600 mb-4">Global Somali Entrepreneurship Forum</h3>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span>ðŸ“… July 19â€“20, 2025</span>
                    <span>ðŸ“ Radisson Blu, Nairobi</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Two days of networking, insights, and opportunities with global Somali entrepreneurs & investors.
                  </p>
                  <Link to="/events/1" className="btn-gsef-primary inline-block">
                    View Event Details â†’
                  </Link>
                </div>
                <div className="md:w-1/3 relative min-h-[20rem] md:min-h-[22rem] text-white overflow-hidden">
                  <img
                    src="/images/gsef-vip-hero.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-[72%_30%]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-gsef-purple/95 via-gsef-magenta/55 to-gsef-orange/35"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-navy/90 via-gsef-navy/25 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_20%,white,transparent_55%)]" aria-hidden />
                  <div className="relative flex h-full min-h-[20rem] flex-col items-center justify-center p-8 text-center">
                    <div className="flex justify-center mb-3 drop-shadow-md">
                      <GsefMark size={40} />
                    </div>
                    <div className="text-2xl font-bold mb-2 drop-shadow">Your Ticket</div>
                    <div className="text-lg mb-4 text-white/90 drop-shadow">VIP Access</div>
                    <div className="font-mono text-lg sm:text-xl tracking-wider break-all rounded-xl border border-white/30 bg-black/30 px-4 py-3 backdrop-blur-sm max-w-full">
                      GSEF2025-VIP-001234
                    </div>
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
                <div className="text-4xl font-bold text-teal my-4">KES 3,000</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">âœ“ General Session Access</li>
                  <li className="flex items-center gap-2">âœ“ Panel Discussions</li>
                  <li className="flex items-center gap-2">âœ“ Networking Lunch</li>
                  <li className="flex items-center gap-2">âœ“ Digital Certificate</li>
                </ul>
                <button type="button" className="w-full bg-navy text-white py-2 rounded-xl hover:bg-navyDeep transition font-semibold">
                  Select Pass
                </button>
              </div>
              
              {/* VIP */}
              <div className="card text-center border-2 border-gsef-orange relative transform scale-105 shadow-xl ring-2 ring-gsef-orange/25">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gsef-orange to-navy text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">VIP</h3>
                <div className="text-4xl font-bold text-purple my-4">KES 10,000</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">âœ“ All Regular Benefits</li>
                  <li className="flex items-center gap-2">âœ“ VIP Lounge Access</li>
                  <li className="flex items-center gap-2">âœ“ Meet-the-Speakers</li>
                  <li className="flex items-center gap-2">âœ“ Priority Seating</li>
                  <li className="flex items-center gap-2">âœ“ Exclusive Roundtable</li>
                </ul>
                <button type="button" className="w-full bg-gradient-to-r from-gsef-orange to-navy text-white py-2 rounded-xl hover:opacity-95 transition font-semibold">
                  Select VIP
                </button>
              </div>
              
              {/* Premium VIP */}
              <div className="card text-center">
                <h3 className="text-2xl font-bold mb-2">Premium VIP</h3>
                <div className="text-4xl font-bold text-purple my-4">KES 25,000</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">âœ“ All VIP Benefits</li>
                  <li className="flex items-center gap-2">âœ“ Investor Presentations</li>
                  <li className="flex items-center gap-2">âœ“ 1-on-1 Meetings</li>
                  <li className="flex items-center gap-2">âœ“ Event Merchandise Pack</li>
                  <li className="flex items-center gap-2">âœ“ Post-Event Directory</li>
                </ul>
                <button type="button" className="w-full bg-teal text-white py-2 rounded-xl hover:bg-tealBright transition font-semibold">
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
              <Link to="/reports" className="text-teal hover:text-purple font-semibold transition">View all â†’</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
                <div className="text-teal text-3xl mb-3">ðŸ“„</div>
                <h3 className="font-semibold mb-1">GSEF 2024 Impact Report</h3>
                <div className="text-sm text-gray-500 mb-3">Oct 2024 - PDF</div>
                <button type="button" className="text-teal hover:text-purple font-semibold transition">Download â†’</button>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
                <div className="text-purple text-3xl mb-3">ðŸ“Š</div>
                <h3 className="font-semibold mb-1">East Africa Innovation Trends</h3>
                <div className="text-sm text-gray-500 mb-3">Jul 2025 - PDF</div>
                <button type="button" className="text-teal hover:text-purple font-semibold transition">Download â†’</button>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
                <div className="text-orange text-3xl mb-3">ðŸ‘©</div>
                <h3 className="font-semibold mb-1">Women in Somali Entrepreneurship</h3>
                <div className="text-sm text-gray-500 mb-3">Jul 2025 - PDF</div>
                <button type="button" className="text-teal hover:text-purple font-semibold transition">Download â†’</button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-16 bg-navy text-white relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,#00A67E,transparent_45%),radial-gradient(circle_at_80%_20%,#6A1B9A,transparent_40%)]" aria-hidden />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex justify-center mb-8">
              <GsefMark size={56} className="drop-shadow-lg" />
            </div>
            <h2 className="text-4xl font-bold text-center mb-12">Why Join GSEF?</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
                <div className="text-5xl mb-4">ðŸ¤</div>
                <h3 className="text-xl font-bold mb-2">Network</h3>
                <p className="text-slate-300">Connect with 500+ entrepreneurs & investors</p>
              </div>
              <div className="p-6 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
                <div className="text-5xl mb-4">ðŸ“š</div>
                <h3 className="text-xl font-bold mb-2">Learn</h3>
                <p className="text-slate-300">Access high-level panels & expert workshops</p>
              </div>
              <div className="p-6 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
                <div className="text-5xl mb-4">ðŸ’°</div>
                <h3 className="text-xl font-bold mb-2">Invest</h3>
                <p className="text-slate-300">Discover funding & partnership opportunities</p>
              </div>
              <div className="p-6 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
                <div className="text-5xl mb-4">ðŸ“ˆ</div>
                <h3 className="text-xl font-bold mb-2">Grow</h3>
                <p className="text-slate-300">Scale your business across East Africa & beyond</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-12">
              <GsefMark size={48} className="mb-4" />
              <h2 className="text-4xl font-bold">Our Partners</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              <div className="text-center"><div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 text-2xl">ðŸ¢</div><span className="font-semibold">SIMAD Lab</span></div>
              <div className="text-center"><div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 text-2xl">ðŸ›ï¸</div><span className="font-semibold">KICC Nairobi</span></div>
              <div className="text-center"><div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 text-2xl">ðŸ“‹</div><span className="font-semibold">Ministry of Trade</span></div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet The Founders</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Abhinav Sharma', role: 'Co-founder & CEO', country: 'India ðŸ‡®ðŸ‡³' },
                { name: 'Nejma Ahmed', role: 'Co-founder & COO', country: 'India ðŸ‡®ðŸ‡³' },
                { name: 'Mohamed Ali', role: 'Co-founder & CTO', country: 'Egypt ðŸ‡ªðŸ‡¬' },
                { name: 'Hassan Naif', role: 'Co-founder & Founder', country: 'UAE ðŸ‡¦ðŸ‡ª' }
              ].map((founder, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center transform hover:-translate-y-1">
                  <div className="w-24 h-24 mx-auto bg-teal/15 rounded-full flex items-center justify-center text-3xl mb-4 text-teal font-bold border-4 border-white shadow-lg ring-2 ring-gsef-teal/20">
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
              <Link to="/training" className="text-teal hover:text-purple font-semibold hidden md:inline-flex items-center gap-2">
                <GsefMark size={28} />
                View All Programs â†’
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Digital Marketing for Entrepreneurs', date: 'June 10, 2025', price: 'Â£15,000' },
                { title: 'Founder Mentoring Workshop', date: 'July 1, 2025', price: 'Â£25,000' },
                { title: 'Business Planning Bootcamp', date: 'August 1, 2025', price: 'Â£25,000' },
                { title: 'Leadership & Team Building', date: 'September 1, 2025', price: 'Â£25,000' }
              ].map((training, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[56px]">{training.title}</h3>
                  <div className="flex items-center text-gray-500 mb-2 text-sm">
                    <span className="mr-2">ðŸ“…</span> {training.date}
                  </div>
                  <div className="text-teal font-bold text-xl mb-6 mt-auto">
                    {training.price}
                  </div>
                  <button type="button" className="w-full bg-teal/10 text-teal py-2 rounded-xl font-semibold hover:bg-teal hover:text-white transition">
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
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:border-gsef-teal/40 transition">
                <div className="flex items-center gap-2 mb-2 text-teal">
                  <GsefMark size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Free</h3>
                </div>
                <p className="text-gray-500 mb-6 min-h-[48px]">Perfect for individuals just starting out in the ecosystem.</p>
                <div className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-lg text-gray-500 font-normal">/yr</span></div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-center">âœ“ Access to community forum</li>
                  <li className="flex items-center">âœ“ Monthly newsletter</li>
                  <li className="flex items-center">âœ“ Basic networking events</li>
                </ul>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50 transition">Join for Free</button>
              </div>
              
              <div className="bg-gradient-to-br from-gsef-teal to-gsef-blue text-white rounded-2xl shadow-xl p-8 transform md:-translate-y-4 relative">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-gsef-orange to-navy text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">RECOMMENDED</div>
                <div className="flex items-center gap-2 mb-2">
                  <GsefMark size={28} />
                  <h3 className="text-2xl font-bold mb-0">Professional</h3>
                </div>
                <p className="text-white/85 mb-6 min-h-[48px]">For founders and active professionals scaling their business.</p>
                <div className="text-4xl font-bold mb-6">$299<span className="text-lg text-white/70 font-normal">/yr</span></div>
                <ul className="space-y-3 mb-8 text-white/90">
                  <li className="flex items-center">âœ“ Premium workshop access</li>
                  <li className="flex items-center">âœ“ 1-on-1 mentoring sessions</li>
                  <li className="flex items-center">âœ“ VIP ticket discounts</li>
                  <li className="flex items-center">âœ“ Exclusive directory access</li>
                </ul>
                <button type="button" className="w-full bg-white text-navy py-3 rounded-xl font-bold hover:bg-slate-50 transition shadow-sm">Become a Pro Member</button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:border-gsef-orange/40 transition">
                <div className="flex items-center gap-2 mb-2 text-orange">
                  <GsefMark size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Corporate</h3>
                </div>
                <p className="text-gray-500 mb-6 min-h-[48px]">Customized solutions for companies and organizations.</p>
                <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-center">âœ“ Multiple user accounts</li>
                  <li className="flex items-center">âœ“ Brand visibility packages</li>
                  <li className="flex items-center">âœ“ Dedicated account manager</li>
                  <li className="flex items-center">âœ“ Private roundtable access</li>
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

