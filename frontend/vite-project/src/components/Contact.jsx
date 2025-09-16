import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with your actual API endpoint
      // const response = await fetch('/api/feedback', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(feedback),
      // });
      
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Thank you for your feedback! I\'ll get back to you soon.');
      setFeedback({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                {/* <span className="contact-label"></span> */}
                <span className="contact-value">Shreejay Shakya</span>
              </div>
              <div className="contact-item">
                {/* <span className="contact-label"></span> */}
                <span className="contact-value">shreejayshakya28@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* Feedback Form */}
          <div className="feedback-section">
            <h3>Send Feedback</h3>
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={feedback.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={feedback.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={feedback.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me what you think..."
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>
            </form>
            
            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;