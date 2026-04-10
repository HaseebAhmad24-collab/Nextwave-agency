import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const steps = [
  { id: 1, title: "Discovery", desc: "We understand your business goals and audience", color: "var(--primary)" },
  { id: 2, title: "Strategy", desc: "Create a customized marketing plan for you", color: "var(--secondary)" },
  { id: 3, title: "Execution", desc: "Launch campaigns and premium content", color: "var(--primary)" },
  { id: 4, title: "Growth", desc: "Track results and continuously optimize", color: "var(--accent)" }
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label">HOW IT WORKS</div>
          <h2 className="section-title">4 Simple Steps to Growth</h2>
        </motion.div>
        
        <div className="steps-container">
          <div className="process-line"></div>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="step-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="step-number" style={{ backgroundColor: step.color }}>
                {step.id}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
