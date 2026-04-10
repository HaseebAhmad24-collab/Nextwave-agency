import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './WhyUs.css';

const reasons = [
  "Affordable monthly packages (Basic, Standard, Premium)",
  "Local Lahore market expertise with Urdu/Punjabi content",
  "Face-to-face meetings for trust building",
  "Flexible payment: Cash, EasyPaisa, JazzCash",
  "Quick response with same-city availability",
  "Focus on underserved micro-businesses"
];

const WhyUs = () => {
  return (
    <section className="why-us-section" id="about">
      <div className="container">
        <div className="why-us-grid">
          <motion.div 
            className="why-us-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label dark">WHY US</div>
            <h2 className="section-title white">Why NextWave Digital?</h2>
            <p className="why-us-desc">
              We understand the local heartbeat of Lahore's business scene. 
              Our mission is to empower small shops and service providers 
              with the same digital tools used by big brands, at a fraction of the cost.
            </p>
          </motion.div>
          
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                className="reason-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 color="#FBBF24" size={24} />
                <span>{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
