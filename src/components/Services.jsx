import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Camera, TrendingUp, MessageSquare, BarChart3 } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Monitor size={28} />,
    title: "Social Media Management",
    desc: "Facebook, Instagram, TikTok, YouTube daily posting and engagement",
    color: "#E1306C"
  },
  {
    icon: <Camera size={28} />,
    title: "Content Creation",
    desc: "Professional posts, reels, stories, and branding visuals",
    color: "#F97316"
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Paid Advertising",
    desc: "Targeted ads to increase reach, traffic, and sales",
    color: "#1E3A8A"
  },
  {
    icon: <MessageSquare size={28} />,
    title: "WhatsApp Marketing",
    desc: "Business setup and automated customer communication",
    color: "#25D366"
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Growth Strategy",
    desc: "Content calendars, performance tracking, campaign optimization",
    color: "#FBBF24"
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label">OUR SERVICES</div>
          <h2 className="section-title">How We Help You Grow</h2>
          <p className="section-subtitle">Everything your business needs to dominate the digital space in Lahore.</p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon" style={{ backgroundColor: service.color + '15', color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
