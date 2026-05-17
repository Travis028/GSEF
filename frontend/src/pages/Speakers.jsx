import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import SiteHero from '../components/common/SiteHero';
import galleryImages from '../data/galleryImages';

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

  const defaultSpeakerImages = galleryImages.slice(0, 3);

  const mockSpeakers = [
    {
      id: 1,
      name: "Ahmed Hassan",
      title: "CEO & Founder",
      company: "TechVenture Somalia",
      bio: "Visionary tech entrepreneur with 15+ years of experience in digital transformation.",
      image_url: defaultSpeakerImages[0] || '/images/logo.jpeg',
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
      image_url: defaultSpeakerImages[1] || '/images/logo.jpeg',
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
      image_url: defaultSpeakerImages[2] || '/images/logo.jpeg',
      social_links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
  ];

  const displaySpeakers = speakers.length > 0 ? speakers : mockSpeakers;

  return (
    <div className="min-h-screen bg-offwhite pb-20">
      <SiteHero
        eyebrow="Thought Leaders"
        title="Meet Our Speakers"
        description="Learn from industry leaders, successful entrepreneurs, and visionary thinkers shaping the future of African business."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-6 lg:grid-cols-3">
          {displaySpeakers.map((speaker) => (
            <motion.article
              key={speaker.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <img
                  src={speaker.image_url}
                  alt={speaker.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gsef-teal mb-2">{speaker.company}</p>
                <h3 className="text-2xl font-bold text-gsef-navy mb-2">{speaker.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{speaker.title}</p>
                <p className="text-sm leading-6 text-slate-600 mb-6">{speaker.bio}</p>

                <div className="flex items-center gap-3 text-slate-500">
                  {speaker.social_links?.linkedin && (
                    <a
                      href={speaker.social_links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gsef-gold transition"
                    >
                      <FiLinkedin size={18} />
                    </a>
                  )}
                  {speaker.social_links?.twitter && (
                    <a
                      href={speaker.social_links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gsef-gold transition"
                    >
                      <FiTwitter size={18} />
                    </a>
                  )}
                  {speaker.social_links?.email && (
                    <a
                      href={`mailto:${speaker.social_links.email}`}
                      className="hover:text-gsef-gold transition"
                    >
                      <FiMail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 rounded-[2rem] bg-gradient-to-r from-gsef-teal to-gsef-gold p-8 text-center text-white shadow-2xl shadow-gsef-teal/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-gsef-teal to-gsef-gold rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Want to be a speaker?</h2>
            <p className="text-slate-100 mb-6">Share your expertise with our vibrant community of entrepreneurs</p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-lg bg-gsef-navy px-8 py-3 text-white font-bold hover:bg-slate-900 transition"
            >
              Apply to Speak
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
