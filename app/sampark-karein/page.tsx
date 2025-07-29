'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PerformanceMonitor from '../../components/PerformanceMonitor';

export default function SamparkKarein() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('subject', formData.subject);
    data.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/xkgzjwld', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormMessage('धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।');
        setMessageType('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          setFormMessage(errorData.errors.map((error: { message: string }) => error.message).join(', '));
        } else {
          setFormMessage('क्षमा करें! संदेश भेजने में कोई त्रुटि हुई।');
        }
        setMessageType('error');
      }
    } catch (error) {
      setFormMessage('क्षमा करें! संदेश भेजने में कोई त्रुटि हुई।');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PerformanceMonitor pageName="sampark-karein" />
      <Header />
      
      <main id="main-content" className="container">
          <div className="contact-page-wrapper">
              <h1>संपर्क करें</h1>
              <div className="contact-layout">
                  <div className="contact-form">
                      <h2>हमें संदेश भेजें</h2>
                      <form onSubmit={handleSubmit}>
                          <div className="form-group">
                              <label htmlFor="name">पूरा नाम</label>
                              <input 
                                  type="text" 
                                  id="name" 
                                  name="name" 
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  required 
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">ईमेल</label>
                              <input 
                                  type="email" 
                                  id="email" 
                                  name="email" 
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required 
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="subject">विषय</label>
                              <input 
                                  type="text" 
                                  id="subject" 
                                  name="subject" 
                                  value={formData.subject}
                                  onChange={handleInputChange}
                                  required 
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="message">आपका संदेश</label>
                              <textarea 
                                  id="message" 
                                  name="message" 
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  required 
                              />
                          </div>
                          <button 
                              type="submit" 
                              className="submit-btn" 
                              disabled={isSubmitting}
                          >
                              {isSubmitting ? 'भेजा जा रहा है...' : 'संदेश भेजें'}
                          </button>
                          {formMessage && (
                              <div className={`form-message ${messageType}`} style={{display: 'block'}}>
                                  {formMessage}
                              </div>
                          )}
                      </form>
                  </div>
                  <div className="contact-info">
                      <h2>अन्य जानकारी</h2>
                      <div className="contact-info-item">
                          <div className="contact-info-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M1.946 9.315c.522-.174 1.103-.349 1.767-.522 2.682-.602 5.516-1.116 8.297-1.116 2.781 0 5.615.514 8.297 1.116.664.173 1.245.348 1.767.522 1.257.418 2.508.857 3.031 1.562a2.25 2.25 0 0 1 .418 2.069l-1.39 4.866a2.25 2.25 0 0 1-2.069.418c-.418-1.257-.857-2.508-1.562-3.031-.174-.522-.349-1.103-.522-1.767-.602-2.682-1.116-5.516-1.116-8.297 0-2.781.514-5.615 1.116-8.297.173-.664.348-1.245.522-1.767.418-1.257.857-2.508 1.562-3.031a2.25 2.25 0 0 1 2.069-.418l4.866 1.39a2.25 2.25 0 0 1 .418 2.069c-1.257.418-2.508.857-3.031 1.562Z" />
                              </svg>
                          </div>
                          <div className="contact-info-text">
                              <h3>ईमेल :</h3>
                              <p><a href="mailto:editor@newscircleindia.com">editor@newscircleindia.com</a></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>

      <Footer />
    </>
  );
}
