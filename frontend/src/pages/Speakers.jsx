import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/speakers/');
        if (response.ok) {
          const data = await response.json();
          setSpeakers(data);
        }
      } catch (error) {
        console.error('Failed to fetch speakers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const mockSpeakers = [
    {
      id: 1,
      name: "Ahmed Hassan",
      title: "CEO & Founder",
      company: "TechVenture Somalia",
      bio: "Visionary tech entrepreneur with 15+ years of experience in digital transformation.",
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      social_links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 2,
      name: "Amina Mohamed",
      title: "Investment Director",
      company: "Diaspora Capital",
      bio: "Leading investor connecting Somali entrepreneurs with global opportunities.",
      image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      social_links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 3,
      name: "Mohamed Ali",
      title: "Business Strategist",
      company: "Growth Innovations",
      bio: "Strategic advisor helping startups scale and achieve global market presence.",
      image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      social_links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
  ];

  const displaySpeakers = speakers.length > 0 ? speakers : mockSpeakers;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gsef-navy via-slate-900 to-gsef-navy pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-gsef-gold">Speakers</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Learn from industry leaders, successful entrepreneurs, and visionary thinkers shaping the future of African business
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {displaySpeakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-gsef-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gsef-gold/20">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={speaker.image_url}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gsef-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="text-sm text-gsef-gold font-semibold mb-1">{speaker.title}</p>
                      <p className="text-xs text-slate-300">{speaker.company}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
                  <p className="text-sm text-gsef-gold font-semibold mb-3">{speaker.title}</p>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{speaker.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-700">
                    {speaker.social_links?.linkedin && (
                      <a
                        href={speaker.social_links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-gsef-gold transition"
                      >
                        <FiLinkedin size={18} />
                      </a>
                    )}
                    {speaker.social_links?.twitter && (
                      <a
                        href={speaker.social_links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-gsef-gold transition"
                      >
                        <FiTwitter size={18} />
                      </a>
                    )}
                    {speaker.social_links?.email && (
                      <a
                        href={`mailto:${speaker.social_links.email}`}
                        className="text-slate-400 hover:text-gsef-gold transition"
                      >
                        <FiMail size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-gsef-teal to-gsef-gold rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Want to be a speaker?</h2>
          <p className="text-slate-100 mb-6">Share your expertise with our vibrant community of entrepreneurs</p>
          <button className="bg-gsef-navy hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-lg transition">
            Apply to Speak
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Speakers;
