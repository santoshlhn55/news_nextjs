'use client';

import { useState, useEffect } from 'react';

interface PWAFeaturesProps {
  className?: string;
}

export default function PWAFeatures({ className = '' }: PWAFeaturesProps) {
  const [isStandalone, setIsStandalone] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    // Check if app is running in standalone mode
    const checkStandalone = () => {
      const standalone = window.matchMedia('(display-mode: standalone)').matches || 
                       navigator.standalone === true;
      setIsStandalone(standalone);
    };

    checkStandalone();

    // Listen for display mode changes
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    mediaQuery.addEventListener('change', checkStandalone);

    return () => {
      mediaQuery.removeEventListener('change', checkStandalone);
    };
  }, []);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  if (isStandalone) {
    return null; // Don't show in standalone mode
  }

  return (
    <div className={`pwa-features ${className}`}>
      <button 
        onClick={toggleFeatures}
        className="pwa-features-toggle"
        aria-label="PWA सुविधाएं देखें"
      >
        📱 PWA सुविधाएं
      </button>
      
      {showFeatures && (
        <div className="pwa-features-content">
          <div className="pwa-features-header">
            <h3>प्रोग्रेसिव वेब ऐप सुविधाएं</h3>
            <button 
              onClick={toggleFeatures}
              className="pwa-features-close"
              aria-label="बंद करें"
            >
              ✕
            </button>
          </div>
          
          <div className="pwa-features-list">
            <div className="pwa-feature-item">
              <span className="pwa-feature-icon">📱</span>
              <div className="pwa-feature-text">
                <h4>ऐप जैसा अनुभव</h4>
                <p>फोन पर इंस्टॉल करें और नेटिव ऐप जैसा अनुभव पाएं</p>
              </div>
            </div>
            
            <div className="pwa-feature-item">
              <span className="pwa-feature-icon">⚡</span>
              <div className="pwa-feature-text">
                <h4>तेज़ लोडिंग</h4>
                <p>कैशिंग के कारण पेज तेज़ी से लोड होते हैं</p>
              </div>
            </div>
            
            <div className="pwa-feature-item">
              <span className="pwa-feature-icon">📡</span>
              <div className="pwa-feature-text">
                <h4>ऑफलाइन सपोर्ट</h4>
                <p>इंटरनेट के बिना भी पहले देखे गए पेज देख सकते हैं</p>
              </div>
            </div>
            
            <div className="pwa-feature-item">
              <span className="pwa-feature-icon">🔄</span>
              <div className="pwa-feature-text">
                <h4>बैकग्राउंड अपडेट्स</h4>
                <p>नई सामग्री स्वचालित रूप से डाउनलोड होती है</p>
              </div>
            </div>
            
            <div className="pwa-feature-item">
              <span className="pwa-feature-icon">💾</span>
              <div className="pwa-feature-text">
                <h4>कम डेटा उपयोग</h4>
                <p>कैशिंग के कारण कम इंटरनेट डेटा खर्च होता है</p>
              </div>
            </div>
          </div>
          
          <div className="pwa-features-footer">
            <p>इन सुविधाओं का लाभ उठाने के लिए ऐप इंस्टॉल करें</p>
          </div>
        </div>
      )}
    </div>
  );
} 