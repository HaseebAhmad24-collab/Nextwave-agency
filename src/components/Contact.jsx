import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Toast from './Toast';
import './Contact.css';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    phone: '',
    service: 'Social Media Management'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setShowToast(true);
    // Reset form after 4 seconds (same as toast duration)
    setTimeout(() => {
      setShowToast(false);
      setFormData({
        businessName: '',
        name: '',
        phone: '',
        service: 'Social Media Management'
      });
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label dark">CONTACT</div>
            <h2 className="section-title white">Ready to Grow Your Business?</h2>
            <p className="contact-desc">
              Contact us today for a free consultation. Our team is ready to
              help you dominate the digital space in Lahore.
            </p>

            <div className="contact-items">
              <ContactItem
                icon={<Phone size={24} />}
                title="WhatsApp Business"
                detail="Instant response guaranteed"
                sub="+92 328 4461291"
              />
              <ContactItem
                icon={<Mail size={24} />}
                title="Email Us"
                detail="We reply within 2 hours"
                sub="info@nextwavedigital.pk"
              />
              <ContactItem
                icon={<MapPin size={24} />}
                title="Office"
                detail="Lahore, Pakistan"
                sub="DHA, Gulberg, Model Town"
              />
            </div>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Your business name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+92 300 0000000"
                  required
                />
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option>Social Media Management</option>
                  <option>Content Creation</option>
                  <option>Paid Advertising</option>
                  <option>WhatsApp Marketing</option>
                  <option>Growth Strategy</option>
                </select>
              </div>
              <button className="submit-btn" type="submit">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Toast
        message="Thank you! We'll contact you shortly."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
};

const ContactItem = ({ icon, title, detail, sub }) => (
  <div className="contact-item">
    <div className="contact-icon">{icon}</div>
    <div className="contact-text">
      <div className="contact-title">{title}</div>
      <div className="contact-detail">{detail}</div>
      {sub && <div className="contact-sub">{sub}</div>}
    </div>
  </div>
);

export default Contact;
