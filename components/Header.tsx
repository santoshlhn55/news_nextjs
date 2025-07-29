import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => (
  <>
    <a href="#main-content" className="skip-link">मुख्य सामग्री पर जाएं</a>
    <header id="main-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>
              <Link href="/" aria-label="न्यूज़ सर्कल इंडिया - होमपेज">
                न्यूज सर्कल<span>इंडिया</span>
              </Link>
            </h1>
          </div>
          <nav className="desktop-nav" aria-label="मुख्य नेविगेशन">
            <Link href="/rajneeti">राजनीति</Link>
            <Link href="/vyapar">व्यापार</Link>
            <Link href="/vishwa">विश्व</Link>
            <Link href="/khel">खेल</Link>
            <Link href="/manoranjan">मनोरंजन</Link>
            <Link href="/vahan">वाहन</Link>
            <Link href="/taknik">तकनीक</Link>
            <Link href="/shiksha-nokri">शिक्षा/नौकरी</Link>
          </nav>
          <div className="header-icons">
            <button id="menu-toggle-btn" aria-label="नेविगेशन मेनू खोलें">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="ticker">
        <div className="container">
          <div className="ticker-content">
            <span className="ticker-label">ताजा खबर</span>
            <div className="ticker-wrapper">
              <div id="ticker-items-container"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
