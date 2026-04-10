import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Zap, MessageCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-tag" variants={itemVariants}>
            Digital Marketing Lahore
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Grow Your Business<br />
            <span>Without Breaking</span><br />
            the Bank
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Professional digital marketing designed for small businesses in Lahore. 
            Social media, content creation & paid ads starting at just Rs. 10,000/month.
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">Get Free Consultation</a>
            <a href="#contact" className="btn btn-outline">View Services</a>
          </motion.div>
          
          <motion.div className="hero-trust" variants={itemVariants}>
            <div className="trust-dot"></div>
            <span>Trusted by 50+ Local Businesses — DHA, Gulberg & Model Town</span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="stats-grid">
            <StatCard number="50+" label="Local Businesses" color="#FBBF24" />
            <StatCard number="3x" label="Avg. Growth Rate" color="#F97316" />
            <StatCard number="24/7" label="WhatsApp Support" color="#1E3A8A" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, color }) => (
  <motion.div 
    className="stat-card"
    whileHover={{ y: -10, scale: 1.05 }}
    style={{ borderColor: color + '33' }}
  >
    <div className="stat-number" style={{ color: color }}>{number}</div>
    <div className="stat-label">{label}</div>
  </motion.div>
);

export default Hero;
