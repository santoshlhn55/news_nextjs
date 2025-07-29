import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => (
  <>
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <h4>न्यूज़ सर्कलइंडिया</h4>
            <p>भारत और विश्व की हर महत्वपूर्ण घटना पर पैनी नजर। हम राजनीति, व्यापार, खेल और मनोरंजन जगत की खबरों का विश्लेषण आप तक पहुँचाते हैं।</p>
          </div>
          <div className="footer-links-wrapper">
            <h5>मुख्य श्रेणियां</h5>
            <div className="footer-links-grid">
              <nav className="footer-links" aria-label="मुख्य श्रेणियां">
                <Link href="/rajneeti">राजनीति</Link>
                <Link href="/vishwa">विश्व</Link>
                <Link href="/manoranjan">मनोरंजन</Link>
                <Link href="/taknik">तकनीक</Link>
              </nav>
              <nav className="footer-links" aria-label="मुख्य श्रेणियां जारी">
                <Link href="/vyapar">व्यापार</Link>
                <Link href="/khel">खेल</Link>
                <Link href="/vahan">वाहन</Link>
                <Link href="/shiksha-nokri">शिक्षा/नौकरी</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <nav className="footer-legal-links" aria-label="कानूनी लिंक">
            <Link href="/gopniyata-niti">गोपनीयता नीति</Link>
            <Link href="/sampadakiya-niti">संपादकीय नीति</Link>
            <Link href="/tathya-janch-niti">तथ्य-जांच नीति</Link>
            <Link href="/sewa-ki-shartein">सेवा की शर्तें</Link>
            <Link href="/hamare-bare-mein">हमारे बारे में</Link>
            <Link href="/sampark-karein">संपर्क करें</Link>
          </nav>
          <div className="footer-copyright">
            <p>&copy; २०२३ न्यूज़ सर्कल इंडिया। सर्वाधिकार सुरक्षित।</p>
          </div>
        </div>
      </div>
    </footer>
    <div id="mobile-menu" className="mobile-menu-overlay" role="dialog" aria-modal="true">
      <div id="mobile-menu-panel" className="mobile-menu-panel">
        <button id="close-menu-btn" className="close-btn" aria-label="मेनू बंद करें">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="mobile-nav">
          <Link href="/rajneeti">राजनीति</Link>
          <Link href="/vyapar">व्यापार</Link>
          <Link href="/vishwa">विश्व</Link>
          <Link href="/khel">खेल</Link>
          <Link href="/manoranjan">मनोरंजन</Link>
          <Link href="/vahan">वाहन</Link>
          <Link href="/taknik">तकनीक</Link>
          <Link href="/shiksha-nokri">शिक्षा/नौकरी</Link>
        </nav>
      </div>
    </div>
  </>
);

export default Footer;
