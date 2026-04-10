import React from 'react';
import { motion } from 'framer-motion';
import './Problem.css';

const Problem = () => {
  return (
    <section className="problem-section" id="problem">
      <div className="container">
        <motion.div 
          className="problem-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">THE PROBLEM</div>
          <h2 className="section-title">The Challenges Small Businesses Face</h2>
          <p className="problem-text">
            Small businesses in Pakistan struggle with limited online presence, 
            spending hours manually responding to customer queries, posting inconsistently 
            without strategy, and lacking technical knowledge to run effective ads. 
            These challenges lead to missed sales opportunities and slow growth in an 
            increasingly competitive digital marketplace.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
