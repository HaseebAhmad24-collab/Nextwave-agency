import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Utensils, Scissors, Home, Shirt } from 'lucide-react';
import './Audience.css';

const audiences = [
  { icon: <ShoppingBag size={32} />, label: "Local Shops", area: "Anarkali, Liberty, Model Town" },
  { icon: <Utensils size={32} />, label: "Restaurants", area: "Food Street, DHA" },
  { icon: <Scissors size={32} />, label: "Salons", area: "Gulberg area" },
  { icon: <Home size={32} />, label: "Home Businesses", area: "Defence, Bahria Town" },
  { icon: <Shirt size={32} />, label: "Clothing Brands", area: "Startups & boutiques" }
];

const Audience = () => {
  return (
    <section className="audience-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label">WHO WE SERVE</div>
          <h2 className="section-title">Your Business Is Our Business</h2>
        </motion.div>
        
        <div className="audience-grid">
          {audiences.map((item, index) => (
            <motion.div 
              key={index}
              className="audience-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, backgroundColor: 'var(--primary)', color: 'white' }}
            >
              <div className="audience-icon">{item.icon}</div>
              <h4 className="audience-label">{item.label}</h4>
              <p className="audience-area">{item.area}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
