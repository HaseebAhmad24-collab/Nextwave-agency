import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Pricing.css';

const plans = [
  {
    name: "BASIC",
    price: "10,000",
    features: ["2 Social Platforms", "12 Posts / Month", "Basic Graphics", "WhatsApp Setup"],
    featured: false
  },
  {
    name: "STANDARD",
    price: "15,000",
    features: ["4 Social Platforms", "20 Posts / Month", "Premium Graphics", "Ad Management"],
    featured: true
  },
  {
    name: "PREMIUM",
    price: "25,000",
    features: ["All Platforms", "Daily Posting", "Custom Branding", "Strategy Calls"],
    featured: false
  }
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label">PRICING</div>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">No hidden fees. No long-term contracts. Just results.</p>
        </motion.div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`price-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
            >
              {plan.featured && <div className="featured-badge">Most Popular</div>}
              <div className="price-name">{plan.name}</div>
              <div className="price-amount">
                <span className="currency">Rs.</span>
                <span className="value">{plan.price}</span>
              </div>
              <div className="price-period">per month</div>
              <ul className="price-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <Check size={16} color="var(--secondary)" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`price-btn ${plan.featured ? 'btn-filled' : 'btn-outline'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
